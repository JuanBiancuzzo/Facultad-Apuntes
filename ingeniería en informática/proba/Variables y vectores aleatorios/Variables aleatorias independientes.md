---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
etapa: ampliar
aliases:
  - Variable aleatoria continua independiente#Para variable continua
  - Variable aleatoria discreta independiente#Para variable discreta
  - Vector aleatorio independiente#Para vector aleatorio
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(X, Y)$ un [[Vector aleatorio|vector aleatorio]], las [[Variable aleatoria|variables aleatorias]] $X$ e $Y$ son independientes si y solo si $$ \mathbb{P}((X \in A) \cdot (Y \in B)) = \mathbb{P}(X \in A) \cdot \mathbb{P}(Y \in B), \forall A, B \subseteq \mathbb{R} $$
Se dice que las variable aleatoria $X_1, \cdots, X_n$ son independientes si la [[Función de distribución#Para vector aleatoria|función de distribución conjunta]] es igual al producto de las [[Función de distribución marginal|función de distribución marginal]] para cada variable $$ F_{X_1, X_2, \cdots, X_n}(x_1, x_2, \cdots, x_n) = F_{X_1}(x_1) \cdot ... \cdot F_{X_n}(x_n) = \prod_{i \in [1, n]} F_{X_i}(x_i) $$
También se puede ver de la siguiente forma, si $X$ e $Y$ son independientes, entonces $$ \begin{align} 
    F_{X \mid Y = y}(x) &= F_X(x) \\
    F_{Y \mid X = x}(y) &= F_Y(y)
\end{align} $$

## Para variable discreta
---
Se dice que las [[Variable aleatoria discreta|variable aleatoria discreta]] $X_1, \cdots, X_n$ son independientes si la [[Función de masa de probabilidad|función de probabilidad conjunta]] es igual al producto de las [[Función de masa de probabilidad marginal|función de probabilidad marginal]] para cada variable $$ p_{X_1, \dots, X_n}(x_1, \cdots, x_n) = p_{x_1}(x_1) \cdot ... \cdot p_{X_n}(x_n) = \prod_{i \in [1, n]} p_{X_i}(x_i) $$

## Para variable continua
---
Se dice que las [[Variable aleatoria continua|variable aleatoria continua]] $X_1, \cdots, X_n$ son independientes si la [[Función de densidad de probabilidad|función de densidad conjunta]] es igual al producto de las [[Función de densidad marginal|función de densidad marginal]] para cada variable $$  f_{X_1, \dots, X_n}(x_1, \cdots, x_n) = f_{x_1}(x_1) \cdot ... \cdot f_{X_n}(x_n) = \prod_{i \in [1, n]} f_{X_i}(x_i)  $$

## Para vector aleatorio
---
Para vectores aleatorios $X = [X_1, ~\cdots,~ X_n]^T$ e $Y = [Y_1, ~\cdots,~ Y_n]^T$ son independientes si la distribución conjunta de ambos vectores $F_{X,~ Y}$ se factoriza como el producto $$ F_{X,~ Y}(x,~ y) = F_X(x) ~ F_Y(y) $$
Donde también se puede ver con variables aleatorias condicionales, dando $$ \begin{align} 
    F_{X \mid Y = y}(x) &= F_X(x) \\
    F_{Y \mid X = x}(y) &= F_Y(y)
\end{align} $$