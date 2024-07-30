const CARACTERES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
const CARACTERES_INVALIDOS = ['*', '"', '\\', '/', '<', '>', ':', '|', '?'];

module.exports = () => {
    return {
        pathArticulos: "legal/Articulos",
        caracteres: CARACTERES,
        caracteresInvalidos: CARACTERES_INVALIDOS,
    };
};