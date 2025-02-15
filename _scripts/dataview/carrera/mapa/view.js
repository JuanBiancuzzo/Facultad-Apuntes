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

let canvas = dv.el("canvas", "");
let ctx = canvas.getContext("2d");

let canvasRect = canvas.getBoundingClientRect();
let canvasLeft = canvasRect.left;
let canvasTop = canvasRect.top;

canvas.width = Math.ceil(canvasRect.width);
canvas.height = Math.ceil(canvasRect.height);

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let scale = { x: canvas.width / canvasRect.width, y: canvas.height / canvasRect.height  };

const maximoAncho = 140;
const espacioEntreLinea = 10;
const espacioEntreMaterias = { x: 80, y: 40 };
const paddingMateria = { top: 15, bottom: 15, left: 15, right: 15 };

const cambiarFontSize = (fontsize) => `${fontsize} Ariel`;
ctx.font = cambiarFontSize("1em");
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

function alturaPorFont() {
    let metricas = ctx.measureText("a");
    return metricas.actualBoundingBoxAscent + metricas.actualBoundingBoxDescent;
}

let materias = dv.pages(`#materia/${tag}`)
    .map(materia => {
        if (materia.equivalencia) {
            let equivalencia = dv.page(materia.equivalencia.path);
            materia["cuatri"] = equivalencia.cuatri;
            materia["etapa"] = equivalencia.etapa;
        }
        return materia;
    });

let materiasXCuatri = materias
    .groupBy(materia => parseInt(materia.cuatri.slice(0, 2), 10) + 0.1 * parseInt(materia.cuatri.charAt(3), 10))
    .map(({ keys, rows }) => rows.array())
    .map(cuatri => {
        let nuevoCuatri = [];
        for (let i = 0; i < cuatri.length; i++) {
            let nombre = cuatri[i].file.name;
            let dimensiones = dimensionesTexto(nombre);
            while (dimensiones.ancho > maximoAncho) {
                let nombreSeparado = nombre.split("\n")
                    .map(linea => linea.split(" "));

                let largoLineas = nombreSeparado.map(linea => dimensionesTexto(linea.join(" ")).ancho);
                let maxLargoLinea = largoLineas.reduce((a, b) => a > b ? a : b);
                let indiceLineaMasLarga = largoLineas.findIndex(largo => largo > maxLargoLinea - 0.001);

                let linea = nombreSeparado[indiceLineaMasLarga];
                if (linea.length == 1) break;

                let ultimaPalabra = linea.pop();
                nombreSeparado[indiceLineaMasLarga] = linea;
                if (indiceLineaMasLarga + 1 == nombreSeparado.length) {
                    nombreSeparado.push([ultimaPalabra]);
                } else {
                    nombreSeparado[indiceLineaMasLarga + 1] = [ultimaPalabra, ...nombreSeparado[indiceLineaMasLarga + 1]];
                }

                nombre = nombreSeparado.map(linea => linea.join(" ")).join("\n");
                dimensiones = dimensionesTexto(nombre);
            }

            nuevoCuatri.push({
                dimensiones: {
                    ancho: dimensiones.ancho + paddingMateria.left + paddingMateria.right,
                    alto: dimensiones.alto + paddingMateria.bottom + paddingMateria.top,
                },
                nombre: nombre,
                path: cuatri[i].file.path,
                etapa: cuatri[i].etapa,
                correlativas: cuatri[i].correlativas ? cuatri[i].correlativas : [],
            });
        }
        return nuevoCuatri;
    });

let alturaMaximaTotal = materiasXCuatri.map(cuatri => {
    return cuatri.map(materia => materia.dimensiones.alto).reduce((a, b) => a + b) + (cuatri.length - 1) * espacioEntreMaterias.y;
}).max();

alturaMaximaTotal = Math.max(alturaMaximaTotal, canvasHeight);

let todasLasMaterias = [];
let posicionX = espacioEntreMaterias.x / 2;
for (let i = 0; i < materiasXCuatri.length; i++) {
    let cuatri = materiasXCuatri[i];
    let anchoMasGrande = cuatri.map(materia => materia.dimensiones.ancho).reduce((a, b) => a > b ? a : b);
    let alturaMaximaCuatri = cuatri.map(materia => materia.dimensiones.alto).reduce((a, b) => a + b) 
        + (cuatri.length - 1) * espacioEntreMaterias.y;

    let posicionY = alturaMaximaTotal / 2 - alturaMaximaCuatri / 2;
    for (let j = 0; j < cuatri.length; j++) {
        let materia = cuatri[j];

        materia["posicion"] = { 
            x: posicionX + (anchoMasGrande - materia.dimensiones.ancho) / 2, 
            y: posicionY 
        };
        todasLasMaterias.push(materia);

        posicionY += materia.dimensiones.alto + espacioEntreMaterias.y;
    }

    posicionX += anchoMasGrande + espacioEntreMaterias.x;
}
todasLasMaterias.forEach(materia => {
    materia["correlativas"] = materia.correlativas
        .map(correlativa => todasLasMaterias.findIndex(m => m.path == correlativa.path));
});

