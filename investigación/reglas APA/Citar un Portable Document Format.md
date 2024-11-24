---
dia: 2024-07-08
etapa: terminado
referencias:
  - "15"
aliases:
  - Citar un PDF
tags:
  - nota/investigacion
  - investigación/reglas-APA
orden: 101
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un PDF es un formato de archivo de texto que es comúnmente utilizado para leer desde reportes y libros hasta anotaciones de clase que son disponibilizadas por profesores en [[World Wide Web|páginas web]]<sup><a href="#ref-15" style="color: inherit; text-decoration: none;">[15]</a></sup> 

Depende del contenido del PDF que quieres citar. Por ejemplo, el PDF podría ser una [[Citar tesis o disertaciones|tesis o disertación]], un [[Citar informes o reportes|informe o reporte]], un [[Citar revista|artículo de revista]] u otro tipo de recurso. Si no se encuentra una categoría que se adapte mejor, se puede tomar como default la forma de [[Citar una página web|citar una página web]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```