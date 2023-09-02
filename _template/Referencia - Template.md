<%* 
	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await tp.system.prompt("Nombre:");
		await tp.file.rename(titulo);
	}
	await tp.file.move("/referencias/" + titulo);
	tR += "---";
%>
dia: <% tp.file.creation_date("YYYY-MM-DD") %>
<%* 
	let link = await tp.system.prompt("Link: ");
	tR += "referencia: [\n\t" + link + ",\n]";
%>
<%* 
	let autor = await tp.system.prompt("Autor: ");
	tR += "autor: [\n\t" + autor + ",\n]";
%>
<%* tR += "---"; %>
### Definición
---
<% tp.file.cursor() %>
