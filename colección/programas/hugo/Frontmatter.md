---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "172"
aliases:
  - Metadata
tags:
  - investigación/herramientas/hugo
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es [[Información|información]] sobre nuestro contenido, que se suele escribir en uno de estos 3 "lenguajes":
* YAML
* TOML
* JSON


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```