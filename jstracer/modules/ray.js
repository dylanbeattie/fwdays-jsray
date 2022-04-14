export class Ray {

    constructor(start, direction) {
        this.start = start;
        this.direction = direction.normalize();
    }

    trace = scene => {
        let distanceToNearestShape = Infinity;
        let nearestIntersectingShape = null;
        scene.shapes.forEach(shape => {
            let distance = shape.closestDistanceAlongRay(this);
            if (distance < distanceToNearestShape) {
                distanceToNearestShape = distance;
                nearestIntersectingShape = shape;
            }
        });
        if (distanceToNearestShape == Infinity) return scene.background;
        let point = this.start.add(this.direction.scale(distanceToNearestShape));
        return nearestIntersectingShape.getColorAt(point, this.direction, scene);
    }
}
