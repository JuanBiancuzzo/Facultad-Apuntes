---
dia: 2024-10-30
estado: Sin empezar
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/ciencias-de-la-computación/programación-lineal
aliases:
  - Linear programming
  - LP
  - Optimización lineal
referencias:
  - "408"
  - "409"
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar la metodología para resolver problemas 

## Resumen
---
La programación lineal (LP, también conocida como optimización lineal) es el campo de la programación matemática dedicado a maximizar o minimizar (optimizar) una [[Función lineal|función lineal]], denominada [[Función|función]] objetivo, de tal forma que las variables de dicha función estén sujetas a una serie de restricciones expresadas mediante un sistema de ecuaciones o inecuaciones también lineales. El método tradicionalmente usado para resolver problemas de programación lineal es el [[Método Simplex|Método Simplex]]

Los programas lineales son problemas que pueden ser expresados en su forma canónica como

>Encontrar un vector    $x$
>que maximice             $c^T x$
>sujeto a                       $Ax \le b$
>y                                  $x \ge 0$

donde $x$ es el vector de variables que se desea determinar, $c$ y  $b$ son vectores dados (con $c^T$ indicando que los coeficientes de $c$ son usados como una matriz de un solo renglón para que el producto matricial esté definido) y $A$  es una matriz dada. La función cuyo valor se va a maximizar o minimizar (en este caso $x \mapsto c^T x$) es llamada función objetivo. Las desigualdades $A x \le b$ y $x \ge 0$ son las restricciones y forman la región factible o también conocida como región de factibilidad.
## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```