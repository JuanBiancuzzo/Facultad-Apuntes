<%*	
const CREAR = 1;
const AGREGAR = 2;
const SACAR = 3;

const REFERENCIA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Referencia - Template.md")
const TEXTO_REFERENCIA = await app.vault.read(REFERENCIA_TEMPLATE);

const dv = app.plugins.plugins["dataview"].api;

let opciones = ["⊕ Crear referencia", "↶ Agregar referencia", "⊖ Sacar referencia"];
let valores = [CREAR, AGREGAR, SACAR];

try {
    let modificacion = await tp.system.suggester(opciones, valores, true, "¿Qué desea hacer?");;
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let referenciasFinal = [];

    if (modificacion == CREAR) {

        let numReferencia = tp.user.generarNumReferencia(dv);
        await tp.user.cita().generar(tp, numReferencia);
        referenciasFinal = await agregarReferencia(tArchivo, numReferencia);
        
    } else if (modificacion == AGREGAR) {

        let referencias = dv.pages('#referencia')
            .flatMap(referencia => {
                let desc = tp.user.cita().metadata(tp, referencia);
                if (!desc) {
                    console.log("El siguiente archivo tuvo un erro al describirse");
                    console.log(referencia);
                    return [];
                }
                return [ desc ];
            })
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
        
        referenciasArchivo = referenciasArchivo.map(ref =>  parseInt(ref, 10));
        
        let referencias = dv.pages('#referencia')
            .filter(ref => referenciasArchivo.indexOf(ref.numReferencia) >= 0)
            .flatMap(referencia => {
                let desc = tp.user.cita().metadata(tp, referencia);
                if (!desc) {
                    console.log("El siguiente archivo tuvo un erro al describirse");
                    console.log(referencia);
                    return [];
                }
                return [ desc ];
            })
            .sort(ref => -ref.numReferencia);

        let opciones = referencias.map(ref => tp.user.cita().describir(ref));
        let valores = referencias.map(ref => ref.numReferencia);
        
        let numReferencia = await tp.system.suggester(opciones, valores,
            true, "Sacar la cita (si no hay nada que sacar, apretar ESC)", 13
        );

        referenciasFinal = await sacarReferencia(tArchivo, numReferencia);
    }

    let contenido = await app.vault.read(tArchivo);
    
    let hayReferencias = referenciasFinal.length > 0;
    let hayTopicoReferencias = contenido.includes(TEXTO_REFERENCIA);

    let nuevoContenido;

    if (hayReferencias && !hayTopicoReferencias) {
        // Agregar el topico
        nuevoContenido = `${contenido}\n\n\n${TEXTO_REFERENCIA}`;

    } else if (!hayReferencias && hayTopicoReferencias) {
        // Sacar el topico
        nuevoContenido = contenido.replace(TEXTO_REFERENCIA, "");

    }

    await app.vault.modify(tArchivo, nuevoContenido);

} catch (e) {
    const mensaje = "Hubo un error al modificar la referencia";
    
    console.log(mensaje);
    console.log(e);
    new Notice(mensaje);
}

async function agregarReferencia(tArchivo, numReferencia) {
    let referenciasFinal;

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        if (!frontmatter["referencias"]) {
            frontmatter["referencias"] = [ `${numReferencia}` ];
        } else {
            frontmatter["referencias"].push(`${numReferencia}`);
        }

        referenciasFinal = frontmatter["referencias"];
    });

    return referenciasFinal;
}

async function sacarReferencia(tArchivo, numReferencia) {
    let referenciasFinal;

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        if (!frontmatter["referencias"]) {
            const mensaje = "No hay referencias en este archivo";
            console.log(mensaje);
            new Notice(mensaje);
        } else {
            let index = frontmatter["referencias"].indexOf(`${numReferencia}`);
            frontmatter["referencias"].splice(index, 1);
        }

        referenciasFinal = frontmatter["referencias"];
    });

    return referenciasFinal;
}
_%>