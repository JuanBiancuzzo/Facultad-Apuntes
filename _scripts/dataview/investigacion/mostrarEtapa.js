const { etapa } = input;

if (!etapa) {
	dv.el("p", ` > [!bug]+\n > No esta cargando - Recargar`);
    return;
}

let estadoCallout = "missing";
let texto = "Hubo un error, el estado todavia no se agregó";
switch (etapa) {
	case "sin-empezar": estadoCallout = "info"; 
		texto = "Esta nota todavía no se inició";
		break;
	case "empezado": estadoCallout = "help"; 
		texto = "Todavía no esta terminado, puede modificarse";
		break;
	case "ampliar": estadoCallout = "hint"; 
		texto = "Se puede ampliar el contenido";
		break;
	case "terminado": estadoCallout = "done"; 
		texto = "Esta nota esta completa";
		break;
}

dv.el("p", ` > [!${estadoCallout}]+ Estado de la nota\n > ${texto}`);