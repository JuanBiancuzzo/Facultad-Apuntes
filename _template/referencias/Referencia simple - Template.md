<%*
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	
    const { DATOS_REFERENCIA, DATOS_ARCHIVOS, TAGS } = tp.user.constantes();
    let seguidorRef = tp.user.seguidorReferencias().new(dv);
    let numReferencia = seguidorRef.conseguirReferencia();

	let tipoCita = tp.file.title.split(" ").first().trim();

    let datos = await tp.user.referencia().citar(tp, tipoCita, seguidorRef);
    datos[DATOS_ARCHIVOS.dia] = tp.file.creation_date("YYYY-MM-DD");
    datos[DATOS_REFERENCIA.tipoCita] = tipoCita;
    datos[DATOS_REFERENCIA.numReferencia] = numReferencia;
    datos[DATOS_ARCHIVOS.tags] = [`${TAGS.referencias}/${tipoCita.toLowerCase()}`];

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml(datos);
    tR += "---\n";

    await tp.file.rename(`${numReferencia} - ${tipoCita}`);
_%>