---
dia: 2024-08-08
tags:
  - ingeniería-en-informática/discreta/Ecuaciones-de-recurrencia
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
referencias:
  - "412"
etapa: ampliar
aliases:
  - Sucesión por recurrencia lineal
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $x_{n+k} = f(x_n,~x_{n+1},~x_{n+2},~\cdots,~x_{n+k+1})$ con conocidos $x_0,~x_1,~\cdots,~x_{k-1}$. Es un problema de valor inicial de orden $k$

Una [[Función|función]] $f$  [[Función lineal|lineal]], con [[Dominio de una función|dominio]] en $\mathbb{N}$ es una [[Sucesión|sucesión]] $(x: ~\mathbb{N} \to \mathbb{C}$) habitualmente denota $x(n)$, aunque para abreviar, se puede definir $$ x_n \stackrel{\text{def}}{=} x(n) $$

Si queremos ser formales, podemos observar que el [[Conjunto|conjunto]] $$ H = \set{ n \in \mathbb{N}: ~~ a_n ~ \text{está definida} } $$ es un [[Conjunto inductivo|subconjunto inductivo]] de $\mathbb{N}$, y por lo tanto coincide con $\mathbb{N}$



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```