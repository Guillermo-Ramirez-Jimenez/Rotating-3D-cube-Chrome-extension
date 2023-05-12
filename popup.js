document.addEventListener("DOMContentLoaded", function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
        const speed = 5;
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01 * speed;
        cube.rotation.y += 0.01 * speed;
        renderer.render(scene, camera);
    }
    
    camera.position.z = 5;
    animate();
});
