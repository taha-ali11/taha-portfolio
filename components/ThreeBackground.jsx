"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// Puffy claymorphic boxes: soft rounded-corner cubes with a glossy "clay" material,
// slow rotation, gentle bob, and a subtle squish-breathe so they read as soft, not rigid.
const CLAY_PIECES = [
  { color: 0x8b5cf6, size: 1.5, pos: [-3.4, 1.4, -2], speed: 0.6, phase: 0 },
  { color: 0xff6b5b, size: 1.05, pos: [3.2, -1.1, -1.5], speed: 0.8, phase: 1.2 },
  { color: 0xffc145, size: 0.85, pos: [2.1, 2.1, -3], speed: 0.7, phase: 2.4 },
  { color: 0x6c8cff, size: 1.2, pos: [-2.4, -1.8, -2.5], speed: 0.5, phase: 3.1 },
  { color: 0x1e9e8c, size: 0.7, pos: [0.2, 2.6, -3.4], speed: 0.9, phase: 4.0 },
  { color: 0x3db670, size: 0.95, pos: [-0.6, -2.6, -1.8], speed: 0.65, phase: 5.2 },
];

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Soft studio lighting — a key light, a cool fill, and a warm rim for that
    // glossy clay highlight without ever looking like flat plastic.
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 6, 6);
    scene.add(key);

    const fill = new THREE.HemisphereLight(0xffffff, 0xcabdf0, 0.65);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffc145, 0.8, 20);
    rim.position.set(-5, -3, 4);
    scene.add(rim);

    const geometry = new RoundedBoxGeometry(1, 1, 1, 6, 0.35);

    const meshes = CLAY_PIECES.map(({ color, size, pos }) => {
      const material = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.35,
        metalness: 0,
        clearcoat: 0.6,
        clearcoatRoughness: 0.3,
        sheen: 1,
        sheenColor: new THREE.Color(0xffffff),
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.setScalar(size);
      mesh.position.set(...pos);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      return mesh;
    });

    let raf;
    let mouseX = 0;
    let mouseY = 0;
    const clock = new THREE.Clock();

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      const t = clock.getElapsedTime();

      meshes.forEach((mesh, i) => {
        const cfg = CLAY_PIECES[i];
        mesh.rotation.x += 0.003 * cfg.speed;
        mesh.rotation.y += 0.004 * cfg.speed;
        mesh.position.y =
          CLAY_PIECES[i].pos[1] + Math.sin(t * cfg.speed + cfg.phase) * 0.35;
        mesh.position.x =
          CLAY_PIECES[i].pos[0] + Math.cos(t * cfg.speed * 0.6 + cfg.phase) * 0.2;
        // gentle squish-breathe so the boxes read as soft clay, not rigid plastic
        const squish = 1 + Math.sin(t * cfg.speed * 1.3 + cfg.phase) * 0.06;
        mesh.scale.set(
          cfg.size / squish,
          cfg.size * squish,
          cfg.size / squish
        );
      });

      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      render();
      raf = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      render();
    } else {
      animate();
    }

    // Pause the render loop while the hero is off-screen to save battery/CPU.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (prefersReducedMotion) return;
        if (entry.isIntersecting) {
          if (!raf) animate();
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      },
      { threshold: 0 }
    );
    observer.observe(mount);

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      meshes.forEach((mesh) => mesh.material.dispose());
      geometry.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 -z-0 opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]"
    />
  );
}
