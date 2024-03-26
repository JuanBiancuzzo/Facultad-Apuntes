Lista de todas las materias dividido por los cuatrimestres que los hice

```dataviewjs
function nombreCuatrimestre(cuatrimestre) {
	let pagina = cuatrimestre.rows[0];
	let [anio, cuatri] = pagina.cuatri.split("C");
	cuatri += (parseInt(cuatri) == 1) ? "er" : "do";
	return cuatri + " cuatrimestre del 20" + anio;
}

function nombreMateria(materia) {
	return materia.file.name.replace(`(${materia.codigo})`, "").trim();
}

let materiasXcuatri = dv.pages("#materia")
	.groupBy(pagina => {
		return pagina.cuatri
	}).sort(cuatrimestre => {
		let [anio, cuatri] = cuatrimestre.key.split("C");
		anio = parseInt(anio);
		cuatri = parseInt(cuatri) - 1;
		return anio + 0.5 * cuatri;
	}, 'desc');

for (let cuatri of materiasXcuatri) {
	dv.table([nombreCuatrimestre(cuatri), "Código", "Estado", "Plan"], cuatri.rows.map(materia => {
		let nombre = nombreMateria(materia);
		let path = materia.file.path;
		return [
			nombre + " [[" + path + "|?]]",
			materia.codigo,
			materia.estado,
			materia.plan
		]
	}));
	dv.el("br", "");
}
```