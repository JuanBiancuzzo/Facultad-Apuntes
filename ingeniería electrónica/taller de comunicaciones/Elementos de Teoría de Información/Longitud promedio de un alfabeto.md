---
dia: 2025-09-05
etapa: empezado
referencias: []
aliases: []
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
Dada el [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\mathcal{S}$, donde tiene los símbolos $s_k$, donde para cada símbolo hay una [[ingeniería en informática/discreta/Autómatas/Palabra|palabra]] $m_k$ para este símbolo, entonces se define la longitud promedio como $$ \bar{L} = \sum_{k = 1}^{K} \mathbb{P}(s_k) \cdot l_k $$ donde $K = |\mathcal{S}|$ y $l_k$ es el [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud]] de la palabra $m_k$

