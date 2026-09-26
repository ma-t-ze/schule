// Rally adapter for Oz Elentok's SpaceInvaders (MIT; see ../LICENSE.txt).
(() => {
  const canvas = document.getElementById('gameview');
  let game;
  let parentActive = false;
  let pointerId = null;
  let shooting = false;
  let lastShot = 0;
  const origin = window.location.origin;
  const send = type => window.parent.postMessage({ source: 'rally-space-invaders', type }, origin);
  const active = () => game && !game.finished && parentActive && !document.hidden;

  SI.Colors.ground = '#b6ff00';
  SI.Game.prototype.initializeCanvas = function () {
    canvas.width = SI.Sizes.width;
    canvas.height = SI.Sizes.height;
    this.ctx = canvas.getContext('2d');
    this.ctx.font = SI.Sizes.font;
  };
  // Input is scoped to this iframe; no legacy jQuery listeners are installed.
  SI.Game.prototype.attachKeyboardEvents = function () {};
  SI.Game.prototype.checkEndGame = function () {
    if (this.finished) return;
    const won = this.enemies.ships.length === 0;
    const lost = this.lives <= 0 || this.enemies.ships.some(row =>
      row.some(ship => ship.y >= SI.Sizes.bottomMargin - SI.Sizes.enemyHeight));
    if (!won && !lost) return;
    this.finished = true;
    clearInterval(this.clock);
    send(won ? 'won' : 'lost');
  };
  SI.Game.prototype.drawStatus = function () {
    this.ctx.fillStyle = '#b6ff00';
    this.ctx.fillText('Punkte: ' + this.points, SI.Sizes.leftMargin, SI.Sizes.textMargin);
    this.ctx.fillText('Leben: ' + this.lives, SI.Sizes.textRightMargin, SI.Sizes.textMargin);
  };

  function clearInput() {
    if (game) game.moveLeft = game.moveRight = false;
    shooting = false;
    pointerId = null;
  }
  function sync() {
    if (!game) return;
    clearInterval(game.clock);
    clearInput();
    if (active()) game.clock = setInterval(() => {
      if (shooting && performance.now() - lastShot >= 180) {
        game.launchPlayerRocket();
        lastShot = performance.now();
      }
      game.tick();
    }, SI.Sizes.MSPF);
  }
  function movePointer(event) {
    const rect = canvas.getBoundingClientRect();
    game.playerShip.setLocation((event.clientX - rect.left) * SI.Sizes.width / rect.width - game.playerShip.width / 2);
  }
  canvas.addEventListener('pointerdown', event => {
    if (!active() || (event.pointerType === 'mouse' && event.button !== 0)) return;
    event.preventDefault();
    canvas.focus();
    pointerId = event.pointerId;
    canvas.setPointerCapture(pointerId);
    movePointer(event);
    shooting = true;
  });
  canvas.addEventListener('pointermove', event => {
    if (active() && pointerId === event.pointerId) movePointer(event);
  });
  for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(name, clearInput);
  window.addEventListener('keydown', event => {
    if (!active() || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Space'].includes(event.code)) return;
    event.preventDefault();
    if (event.code === 'ArrowLeft') game.moveLeft = true;
    else if (event.code === 'ArrowRight') game.moveRight = true;
    else shooting = true;
  });
  window.addEventListener('keyup', event => {
    if (!game) return;
    if (event.code === 'ArrowLeft') game.moveLeft = false;
    else if (event.code === 'ArrowRight') game.moveRight = false;
    else if (event.code === 'ArrowUp' || event.code === 'Space') shooting = false;
  });
  window.addEventListener('blur', clearInput);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('message', event => {
    if (event.origin !== origin || event.source !== window.parent || event.data?.source !== 'rally-host') return;
    parentActive = event.data.active === true;
    sync();
  });
  window.addEventListener('pagehide', () => { if (game) clearInterval(game.clock); });
  window.addEventListener('load', () => {
    if (Object.values(SI.Images).some(img => !img.complete || !img.naturalWidth)) {
      send('error');
      return;
    }
    game = new SI.Game();
    game.start();
    sync();
    canvas.focus();
    send('ready');
  });
})();
