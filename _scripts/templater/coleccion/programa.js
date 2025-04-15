/*
 * Crear una forma de tener programas por terminar o por gui
    * Los programas por terminal tienen flags
    * Los programas con gui tienen shortcuts
        * Agregar divisiones en el caso de los shortcuts
 */
class Programa {

}

async function crearPrograma(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp prograam",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearPrograma,
});