let mouse;
let diferenciaAcumuladaX = 0;
let diferenciaAcumuladaY = 0;
let indiceMateriaSenalada = -1;
renderizarCanvas();

let puntero = { x: 0, y: 0 };
moviendoPantalla = (evento) => {
    puntero = { x: evento.x - canvasLeft, y: (evento.y - canvasTop) * scale.y };
    transladarCanvas(
        Math.max(evento.clientX - canvasLeft, 0) * scale.x,
        Math.max(evento.clientY - canvasTop, 0) * scale.y
    ); 
}

canvas.addEventListener("mousedown", (evento) => {
    canvas.addEventListener("mousemove", moviendoPantalla);
    mouse = undefined;
    moviendoPantalla(evento);
});
canvas.addEventListener("mouseup", (_) => canvas.removeEventListener("mousemove", moviendoPantalla));
window.addEventListener("mouseup", (_) => canvas.removeEventListener("mousemove", moviendoPantalla));

function transladarCanvas(posX, posY) {
    if (mouse && mouse.diferencia(posX, posY) <= 1) return;

    if (!mouse) mouse = new PosicionMouse(posX, posY);
    let [ difX, difY ] = mouse.distancia(posX, posY);

    ctx.translate(-diferenciaAcumuladaX, -diferenciaAcumuladaY);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.translate(diferenciaAcumuladaX + difX, diferenciaAcumuladaY + difY);

    renderizarCanvas({ x: puntero.x - diferenciaAcumuladaX, y: puntero.y - diferenciaAcumuladaY });

    mouse = new PosicionMouse(posX, posY);
    diferenciaAcumuladaX += difX;
    diferenciaAcumuladaY += difY;
}

function renderizarCanvas(posicion = undefined) {
    let listaMaterias = todasLasMaterias.slice();

    if (posicion) {
        let nuevoIndice = listaMaterias.findIndex(materia =>
            materia.posicion.x < posicion.x &&
            materia.posicion.x + materia.dimensiones.ancho > posicion.x &&
            materia.posicion.y < posicion.y &&
            materia.posicion.y + materia.dimensiones.alto > posicion.y
        );
        if (nuevoIndice >= 0) indiceMateriaSenalada = nuevoIndice;
    }

    let materiaSenalada;
    if (indiceMateriaSenalada >= 0) {
        materiaSenalada = listaMaterias.splice(indiceMateriaSenalada, 1)[0];

        ctx.lineWidth = 3;
        materiaSenalada.correlativas.forEach(indiceCorrelativa => flechaMateriaCorrelativa(materiaSenalada, todasLasMaterias[indiceCorrelativa]));
        todasLasMaterias.filter(materia => materia.correlativas.some(indice => indice == indiceMateriaSenalada))
            .forEach(materiaSiguiente => flechaMateriaCorrelativa(materiaSiguiente, materiaSenalada));
        ctx.lineWidth = 1;
    }

    listaMaterias.forEach(materia => {
        dibujarMateria(materia.posicion.x, materia.posicion.y, materia.nombre, colorPorEtapa(materia.etapa));
        materia.correlativas.forEach(indiceCorrelativa => flechaMateriaCorrelativa(materia, todasLasMaterias[indiceCorrelativa]));
    });

    if (indiceMateriaSenalada >= 0) {
        ctx.lineWidth = 4;
        dibujarMateria(materiaSenalada.posicion.x, materiaSenalada.posicion.y, materiaSenalada.nombre, colorPorEtapa(materiaSenalada.etapa));
        // ctx.strokeStyle = "white";
        ctx.lineWidth = 1;

    }
}

