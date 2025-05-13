async function crearSeccionCurso(tp) {

}

async function crearSeccionProyecto(tp) {

}

module.exports = (tp) => ({
    curso: crearSeccionCurso.bind(null, tp),
    proyecto: crearSeccionProyecto.bind(null, tp),
});