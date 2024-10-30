const citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/investigacion/citaView.js");

const { materia } = input;
const carreras = dv.pages("#carrera");
const carreraPrincipal = dv.page("Ingeniería informática y electrónica");

if (!materia) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let carrera = carreras.find(carrera => {
    return carrera.file.folder == materia.file.folder.split("/")[0];
});
if (!carrera) carrera = carreraPrincipal;

console.log(carrera);

let tag = `materia/${carrera.file.name.toLowerCase().replaceAll(" ", "-")}`;

console.log(tag);

let paginas = dv.pages(`#${tag} and -#referencia`)
    .flatMap(pagina => pagina.referencias);
let paginasReferencias = dv.pages(`#${tag} and #referencia`)
    .flatMap(referencia => {
        let resultado = [referencia.numReferencia];
        if (referencia.tipoCita == "Libro" && referencia.capitulos) {
            for (let { numReferencia, ..._ } of referencia.capitulos) {
                resultado.push(numReferencia);
            } 
        }

        return resultado;
    });

let referenciasIndice = materia.referencias ? materia.referencias : [];
let indiceArray = dv.array(materia.tags.some(tag => tag.startsWith("nota")) ? referenciasIndice : []);

let referenciasTema = paginas.concat(paginasReferencias).concat(indiceArray)
    .map(ref => parseInt(ref, 10))
    .sort(ref => ref)
    .values;

if (referenciasTema.length > 0) {
    let referencias = dv.pages('#referencia')
        .flatMap(ref => {
            let resultado = [ { archivo: ref, num: ref.numReferencia } ]
            if (ref.tipoCita != "Libro" || !ref.capitulos)
                return resultado;
            for (let { numReferencia, capitulo: _ } of ref.capitulos) {			
                resultado.push({ archivo: ref, num: numReferencia });
            }
            return resultado;
        })
        .filter(ref => referenciasTema.indexOf(ref.num) >= 0)
        .sort(ref => ref.num);

    let resultado = "";
    for (let { archivo, num } of referencias) {
        resultado += citaView.mostrarCita(archivo, num);
    }

    dv.el("div", resultado);
} else {
    dv.el("p", "No hay referencias para este tema");
}