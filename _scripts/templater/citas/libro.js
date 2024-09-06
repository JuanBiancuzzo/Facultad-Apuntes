async function citarLibro(tp) {
    const error = tp.user.error();
    let resultado = {};
    
    return resultado;
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