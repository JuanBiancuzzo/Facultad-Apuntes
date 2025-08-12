---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
vinculoFacultad:
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
# Definición
---
Sea $Y$ una [[Variable aleatoria|variable aleatoria]], $\mathbb{X} = (X_1, X_2, \cdots, X_n)$ un [[Vector aleatorio|vector aleatorio]], existirá alguna [[Función de variable aleatoria#Para Vector aleatorio|función de un vector aleatorio]] $g(\mathbb{X})$ que nos sirva para predecir a $Y$. La mejor predicción es la que minimice el error cuadratico medio (que esta dado en [[Función|función]] de la [[Esperanza|esperanza]]) $$ E.C.M = E\bigg[ (Y - g(\mathbb{X}))^2 \bigg] $$

### Notación
$$ g(\mathbb{X}) = \hat{Y} $$

# Observación
---
* Si $g(\mathbb{X}) = c$ entonces podemos llegar a ver como $c = E[Y]$ por lo que  $E. C. M = Var(X)$ la "distancia minima" es la [[Varianza|varianza]]
* Si $g(\mathbb{X}) = a + b \cdot X$ entonces buscando el minimo de $E.C.M$ encontramos que esta en función de la [[Covarianza cruzada|covarianza]] de la forma $$ \begin{cases} a = E[Y] - b \cdot E[X] \\ b = \displaystyle\frac{Cov(X, Y)}{Var(X)}  \end{cases} $$ entonces $g(\mathbb{X}) = \displaystyle\frac{Cov(X, Y)}{Var(X)} \cdot (X - E[X]) + E[Y]$, y esta es la [[Recta de regresión|recta de regresión]]

# Nota
---
Se plantea una función $g(\mathbb{X})$ y se intenta encontrar el mínimo del $E.C.M$ derivando parcialmente con todas las incógnitas e igualando las a $0$