function flechaMateriaCorrelativa(materia, correlativa) {
    let centroInicio = {
        x: correlativa.posicion.x + correlativa.dimensiones.ancho / 2,
        y: correlativa.posicion.y + correlativa.dimensiones.alto / 2,
    };
    let inicioPosiblesDesfases = [
        { x: correlativa.dimensiones.ancho / 2, y: 0 },
        { x: -correlativa.dimensiones.ancho / 2, y: 0 },
        { x: 0, y: correlativa.dimensiones.alto / 2 },
        { x: 0, y: -correlativa.dimensiones.alto / 2 },
    ];
    let centroFinal = {
        x: materia.posicion.x + materia.dimensiones.ancho / 2,
        y: materia.posicion.y + materia.dimensiones.alto / 2,
    };
    let finalPosiblesDesfases = [
        { x: materia.dimensiones.ancho / 2, y: 0 },
        { x: -materia.dimensiones.ancho / 2, y: 0 },
        { x: 0, y: materia.dimensiones.alto / 2 },
        { x: 0, y: -materia.dimensiones.alto / 2 },
    ];

    const distanciaInicio = (desfase) => {
        return Math.pow(centroInicio.x + desfase.x - centroFinal.x, 2)
            + Math.pow(centroInicio.y + desfase.y - centroFinal.y, 2);
    };
    let inicioDesfase = inicioPosiblesDesfases
        .reduce((desfaseA, desfaseB) => distanciaInicio(desfaseA) < distanciaInicio(desfaseB) ? desfaseA : desfaseB)

    const distanciaFinal = (desfase) => {
        return Math.pow(centroFinal.x + desfase.x - centroInicio.x, 2)
            + Math.pow(centroFinal.y + desfase.y - centroInicio.y, 2);
    };
    let finalDesfase = finalPosiblesDesfases
        .reduce((desfaseA, desfaseB) => distanciaFinal(desfaseA) < distanciaFinal(desfaseB) ? desfaseA : desfaseB)

    flecha(
        { x: centroInicio.x + inicioDesfase.x, y: centroInicio.y + inicioDesfase.y },
        { x: centroFinal.x + finalDesfase.x, y: centroFinal.y + finalDesfase.y }
    );
}

function flecha(inicio, final) {
    let normal = { x: final.x - inicio.x, y: final.y - inicio.y };
    let magnitud = Math.sqrt(normal.x * normal.x + normal.y * normal.y);
    normal["x"] /= magnitud;
    normal["y"] /= magnitud;
    let tangente = { x: normal.y, y: -normal.x };

    let largo = 12;
    let ancho = 8;
    let extension = 3;
    let inicioFlecha = {
        x: final.x - (largo - extension) * normal.x,
        y: final.y - (largo - extension) * normal.y
    };

    ctx.beginPath();
    ctx.moveTo(inicio.x, inicio.y);
    ctx.bezierCurveTo(
        inicio.x + (inicioFlecha.x - inicio.x) / 2, inicio.y, 
        inicioFlecha.x + (inicio.x - inicioFlecha.x) / 2, inicioFlecha.y, 
        inicioFlecha.x, inicioFlecha.y
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(inicioFlecha.x, inicioFlecha.y);
    ctx.lineTo(inicioFlecha.x - extension * normal.x + (ancho / 2) * tangente.x, inicioFlecha.y - extension * normal.y + (ancho / 2) * tangente.y);
    ctx.lineTo(inicioFlecha.x + (largo - extension) * normal.x, inicioFlecha.y + (largo - extension) * normal.y);
    ctx.lineTo(inicioFlecha.x - extension * normal.x - (ancho / 2) * tangente.x, inicioFlecha.y - extension * normal.y - (ancho / 2) * tangente.y);
    ctx.lineTo(inicioFlecha.x, inicioFlecha.y);
    ctx.fill();
    ctx.stroke();
}


function dibujarMateria(posX, posY, nombre, color) {
    let altoLinea = alturaPorFont();
    let textoEspaciado = nombre.split("\n");
    let dimensiones = dimensionesTexto(nombre);

    let widthTotal = dimensiones.ancho + paddingMateria.left + paddingMateria.right;
    let heightTotal = dimensiones.alto + paddingMateria.top + paddingMateria.bottom;

    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.roundRect(posX, posY, widthTotal, heightTotal, 10);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();

    let centroX = posX + widthTotal / 2;
    let centroY = posY + heightTotal / 2;

    let cantidad = (textoEspaciado.length - 1) / 2;
    let posicionY = centroY - (altoLinea + espacioEntreLinea) * cantidad;

    ctx.fillStyle = "white";
    for (let linea of textoEspaciado) {
        ctx.fillText(linea, centroX, posicionY);
        posicionY += altoLinea + espacioEntreLinea;
    }

    return { width: widthTotal, height: heightTotal };
}

function dimensionesTexto(texto) {
    let textoEspaciado = texto.split("\n");

    let altoLinea = alturaPorFont();
    let altoTexto = altoLinea * textoEspaciado.length + espacioEntreLinea * Math.max(0, textoEspaciado.length - 1);
    let anchoTexto = textoEspaciado
        .map(linea => ctx.measureText(linea).width)
        .reduce((a, b) => a > b ? a : b);

    return { ancho: anchoTexto, alto: altoTexto };
}

function colorPorEtapa(etapa) {
    let color = "#";
    switch (etapa) {
        case "empezado": color += "e9973f"; break;
        case "ampliar": color += "53dfdd"; break;
        case "terminado": color += "3fb764"; break;
        default: color += "0963c7";
    }

    return color;
}