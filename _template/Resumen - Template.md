<%* 
	let titulo = tp.file.title;

	let libro = "", capitulo = "";
	if (titulo.startsWith("Untitle")) {
		libro = await tp.system.prompt("Nombre del libro: ");
		capitulo = await tp.system.prompt("Nombre del capitulo:");
		titulo = libro + " - " + capitulo;
		await tp.file.rename(titulo);
	} 
	[libro, capitulo] = titulo.split(" - ");
	tR += "---";
%>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
tipo: resumen
<%* tR += "libro: " + libro; %>
<%* tR += "capitulo: " + capitulo; %>
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

