const CARACTERES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
const CARACTERES_INVALIDOS = ['*', '"', '\\', '/', '<', '>', ':', '|', '?'];
const MESES = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

module.exports = () => ({
    pathArticulos: "legal/Articulos",
    caracteres: CARACTERES,
    caracteresInvalidos: CARACTERES_INVALIDOS,
    meses: MESES
});