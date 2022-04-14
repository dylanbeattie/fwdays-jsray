import { Camera, Scene, Vector, Color } from '../modules/tracer.js';
import { Sphere } from '../modules/shapes/sphere.js';
import { Box } from '../modules/shapes/box.js';
import { Light } from '../modules/light.js';
import { Plane } from '../modules/shapes/plane.js';

export function EmptySky() {
    let camera = new Camera(new Vector(-4, 1, -5), new Vector(0, 1, 0));
    let background = new Color(120, 150, 255);
    return new Scene(camera, background);
}

export function MidnightSky() {
    let camera = new Camera(new Vector(-5, 2, -5), Vector.Y);
    let background = new Color("#126");
    return new Scene(camera, background);
}

export function Apocalypse() {
    let camera = new Camera(new Vector(-5, 2, -5), Vector.Y);
    let background = new Color("#923");
    return new Scene(camera, background);
}

export function ColoredSpheres() {
    let camera = new Camera(new Vector(0, 2, -3), new Vector(0, 1, 0));
    let background = new Color(0, 0, 0);
    let shapes = [
        new Sphere(new Vector(0, 1, 0), 1, new Color("#fff")),
        new Sphere(new Vector(2, 1, 2), 1, new Color("#0f0")),
        new Sphere(new Vector(4, 1, 4), 1, new Color("#00f")),
        new Sphere(new Vector(-2, 1, 2), 1, new Color("#f00")),
        new Sphere(new Vector(-4, 1, 4), 1, new Color("#fc0")),
    ];
    return new Scene(camera, background, shapes);
}

export function IlluminatedSpheres() {
    let scene = ColoredSpheres();
    scene.lights = [
        new Light(new Vector(-3, 4, -4), Color.White)
    ]
    return scene;
}

export function VariousShapes() {
    let camera = new Camera(new Vector(2, 3, -3), new Vector(0, 1, 0));
    let background = new Color(0, 0, 0);
    let lights = [
        new Light(new Vector(-3, 4, -4), Color.White)
    ]
    let shapes = [
        new Plane(Vector.Y, 0, Color.White),
        new Box(new Vector(-1, 0, -1), new Vector(1, 2, 1), new Color("#c3f")),
        new Sphere(new Vector(0, 1, 0), 1, new Color("#fff")),
        new Sphere(new Vector(2, 1, 2), 1, new Color("#0f0")),
        new Sphere(new Vector(4, 1, 4), 1, new Color("#00f")),
        new Sphere(new Vector(-2, 1, 2), 1, new Color("#f00")),
        new Sphere(new Vector(-4, 1, 4), 1, new Color("#fc0")),
    ];
    return new Scene(camera, background, shapes, lights);
}
