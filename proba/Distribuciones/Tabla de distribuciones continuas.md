---
dia: 2023-01-22
materia: proba
distribucion: Continua
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