---
dia: 2023-11-28
materia: bdd
capitulo: 1
---
### Definición
---
Una base de datos es una colección ordenada de [[Dato|datos]] administrada por un [[Sistema|sistema]] de gestión

```dataviewjs
let materia = "bdd";

let unidades = dv.pages(`( "${materia}" and -#materia )`)
	.where(pagina => pagina.capitulo)
	.groupBy(pagina => parseInt(pagina.capitulo, 10))
	.sort(capitulo => parseInt(capitulo.rows[0].capitulo, 10));
	
for (let unidad of unidades) {	
	
	dv.table([conseguir_nombre(unidad)], (unidad.rows.file).map(pagina => {
		return [`[[${pagina.path}|${pagina.name}]]`];
	}));
	dv.el("br", "");
}

function conseguir_nombre(unidad) {
	let relative_path = unidad.rows[0].file.folder;
	let spliteado = relative_path.split("/");
	return spliteado[spliteado.length - 1];
}
```

![[Base de datos.png]]

#### Transformación del [[Modelado de dominio|modelo de dominio]] a la base de datos
---
![[Transformación de un objeto del modelo de dominio a una base de datos relacional.png]]

##### Atributos multivaluados
---
![[Transformación atributos multivaluados a una base de datos relacional.png]]

##### Relaciones 1 a 1
---
![[Transformación relación 1 a 1 a una base de datos relacional.png]]

##### Relaciones 1 a 0..*
---
![[Transformación relación 1 a 0..muchos a una base de datos relacional.png]]

##### Relación 0..* a 0..*
---
![[Transformación relación 0..muchos a 0..muchos a una base de datos relacional.png]]

##### Recursivas 0..1 a 0..1
---
![[Transformación recursivas 0..1 a 0..1 a una base de datos relacional.png]]

##### Recursivas 0..1 a 0..*
---
![[Transformación recursivas 0..1 a 0..muchos a una base de datos relacional.png]]

##### Recursividad muchos a muchos
---
![[Transformación recursivas muchos a muchos a una base de datos relacional.png]]

##### Clases asociativas
---
![[Transformación clases asociativas a una base de datos relacional.png]]

##### Herencia
---
![[Transformación herencia a una base de datos relacional.png]]

