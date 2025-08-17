import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDViewer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x64ffda, 1.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xccd6f6, wireframe: true });
        const satelliteGroup = new THREE.Group();

        // main bus
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2, 1.5), defaultMaterial.clone());
        body.name = 'about';
        satelliteGroup.add(body);

        // solar panels
        const panelGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);
        const leftPanel = new THREE.Mesh(panelGeometry, defaultMaterial.clone());
        leftPanel.position.x = -2.25;
        leftPanel.name = 'projects';
        satelliteGroup.add(leftPanel);

        const rightPanel = new THREE.Mesh(panelGeometry, defaultMaterial.clone());
        leftPanel.position.x = 2.25;
        leftPanel.name = 'experience';
        satelliteGroup.add(rightPanel);

        // antenna
        const antenna = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1, 16), defaultMaterial.clone());
        antenna.position.y = 1.5;
        antenna.rotation.x = Math.PI;
        antenna.name = 'contact';
        satelliteGroup.add(antenna);

        // comms dish
        const dish = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), defaultMaterial.clone());
        dish.position.y = -1.5;
        dish.name = 'skills';
        satelliteGroup.add(dish);
        
        scene.add(satelliteGroup);

        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        const onMouseDown = (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        };

        const onMouseUp = () => {
            isDragging = false;
        };

        const onMouseMove = (e) => {
            if (isDragging) {
                const deltaMove = {
                    x: e.clientX - previousMousePosition.x,
                    y: e.clientY - previousMousePosition.y
                };
                satelliteGroup.rotation.y += deltaMove.x * 0.005;
                satelliteGroup.rotation.x += deltaMove.y * 0.005;
                previousMousePosition = { x : e.clientX, y: e.clientY };
            }
        };

        mount.addEventListener('mousedown', onMouseDown);
        mount.addEventListener('mouseup', onMouseUp);
        mount.addEventListener('mousemove', onMouseMove);
        mount.addEventListener('mouseleave', () => { isDragging = false; });

        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();
            if (!isDragging) {
                satelliteGroup.rotation.y += 0.001; // auto-rotation
            }
            satelliteGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.1;  // gentle float

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeEventListener('mousedown', onMouseDown);
            mount.removeEventListener('mouseup', onMouseUp);
            mount.removeEventListener('mousemove', onMouseMove);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDViewer;