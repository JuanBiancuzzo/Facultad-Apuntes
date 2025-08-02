---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
aliases:
  - PDF marginal
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada una [[Función de densidad de probabilidad|función de densidad conjunta]], con $X$, $Y$ dos [[Variable aleatoria continua|variable aleatoria continua]] que forman un [[Vector aleatorio|vector aleatorio]], se define la función de densidad marginal como $$ \begin{align} 
    f_X(x) &= \int_{y \in \mathbb{R}} f_{X, Y}(x, y) dy \\
    f_Y(y) &= \int_{x \in \mathbb{R}} f_{X, Y}(x, y) dx
\end{align} $$
## Ejemplo para más variables
---
A partir de la [[Función de densidad de probabilidad|PDF]] $f_X(x)$ podemos obtener las PDFs marginales, integrando con respecto al resto de las variables. Por ejemplo $$ \begin{align}
    f_{X_1}(x_1) &= \int_\mathbb{R} f_{X_1,~ X_2}(x_1,~ x_2) ~ dx_2 \\
    f_{X_3}(x_3) &= \int_{\mathbb{R}^2} f_{X_1,~ X_2,~ X_3}(x_1,~ x_2,~ x_3) ~ dx_1 ~ dx_2 \\
    f_{X_1,~ X_3}(x_1,~ x_3) &= \int_{\mathbb{R}^2} f_{X_1,~ X_2,~ X_3,~ X_4}(x_1,~ x_2,~ x_3,~ x_4) ~ dx_2 ~ dx_4 \\
\end{align} $$