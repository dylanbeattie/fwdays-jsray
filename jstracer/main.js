let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext('2d');
let shader = (x, y) => {
    if (x > 100) return '#f00';
    return '#00f';
}

function draw() {
    for (var x = 0; x < myCanvas.width; x++) {
        for (var y = 0; y < myCanvas.height; y++) {
            ctx.fillStyle = shader(x, y);
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

draw();