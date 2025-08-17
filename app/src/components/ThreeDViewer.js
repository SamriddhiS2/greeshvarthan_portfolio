import React, { useEffect, useRef } from "react";
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

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full" />;
}

export default ThreeDViewer;