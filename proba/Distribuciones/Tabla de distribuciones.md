---
dia: 2023-01-22
materia: proba
---
#### Índice
---
```dataviewjs
	function conseguir_nombre(unidad) {
		return unidad.rows[0].distribucion;
	}

	let paginaActual = dv.current();
	let carpeta = `"${paginaActual.file.folder}"`;
	const distribuciones = dv.pages(carpeta)
		.where(pagina => {
			if (!pagina.distribucion)
				return false;
			return pagina.file.name != paginaActual.file.name
		})
		.groupBy(pagina => pagina.distribucion);

	for (let distribucion of distribuciones) {		
		dv.table([conseguir_nombre(distribucion)], (distribucion.rows).map(pagina => {
			let path = pagina.file.path;
			let nombre = pagina.file.name;
			return [`${nombre} [[${path}|?]]`];
		}));

		dv.el("br", "");
	}
```

### Distribuciones
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

### Distribución Uniforme
---
![[Distribución Uniforme#Definición]]

### Distribución exponencial
---
![[Distribución Exponencial#Definición]]

### Distribución Gamma
---
![[Distribución Gamma#Definición]]

### Distribución normal
---
![[Distribución normal#Definición]]

### Distribución Chi cuadrado
---
![[Distribución Chi cuadrado#Definición]]

### Distribución t-Student
---
![[Distribución t-Student#Definición]]

### Distribución Weibull
---
![[Distribución Weibull#Definición]]

### Distribución de Rayleigh
---
![[Distribución de Rayleight#Definición]]

### Distribución de Pareto
---
![[Distribución de Pareto#Definición]]

### Distribución Beta
---
![[Distribución Beta#Definición]]

### Distribución de Cauchy
---
![[Distribución de Cauchy#Definición]]

### Distribución Multinomial
---
![[Distribución Multinomial#Definición]]


### Distribución Normal bivariada
---
![[Distribución Normal bivariada#Definición]]


### Distribución Normal multivariada
---
![[Distribución normal multivariada#Definición]]
