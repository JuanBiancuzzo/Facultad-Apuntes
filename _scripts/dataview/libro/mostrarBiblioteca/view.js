let tag = "libro";
let libros = dv.pages(`#biblioteca/${tag}`);


dv.el("div", '<button class="dropdown dropbtn">Dropdown</button> <div id="content"> <a href="#">Link 1</a> <a href="#">Link 2</a> <a href="#">Link 3</a> </div>')
dv.el("br", " ")

dv.table(["Nombre"], libros.map(a => [a.file.name]));