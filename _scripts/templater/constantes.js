const CARACTERES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"];
const CARACTERES_INVALIDOS = ['*', '"', '\\', '/', '<', '>', ':', '|', '?'];
const MESES = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

const MULTIPLE = "Multiple";
const SIMPLE = "Simple"; 
const RECURSIVO = "Recursivo"; 
const AUTOMATICO = "Automatico";

module.exports = () => ({
    pathArticulos: "legal/Articulos",
    caracteres: CARACTERES,
    caracteresInvalidos: CARACTERES_INVALIDOS,
    meses: MESES,
    tipoDatoCita: {
        multiple: MULTIPLE,
        simple: SIMPLE,
        recursivo: RECURSIVO,
        automatico: AUTOMATICO,
    }
});