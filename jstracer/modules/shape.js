import { THRESHOLD } from './settings.js';
const AMBIENT = 0.18;
import { Ray } from './ray.js';


export class Shape {

    constructor(texture) {
        this.texture = texture;
    }

    findIntersections = ray => [];
    getNormalAt = point => Vector.O;

    closestDistanceAlongRay = ray => {
        let distances = this.findIntersections(ray).filter(d => d > THRESHOLD);
        return Math.min.apply(Math, distances);
    }

    getColorAt = (point, scene) => {
        let materialColor = this.texture.getColorAt(point);
        let colorToReturn = materialColor.scale(AMBIENT);
        let normal = this.getNormalAt(point);
        let otherShapes = scene.shapes.filter(s => s != this);

        scene.lights.forEach(light => {
            let lightDirection = light.position.add(point.invert());
            let brightness = normal.dot(lightDirection.normalize());
            if (brightness > 0) {
                let shadowRay = new Ray(point, lightDirection);
                let distanceToLight = lightDirection.length;
                let shadow = otherShapes.some(shape => shape.closestDistanceAlongRay(shadowRay) <= distanceToLight);
                if (!shadow) {
                    let illumination = materialColor.multiply(light.color).scale(brightness);
                    colorToReturn = colorToReturn.add(illumination);
                }
            }
        });
        return colorToReturn;
    }
}
