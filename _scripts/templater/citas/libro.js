async function citarLibro(tp) {
    return "";
}

function describirLibro(archivo) {
    return "Nombre de la obra, de Nombre del autor";
}

module.exports = () => {
    return { 
        citar: citarLibro, 
        describir: describirLibro
    };
}