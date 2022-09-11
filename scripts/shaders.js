let cube, scene, camera, renderer, uniforms

function init() {

    console.log(document.scripts)
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera();
    canvas = document.getElementById("shader")
    renderer = new THREE.WebGLRenderer({canvas:canvas});

    uniforms = {
        u_resolution: { type: 'vec2', value: new THREE.Vector2() },
        u_mouse: { type: 'vec2', value: new THREE.Vector2() },
        u_time: { type: 'float', value: 1.0 }
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        fragmentShader: document.getElementById( 'fragment-shader' ).innerText,
        vertexShader: document.getElementById( 'vertex-shader' ).innerText
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    onWindowResize()
    document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function animate() {
    requestAnimationFrame(animate);

    render()
}

function render() {
    uniforms.u_time.value += 0.05;
    renderer.render(scene, camera);
}

function onWindowResize(e) {
    uniforms.u_resolution.value.x = renderer.domElement.width;
    uniforms.u_resolution.value.y = renderer.domElement.height;
}
function onDocumentMouseMove(e) {
    const vpRatio = renderer.domElement.clientWidth /  renderer.domElement.clientHeight;
    let x =e.clientX
    let y =  e.clientY
    let rect = renderer.domElement.getBoundingClientRect()
    let top = rect.top
    let left = rect.left
    x = ((x-left) / renderer.domElement.clientWidth);
    y = 1-((y-top) / renderer.domElement.clientHeight);

    if (x < 0 || y < 0 || x > 1 || y > 1) return
    uniforms.u_mouse.value.x = x;
    uniforms.u_mouse.value.y = y;
}

init()
animate();