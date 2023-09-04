<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nombre del capitulo:");
		await tp.file.rename(titulo);
	}
	await tp.file.move("/referencias/" + titulo);
	tR += "---";
%>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
tipo: resumen
<%*
	let libro = await tp.system.prompt("Nombre del libro: ");
	tR += "libro: " + libro;
%>
<%* 
	contador = 1;
	let autor = await tp.system.prompt("Autor: ");
	let autores = "autor: [\n\t" + autor;
	while (autor !== null && autor !== "") {
		contador++;
		autor = await tp.system.prompt("Autor n°" + contador + ": ");
		if (autor !== null && autor !== "") 
			autores += ",\n\t" + autor;
	}
	tR += autores + ",\n]";
%>
<%* tR += "---"; %>
### Definición
---
<% tp.file.cursor() %>
