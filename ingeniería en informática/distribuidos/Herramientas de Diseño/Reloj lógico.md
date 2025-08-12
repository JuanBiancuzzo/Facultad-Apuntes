---
dia: 2025-03-04
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado $S$, el conjunto de todos los [[Estado local de un proceso|estados locales]] posibles del sistema y $\to$ la [[Relación|relación]] temporal de implicancia "ocurre antes", un reloj lógico es una [[Función|función]] $C$ [[Función monótona|monótona]] creciente que mapea estados con un [[Números Naturales|número natural]] y garantiza $$ \forall s,~ t \in S : s \to t \implies C(S) < C(t) $$

Donde esta función de relación $\to$ es la relación de causalidad entre [[Evento#En ciencia de la computación|eventos]] o estados tales que 
* $a \to b$, si $a,~b$ pertenecen al mismo [[Proceso|proceso]] $P_i$ y $a$ ocurre antes de $b$
* $a \to b$, si $a$ es un evento de $P_i$, $b$ es un evento de $P_j$, $a$ es el envío del [[Paquete|mensaje]] $m$ a $P_j$ y $b$ es la recepción del mensaje $m$ desde $P_i$
* $a \to c$, si $a \to b$ y $b \to c$ ([[Relación transitiva|transitividad]])

## Ejemplo
---
![[Reloj lógico.png]]
