let tag = "libro";
let libros = dv.pages(`#biblioteca/${tag}`);


dv.el("div", `<button popovertarget="my-popover"> Filtro </button> <div id="my-popover" popover> <a> Link 1 </a> <a> Link 2 </a> </div>`);
dv.el("br", " ")

dv.table(["Nombre"], libros.map(a => [a.file.name]));