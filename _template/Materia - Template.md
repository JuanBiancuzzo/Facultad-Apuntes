<%* 
	const dv = this.app.plugins.plugins.dataview.api;
	const preguntar = tp.user.preguntar();

	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	try {
		let nombreMateria = await preguntar.prompt(
			tp, "Materia:", "No se ingresó nombre de la materia"
		);
		
		let codigo = await preguntar.prompt(
			tp, `El código de ${nombreMateria} es:`, "No se ingresó el código de la materia"
		);

		let reducido = await preguntar.prompt(
			tp, `Nombre de la materia ${nombreMateria} reducido:`, "No se ingresó el nombre reducido"
		);

		let anios = [];
		for (let anio = tp.file.creation_date("YY"); anio >= 19; anio--) {
			anios.push(anio);
		}
		
		let anio = await preguntar.suggester(
			tp, terminacion => `Año 20${terminacion}`, 
			anios, "En que año se esta cursando esta materia",
			"No se ingresó el año en el que se hizo/hace la materia"
		);

		let cuatrimestre = await preguntar.suggester(
			tp, ["Primer cuatrimestre", "Segundo cuatrimestre"], ["C1", "C2"]
		);

		let plan = await preguntar.suggester(
			tp, plan => `Plan ${plan}`, 
			[2023, 2009, 1986], "Cuál es el plan de la materia",
			"No se ingresó el plan de la materia"
		);

		tR += "---\n";
		tR += `cuatri: ${anio}${cuatrimestre}\n`;
		tR += `codigo: ${codigo}\n`;
		tR += `plan: ${plan}\n`;
		tR += `estado: no-empezado\n`;
		tR += "tags: materia\n";
		tR += "---\n";

		await app.vault.createFolder(reducido);
		await app.vault.rename(tArchivo, `${reducido}/${nombreMateria} (${codigo}).md`);

	} catch ({ name: _, message: mensaje }) {
        return await tp.user.eliminar().eliminar(tp, tArchivo, mensaje);
    }
_%>
### Apuntes
---
