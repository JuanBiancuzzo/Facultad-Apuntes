<%*	
const CREAR = 1;
const AGREGAR = 2;
const SACAR = 3;

const REFERENCIA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Referencia - Template.md")
const ETAPA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Etapa - Template.md")

const TEXTO_ETAPA = await app.vault.read(ETAPA_TEMPLATE);
const TEXTO_REFERENCIA = await app.vault.read(REFERENCIA_TEMPLATE);

const dv = app.plugins.plugins.dataview.api;

let opciones = ["⊕ Crear referencia", "↶ Agregar referencia", "⊖ Sacar referencia"];
let valores = [CREAR, AGREGAR, SACAR];

try {
    let modificacion = await tp.system.suggester(opciones, valores, true, "¿Qué desea hacer?");;
    let archivo = dv.page(tp.file.path(true));
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let referenciasFinal = [];

    if (modificacion == CREAR) {
        let seguidorRef = tp.user.seguidorReferencias().new(dv);
		let numReferencia = seguidorRef.conseguirReferencia();

        await tp.user.cita().generar(tp, numReferencia);
        referenciasFinal = await agregarReferencia(tArchivo, numReferencia);
        
    } else if (modificacion == AGREGAR) {

        let referencias = dv.pages('#referencia')
            .flatMap(referencia => tp.user.cita().metadata(tp, referencia))
            .sort(ref => -ref.numReferencia);

        let opciones = referencias.map(ref => tp.user.cita().describir(ref));
        let valores = referencias.map(ref => ref.numReferencia);
        
        let numReferencia = await tp.system.suggester(opciones, valores,
            true, "Agregar una cita (si no hay nada que agregar, apretar ESC)", 13
        );

        referenciasFinal = await agregarReferencia(tArchivo, numReferencia);
    } else if (modificacion == SACAR) {

        let referenciasArchivo = dv.page(tArchivo.path).referencias;
        if (!referenciasArchivo)
            referenciasArchivo = [];
        
        referenciasArchivo = referenciasArchivo.map(ref => parseInt(ref, 10));
        
        let referencias = dv.pages('#referencia')
            .flatMap(referencia => tp.user.cita().metadata(tp, referencia))
            .filter(ref => referenciasArchivo.indexOf(ref.numReferencia) >= 0)
            .sort(ref => -ref.numReferencia);

        let opciones = referencias.map(ref => tp.user.cita().describir(ref));
        let valores = referencias.map(ref => ref.numReferencia);
        
        let numReferencia = await tp.system.suggester(opciones, valores,
            true, "Sacar la cita (si no hay nada que sacar, apretar ESC)", 13
        );

        referenciasFinal = await sacarReferencia(tArchivo, numReferencia);
    }

    if (!archivo.tags.some(tag => tag == "índice" || tag.startsWith("resumen") || tag.includes("materia") || tag.startsWith("proyecto/curso"))) {

        await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
            if (!frontmatter["etapa"]) {
                frontmatter["etapa"] = "sin-empezar";
            }
        });

        let nuevoContenido = await app.vault.read(tArchivo);
        let hayReferencias = referenciasFinal.length > 0;
        let indiceReferencias = incluye(nuevoContenido, TEXTO_REFERENCIA);
        let hayTopicoReferencias = indiceReferencias > 0;

        if (hayReferencias && !hayTopicoReferencias) {
            // Agregar el topico
            nuevoContenido = `${nuevoContenido}\n\n\n${TEXTO_REFERENCIA}`;

        } else if (!hayReferencias && hayTopicoReferencias) {
            // Sacar el topico
            nuevoContenido = nuevoContenido.slice(0, indiceReferencias - `\n\n${TEXTO_REFERENCIA}`.length);

        }

        if (hayReferencias) {
            let hayEtapa = incluye(nuevoContenido, TEXTO_ETAPA) > 0;
            if (!hayEtapa) {
                if (nuevoContenido.slice(0, 3) == "---") {
                    let index = nuevoContenido.slice(3).indexOf("---") + 7; // 3 del ---, 4 del ---\n
                    nuevoContenido = `${nuevoContenido.slice(0, index)}${TEXTO_ETAPA}\n${nuevoContenido.slice(index)}`;
                } else {
                    nuevoContenido = `${TEXTO_ETAPA}\n${nuevoContenido}`;
                }
            }
        }

        await app.vault.modify(tArchivo, nuevoContenido);
    }

} catch (e) {
    const mensaje = "Hubo un error al modificar la referencia";
    
    console.log(mensaje);
    console.log(e);
    new Notice(mensaje);
}

function incluye(referencia, posibleIncluido) {
    referencia = referencia.split("\n").map(l => l.trim());
    posibleIncluido = posibleIncluido.split("\n").map(l => l.trim());
    
    let empezo = false;
    let contador = 0;

    for (let linea of referencia) {
        let lineaIgual = linea == posibleIncluido[contador];

        if (!empezo && lineaIgual) {
            empezo = true;
            contador++;
        } else if (empezo && lineaIgual) {
            contador++;
            if (contador >= posibleIncluido.length) {
                return contador;
            }
        } else if (empezo && !lineaIgual) {
            empezo = false;
            contador = 0;
        }
    }
    
    return -1;
}

async function agregarReferencia(tArchivo, numReferencia) {
    let referencias;

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        referencias = frontmatter["referencias"] ? frontmatter["referencias"] : [];
        referencias.push(`${numReferencia}`);
        frontmatter["referencias"] = referencias;
    });

    return referencias;
}

async function sacarReferencia(tArchivo, numReferencia) {
    let referencias;

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        referencias = frontmatter["referencias"] ? frontmatter["referencias"] : [];
        let index = referencias.indexOf(`${numReferencia}`);
        if (index < 0) {
            const mensaje = "No hay referencias en este archivo";
            console.log(mensaje);
            new Notice(mensaje);
        } else {
            referencias.splice(index, 1);
            console.log(referencias);
            frontmatter["referencias"] = referencias;
        }
    });

    return referencias;
}
_%>