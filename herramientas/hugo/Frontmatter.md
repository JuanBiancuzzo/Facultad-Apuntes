---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "172"
aliases:
  - Metadata
tags:
  - nota/investigacion
  - herramientas/hugo
orden: 77
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Es [[algo 1/Introducción a la programación/Información.md|información]] sobre nuestro contenido, que se suele escribir en uno de estos 3 "lenguajes":
* YAML
* TOML
* JSON


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```