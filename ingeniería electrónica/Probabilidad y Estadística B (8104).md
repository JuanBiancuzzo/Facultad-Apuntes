---
plan: 2009
tags:
  - carrera/ingeniería-electrónica/proba
  - facultad/materia
correlativas:
  - "[[ingeniería electrónica/Análisis Matemático 2 A (8101).md|Análisis Matemático 2 A]]"
  - "[[ingeniería electrónica/Álgebra 2 A (8102).md|Álgebra 2 A]]"
codigo: 8104
equivalencia: "[[Probabilidad y estadística B (6109)|Probabilidad y estadística B (6109)]]"
nombreMateria: Probabilidad y Estadística B
nombreReducido:
---
# Apuntes
---
```dataviewjs
	await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```
# Distribuciones
---
Se tiene $3$ tipos de distribuciones

```dataviewjs
let datos = dv.array([
    	{ nombre: "Discretas", tag: "distribucion/discreta" },
    	{ nombre: "Continuas", tag: "distribucion/continua" },
    	{ nombre: "Multivariables", tag: "distribucion/multivariada" },
    ]).map(({ nombre, tag }) => ({
        elementos: dv.pages(`#${tag}`).map(archivo => ({
            path: archivo.file.path,
            nombre: archivo.file.name,
            largo: false,
            descripcionSimple: true,
            descripcion: ""
        })),
        mostrarTitulo: () => {
            dv.el("div", `<h3> ${nombre} </h3> <hr>`);
        }
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: datos });
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```