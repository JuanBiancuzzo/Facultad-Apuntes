---
dia: 2024-08-07
tags:
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - nota/facultad
vinculoFacultad:
  - tema: Relaciones
    capitulo: 4
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
etapa: empezado
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sea $R$ una [[Relación|relación]] en el [[Conjunto|conjunto]] $A$, sea $a \in A$, la clase de $a$ se denomina $$ [a] = \Set{x \in A: ~ aRx} $$
Notemos que las clases no son vacías, y dos clases distintas son disjuntas, si un elemento pertenece a más de una clase, entonces debido a la [[Relación transitiva|transitividad]] y la [[Relación reflexiva|reflexividad]] estas clases se juntarían. Esto nos lleva a concluir que las clases son una [[ingeniería en informática/proba/Representación de variables aleatorias/Partición|partición]] del espacio definido en $A$

Desde el punto de vista del análisis, se puede interpretar esta relación como una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] $f$ donde estas particiones representan [[ingeniería en informática/analisis 2/Propiedades de funciones/Conjunto de nivel|conjunto de nivel]]  ya que lo podemos reescribir de la siguiente forma $$ [a] = \Set{ x \in A : f(x) = a } $$