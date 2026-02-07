<template>
    <div class="text">
        <div class="gmt-wrapper">
            <div class="gmt">GESTALTUNGS- UND MEDIENTECHNIK | TG  &nbsp;&nbsp;   
                <img src="/images/challange/chs.svg" class="logo" alt="DIN A3" />   &nbsp;&nbsp; GESTALTUNGS- UND MEDIENTECHNIK | TG &nbsp;&nbsp;
                <img src="/images/challange/chs.svg" class="logo" alt="DIN A3" /> &nbsp;&nbsp; GESTALTUNGS- UND MEDIENTECHNIK | TG &nbsp;&nbsp;
                <img src="/images/challange/chs.svg" class="logo" alt="DIN A3" /> &nbsp;&nbsp; GESTALTUNGS- UND MEDIENTECHNIK | TG &nbsp;&nbsp;
                <img src="/images/challange/chs.svg" class="logo" alt="DIN A3" /> &nbsp;&nbsp; GESTALTUNGS- UND MEDIENTECHNIK | TG &nbsp;&nbsp;
            </div>
        </div>
        <div class="top">CHALLENGE</div>
        <div class="columns">
            <div class="column">
                <div class="column-content">
                    2 × DIN A3
                    <img src="/images/challange/paper.svg" class="column-icon" alt="DIN A3" />
                </div>
            </div>

            <div class="column">
                 <div class="column-content">
                    Klebeband
                    <img src="/images/challange/tape.svg" class="column-icon" alt="DIN A3" />
                </div>
            </div>

            <div class="column">
                     <div class="column-content">
                    30 cm
                    <img src="/images/challange/distance.svg" class="column-icon" alt="DIN A3" />
                </div>
            </div>
        </div>
        <div class="weight">Wieviel Gewicht kann deine Brücke tragen?</div>
    </div>
    <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    name: 'VariableFontPage',
    setup() {
        const canvasContainer = ref(null);

        // ✅ NORMALE Variablen - KEINE Vue-Reactivity!
        let scene;
        let camera;
        let renderer;
        let model;
        let animationId;

        const initThree = () => {
            // Szene, Kamera, Renderer als normale Objekte
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

            // Container-Referenz
            const container = canvasContainer.value;
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            // Kamera positionieren
            camera.position.set(0, 10, 80);

            // Licht
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);

            // GLB-Modell laden mit Normal-Material
            const loader = new GLTFLoader();
            loader.load(
                '/models/paper.glb',
                (gltf) => {
                    model = gltf.scene;
                    model.scale.set(2, 2, 2);

                    model.traverse((child) => {
                        if (child.isMesh) {
                            // 1. Original-Material (Normals)
                            child.material = new THREE.MeshBasicMaterial({});
                            // 2. Wireframe als separate Linien
                            const edges = new THREE.EdgesGeometry(child.geometry);
                            const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
                                color: 0x000000,    // Schwarz
                                linewidth: 5
                            }));
                            child.add(line);  // Als Child hinzufügen
                        }
                    });

                    scene.add(model);
                    animate();
                },
                (progress) => console.log('Loading...', progress),
                (error) => console.error('Fehler beim Laden:', error)
            );


            // Resize Handler
            window.addEventListener('resize', onWindowResize);
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (model) {
                model.rotation.y += 0.003;  // Sanfte Rotation
                // model.rotation.x = 0.05 * Math.sin(Date.now() * 0.001);  // Leichte Y-Wackelung
            }

            renderer.render(scene, camera);
        };

        const onWindowResize = () => {
            const container = canvasContainer.value;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        onMounted(() => {
            initThree();
        });

        onBeforeUnmount(() => {
            if (animationId) cancelAnimationFrame(animationId);
            window.removeEventListener('resize', onWindowResize);
            if (renderer && renderer.domElement) {
                renderer.dispose();
            }
        });

        return { canvasContainer };
    },
};
</script>

<style lang="scss">
@import './style.scss';

.canvas-container {
    position: absolute;
    top: -60px;
    width: 100%;
    height: 100vh;
}
</style>
