---
dia: 2024-07-19
etapa: empezado
referencias:
  - "174"
tags:
  - nota/investigacion
  - investigación/herramientas/hugo
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los shortcodes en [[investigación/herramientas/hugo/Índice|Índice]] son como función la cual le podes pasar parámetros, pero estas funciones devuelven código HTML para insertar en el contenido. Su sintaxis para llamarlas es
```
{{< nombre-shortcode param1 ... >}}
```

Hugo ya tiene muchos shortcode que se pueden encontrar en la [documentación](https://gohugo.io/templates/shortcode/) y la forma de crearlo es la siguiente


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```