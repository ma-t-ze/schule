# Rally / FreeCreatures

Uses the existing default Firebase app from `src/services/firebase.js` and
`VITE_FIREBASE_*` settings (currently project `gestaltgesetze-ada34`).
The separate Schulrecht project and `firebase-exam/firestore.rules` are unchanged.

## Required server configuration

The live server currently returns `403 PERMISSION_DENIED` for the new Rally path.
The web-app config cannot publish Firestore security rules. In the Firebase Console
of **gestaltgesetze-ada34**, open Firestore Database → Rules and add the contents of
`firestore.rules.fragment` **inside** the existing
`match /databases/{database}/documents` block. Preserve all existing quiz rules.
Publish the rules, then click **Erneut verbinden** on FreeCreatures.
Do not use the fragment as a full replacement rules file.

## Pairing and stored data

- `/rally` and `/freecreatures` reuse the last game ID saved in this browser.
- Under **Rally verbinden** in the Rally sidebar, open the matching FreeCreatures link.
- On another device, use that link or enter the same game code in FreeCreatures.
- A 128-bit random ID is carried by `?game=…`. Possession of that link grants
  access to that round; the rules do not allow listing all games. No login is required.
- Data is stored in `rally_games/{gameId}`: creature names/digits, scanned station IDs,
  released creature IDs, homeward creature IDs, energy and last update time.
  Player names, camera images, audio and model files are not uploaded.
- Creation uses a transaction; releases use atomic `arrayUnion` so simultaneous
  commands do not overwrite each other. Repeated releases are idempotent.
- Freeing the visible creature starts the existing door/collection animation.
  Unscanned creatures remain hidden until their matching QR code is scanned.
  Menu and marker selection lead to the scanner button, never directly to a model.
  Previously scanned and freed creatures are restored in the collection.
  The final spaceship still needs the eight-digit code after scanning marker 9.
- Closing/deactivating a page detaches its listener; reopening reattaches it.
- Local play remains possible when Firebase is unavailable; the control page
  reports errors rather than claiming a successful remote release.
- Each round keeps its progress. **Neue Rally anlegen** under the connection
  details creates a fresh ID; the previous round is retained. Use **Rally öffnen**
  to open the matching new round, and share the new link with the other device.

## Validation

`node --test src/components/views/Rally/rally*.test.js src/components/views/Rally/spaceInvaders.test.js`

`npm run build`

After publishing the rules, open matching Rally/FreeCreatures links on two devices.
Check remote release while a prison is loading, while answering, during Space
Invaders, and while another station is open. Check reload restores the collection,
the code still gates the spaceship, and the final flight does not restore departed
creatures. Live release and rule enforcement require this server configuration.
