const { tag } = input;

console.log(dv.pages(`#biblioteca/${tag}`));
dv.table(["Nombre"], dv.pages(`#biblioteca/${tag}`).map(a => [a.file.name]));