---
dia: 2024-11-07
etapa: empezado
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
aliases:
  - PBO
vinculoFacultad:
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este principio dice que todo [[Subconjunto|subconjunto]] no vacío del [[Conjunto|conjunto]] de los [[Números Naturales|números naturales]] $\mathbb{N}$ contiene un primer elemento, es decir, un elemento que es mejor o igual que todos los demás

De hecho, sabiendo que $\mathbb{N} = \set{ 1,~ 2,~ \cdots~}$, este resultado es bastante natural ya que si el subconjunto $A \subseteq \mathbb{N}$ es finito y no vacío, podemos comparar sus elementos y quedarnos con el más chico, y si el conjunto $A  \subseteq \mathbb{N}$ es infinito y no vacío, podemos considerar un elemento $n_0 \in A$ y quedarnos con $A \cap \mathbb{N}_{\le n_0}$, que es finito y no vacío: el menor elemento de este conjunto es el menor elemento de $A$

Se puede probar que de hecho el [[Principio de inducción|principio de inducción]], el [[Principio de inducción completa|principio de inducción completo]] y el principio de buena ordenación son todos equivalentes entre sí, es decir, si vale cualquiera de ellos valen los otros

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```