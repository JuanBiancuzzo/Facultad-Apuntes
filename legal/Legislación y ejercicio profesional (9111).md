---
cuatri: 24C1
codigo: "9111"
plan: 2009
estado: Falta terminar los últimos capítulos
tags:
  - materia/ingeniería-informática-y-electrónica
etapa: empezado
---
# Apuntes 
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarMateria", { materia: dv.current() });
```
# Documentos
---
Se tiene varios documentos utilizados a lo largo de la cursada, estos siendo

```dataviewjs
let datos = dv.pages(`#legal/documento`)
	.sort(documento => -dv.pages(`"${documento.file.folder}"`).length)
	.map(archivo => ({
        path: archivo.file.path,
        nombre: archivo.file.name,
        largo: false,
        descripcionSimple: true,
        descripcion: ""
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: [{ elementos: datos }] });
```