---
dia: 2025-09-21
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un clasificador el aquel [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] que intenta resolver un [[ingeniería en informática/orga/Machine learning/Problema de clasificación|problema de clasificación]] donde busca estimar una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] $Y = \varphi(X)$, donde $Y \in \mathcal{Y}$ es una variable categórica (con [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Cardinalidad|cardinalidad]] menor a [[Infinito|infinito]]) que recibe el nombre de [[ingeniería en informática/discreta/Relaciones/Clase|clase]] 

La [[Función de costo|función de costo]] elegida en este tipo de problemas es la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Loss 0-1|Loss 0-1]] o [[ingeniería en informática/orga/Machine learning/Métrica de un modelo#^bf4e62|Hard error]]. Esta [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]], a diferencia del [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático]], solo distingue entre aciertos y errores. El [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-esperado|riesgo esperado]] es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] de error $\mathbb{E}[\ell(X,~ Y)] = \mathbb{P}(Y \ne \varphi(X))$ 
