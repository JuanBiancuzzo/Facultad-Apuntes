<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nombre:");
		await tp.file.rename(titulo);
	}
	tR += "---";
%>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
materia: <% tp.file.folder() %>
capitulo: <% await tp.system.prompt("Capitulo: ") %>
---
### Definición
---
