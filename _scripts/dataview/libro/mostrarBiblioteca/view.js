let tag = "libro";
let libros = dv.pages(`#biblioteca/${tag}`);

dv.table(["Nombre"], libros.map(a => [a.file.name]));