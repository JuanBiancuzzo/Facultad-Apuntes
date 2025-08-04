---
dia: 2024-09-30
etapa: sin-empezar
referencias: 
tags:
  - colección/data-structures/estructura
  - curso/introduction-to-algorithms/Hashing
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - nota/curso
  - nota/investigacion
aliases:
  - Hash map
  - Tabla de hash
  - Diccionario
nombreEstructura: Hash table
vinculoCurso:
  - "[[cursos/introduction to algorithms/Graphs/Resumen.md]]"
  - "[[cursos/introduction to algorithms/Hashing/Resumen.md]]"
  - "[[cursos/introduction to algorithms/Numerics/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
> %% Descripción de la estructura %%
^descripcion
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
       
    \fill (0, 0) circle (.25);       
       
\end{tikzpicture}
\end{document}
``` 
^representacion

Se puede hacer
* `Insert(item)`
    * En el caso que exista ya un elemento con esa key, se sobrescribe
* `Delete(item)`
* `Search(key) -> Option<item>`

Item es una interfaz, donde 
