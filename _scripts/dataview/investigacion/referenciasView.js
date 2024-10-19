
const { archivo } = input;

if (!archivo) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

const citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/investigacion/citaView.js");

let referenciasArchivo = archivo.referencias ? archivo.referencias : [];
if (archivo.numReferencia) 
	referenciasArchivo.push(archivo.numReferencia);

referenciasArchivo = dv.array(referenciasArchivo.map(ref => parseInt(ref, 10)))
	.distinct(ref => ref);

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
	.filter(ref => referenciasArchivo.indexOf(ref.num) >= 0)
	.sort(ref => ref.num);

for (let { archivo, num } of referencias) {
    dv.el("p", citaView.mostrarCita(archivo, num));
}