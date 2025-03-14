---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
---
# Definición
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variable aleatoria]], donde se define la covarianza (en [[Función|función]] de la [[Esperanza|esperanza]]) como $$\begin{align} 
    Cov(X, Y) &= E\bigg[ (X - E[X]) \cdot (Y - E[Y]) \bigg] \\ 
    Cov(X, Y) &= E[X \cdot Y] - E[X] \cdot E[Y] 
\end{align}$$
## Propiedades
---
* Si $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]], entonces $Cov(X, Y) = 0$ recordando que $E[X \cdot Y] = E[X] \cdot E[Y]$ en este caso
* $Cov(a + b \cdot X, c + d \cdot Y) = b \cdot d \cdot Cov(X, Y)$
* $\begin{align} Cov(a_1 \cdot X_1 + a_2 \cdot X_2, a_3 \cdot X_3 + a_4 \cdot X_4) &= a_1 \cdot a_3 \cdot Cov(X_1, X_3) \\&+ a_2 \cdot a_3 \cdot Cov(X_2, X_3) \\&+ a_1 \cdot a_4 \cdot Cov(X_1, X_4) \\&+ a_2 \cdot a_4 \cdot Cov(X_2, X_4)\end{align}$ 
* $Cov(X + Y, Z) = Cov(X, Z) + Cov(Y, Z)$ 
* $Var(X + Y) = Var(X) + Var(Y) + 2 \cdot Cov(X, Y)$ (usando la [[Varianza|varianza]])


## Observación
---
Lo importante de la covarianza es el signo
* Si $Cov(X, Y) > 0$ entonces cuando crece $X$, crece $Y$ y si decrece $X$, decrece $Y$.
* Si $Cov(X, Y) < 0$ entonces cuando crece $X$, decrece $Y$ y si decrece $X$, crece $Y$.