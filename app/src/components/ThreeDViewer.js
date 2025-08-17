import React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

const ThreeDViewer = ({ onPartClick, showLabels }) => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);
    const cameraRef = useRef(null);
    const satelliteRef = useRef(null);
    const hoveredPartRef = useRef(null);
    const labelsRef = useRef([]);
    const linesRef = useRef([]);

    const labelData = useMemo(() => [
        { name: 'about', partName: 'MAIN_BUS', text: '[ABOUT]', position: { x: '65%', y: '50%' } },
        { name: 'projects', partName: 'SOLAR_ARRAY_L', text: '[PROJECTS]', position: { x: '20%', y: '35%' } },
        { name: 'experience', partName: 'SOLAR_ARRAY_R', text: '[EXPERIENCE]', position: { x: '80%', y: '65%' } },
        { name: 'contact', partName: 'ANTENNA', text: '[CONTACT]', position: { x: '50%', y: '20%' } },
        { name: 'skills', partName: 'COMMS_DISH', text: '[SKILLS]', position: { x: '40%', y: '80%' } },
    ], []);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 7;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x64ffda, 1.5);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const defaultMaterial = new THREE.MeshStandardMaterial({ color: 0xccd6f6, wireframe: true });
        const highlightMaterial = new THREE.MeshStandardMaterial({ color: 0x64ffda, wireframe: true, emissive: 0x64ffda, emissiveIntensity: 0.5 });
        
        const satelliteGroup = new THREE.Group();
        satelliteRef.current = satelliteGroup;

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
        rightPanel.position.x = 2.25;
        rightPanel.name = 'experience';
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

        const starVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.7 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let isDragging = false;
        let startMousePosition = { x: 0, y: 0 };
        let previousMousePosition = { x: 0, y: 0 };

        const onMouseDown = (e) => {
            isDragging = true;
            startMousePosition = { x: e.clientX, y: e.clientY };
            previousMousePosition = { x: e.clientX, y: e.clientY };
        };

        const onMouseUp = (e) => {
            const deltaX = Math.abs(e.clientX - startMousePosition.x);
            const deltaY = Math.abs(e.clientY - startMousePosition.y);
            if (deltaX < 5 && deltaY < 5) {
                mouse.x = (e.clientX / mount.clientWidth) * 2 - 1;
                mouse.y = -(e.clientY / mount.clientHeight) * 2 + 1;
                if (cameraRef.current) {
                    raycaster.setFromCamera(mouse, cameraRef.current);
                    const intersects = raycaster.intersectObjects(satelliteGroup.children);
                    if (intersects.length > 0) {
                        onPartClick(intersects[0].object.name);
                    }
                }
            }
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
                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
            mouse.x = (e.clientX / mount.clientWidth) * 2 - 1;
            mouse.y = -(e.clientY / mount.clientHeight) * 2 + 1;
            if (cameraRef.current) {
                raycaster.setFromCamera(mouse, cameraRef.current);
                const intersects = raycaster.intersectObjects(satelliteGroup.children);
                if (intersects.length > 0) {
                    const intersectedObject = intersects[0].object;
                    if (hoveredPartRef.current && hoveredPartRef.current !== intersectedObject) {
                        hoveredPartRef.current.material = defaultMaterial.clone();
                    }
                    if (hoveredPartRef.current !== intersectedObject) {
                        hoveredPartRef.current = intersectedObject;
                        intersectedObject.material = highlightMaterial.clone();
                        mount.style.cursor = 'pointer';
                    }
                } else {
                    if (hoveredPartRef.current) {
                        hoveredPartRef.current.material = defaultMaterial.clone();
                        hoveredPartRef.current = null;
                        mount.style.cursor = 'grab';
                    }
                }
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

            // update label positions
            labelsRef.current.forEach((label, i) => {
                const part = satelliteGroup.children.find(child => child.name === labelData[i].name);
                const line = linesRef.current[i];
                if (part && label && line && cameraRef.current) {
                    const vector = new THREE.Vector3();
                    part.getWorldPosition(vector);
                    vector.project(cameraRef.current);
                    
                    const partX = (vector.x * 0.5 + 0.5) * mount.clientWidth;
                    const partY = (vector.y * -0.5 + 0.5) * mount.clientHeight;
                    
                    const labelX = parseFloat(labelData[i].position.x) / 100 * mount.clientWidth;
                    const labelY = parseFloat(labelData[i].position.y) / 100 * mount.clientHeight;

                    label.style.transform = `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`;
                    line.setAttribute('x1', partX);
                    line.setAttribute('y1', partY);
                    line.setAttribute('x2', labelX);
                    line.setAttribute('y2', labelY);
                }
            });
            
            if (cameraRef.current) {
                renderer.render(scene, cameraRef.current);
            }
        };
        animate();

        const onResize = () => {
            if (cameraRef.current) {
                cameraRef.current.aspect = mount.clientWidth / mount.clientHeight;
                cameraRef.current.updateProjectionMatrix();
            }
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            mount.removeEventListener('mousedown', onMouseDown);
            mount.removeEventListener('mouseup', onMouseUp);
            mount.removeEventListener('mousemove', onMouseMove);
            if (renderer.domElement.parentElement === mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, [onPartClick, labelData]);

    return (
        <div className="relative w-full h-full">
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full cursor-grab" />
            <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300 ${showLabels ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-full h-full">
                    {labelData.map((data, i) => (
                        <line
                            key={`line-${data.name}`}
                            ref={el => linesRef.current[i] = el}
                            stroke="#64ffda"
                            strokeWidth="1"
                            strokeDasharray="5 5"
                        />
                    ))}
                </svg>
                {labelData.map((data, i) => (
                    <div
                        key={data.name}
                        ref={el => labelsRef.current[i] = el}
                        className="absolute top-0 left-0 p-2 text-xs text-teal-300 bg-slate-900/50 rounded"
                    >
                        // {data.partName} <span className="text-white">{data.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThreeDViewer;