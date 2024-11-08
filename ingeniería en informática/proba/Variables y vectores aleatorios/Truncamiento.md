---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
---
# Definición
---
Sea $X$ una [[Variable aleatoria|variable aleatoria]] con una [[Función de distribución|función de distribución]] $F_X$, y $A$ un conjunto de valores en los que se quiere trunca, $A \subseteq \mathbb{R}$, se define el truncamiento como la nueva [[Función de distribución|función de distribución]] $F_U$ donde $U = \{ x \in X : x \in A \}$, que por notación es $F_{X | X \in A}$, y la podemos definir $$ F_{X | X \in A}(x) = \frac{\mathbb{P}(X \leq x | X \in A)}{\mathbb{P}(X \in A)}$$

## Observación
---
Si $X$ una [[Variable aleatoria continua|variable aleatoria continua]] con una [[Función de densidad|función de densidad]] $f_X(x) = \frac{d}{dx}F_X(x)$, la función de densidad de $X$ truncada en $A$, se calcula como
$$ f_{X | X \in A}(x) = \frac{f_X(x) \cdot \mathbb{1}\{ X \in A \}}{\mathbb{P}(X \in A)} $$