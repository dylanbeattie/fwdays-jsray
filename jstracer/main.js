let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext('2d');
let example = (x, y) => {
    let r = (x * 2) % 42;
    let g = y;
    let b = (x + y) % 120;
    return `rgb(${r},${g},${b})`;
}

let supernova = (x, y) => {
    let r = (x * (1 + Math.sin(y / 100))) % 255 // 4*x % 255;
    let g = Math.abs(20 * Math.tan(y)) % 255
    let b = (y * (1 + Math.cos(x / 2))) % 255 // (x+y) % 255;
    return `rgb(${r},${g},${b})`
}

let lasers = (x, y) => {
    let r = 255 * Math.sin(200 - x / 20) + 255 * Math.cos(150 - y / 20)
    let g = 255 * Math.sin(200 - x / 20)
    let b = 255 * Math.cos(150 - y / 20)
    return `rgb(${r},${g},${b})`
}

function draw(shader) {
    for (var x = 0; x < myCanvas.width; x++) {
        for (var y = 0; y < myCanvas.height; y++) {
            ctx.fillStyle = shader(x, y);
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

draw(lasers);