module.exports = () => ({
    CARACTERES_INVALIDOS: ['*', '"', '\\', '/', '<', '>', ':', '|', '?'],
    MESES: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
    TAGS: {
        investigacion: "índice",
        carrera: "carrera",
        materia: "materia",
        resumen: "resumen",
        curso: "curso",
        coleccion: "colección",
        proyecto: {
            self: "proyecto",
            investigacion: "investigación",
            practico: "práctico",
            juego: "GDC",
        },
        nota: {
            self: "nota",
            carrera: "facultad",
            investigacion: "investigacion",
            proyecto: "proyecto",
            curso: "curso",
        }
    },
});