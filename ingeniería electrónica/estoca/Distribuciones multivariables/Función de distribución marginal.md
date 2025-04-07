---
dia: 2025-03-13
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Vector aleatorio|vector aleatorio]] $X$ marginalizarlo significa descartar algunas componentes y quedarse con un subvector de este

## Marginalización
---
Si algún argumento toma el valor de $\infty$, la [[Función de distribución|función de distribución]] se marginaliza $$ \begin{align}
    \lim_{x_i \to \infty} F_{X_1,~ \cdots,~ X_n}(x_1,~ \cdots,~ x_i,~ \cdots,~ x_n) &= \\
    \lim_{x_i \to \infty} \mathbb{P}\left(X_1 \le x_1,~ \cdots,~ \underbrace{X_i \le x_i}_{\to 1},~ \cdots,~ X_n \le x_n \right) &= \\
    \mathbb{P}(X_1 \le x_1,~ \cdots,~ X_{i - 1} \le x_{i - 1},~ X_{i + 1} \le x_{i + 1},~ \cdots,~ X_n \le x_n) &= \\
    F_{X_1,~ \cdots,~ X_{i - 1},~ X_{i + 1},~ \cdots,~ X_n}(x_1,~ \cdots,~ x_{i - 1},~ x_{i + 1},~ \cdots,~ x_n) &
\end{align} $$

Por lo que $F_{X_1,~ \cdots,~ X_{i - 1},~ X_{i + 1},~ \cdots,~ X_n}$ es la distribución marginal con respecto a $X_i$. Por ejemplo, en el caso bivariable $$ \begin{matrix} 
    F_{X_1,~ X_2}(\infty,~ x_2) = F_{X_2}(x_2) && F_{X_1,~ X_2}(x_1, \infty) = F_{X_1}(x_1)
\end{matrix} $$

