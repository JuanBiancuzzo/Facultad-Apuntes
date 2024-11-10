let { tag } = input;

if (!tag) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

class PosicionMouse {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    diferencia(otroX, otroY) {
        return Math.abs(this.x - otroX) + Math.abs(this.y - otroY);
    }

    distancia(otroX, otroY) {
        return [otroX - this.x, otroY - this.y];
    }
}

let carrera = dv.pages(`#carrera/${tag}`)[0];
let canvas = dv.el("canvas", "");
let ctx = canvas.getContext("2d");
ctx.font = "8px Arial";
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let canvasRect = canvas.getBoundingClientRect();
let canvasLeft = canvasRect.left;
let canvasTop = canvasRect.top;
let scaleX = canvasWidth / canvasRect.width;
let scaleY = canvasHeight / canvasRect.height;

renderizarCanvas();
let mouse;
let diferenciaAcumuladaX = 0;
let diferenciaAcumuladaY = 0;

moviendoPantalla = (evento) => transladarCanvas(
    Math.max((evento.clientX - canvasLeft) * scaleX, 0), 
    Math.max((evento.clientY - canvasTop) * scaleY, 0)
);

canvas.addEventListener("mousedown", (_) => {
    canvas.addEventListener("mousemove", moviendoPantalla);
    mouse = undefined;
});
canvas.addEventListener("mouseup", (_) => canvas.removeEventListener("mousemove", moviendoPantalla));
window.addEventListener("mouseup", (_) => canvas.removeEventListener("mousemove", moviendoPantalla));

function renderizarCanvas() {
    let texto = "Hola tanto tiempo";

    /* ctx.beginPath();
    ctx.roundRect(0, 0, ctx.measureText(texto).width + 20, 40, 20);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "blue";
    ctx.stroke(); */

    ctx.fillStyle = "green";
    // ctx.lineWidth = 1;
    ctx.fillText(texto, 0, 0);
}

function transladarCanvas(posX, posY) {
    if (mouse && mouse.diferencia(posX, posY) <= 1) return;

    if (!mouse) mouse = new PosicionMouse(posX, posY);
    let [ difX, difY ] = mouse.distancia(posX, posY);

    ctx.translate(-diferenciaAcumuladaX, -diferenciaAcumuladaY);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.translate(diferenciaAcumuladaX + difX, diferenciaAcumuladaY + difY);

    renderizarCanvas();

    mouse = new PosicionMouse(posX, posY);
    diferenciaAcumuladaX += difX;
    diferenciaAcumuladaY += difY;
}
