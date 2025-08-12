import App from "../App";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function NotFound() {
    const location = useLocation();
    console.log(location);
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Create canvas textures with "404" text for cube faces
        const createFaceTexture = (text) => {
            const canvas = document.createElement("canvas");
            canvas.width = 256;
            canvas.height = 256;
            const context = canvas.getContext("2d");

            // Background
            context.fillStyle = "#282c34";
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Text
            context.font = "bold 120px Arial";
            context.fillStyle = "#61dafb";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(text, canvas.width / 2, canvas.height / 2);

            return new THREE.CanvasTexture(canvas);
        };

        // Materials for each face (all "404")
        const materials = [];
        for (let i = 0; i < 6; i++) {
            materials.push(new THREE.MeshBasicMaterial({ map: createFaceTexture(<Link to={'/'}>Go Home</Link>) }));
        }

        // Cube geometry + mesh
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        // Animate rotation
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            geometry.dispose();
            materials.forEach(m => m.map.dispose());
            materials.forEach(m => m.dispose());
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{ width: "100vw", height: "100vh", backgroundColor: "#20232a" }}
        />
    );
}

export default NotFound;
