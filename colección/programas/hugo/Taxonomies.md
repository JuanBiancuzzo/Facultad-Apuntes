---
dia: 2024-07-19
etapa: terminado
referencias:
  - "177"
tags:
  - nota/investigacion
  - investigación/herramientas/hugo
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Taxonomies en [[investig[[colección/programas/hugo/Índice|Índice]]aciones o categorías que puede tener un [[Single Page|archivo]], las que Hugo tiene por default son las `tags` y `categories`, pero se puede poner custom taxonomies, poniendo su nombre y valor en la [[Frontmatter|metadata]] y describiéndolo en el archivo de configuración toml

```toml
[taxonomies]
tag = "tags"
category = "categories"
customSingular = "customPlural"
```

Notemos que si queremos mantener las `tags` y `categories`, tenemos que agregarlas también



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```