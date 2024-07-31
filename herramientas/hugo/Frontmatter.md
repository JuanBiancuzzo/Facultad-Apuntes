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
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
Es información sobre nuestro contenido, que se suele escribir en uno de estos 3 "lenguajes":
* YAML
* TOML
* JSON



### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```