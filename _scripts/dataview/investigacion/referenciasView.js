const { archivo } = input;

if (!archivo) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

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

await dv.view("_scripts/dataview/mostrarReferencia", { referencias: referencias });