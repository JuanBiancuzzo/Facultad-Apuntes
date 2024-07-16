const NOMBRE_NUMEROS = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
const CARACTERES_INVALIDOS = ['*', '"', '\\', '/', '<', '>', ':', '|', '?'];

function esNumero(token) {
    token = token.trim().toLowerCase();
    if (NOMBRE_NUMEROS.some(nombre => token.includes(nombre))) 
        return true;
    return !isNaN(parseInt(token, 10));
}

function tenerNumeroGrupo(conjunto) {
    let numero = undefined;	

    for (let parte of conjunto.split(" ")) {
        parte = parte.toLowerCase();
        if (!NOMBRE_NUMEROS.some(nombre => parte.includes(nombre)) || numero)
            continue;
        if (!numero)
            numero = 0;
        numero += NOMBRE_NUMEROS.findIndex(nombre => {
            return parte.includes(nombre);
        }) + 1;
    }
    
    if (numero) 
        return numero;

    for (let parte of conjunto.replaceAll(".", "").split(" ")) {
        if (isNaN(parseInt(parte, 10)) || numero)
            continue;
        if (!numero)
            numero = 0;
        numero += parseInt(parte, 10);
    }
    
    return (numero) ? numero : 0;
}


function validarNombre(nombre) {
    return !CARACTERES_INVALIDOS.some(caracter => nombre.includes(caracter));
}

function seccionesSiguientes(archivo) {
    const carpeta = archivo.file.folder;
    const nivel = carpeta.split("/").length;

    return subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
        .filter(seccion => seccion.file.folder.split("/").length == nivel + 1);
}

module.exports = () => {
    return {
        cte: {
            caracteresInvalidos: CARACTERES_INVALIDOS,
        },
        esNumero: esNumero,
        tenerNumeroGrupo: tenerNumeroGrupo,
        esNombreValido: validarNombre,
        seccionesSiguientes: seccionesSiguientes
    };
};