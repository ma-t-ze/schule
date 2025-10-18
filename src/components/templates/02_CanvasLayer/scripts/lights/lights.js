import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export function lights(scene, THREE, renderer) {
   
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0);
    scene.add(ambientLight)

    // Shadow map settings
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
    const distance = 20
    directionalLight.position.set(distance, distance, distance)

    directionalLight.castShadow = true

    const size = 8 * 1024;
    directionalLight.shadow.mapSize.width = size;
    directionalLight.shadow.mapSize.height = size;

    const numberPre = 4;
    directionalLight.shadow.camera.left = -distance / numberPre;
    directionalLight.shadow.camera.right = distance / numberPre;
    directionalLight.shadow.camera.top = distance / numberPre;
    directionalLight.shadow.camera.bottom = -distance / numberPre;

    directionalLight.shadow.camera.far = 10 * distance
    directionalLight.shadow.camera.near = 10;
    directionalLight.shadow.bias = -0.0005;

    scene.add(directionalLight)

    const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0xff0000);
    scene.add(lightHelper);
    lightHelper.visible = false;

    const shadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    scene.add(shadowHelper);
    shadowHelper.visible = false;

    // Secondary Directional Light (Moon)
    const directionalLightMoon = new THREE.DirectionalLight(0xA3C2F3, 0);

    // Turn it off at the beginning by setting intensity to 0
    // directionalLightMoon.intensity = 0;

    directionalLightMoon.position.set(24, 20, 21); // Opposite direction for moonlight

    directionalLightMoon.castShadow = true;

    directionalLightMoon.shadow.mapSize.width = size;
    directionalLightMoon.shadow.mapSize.height = size;

    directionalLightMoon.shadow.camera.left = -distance / numberPre;
    directionalLightMoon.shadow.camera.right = distance / numberPre;
    directionalLightMoon.shadow.camera.top = distance / numberPre;
    directionalLightMoon.shadow.camera.bottom = -distance / numberPre;

    directionalLightMoon.shadow.camera.far = 10 * distance;
    directionalLightMoon.shadow.camera.near = 10;
    directionalLightMoon.shadow.bias = -0.0005;

    scene.add(directionalLightMoon);

    const lightHelperMoon = new THREE.DirectionalLightHelper(directionalLightMoon, 5, 0xff0000);
    scene.add(lightHelperMoon);
    lightHelperMoon.visible = false;

    const shadowHelperMoon = new THREE.CameraHelper(directionalLightMoon.shadow.camera);
    scene.add(shadowHelperMoon);
    shadowHelperMoon.visible = false;

    const loader = new THREE.TextureLoader().setPath('/images/');
    const filenames = ['dots.jpg', 'logo.jpg', 'test.jpg', 'stars.png', 'lights.png', 'hubble.jpg'];

    const textures = { none: null };

    for (let i = 0; i < filenames.length; i++) {

        const filename = filenames[i];

        const texture = loader.load(filename);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        textures[filename] = texture;

    }

    // --------------------------------
    let enableSpotlight = false;

    let spotLight = null;

    if (enableSpotlight) {
    // SpotLight
    spotLight = new THREE.SpotLight(0xffffff, 100);
    spotLight.position.set(0, 3, 0.3);
    spotLight.angle = Math.PI / 24;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 0;

    spotLight.map = textures['/images/dots.jpg'];

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.focus = 1;
    spotLight.shadow.bias = -0.003;

   // Add target to adjust direction
   const targetObject = new THREE.Object3D();
   targetObject.position.set(0, 0, 0.4); // same Z offset
   scene.add(targetObject);
   spotLight.target = targetObject;

   scene.add(spotLight);


    // Rotation animation for spotlight
    function animateSpotlight() {
        requestAnimationFrame(animateSpotlight);
        spotLight.position.applyAxisAngle(new THREE.Vector3(0, 1, 0.2), 0.001);
    }
    animateSpotlight();

    // const lightHelperSpot = new THREE.SpotLightHelper(spotLight);
    // scene.add(lightHelperSpot);

        // GUI Controls
        const gui = new GUI();
      
        const params = {
            map: spotLight.map,
            color: spotLight.color.getHex(),
            intensity: spotLight.intensity,
            distance: spotLight.distance,
            angle: spotLight.angle,
            penumbra: spotLight.penumbra,
            decay: spotLight.decay,
            focus: spotLight.shadow.focus,
            shadows: true
        };
    
        gui.add(params, 'map', textures).onChange(val => {
            spotLight.map = val;
        });
    
        gui.addColor(params, 'color').onChange(val => {
            spotLight.color.setHex(val);
        });
    
        gui.add(params, 'intensity', 0, 500).onChange(val => {
            spotLight.intensity = val;
        });
    
        gui.add(params, 'distance', 0, 20).onChange(val => {
            spotLight.distance = val;
        });
    
        gui.add(params, 'angle', 0, Math.PI / 3).onChange(val => {
            spotLight.angle = val;
        });
    
        gui.add(params, 'penumbra', 0, 1).onChange(val => {
            spotLight.penumbra = val;
        });
    
        gui.add(params, 'decay', 1, 2).onChange(val => {
            spotLight.decay = val;
        });
    
        gui.add(params, 'focus', 0, 1).onChange(val => {
            spotLight.shadow.focus = val;
        });
    
        gui.add(params, 'shadows').onChange(val => {
            renderer.shadowMap.enabled = val;
            scene.traverse(child => {
                if (child.material) {
                    child.material.needsUpdate = true;
                }
            });
        });
    
        gui.open();
        gui.domElement.style.zIndex = '5000';
    }

    return { ambientLight, directionalLight, directionalLightMoon, spotLight };
}