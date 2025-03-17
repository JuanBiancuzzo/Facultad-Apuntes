class Enum {}

async function crearEnum() {

}

module.exports = () => ({
    clase: () => new Enum(),
    crear: crearEnum,
});