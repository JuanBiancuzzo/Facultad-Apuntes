---
dia: 2024-08-08
tags:
  - carrera/ingeniería-en-informática/discreta/Inducción
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
referencias:
  - "412"
etapa: empezado
aliases:
  - Hipótesis inductiva#^hipotesis-inductiva
  - HI#^hipotesis-inductiva
  - Principio de inducción "corrido"#Inducción "corrida"
  - Inducción débil
  - PI
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $p(n)$, $n \in \mathbb{N}$, una afirmación sobre los [[Números Naturales|números naturales]]. Si $p$ satisface
* (Caso base) $p(1)$ es Verdadera
* (Paso inductivo) $\forall h \in \mathbb{N}$, $p(h)$ Verdadera $\implies p(h + 1)$ es Verdadera
entonces $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

También lo podemos pensar a partir de [[Conjunto inductivo|conjuntos inductivos]], si proponemos que $$ H := \set{ n \in \mathbb{N}: ~ p(n) ~ \text{es Verdadera} } $$
Si $H$ es un conjunto inductivo, entonces $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

Aquí la hipótesis "$p(h)$ Verdadero" para un $h$ dado se denomina la hipótesis inductiva ^hipotesis-inductiva

## Inducción "corrida"
---
Sea $n_0 \in \mathbb{Z}$ y sea $p(n)$, $n \ge n_0$, una afirmación sobre $\mathbb{Z}_{\ge n_0}$. Si $p$ satisface
* (Caso base) $p(n_0)$ es Verdadera
* (Paso inductivo) $\forall h \in n_0$, $p(h)$ Verdadera $\implies p(h + 1)$ es Verdadera
entonces $p(n)$ es Verdadero, $\forall n \ge n_0$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```