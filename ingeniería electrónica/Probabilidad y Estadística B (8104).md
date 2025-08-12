---
plan: 2009
tags:
  - carrera/ingeniería-electrónica/proba
  - facultad/materia-equivalente
correlativas:
  - tipo: Equivalente
    materia: Análisis Matemático 2 A
  - tipo: Equivalente
    materia: Álgebra 2 A
codigo: 8104
equivalencia: "[[ingeniería en informática/proba/Probabilidad y estadística B (6109).md]]"
nombreMateria: Probabilidad y Estadística B
nombreReducido: 
pathCarrera: "[[ingeniería electrónica/Ingeniería electrónica.md]]"
nombreCarrera: Ingeniería electrónica
materiaEquivalente:
  nombre: Probabilidad y estadística B
  carrera: Ingeniería en informática
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