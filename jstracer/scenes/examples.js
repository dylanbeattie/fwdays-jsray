import { Camera, Scene, Vector, Color } from '../modules/tracer.js';

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

