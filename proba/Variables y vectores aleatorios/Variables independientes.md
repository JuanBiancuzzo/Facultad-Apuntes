---
dia: 2023-01-23
tags:
  - proba/Variables-y-vectores-aleatorios
  - nota/facultad
---
# Definición
---
Sea $(X, Y)$ un [[Vector aleatorio|vector aleatorio]], las [[Variable aleatoria|variables aleatorias]] $X$ e $Y$ son independientes si y solo si $$ \mathbb{P}((X \in A) \cdot (Y \in B)) = \mathbb{P}(X \in A) \cdot \mathbb{P}(Y \in B), \forall A, B \subseteq \mathbb{R} $$
## Propiedades
---
1) Se dice que las variable aleatoria $X_1, \cdots, X_n$ son independientes si la [[Función de distribución para vector aleatorio|función de distribución para vector aleatorio]] es igual al producto de las [[Función de distribución marginal|función de distribución marginal]] para cada variable $$ F_{X_1, X_2, \cdots, X_n}(x_1, x_2, \cdots, x_n) = F_{X_1}(x_1) \cdot ... \cdot F_{X_n}(x_n) = \prod_{i \in [1, n]} F_{X_i}(x_i) $$
2) Se dice que las [[Variable aleatoria discreta|variable aleatoria discreta]] $X_1, \cdots, X_n$ son independientes si la [[Función de probabilidad conjunta|función de probabilidad conjunta]] es igual al producto de las [[Función de probabilidad marginal|función de probabilidad marginal]] para cada variable $$ p_{X_1, \dots, X_n}(x_1, \cdots, x_n) = p_{x_1}(x_1) \cdot ... \cdot p_{X_n}(x_n) = \prod_{i \in [1, n]} p_{X_i}(x_i) $$
3) Se dice que las [[Variable aleatoria continua|variable aleatoria continua]] $X_1, \cdots, X_n$ son independientes si la [[Función de densidad conjunta|función de densidad conjunta]] es igual al producto de las [[Función de densidad marginal|función de densidad marginal]] para cada variable $$  f_{X_1, \dots, X_n}(x_1, \cdots, x_n) = f_{x_1}(x_1) \cdot ... \cdot f_{X_n}(x_n) = \prod_{i \in [1, n]} f_{X_i}(x_i)  $$
