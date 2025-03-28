---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
---
# Definición
---
Veremos como analizar los [[Máximo y mínimo local|máximos y mínimos locales]] para funciones de una variable

Dado $f : D \subset \mathbb{R}^n \to \mathbb{R}$ con $n > 1$, el análisis típico para saber si $f(\vec{A})$ es extremo local es el siguiente

 1. Se determinan los puntos críticos, esto son los punto $\vec{A}$ tales que:
	  * $f$ no es diferenciable en $\vec{A}$
	  * $f$ es diferenciable en $\vec{A}$ y $\nabla f(\vec{A}) = \vec{0}$. En este caso $\vec{A}$ se denomina punto estacionario
 2. Siendo $\vec{A}$ un punto critico, el análisis es como sigue
	  * Debe aplicarse la definición de [[Máximo y mínimo local|máximo y mínimo local]]
	  * En esta situación tenemos alternativas
		   1. Se aplica la definición de extremo local
		   2. De cumplirse sus hipótesis, se puede aplicar el ![[Teorema para determinar extremo locales#Definición]]