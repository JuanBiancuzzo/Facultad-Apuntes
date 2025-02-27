async function crearCarrera(tp) {

}

async function crearMateria(tp) {

}

async function crearResumen(tp) {

}

async function crearSeccion(tp) {

}

module.exports = (tp) => ({
    seccion: crearSeccion.bind(null, tp),
    carrera: crearCarrera.bind(null, tp),
    materia: crearMateria.bind(null, tp),
    resumen: crearResumen.bind(null, tp),
});