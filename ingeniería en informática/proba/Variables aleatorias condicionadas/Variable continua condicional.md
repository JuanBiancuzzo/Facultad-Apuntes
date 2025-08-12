---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Variables-aleatorias-condicionadas
  - carrera/ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - nota/facultad
aliases:
  - PDF condicional
  - Función de densidad condicional
  - Vector continuo condicional
etapa: ampliar
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Variables aleatorias condicionadas
    capitulo: 5
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $X$ e $Y$ [[Variable aleatoria continua|variable aleatoria continua o vectores aleatorios continuos]] haciendo un vector aleatorio, con [[Función de densidad de probabilidad|función de densidad conjunta]] $f_{X,Y}(x, y)$ y [[Función de densidad marginal|función de densidad marginal]] $f_X(x)$, entonces para cualquier valor de $X$ con el cual $f_X(x) > 0$, la [[Función de densidad de probabilidad|función de densidad]] de la variable condicional de $Y$ dado que $X = x$ es   $$ f_{Y | X = x}(y) = \frac{f_{X,Y}(x, y)}{f_X(x)} $$
Se define como $f_{X,Y}(x, y) = 0$ cuando $f_X(x) = 0$.

### Propiedades
---
Con esto, podemos calcular la [[Función de densidad de probabilidad|función de densidad conjunta]] de la siguiente forma $$\begin{align}
f_{X,Y}(x, y) &= f_{Y|X = x}(y) \cdot f_X(x) \\
f_{X,Y}(x, y) &= f_{X|Y = y}(x) \cdot f_Y(y)
\end{align}$$
## Regla de la cadena
---
Podemos encontrar las [[Función de densidad marginal|PDF marginal]] a partir de la [[Función de densidad de probabilidad#Para vector aleatoria|PDF conjunta]], veamos un ejemplo $$ \begin{array}{rll}
    f_{X_1,~ X_2,~ X_3}(x_1,~ x_2,~ x_3) =& \\
    =& f_{X_1}(x_1) ~ f_{X_2,~ X_3}(x_2,~ x_3 \mid X_1 = x_1) \\
    &= f_{X_1}(x_1) ~ f_{X_2}(x_2) ~ f_{X_3}(x_3 \mid X_1 = x_1,~ X_2 = x_2) \\
    
    =& f_{X_2}(x_2) ~ f_{X_1,~ X_3}(x_1,~ x_3 \mid X_2 = x_2) \\
    &= f_{X_2}(x_2) ~ f_{X_3}(x_3) ~ f_{X_1}(x_1 \mid X_2 = x_2,~ X_3 = x_3) \\
    
    =& f_{X_3}(x_3) ~ f_{X_1,~ X_2}(x_1,~ x_2 \mid X_3 = x_3) \\
    &= f_{X_3}(x_3) ~ f_{X_1}(x_1) ~ f_{X_2}(x_2 \mid X_3 = x_3,~ X_1 = x_1) 
\end{array} $$
