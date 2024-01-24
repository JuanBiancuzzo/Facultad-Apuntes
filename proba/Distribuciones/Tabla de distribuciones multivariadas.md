---
dia: 2023-01-22
materia: proba
distribucion: Multivariada
---
#### Índice
---
```dataviewjs
	let paginaActual = dv.current();
	let carpeta = `"${paginaActual.file.folder}"`;
	const distribuciones = dv.pages(carpeta)
		.where(pagina => {
			if (!pagina.distribucion)
				return false;
			if (pagina.file.name == paginaActual.file.name)
				return false;
			return pagina.distribucion == paginaActual.distribucion;
		});
	
	dv.table(["Distribución"], distribuciones.map(distribucion => {
		let path = distribucion.file.path;
		let nombre = distribucion.file.name;
		return [`${nombre} [[${path}|?]]`];
	}));
```

## Distribuciones
---

### Distribución Multinomial
---
![[Distribución Multinomial#Definición]]


### Distribución Normal bivariada
---
![[Distribución Normal bivariada#Definición]]


### Distribución Normal multivariada
---
![[Distribución normal multivariada#Definición]]