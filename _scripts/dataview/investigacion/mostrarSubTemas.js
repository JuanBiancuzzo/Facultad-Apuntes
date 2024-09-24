let { indice } = input;

let nivelActual = indice.file.folder.split("/").length;

let subTemas = dv.pages(`"${indice.file.folder}" and #índice`)
    .filter(ind => ind.file.folder.split("/").length == nivelActual + 1);

if (subTemas.length > 0) {
    let texto = "Se tiene los siguientes subtemas:\n";

    texto += subTemas.map(subTema => {
        const path = subTema.file.path;
        let nombre = subTema.file.folder.split("/").pop();
        nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`;
        
        return ` >  * ${nombre} [[${path}|?]]`;
    }).join("\n");

    dv.paragraph(` > [!example]- Subtemas\n > ${texto}`);
}