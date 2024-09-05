const { indice } = input;

let tag = indice.file.folder.trim()
    .split(" ")
    .filter(token => token.trim() != "-" && token.trim() != "")
    .join("-");

let archivos = dv.pages(`#${tag} and -#índice`)
    .sort(archivo => {
        let referencias = archivo.referencias;
        if (!referencias || referencias.length == 0)
            return 0;

        referencias = referencias.map(ref => parseInt(ref, 10));
        let refMinimo = referencias[0];
        for (let i = 1; i < referencias.length; i++) {
            if (referencias[i] < refMinimo)
                refMinimo = referencias[i];
        }
        return refMinimo;
    });

dv.table(["Archivo", "Estado", "Referencia"], archivos.flatMap(archivo => {
    let titulo = `[[${archivo.file.path}|${archivo.file.name}]]`;
    let referencias = archivo.referencias;

    let textoReferencias = "Este archivo no tiene referencias";
    if (referencias && referencias.length > 0) {
        textoReferencias = referencias
            .map(referencia => `[${referencia}]`)
            .join(" ");
    }

    let etapa = archivo.etapa;
    let textoEtapa = "No esta empezado";
    switch (etapa) {
        case "empezado": textoEtapa = "Esta empezado"; break;
        case "ampliar": textoEtapa = "Necesita ampliarse"; break;
        case "terminado": textoEtapa = "Esta terminado"; break;
    }

    return [[titulo, textoEtapa, textoReferencias]];
}));