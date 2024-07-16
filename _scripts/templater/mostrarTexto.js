const ENUMERACION = "enumeracion";
const TEXTO = "texto";
const NUMERICO = 4;
const ALFANUMERICO = 5;

const EDITAR = "editar";
const ELIMINAR = "eliminar";
const SALIR = "salir";
const AGREGAR_TEXTO = "agregar_texto";
const AGREGAR_ENUMERACION = "agregar_enumeracion";

async function preguntarTodoTexto(tp, texto = []) {
    while (true) {
        let descripcionTexto = describirTexto(tp, texto);

        let opciones = [...descripcionTexto.map(d => d.texto), " ⊕ Agregar texto", " ⊕ Agregar enumeración"];
        let valores = [...descripcionTexto.map(d => d.valor), AGREGAR_TEXTO, AGREGAR_ENUMERACION];

        if (texto.length > 0) {
            opciones.push(" ↶ Dejar de editar");
            valores.push(SALIR);
        }

        let accion = await tp.user.preguntar().suggester(
            tp, opciones, valores,
            "Escribir lo que el artículo enuncia",
            "Se salió de la edición de texto"
        );

        if (accion == SALIR) {
            break;

        } else if (accion == AGREGAR_TEXTO) {
            // Crear texto
            texto.push(await preguntarTexto(tp));

        } else if (accion == AGREGAR_ENUMERACION) {
            // Crear enumeración
            texto.push(await preguntarEnumeracion(tp));

        } else {
            // Editar o eliminar texto/enumeracion
            let indices = accion;
            let contenidoAEditar = texto;
            let previo = contenidoAEditar;

            for (let indice of indices) {
                contenidoAEditar = contenidoAEditar[indice];

                if (contenidoAEditar.tipo == ENUMERACION) {
                    previo = contenidoAEditar;
                    contenidoAEditar = contenidoAEditar.textos;
                } else {
                    break;
                }
            }

            let opciones = [" ⊕ Editar", " ⊖ Eliminar", " ↶ Salir"];
            let valores = [EDITAR, ELIMINAR, SALIR];

            if (previo != texto && previo.tipo == ENUMERACION) {
                opciones = [" ⊕ Agregar texto", " ⊕ Agregar enumeración", ...opciones];
                valores = [AGREGAR_TEXTO, AGREGAR_ENUMERACION, ...valores];
            }

            accion = await tp.user.preguntar().suggester(
                tp, opciones, valores,
                `Que se quiere hacer con "${contenidoAEditar.texto}"`,
                "No se eligió si editar, "
            );

            if (accion == SALIR) {
                continue;
            } else if (accion == AGREGAR_TEXTO) {
                let nuevoTexto = await preguntarTexto(`Ingresar texto después de: ${contenidoAEditar.texto}`);
                previo.textos.splice(indices.pop() + 1, 0, nuevoTexto);

            } else if (accion == AGREGAR_ENUMERACION) {
                let nuevaEnumeracion = await preguntarEnumeracion();
                previo.textos.splice(indices.pop() + 1, 0, nuevaEnumeracion);


            } else if (accion == EDITAR) {
                contenidoAEditar["texto"] = (await preguntarTexto(`Se modifica: "${contenidoAEditar.texto}"`)).texto;

            } else if (accion == ELIMINAR) {
                texto = eliminarParteTexto(indices, texto);
            }
        }
    }

    return texto;
}

function eliminarParteTexto(indices, texto) {

    if (indices.length == 0)
        return texto;
    
    if (indices.length == 1) {
        texto.splice(indices[0], 1);
        
    } else {
        let indice = indices.splice(0, 1)[0];
        texto[indice].textos = eliminarParteTexto(indices, texto[indice].textos);

        if (texto[indice].textos.length == 0) {
            texto.splice(indice, 1);
        }

    }

    for (let [index, { tipo, ...datos }] of texto.entries()) {
        if (tipo != ENUMERACION)
            continue;

        let { enumeracion, textos } = datos;
        if (textos.length == 1 && textos[0].tipo == ENUMERACION) {
            texto[index] = {
                tipo: ENUMERACION,
                enumeracion: enumeracion,
                textos: textos[0].textos
            };
        }
    }

    return texto;
}

