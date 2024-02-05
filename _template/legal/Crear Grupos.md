<%*
	let carpeta_actual = tp.file.folder(true);	
	let carpeta_relativa = carpeta_actual.split("/").slice(0, 3).join("/");
	let conjunto = obtenerGruposSobreCarpetas(carpeta_actual.split("/").slice(3));

	if (conjunto.length == 0)
		return "";

	let archivos = this.app.vault.getMarkdownFiles().filter(archivo => {
		if (!archivo.path.startsWith(carpeta_relativa))
			return false;
		return !archivo.basename.startsWith("Art. ");
	});

	let cuerpo_legal = carpeta_actual.split("/")[2];
	let grupo_parcial = obtenerGrupoParcial(cuerpo_legal, conjunto[0][0]);

	let nombre_acumulado = "";

	for (let i in conjunto) {
		i = parseInt(i, 10);
		let [parte, carpeta] = conjunto[i];
		
		carpeta_relativa += `/${carpeta}`;
		nombre_acumulado += carpeta;

		let [siguienteParte, siguienteCarpeta] = [undefined, undefined];
		if (i + 1 < conjunto.length) {
			[siguienteParte, siguienteCarpeta] = conjunto[i + 1];
		} else {
			siguienteParte = (i + 1 < grupo_parcial.length) ? grupo_parcial[i + 1] : "None";
			siguienteCarpeta = "";
		}

		let archivo = archivos.find(archivo => {
			let path = archivo.path.replaceAll(`/${archivo.name}`);
			if (!path.includes(carpeta_relativa))
				return false;
			if (archivo.basename.startsWith("Art."))
				return false;
			return !path.includes(`${carpeta_relativa}/`);
		});

		if (archivo !== undefined) {
			nombre_acumulado += ", ";
			continue;
		}

		await tp.file.create_new(
			await tp.file.find_tfile(`legal/Grupo - Template`), 
			`${parte}-${siguienteParte}-${nombre_acumulado}`, 
			false, 
			await this.app.vault.getAbstractFileByPath(carpeta_relativa)
		);
		nombre_acumulado += ", ";
	}

	function obtenerGruposSobreCarpetas(carpetas) {
		return carpetas.map(carpeta => {
			let tokens = carpeta.trim().split(" ");
			let parte = undefined;
			let hay_numero = false;
			
			for (let token of tokens) {
				if (esNumero(token)) {
					hay_numero = true;
				} else {
					parte = token;
				}
			}
			if (!hay_numero)
				parte = tokens[0];
			return [parte, carpeta];
		});
	}

	function esNumero(token) {
		token = token.trim().toLowerCase();
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
		if (nombres_numeros.some(nombre => token.includes(nombre))) 
			return true;
		return !isNaN(parseInt(token, 10));
	}

	function obtenerGrupoParcial(cuerpoLegal, grupoInicial) {
		const dv = this.app.plugins.plugins["dataview"].api;
		let archivo_cabecera = dv.pages(`"legal/Articulos/${cuerpoLegal}"`)
			.find(pagina => pagina.file.name.startsWith(`${cuerpoLegal}, Ley `));
		let grupo_completo = archivo_cabecera.grupos;
		return grupo_completo.slice(grupo_completo.findIndex(grupo => {
			return grupo == grupoInicial;
		}));
	}
%>