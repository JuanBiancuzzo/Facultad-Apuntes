async function citarWeb(tp) {
    const { simple: SIMPLE, multiple: MULTIPLE } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const cte = tp.user.constantes();
    const error = tp.user.error();

    return {
        "nombreAutores": {
            tipo: MULTIPLE,
            valor: [],
            representarElemento: (autore) => {
                if (autore == null) return "autore";
                let [{nombre: nombre}, {apellido: apellido}] = autore["autore"];
                return `${apellido}, ${nombre}`;
            },
            preguntar: async (tp, valor) => {
                let textoNombre = "Nombre del autore";
                let textoApellido = "Apellido del autore";
                if (valor) {
                    let [{nombre: nombre}, {apellido: apellido}] = valor["autore"];
                    textoNombre += `, donde antes era ${nombre}`;
                    textoApellido += `, donde antes era ${apellido}`;
                }
                
                return await preguntar.autore(
                    tp, `${textoNombre}:`, `${textoApellido}:`,
                    error.Quit("No se ingresa el nombre del autore de forma correcta"),
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                )
            }
        },
        "fechaPublicacion": {
            tipo: SIMPLE,
            valor: null,
            representarElemento: (fecha) => {
                let representacion = "fecha de publicación";
                if (fecha) representacion += `: ${describir.fecha(fecha, cte.meses)}`;
                return representacion;
            },
            preguntar: async (tp, fecha) => await preguntar.fecha(
                tp, fecha 
                    ? `Modificar la fecha "${describir.fecha(fecha, cte.meses)}", que es la publicación de la página` 
                    : "Fecha de publicación de la página:", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha de publicación de la página")
            )
        },
        "tituloArticulo": {
            tipo: SIMPLE,
            valor: null,
            representarElemento: (titulo) => {
                let representacion = "título del articulo";
                if (titulo) representacion += `: ${titulo}`;
                return representacion;
            },
            preguntar: async (tp, titulo) => await preguntar.simple(
                tp, titulo ? `Modificar el título del artículo: "${titulo}"` : "Nombre del artículo:",
                error.Quit("No se ingresó nombre del artículo")
            )
        },
        "nombrePagina": {
            tipo: SIMPLE,
            valor: null,
            representarElemento: (nombrePagina) => {
                let representacion = "nombre de la página";
                if (nombrePagina) representacion += `: ${nombrePagina}`;
                return representacion;
            },
            preguntar: async (tp, nombrePagina) => await preguntar.simple(
                tp, nombrePagina ? `Modificar el nombre de la página: "${nombrePagina}"` : "Nombre de la página:",
                error.Quit("No se ingresó nombre de la página")
            )
        },
        "url": {
            tipo: SIMPLE,
            valor: null,
            representarElemento: (url) => {
                let representacion = "url";
                if (url) representacion += `: ${url}`;
                return representacion;
            },
            preguntar: async (tp, url) => await preguntar.simple(
                tp, url ? `Modificar el url: "${url}"` : "Ingresar el url del artículo:",
                error.Quit("No se ingresó el url de la página")
            )
        }
    };
}

function describirWeb(archivo) {
    let autores = "";
    for (let {autore: autore} of archivo.nombreAutores) {
        let [{nombre: nombre}, {apellido: apellido}] = autore;
        autores += `${apellido}, ${nombre[0]}.`;
    }

    return `${archivo.tituloArticulo} de ${autores}, publicado en ${archivo.nombrePagina}`;
}

module.exports = () => {
    return { 
        citar: citarWeb, 
        describir: describirWeb
    };
}