<%* 
	const lenguajes = [
		["SQL", "SQL"], 
		["C", "c"], 
		["C++", "c++"],
		["Bash", "bash"],
		["Dataview", "dataview"],
		["Dataview Js", "dataviewjs"],
		["Tikz", "tikz"],
	];
	let lenguaje = await tp.system.suggester(
		([lenguaje, _]) => lenguaje, 
		lenguajes, 
		false,
		"Que lenguaje desea insertar");
	if (lenguaje) {
		lenguaje = lenguaje[1];
		const sep = "```"
		tR += `${sep}${lenguaje}\n\n${sep}`;
	} else {
		new Notice("No se seleccionó ningún lenguaje");
	}
%>