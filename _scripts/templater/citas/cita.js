const TIPO_LIBRO = "Libro";
const SALIR = "Salir";

const CITAS = [
    {
        tipo: TIPO_LIBRO,
        texto: "Citar Libro",
        f: (tp) => {
            return {
                describir: tp.user.libro().describir,
                citar: tp.user.libro().citar
            };
        }
    },
    {
        tipo: "Youtube",
        texto: "Citar Youtube",
        f: (tp) => {
            return {
                describir: tp.user.youtube().describir,
                citar: tp.user.youtube().citar
            };
        }
    },
    {
        tipo: "Web",
        texto: "Citar Página web",
        f: (tp) => {
            return {
                describir: tp.user.web().describir,
                citar: tp.user.web().citar
            };
        }
    },
    {
        tipo: "Wikipedia",
        texto: "Citar Wikipedia",
        f: (tp) => {
            return {
                describir: tp.user.wiki().describir,
                citar: tp.user.wiki().citar
            };
        }
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
        carpeta = app.vault.getAbstractFileByPath("libros");
    }

    return await tp.file.create_new(
        template, `${numReferencia} - ${tipoCita}`, false, carpeta
    )
}

function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let numReferencia = archivo.numReferencia;
    let texto = CITAS.find(cita => cita.tipo === tipoCita)?.f(tp).describir(archivo);

    return (!texto) ? undefined : {
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        texto: texto,
    }
}

function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.texto}`;
}

function condicionMinima(valores, simple, multiple) {
    for (let [key, value] of Object.entries(valores)) {
        let tipo = value["tipo"];
        let valor = value["valor"];

        if (tipo == multiple && valor.length == 0)
            return false;
        if (tipo == simple && valor == null)
            return false;
    }
    return true;
}

function actualizarDatos(valoresActuales, simple, multiple) {
    let opciones = [];
    let valores = [];

    for (let [key, value] of Object.entries(valoresActuales)) {
        let tipo = value["tipo"];
        let valor = value["valor"];
        let representarElemento = value["representarElemento"];
        let texto = "";

        switch (tipo) {
            case simple: 
                texto = representarElemento(valor);
                
                opciones.push(key);
                valores.push((valor ? ` ✏️ Modificar `: ` ⊕ Ingresar `) + texto);
                break;
            
            case multiple:
                for (let index in valor) {
                    texto = representarElemento(valor[index]);
                    
                    opciones.push(`${key}-${index}`);
                    valores.push(` ✏️ Modificar ${texto}`);
                }
                
                texto = representarElemento(null);
                opciones.push(key);
                valores.push((valor.length == 0 ? ` ⊕ Ingresar ` : ` ⊕ Agregar `) + texto);
                
                break;
        }
    }

    return [opciones, valores];
}

async function citarCita(tp, tipoCita) {    
    const { simple: SIMPLE, multiple: MULTIPLE } = tp.user.constantes().tipoDatoCita;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let cita = CITAS.find(cita => cita.tipo === tipoCita);

    if (!cita) throw error.Prompt(`El tipo de cita "${tipoCita}" no existe todavia`);
    
    let datos = await cita.f(tp).citar(tp);
    
    let [ opciones, valores ] = actualizarDatos(datos, SIMPLE, MULTIPLE);
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
                let nuevoValor = await extra["preguntar"](tp, null);
                datos[key]["valor"].push(nuevoValor);

            } else if (tipo == MULTIPLE && respuesta.startsWith(key)) {
                let index = parseInt(respuesta.replaceAll(`${key}-`, ""), 10);

                let nuevoValor = await extra["preguntar"](tp, extra["valor"][index]);
                datos[key]["valor"][index] = nuevoValor;
            }
        }
        if (respuesta == SALIR) {
            break;
        }
        
        [ opciones, valores ] = actualizarDatos(datos, SIMPLE, MULTIPLE);
        if (condicionMinima(datos, SIMPLE, MULTIPLE)) {
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

function mostrarCita(contenido) {
    let tR = "";
    if (Array.isArray(contenido)) {
        tR += "\n";
        for (let value of contenido) {
            let nuevoValor = mostrarCita(value).split("\n");
            tR += `- ${nuevoValor.shift()}\n${nuevoValor.map(v => `  ${v}`).join("\n")}\n`;
        }
    } else if (typeof contenido === "object") { // Asumo que si no es un array, debería ser un string o un dict que es object
        for (let [key, value] of Object.entries(contenido)) {
            tR += `${key}: ${mostrarCita(value)}\n`;
        }
    } else {
        tR += contenido;
    }

    return tR;
}

module.exports = () => ({
    generar: generarCita,
    metadata: describirCita,
    describir: descripcionTexto,
    citar: citarCita,
    mostrar: mostrarCita,
})