---
dia: 2026-04-04
etapa: empezado
referencias:
  - "1148"
aliases:
  - Diagrama de valencia
  - Modelo de Lewis
  - Diagrama de Lewis
tags:
  - carrera/ingeniería-electrónica/quimica/Enlaces-químicos
  - nota/facultad
vinculoFacultad:
  - tema: Enlaces químicos
    capitulo: 3
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es una representación gráfica que muestra los pares de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] en guiones o puntos de [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|enlaces]] entre los [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] de una [[Molécula|molécula]], y los pares de electrones solitarios que pueden existir

Se arreglan los átomos de manera que tengan una [[ingeniería electrónica/quimica/Modelo atómico/Configuración electrónica|configuración]] de [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^gas-noble|gas noble]], siguiendo la [[ingeniería electrónica/quimica/Enlaces químicos/Regla del octeto|regla del octeto]]. Muestran los diferentes átomos usando su símbolo químico y líneas que se trazan entre los átomos que se unen entre sí. Los electrones no enlazantes o par solitario de electrones se representan mediante una línea o con un par de puntos, y deben colocarse siempre alrededor de los átomos a los que pertenecen

Para representar las moléculas mediante el diagrama, se deben presentar un átomo central, suele ser un átomo más [[ingeniería electrónica/quimica/Tabla periódica/Electronegatividad|electropositivo]], luego este queda rodeado por los demás átomos que constituyen la molécula

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```