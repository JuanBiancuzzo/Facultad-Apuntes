<%* 
	tR += "---\n";
	
	let carpeta = tp.file.folder(true);
	let cuerpo_legal = carpeta.split("/")[2];
	tR += `cuerpo_legal: ${cuerpo_legal}\n`;
	
	let num_articulo = tp.file.title.split(" ")[1];
	tR += `num_articulo: ${parseInt(num_articulo)}\n`;

	tR += "---\n";
%>
### Artículo
---
"<% tp.file.cursor() %>"

### Interpretación
---
