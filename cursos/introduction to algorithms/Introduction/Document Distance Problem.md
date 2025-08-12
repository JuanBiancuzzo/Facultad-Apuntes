---
dia: 2025-01-08
etapa: empezado
referencias:
  - "700"
tags:
  - curso/introduction-to-algorithms/Introduction
  - nota/curso
aliases:
  - Problema de la distancia entre documentos
vinculoCurso:
  - tema: Introduction
    capitulo: 1
    tipo: Online
    curso: Introduction to Algorithms
    anio: "2011"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este problema establece como encontrar la similitud de dos documentos $$ d(D_1,~ D_2) $$ donde se define un documento como una secuencia de [[String|strings]]

Donde vamos a definir la operación $D[w]$ como acceder al documento, y contar la cantidad de apariciones del string $w$ en ese documento. Lo que se propone es pensar un documento como un [[Vector|vector]] donde la [[Dimensión|dimensión]] es la cantidad de palabras posibles

Una forma de las formas de resolverlo, es planteando que la distancia sea la [[Similitud coseno|similitud coseno]], ya que produce un valor independiente del largo del documento

Implementaciones de estas son
* [[Bag of words|Bag of words]]
* [[Term Frequency|Term Frequency (TF)]]
* [[Term frequency x inverse document frequency|TF-IDF]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```