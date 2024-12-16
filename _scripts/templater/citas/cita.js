const TIPO_LIBRO = "Libro";
const TIPO_PAPER = "Paper";
const SALIR = "Salir";

const CITAS = [
    {
        tipo: TIPO_LIBRO, texto: "Citar Libro",
        citar: (tp) => {
            let cita = tp.user.libro();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.libro().describir(archivo),
    },
    {
        tipo: "Youtube", texto: "Citar Youtube",
        citar: (tp) => {
            let cita = tp.user.youtube();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.youtube().describir(archivo),
    },
    {
        tipo: "Web", texto: "Citar Página web",
        citar: (tp) => {
            let cita = tp.user.web();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.web().describir(archivo),
    },
    {
        tipo: "Wikipedia", texto: "Citar Wikipedia",
        citar: (tp) => {
            let cita = tp.user.wiki();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.wiki().describir(archivo),
    },
    {
        tipo: TIPO_PAPER, texto: "Citar Paper",
        citar: (tp) => {
            let cita = tp.user.paper();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.paper().describir(archivo),
    },
]

async function generarCita(tp, numReferencia) {
    let tipoCita = await tp.system.suggester(
        CITAS.map(cita => cita.texto),
        CITAS.map(cita => cita.tipo),
        true, "Qué tipo de cita es?"
    );

    let template = tp.file.find_tfile("Cita - Template");
    let carpeta = app.vault.getAbstractFileByPath("_referencias");

    if (tipoCita == TIPO_LIBRO) {
        template = tp.file.find_tfile("Libro - Template");
        carpeta = app.vault.getAbstractFileByPath("biblioteca/libros");
    } else if (tipoCita == TIPO_PAPER) {
        template = tp.file.find_tfile("Paper - Template");
        carpeta = app.vault.getAbstractFileByPath("biblioteca/papers");
    }

    return await tp.file.create_new(
        template, `${numReferencia} - ${tipoCita}`, false, carpeta
    )
}

// editar esto
function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let textos = CITAS.find(cita => cita.tipo === tipoCita)?.describir(tp, archivo);

    return (!textos) ? [] : textos.map(({ numReferencia, texto }) => ({
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        texto: texto,
    }));
}

function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.texto}`;
}

function condicionMinima(valores) {
    for (let [key, value] of Object.entries(valores)) {
        let minimo = value["minimo"];
        if (!minimo(value["valor"]))
            return false;
    }
    return true;
}

function actualizarDatos(tp, valoresActuales) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE,
        resursivo: RECURSIVO
    } = tp.user.constantes().tipoDatoCita;
    
    let opciones = [];
    let valores = [];

    for (let [key, value] of Object.entries(valoresActuales)) {
        let tipo = value["tipo"];
        let valor = value["valor"];
        let representarElemento = value["representarElemento"];

        let texto = "";
        let opcionalTexto = value["minimo"](valor) ? " (opcional)" : "";

        switch (tipo) {
            case SIMPLE: 
                texto = representarElemento(valor);
                
                opciones.push(key);
                valores.push((valor ? ` ✏️ Modificar `: `${opcionalTexto} ⊕ Ingresar `) + texto);
                break;
            
            case MULTIPLE:
            case RECURSIVO:
                for (let index in valor) {
                    texto = representarElemento(valor[index]);      
                    opciones.push(`${key}-${index}`);
                    valores.push(` ✏️ Modificar ${texto}`);
                }

                if (valor.length > 0) {
                    let index = valor.length - 1;
                    texto = representarElemento(valor[index]);
                    
                    opciones.push(`${key}-${index + 1}`);
                    valores.push(` ⊖ Eliminar ${texto}`);
                }
                
                texto = representarElemento(null);
                opciones.push(key);
                valores.push(opcionalTexto + (valor.length == 0 ? ` ⊕ Ingresar ` : ` ⊕ Agregar `) + texto);
                
                break;
        }
    }

    return [opciones, valores];
}

async function rellenarDatos(tp, generarInicio, seguidorRef, datosIniciales = undefined) {
    const { 
        simple: SIMPLE, 
        multiple: MULTIPLE,
        resursivo: RECURSIVO,
        automatico: AUTOMATICO,
    } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let datos = await generarInicio(tp, datosIniciales);
    
    let [ opciones, valores ] = actualizarDatos(tp, datos);
    if (condicionMinima(datos)) {
        opciones.push(SALIR);
        valores.push(" ↶ Dejar de editar");
    }
    let respuesta = await preguntar.suggester(
        tp, valores, opciones, 
        "Completar para poder citar", 
        error.Prompt("No se completó los datos necesarios")
    );

    while (true) {
        for (let [key, {tipo, ...extra}] of Object.entries(datos)) {

            if (tipo == SIMPLE && respuesta == key) {                
                let nuevoValor = await extra["preguntar"](tp, extra["valor"]);
                datos[key]["valor"] = nuevoValor;
                
            } else if (tipo == MULTIPLE && respuesta == key) {             
                datos[key]["valor"].push(
                    await extra["preguntar"](tp, null, seguidorRef)
                );

            } else if (tipo == MULTIPLE && respuesta.startsWith(key)) {
                let index = parseInt(respuesta.replaceAll(`${key}-`, ""), 10);

                if (index < datos[key]["valor"].length) {
                    datos[key]["valor"][index] = await extra["preguntar"](  
                        tp, extra["valor"][index], seguidorRef
                    );
                } else {
                    datos[key]["valor"] = extra["eliminarUltimo"](
                        extra["valor"], seguidorRef
                    );
                }
            } else if (tipo == RECURSIVO && respuesta == key) {
                datos[key]["valor"].push(await rellenarDatos(
                    tp, extra["generarInicio"], 
                    seguidorRef
                ));

            } else if (tipo == RECURSIVO && respuesta.startsWith(key)) {
                let index = parseInt(respuesta.replaceAll(`${key}-`, ""), 10);

                if (index < datos[key]["valor"].length) {
                    datos[key]["valor"][index] = await rellenarDatos(
                        tp, extra["generarInicio"], 
                        seguidorRef, 
                        extra["valor"][index]
                    );
                } else {
                    datos[key]["valor"] = extra["eliminarUltimo"](
                        extra["valor"], seguidorRef
                    );
                }
            } else if (tipo == AUTOMATICO) {
                datos[key]["valor"] = await datos[key]["asignar"](tp, datos[key]["valor"], seguidorRef);
            }
        }
        if (respuesta == SALIR) {
            break;
        }
        
        [ opciones, valores ] = actualizarDatos(tp, datos);
        if (condicionMinima(datos)) {
            opciones.push(SALIR);
            valores.push(" ↶ Dejar de editar");
        }

        respuesta = await preguntar.suggester(
            tp, valores, opciones, 
            "Completar para poder citar", 
            error.Prompt("No se completó los datos necesarios")
        );
    }

    let respuestaFinal = {};
    for (let [key, { tipo: _, valor, ..._extra}] of Object.entries(datos)) {
        respuestaFinal[key] = valor;
    }

    return respuestaFinal;
}

async function citarCita(tp, tipoCita, seguidorRef) {    
    const error = tp.user.error();

    let cita = CITAS.find(cita => cita.tipo === tipoCita);
    if (!cita) throw error.Prompt(`El tipo de cita "${tipoCita}" no existe todavia`);

    let [ obtenerDefault, actualizarDatos, generarPreguntas ] = cita.citar(tp);

    return await tp.user.crearPreguntas(
        tp, obtenerDefault,
        (tp, datos, respuesta) => actualizarDatos(tp, datos, respuesta, seguidorRef),
        generarPreguntas,
        "Completar para poder citar",
    );
}

async function editarCita(tp, tipoCita, seguidorRef, datosActuales) {
    const error = tp.user.error();

    let cita = CITAS.find(cita => cita.tipo === tipoCita);
    if (!cita) throw error.Prompt(`El tipo de cita "${tipoCita}" no existe todavia`);

    let [ obtenerDefault, actualizarDatos, generarPreguntas ] = cita.citar(tp);

    return await tp.user.crearPreguntas(
        tp, obtenerDefault,
        (tp, datos, respuesta) => actualizarDatos(tp, datos, respuesta, seguidorRef),
        generarPreguntas,
        "Completar para poder citar",
        datosActuales,
    );
}

module.exports = () => ({
    generar: generarCita,
    metadata: describirCita,
    describir: descripcionTexto,
    citar: citarCita,
    editar: editarCita,
})