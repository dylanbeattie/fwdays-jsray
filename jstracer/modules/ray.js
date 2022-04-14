export class Ray {

    constructor(start, direction) {
        this.start = start;
        this.direction = direction.normalize();
    }

    trace = scene => scene.background;
}
