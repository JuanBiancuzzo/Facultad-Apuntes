<%* 
	const { referencias } = tp.user.constantes().SECCIONES;
	tR += `${"#".repeat(referencias.nivel)} ${referencias.texto}` 
%>
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```