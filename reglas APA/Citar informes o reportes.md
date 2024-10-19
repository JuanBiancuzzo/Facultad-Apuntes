---
dia: 2024-07-08
etapa: ampliar
referencias:
  - "3"
aliases:
  - Citar reportes
  - Citar informes
tags:
  - nota/investigacion
  - reglas-APA
orden: 289
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
La literatura gris es una categoría de recursos que incluye informes técnicos o de investigación de agencias gubernamentales, institutos de investigación, organizaciones o empresas o asociaciones. Este tipo de literatura incluye (pero no se limita a)
* documentos de trabajo
* documento de políticas
* informes

## Formato general
---
> [!quote]
> Apellido, N. N (año). _Título del informe_ (Informe n° xxx). Nombre del editor. URL

* Si el informe no tiene número de informe, deje esa información fuera de la referencia
* Si el editor es el mismo que el autor, que suele ser el caso de los autores de grupo, omita al editor del elemento fuente

## Informe escrito del sitio web de una agencia
---
La agencia específica responsable del informe aparece como el autor. Los nombres de las agencias matrices que no están presentes en el nombre del autor del grupo aparecen en el elemento fuente como editor

> [!quote]
> Nombre de la agencia (año). _Título del  informe_ (Informe n° xxx). Nombre de la editorial, Editorial. URL




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```