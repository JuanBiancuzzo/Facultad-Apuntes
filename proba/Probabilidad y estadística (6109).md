---
cuatri: 22C2
estado: Terminado
plan: "1986"
codigo: "6109"
tags:
  - materia/ingenieria-informatica-electronica
etapa: terminado
correlativas:
  - "6108"
---
# Apuntes 
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
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