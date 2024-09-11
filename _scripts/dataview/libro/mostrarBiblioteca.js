const { tag } = input;

console.log(dv.pages(`#${tag}`));
dv.table(["Nombre"], dv.pages(`#${tag}`).map(a => [a.file.name]));