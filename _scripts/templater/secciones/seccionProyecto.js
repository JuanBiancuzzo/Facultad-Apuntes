async function crearSeccion(tp) {

}

module.exports = (tp) => ({
    seccion: crearSeccion.bind(null, tp),
});