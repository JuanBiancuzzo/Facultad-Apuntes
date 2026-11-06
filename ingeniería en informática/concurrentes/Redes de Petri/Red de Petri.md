---
dia: 2026-11-04
etapa: empezado
referencias: []
aliases: 
  - Red Ordinaria de Petri
  - Red General de Petri
  - Grafo de Alcance de una red de Petri
tags:
  - carrera/ingeniería-en-informática/concurrentes/Redes-de-Petri
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Redes de Petri
    capitulo: 7
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Permite representar, de una forma más formal, a partir de un [[ingeniería en informática/discreta/Grafos/Grafo|grafo]] donde los [[ingeniería electrónica/intro/Circuitos con resistencias/Nodo|nodos]] representan estados y las [[Arista|aristas]] las transiciones, como por ejemplo los siguientes casos

|  Lugar de entrada  |       Transiciones       |  Lugar de salida  |
| :----------------: | :----------------------: | :---------------: |
|   Precondiciones   |         Eventos          |  PostCondiciones  |
|  Datos de entrada  |         Cómputos         |  Datos de salida  |
| Señales de entrada | Procesamiento de señales | Señales de salida |
| Buffers de entrada |        Procesador        | Buffers de salida |

## Ordinaria
---
Es un [[ingeniería en informática/discreta/Grafos/Grafo k-partito|grafo bipartito]] que cumple con $$ \text{PN} = (T,~ P,~ A) $$ donde $T$ es el [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de nodos llamado transiciones, $P$ es el conjunto de nodos llamado lugres y $A$ son las aristas dado por $A \subseteq (T \times P) \bigcup (P \times T)$ 

![[ingeniería en informática/concurrentes/Redes de Petri/img/Red Ordinaria de Petri.png|500]]

Sea $t \in \text{PN}$ una transición, se definen las funciones
* Entrada o input de la transición $t$ dado por $I(t) = \Set{ \forall p \in P : (p,~ t) \in A }$
* Salida o output de la transición $t$ dado por $O(t) = \Set{ \forall p \in P : (p,~ t) \in A }$

Se pueden entender como las funciones que devuelven los nodos de los que sale la transición (el input) y los que llega la transición (el output)

## General
---
Para el caso general, sigue siendo un grafo bipartito que cumple $$ \text{PN} = (T,~ P,~ A,~ W,~ M_0) $$ donde 
* $M_0 : P \to \mathbb{N}_0$ es la función de marca inicial
	* Se entiende como función de marca a $M : P \to \mathbb{N}_0$, que define la cantidad de marcas ó tokens que tiene cada lugar
* $W : A \to \mathbb{N}$ es una función de peso 
	* Representa la cantidad de tokens necesarios para llevar a cabo una transición

Tanto $M$ como $W$ se complementan para dar la funcionalidad de disparo de transiciones, donde 
* La transición $t \in T$ está habilitada si y sólo si $$ M(p) \ge W(p,~ t) : \forall p \in I(t) $$
* Cuando $t$ se dispara 
	* $\forall p \in I(t) : M(p) \gets M(p) - W(p,~ t)$  
	* $\forall p \in O(t) : M(p) \gets M(p) + W(p,~ t)$  

![[ingeniería en informática/concurrentes/Redes de Petri/img/Red General de Petri.png|500]]

## Grafo de alcance
---
El grafo de alcance se define tal que sus nodos sean el conjunto ordenado de marcas y sus aristas son las transiciones

![[ingeniería en informática/concurrentes/Redes de Petri/img/Grafo de Alcance de red de Petri.png|500]]