---
dia: 2025-09-05
etapa: empezado
referencias: []
aliases: 
  - Código prefijo de longitud i#^prefijo-longitud-i
  - Teorema de existencia de un código prefijo#^teo-8-1-3
  - Teorema Kraft-McMillan#^teo-8-1-3
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sea una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\mathcal{S} = \Set{ s_0,~ s_1,~ \cdots,~ s_{k - 1} }$ y estadística $\Set{ p_0,~ p_1,~ \cdots,~ p_{k - 1} }$ sea $m_k$ la $k$-ésima [[ingeniería en informática/discreta/Autómatas/Palabra|palabra]] del [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código de fuente|código]] asociada al símbolo $s_k$ de la fuente $m_k = (m_{k,~1},~ m_{k,~2},~ \cdots,~ m_{k,~n})$ con $n$ la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud de la palabra]] del código 

Se define el prefijo de longitud $i$ como los elementos $(m_{k,~1},~ m_{k,~2},~ \cdots,~ m_{k,~i})$ donde $i < n$ ^prefijo-longitud-i

Finalmente podemos definir un código, como aquel código el cual ninguna palabra de código es prefijo de ninguna otra palabra de código. En otras palabras, para todo $m_k$ no existe otra palabra $m_j$ tal que $m_j$ sea prefijo de $m_k$

> [!observacion]+ Observación 8.1.1  
> Todo [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] es de [[Código de decodificación instantánea|decodificación instantánea]]
^obs-8-1-1


> [!teorema]+ Teorema 8.1.3 (Existencia de un código prefijo) 
> Existe un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] $r$-ario con [[ingeniería en informática/discreta/Autómatas/Palabra|palabras]] de código de [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitudes]] $l_0,~ l_1,~ \cdots,~ l_{K - 1}$ sii $$ \sum_{k = 0}^{K - 1} r^{-l_k} \le 1 $$ 
^teo-8-1-3
