---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades
  - carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
aliases:
  - Fórmula de Bayes#Fórmula de Bayes
  - Regla de bayes#Fórmula de Bayes
vinculoFacultad:
  - tema: Teoría de probabilidades
    capitulo: 1
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
etapa: empezado
referencias:
  - "1094"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dado la [[Partición|partición]] $\{A_1, A_2, \cdots, A_n\}$ del [[Espacio muestral|espacio muestral]] $\Omega$, un [[ingeniería en informática/proba/Teoría de probabilidades/Evento|evento]] $B$, se puede calcular la [[Probabilidad condicional|probabilidad condicional]] como $$ \mathbb{P}(A_i \mid B) = \frac{\mathbb{P}(B \mid A_i) ~ \mathbb{P}(A_i)}{\mathbb{P}(B)} $$ donde 
* $\mathbb{P}(A_i)$ es la probabilidad a priori
* $\mathbb{P}(B \mid A_i)$ es la probabilidad de $B$ en la hipótesis $A_i$
* $\mathbb{P}(A_i \mid B)$ es la probabilidad a posteriori

## Fórmula de Bayes
---
Con base en la definición de probabilidad condicional se obtiene la fórmula de Bayes, también conocida como regla de Bayes $$ \mathbb{P}(A_i \mid B) = \frac{\mathbb{P}(B \mid A_i) \cdot \mathbb{P}(A_i)}{\displaystyle\sum_{k=1}^{n} \mathbb{P}(B \mid A_k) \cdot \mathbb{P}(A_k)} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```