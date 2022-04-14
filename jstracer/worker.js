import { Tracer } from './modules/tracer.js';
import * as ExampleScenes from './scenes/examples.js';

function callback(x, y, width, height, color) {
    let data = {
        x: x, y: y, width: width, height: height,
        r: color.r, g: color.g, b: color.b
    };
    let message = { what: 'fillRect', ...data };
    self.postMessage(message);
}

self.addEventListener('message', function (message) {
    let data = message.data;
    switch (data.command) {
        case 'start':
            let tracer = new Tracer(data.width, data.height);
            let scene = ExampleScenes.VariousShapes();
            tracer.trace(scene, callback, data.step);
            self.close();
            this.self.postMessage({ what: 'finished' });
            break;
    }
});