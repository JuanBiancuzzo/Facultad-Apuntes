const path = require("path");
const constantes = require(path.join(app.vault.adapter.basePath, '_scripts/templater/constantes'))

dv.header(1, "Carreras");
dv.el("hr", "");
await dv.view("_scripts/dataview/carrera/carreras");
dv.el("br", "");

dv.header(1, "Temas de investigación");
dv.el("hr", "");
await dv.view("_scripts/dataview/investigacion/temasDeInvestigacion");
dv.el("br", "");

dv.header(1, "Proyectos");
dv.el("hr", "");
await dv.view("_scripts/dataview/proyecto/proyectos");
dv.el("br", "");

dv.header(1, "Cursos");
dv.el("hr", "");
await dv.view("_scripts/dataview/curso/cursos");
dv.el("br", "");

dv.header(1, "Colecciones");
dv.el("hr", "");
await dv.view("_scripts/dataview/coleccion/colecciones");
dv.el("br", "");