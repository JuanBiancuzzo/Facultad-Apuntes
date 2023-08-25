	Lista de todas las materias dividido por los cuatrimestres que los hice

```dataviewjs
function nombre_cuatrimestre(cuatrimestre) {
	let pagina = cuatrimestre.rows[0];
	let [anio, cuatri] = pagina.cuatri.split("C");
	cuatri += (parseInt(cuatri) == 1) ? "er" : "do";
	return cuatri + " cuatrimestre del 20" + anio;
}

let materiasXcuatri = dv.pages()
	.where(pagina => {
		return pagina.cuatri;
	}).groupBy(pagina => {
		return pagina.cuatri
	}).sort(cuatrimestre => {
		let pagina = cuatrimestre.rows[0];
		let [anio, cuatri] = pagina.cuatri.split("C");
		anio = parseInt(anio);
		cuatri = parseInt(cuatri) - 1;
		return anio + 0.5 * cuatri;
	}, 'desc');

for (let cuatri of materiasXcuatri) {
	dv.table([nombre_cuatrimestre(cuatri), "Estado"], cuatri.rows.map(materia => {
		let nombre = materia.file.name;
		let path = materia.file.path;
		return [
			nombre + " [[" + path + "|?]]",
			materia.estado
		]
	}));
}
```