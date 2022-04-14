import { THRESHOLD } from './settings.js';

export class Shape {

    constructor(texture) {
        this.texture = texture;
    }

    findIntersections = ray => [];

    closestDistanceAlongRay = ray => {
        let distances = this.findIntersections(ray).filter(d => d > THRESHOLD);
        return Math.min.apply(Math, distances);
    }

    getColorAt = (point) => this.texture.getColorAt(point);
}
