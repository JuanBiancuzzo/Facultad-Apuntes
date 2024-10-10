function nombreCuatrimestre(cuatrimestre) {
	let [anio, cuatri] = cuatrimestre.split("C");
	cuatri += (parseInt(cuatri) == 1) ? "er" : "do";
	return cuatri + " cuatrimestre del 20" + anio;
}

function nombreMateria(materia) {
	return materia.file.name.replace(`(${materia.codigo})`, "").trim();
}

let materias = dv.pages("#materia")
    .map(materia => ({ 
        path: materia.file.path, 
        nombre: nombreMateria(materia), 
        etapa: materia.etapa, 
        codigo: materia.codigo, 
        plan: materia.plan, 
        descripcion: materia.estado, 
        cuatri: materia.cuatri 
    }))
    .sort(({ nombre, ..._ }) => nombre)
    .groupBy(({ cuatri, ..._ }) => cuatri)
    .sort(cuatrimestre => {
		let [anio, cuatri] = cuatrimestre.key.split("C");
		anio = parseInt(anio);
		cuatri = parseInt(cuatri) - 1;
		return anio + 0.5 * cuatri;
	}, 'desc')
    .map(({ key, rows }) => ({
        elementos: rows.map(({ path, nombre, etapa, codigo, plan, descripcion, cuatri }) => ({
            path: path,
            nombre: nombre,
            subnombre: `Plan ${plan} - ${codigo}`,
            largo: false,
            etapa: etapa,
            descripcionSimple: true,
            descripcion: descripcion,
        })),
        mostrarTitulo: () => {
            dv.el("div", `<h2> ${nombreCuatrimestre(key)} </h2> <hr>`);
        }
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: materias, defaultVacio: "No hay materias" });