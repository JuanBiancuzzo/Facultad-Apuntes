let { indice } = input;

let carpetaSuperTema = indice.file.folder.split("/");
carpetaSuperTema.pop();
carpetaSuperTema = carpetaSuperTema.join("/");

let posiblesSupertema = dv.pages(`"${carpetaSuperTema}" and #índice`)
    .filter(ind => ind.file.folder == carpetaSuperTema);

if (posiblesSupertema.length == 1) {
    let superTema = posiblesSupertema[0];
    let nombre = superTema.file.folder.split("/").pop();
    nombre = `${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`;

    const texto = `Se tiene como super Tema a [[${superTema.file.path}|${nombre}]]`;
    dv.paragraph(` > [!tldr]- Supertema\n > ${texto}`);
}