async function preguntarEnumeracion(tp) {
    let resultado = { 
        tipo: ENUMERACION,
        enumeracion: await tp.user.preguntar().suggester(
            tp, [" 1. Numérico", " a. Alfanumérico"], [NUMERICO, ALFANUMERICO],
            "Qué tipo de enumeración se va a usar?",
            "No se ingresó"
        )
    };

    let simbolo = (resultado.enumeracion == NUMERICO) ? 1 : cte.caracteres[0];
    let textos = [ await preguntarTexto(tp, ` ${simbolo}. Ingresar el texto que iría acá`) ];
    while (true) {
        let posicion = textos.filter(t => t.tipo == TEXTO).length;
        simbolo = (resultado.enumeracion == NUMERICO) ? posicion + 1 : cte.caracteres[posicion];

        let opciones = [` ${simbolo}. Agregar texto`, " ⊕ Agregar enumeración", " ↶ Dejar de editar"];
        let valores = [AGREGAR_TEXTO, AGREGAR_ENUMERACION, SALIR];

        let accion = await tp.user.preguntar().suggester(
            tp, opciones, valores,
            "Qué vas a hacer ahora?",
            "No se eligió una acción al crear la enumeración"
        );

        if (accion == SALIR) {
            break;

        } else if (accion == AGREGAR_TEXTO) {
            textos.push( await preguntarTexto(tp, ` ${simbolo}. Ingresar el texto que iría acá`) );

        } else if (accion == AGREGAR_ENUMERACION) {
            textos.push( await preguntarEnumeracion(tp) );

        }
    }

    resultado["textos"] = textos;
    return resultado;
}

async function preguntarTexto(tp, mensaje = "Ingrese el texto") {
    return {
        tipo: TEXTO, 
        texto: await tp.user.preguntar().prompt(
            tp, mensaje,
            "No se ingresó el texto"
        )
    };
}

function describirTexto(tp, textos) {
    let resultado = [];
    let posicion = 0;

    for (let { tipo, ...datos } of textos) {
        if (tipo == TEXTO) {
            resultado.push({
                texto: datos.texto,
                valor: [ posicion ],
            })
        } else {
            let { enumeracion, textos: nuevoTextos } = datos;
            let descripciones = describirTexto(tp, nuevoTextos, TEXTO, NUMERICO);

            const caracteres = tp.user.constantes().caracteres;
            let carPosicion = 0;
            for (let { texto, valor } of descripciones) {
                let pretexto = "";
                if (valor.length == 1) {
                    let simbolo = (enumeracion == NUMERICO) ? carPosicion + 1 : caracteres[carPosicion];
                    pretexto = ` ${simbolo}.`;
                    carPosicion++;
                } else {
                    pretexto = "   ";
                }

                resultado.push({
                    texto: `${pretexto} ${texto}`,
                    valor: [ posicion, ...valor ],
                })
            }
        }
        posicion++;
    }

    return resultado;
}

function describirMetadata(textos) {
    let tR = "";

    for (let { tipo, ...data } of textos) {
        tR += (tipo == ENUMERACION) 
            ? describirMetadataEnumeracion(data) 
            : describirMetadataTexto(data);
    }    

    return tR;
}

function describirMetadataTexto(data) {
    let tR = `  - tipo: ${TEXTO}\n`;
    tR    += `    texto: "${data.texto}"\n\n`;
    return tR;
}

function describirMetadataEnumeracion(data) {
    let tR = `  - tipo: ${ENUMERACION}\n`;
    tR    += `    enumeracion: ${data.enumeracion}\n`;
    tR    += `    textos:\n`;
             `    - tipo: ${TEXTO}\n`
    tR    += describirMetadata(data.textos)
                .split("\n")
                .map(texto => `    ${texto}`)
                .join("\n");
    return tR;
}

function mostrarTexto(tp, texto) {
    descripcionTexto = describirTexto(tp, texto);
    return `"${descripcionTexto.map(desc => desc.texto).join("\n")}"\n\n`;
}

module.exports = () => {
    return {
        cte: {
            ENUMERACION: ENUMERACION,
            TEXTO: TEXTO,
            NUMERICO: NUMERICO,
            ALFANUMERICO: ALFANUMERICO,
        },
        preguntar: preguntarTodoTexto,
        metadata: describirMetadata,
        mostrar: mostrarTexto,
        describir: describirTexto,
    };
};