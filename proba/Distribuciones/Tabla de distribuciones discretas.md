---
dia: 2023-01-22
materia: proba
distribucion: Discreta
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
### Distribución de Bernoulli
---
![[Distribución de Bernoulli#Definición]]

### Distribución Binomial
---
![[Distribución Binomial#Definición]]

### Distribución Geométrica
---
![[Distribución Geométrica#Definición]]

### Distribución de Pascal
---
![[Distribución de Pascal#Definición]]

### Distribución de Poisson
---
![[Distribución de Poisson#Definición]]


### Distribución Hipergeométrica
---
![[Distribución Hipergeométrica#Definición]]