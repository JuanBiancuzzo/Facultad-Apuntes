---
num_título: 3
título: "Dominio"
listado:
 - "[[Libro Cuarto, Derechos Reales|Libro Cuarto]]"
---
### Capítulos
---
```dataviewjs
	let grupo = "Capítulo";
	let categoria = grupo.toLowerCase();
	let num_categoria = `num_${categoria}`;
	
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Art. "))
				return false;
			return pagina[num_categoria];
		})
		.sort(pagina => parseInt(pagina[num_categoria]));

	dv.table([grupo, "Artículos"], paginas.map(pagina => {
		let nombre = pagina.file.name.split(", ");
		nombre = nombre.slice(-2)[0];
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (!pagina.file.name.startsWith("Art. "))
					return false;
				return pagina.num_articulo;
			}).sort(pagina => parseInt(pagina.num_articulo, 10));

		nombre = `${nombre}, ${pagina[categoria]} [[${pagina.file.path}|?]]`;
		return [nombre, articulos.map(articulo => {
			let nombre_final = `Art. ${articulo.num_articulo}`;
			if (articulo.art_nombre)
				nombre_final += `, ${articulo.art_nombre}`;
			nombre_final += ` [[${articulo.file.path}|?]]`;
			return nombre_final;
		})];
	}));
```

### Artículos
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = `"${pagina_actual.file.folder}"`;
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			return pagina.file.name != pagina_actual.file.name && pagina.num_articulo;
		})
		.sort(pagina => parseInt(pagina.num_articulo, 10));

	dv.table(["Artículo", "Contenido"], paginas.flatMap(pagina => {
		let articulo = `Art. ${pagina.num_articulo}`;
		if (pagina.art_nombre)
			articulo += `, ${pagina.art_nombre}`;
		articulo += `[[${pagina.file.path}|?]]`;
		let contenido = pagina.art;

		let output = [[articulo, contenido]];

		if (pagina.incisos) { 
			output.push(["", pagina.incisos]);
		}
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```

### Interpretación
---
El dominio es el [[Libro Cuarto, Derechos Reales|derecho real]] en virtud del cual una cosa se encuentra sometida a la voluntad y a la acción de una [[Persona humana|persona]]

El dominio puede ser perfecto o imperfecto

#### Dominio perfecto
---
![[Art. 1941 del CC y CN, Dominio perfecto#Artículo]]

#### Dominio imperfecto
---
![[Art. 1946 del CC y CN, Dominio imperfecto#Artículo]]

#### Caracteres del dominio
---
Estas caracteres del dominio están dado en le [[Libro Cuarto, Título 3, Capítulo 1, Disposiciones generales|Capítulo 1 de este título]] 

##### Perpetuidad
---
![[Art. 1942 del CC y CN, Perpetuidad#Artículo]]

##### Exclusividad
---
![[Art. 1943 del CC y CN, Exclusividad#Artículo]]

##### Facultad de exclusión
---
![[Art. 1944 del CC y CN, Facultad de exclusión#Artículo]]

##### Extensión
---
![[Art. 1945 del CC y CN, Extensión#Artículo]]

#### Modos especiales de adquisición del dominio
---
1. Apropiación
2. Adquisición de un tesoro
3. Régimen de cosas perdidas
4. Transformación y accesión de cosas muebles
5. Accesión de cosas inmuebles
	* Aluvión
	* Avulsión
	* Construcción, siembra y plantación
	* Invasión de inmueble colindante

#### Límites al dominio
---
![[Libro Cuarto, Título 3, Capítulo 4, Límites al dominio#Artículos]]

##### Expropiación
---
Esta previsto en la [[Constitución de la Nación, Ley 24.430|Constitución Nacional]] en el [[Art. 17 de la Constitución Nacional|art. 17]] ![[Art. 17 de la Constitución Nacional#Artículo]]
![[Art. 17 de la Constitución Nacional#Interpretación]]