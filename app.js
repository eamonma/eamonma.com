import { gsap, ScrollTrigger } from "gsap/all"

import * as t from "three"

gsap.registerPlugin(ScrollTrigger)

// gsap.to(".box", {
//     scrollTrigger: {
//         trigger: ".box",
//         start: "top center",
//         end: "top 100px",
//         pin: true,
//         scrub: 2,
//         markers: true
//     },
//     x: 400,
//     rotation: 360,
//     ease: "none",
//     duration: 3
// })

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        scrub: true
    },
    x: 500
})

let scene, camera, renderer, cube

const init = () => {

    scene = new t.Scene()

    scene.fog = new t.Fog("#F00", 10, 1000)

    camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    renderer = new t.WebGLRenderer({
        antialias: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    document.querySelector(".pinner").appendChild(renderer.domElement)

    // const geometry = new t.TorusKnotGeometry(1, 0.3, 100, 16);
    const geometry = new t.TorusGeometry(1, 0.3, 16, 100);
    // const material = new t.MeshBasicMaterial({ color: 0x0000ff });
    const material = new t.MeshNormalMaterial({ color: 0xFFCC00 })
    // const texture = new 
    cube = new t.Mesh(geometry, material);
    // cube.rotation.set(45, 45, 45)
    scene.add(cube);

    const light = new t.PointLight(0xFFFFFF, 1, 500)
    light.position.set(10, 0, 65)

    scene.add(light)

    camera.position.z = 5
}

function animate() {
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01

    renderer.render(scene, camera)
}


window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})


init()
animate()

gsap.to(cube.rotation, {
    scrollTrigger: {
        trigger: ".pinner",
        // start: "bottom top",
        // end: "bottom 90%",
        pin: true,
        scrub: true,
        // markers: true
    }, duration: 2,
    rotation: 0.01,
    y: `+=${Math.PI * 3}`,
    x: `+=${Math.PI * 2}`,
    z: `+=${Math.PI * 1.5}`, opacity: "-=0.1"
})

window.addEventListener("load", function () {
    setTimeout(function () {
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

// gsap.to("h1", {
//     scrollTrigger: {
//         trigger: ".pinner",
//         start: "50% center",
//         // end: "bottom 90%",
//         pin: true,
//         scrub: true,
//         markers: true
//     }, duration: 2, y: -400
// })