---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
aliases: 
  - Mejor predictor#Mejor predictor
  - Predictor
vinculoFacultad:
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Sea $Y$ una [[Variable aleatoria|variable aleatoria]], $\mathbb{X} = (X_1, X_2, \cdots, X_n)$ un [[Vector aleatorio|vector aleatorio]], existirá alguna [[Función de variable aleatoria#Para Vector aleatorio|función de un vector aleatorio]] $g(X)$ que nos sirva para predecir a $Y$. La mejor predicción es la que minimice el [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático medio (ECM)]] (que esta dado en [[Función|función]] de la [[Esperanza|esperanza]]) $$ ECM = E\left[ (Y - g(X))^2 \right] \ge E[var(Y \mid X)] $$

### Notación
$$ g(X) = \hat{Y} $$

## Mejor predictor
---
Se define el mejor predictor, como el que minimiza el error cuadrático medio, y este es la función $$ \varphi(x) = E[Y \mid X = x] $$
> [!demostracion]- Demostración
> Sumando y restando la [[ingeniería en informática/proba/Esperanza condicional/Esperanza condicional|esperanza condicional]] en la expresión a minimizar se observa que $$ \begin{align} 
>     E\left[ (Y - \varphi(X))^2 \right] =& E\left[ (Y - E[Y \mid X] + E[Y \mid X] - \varphi(X))^2 \right] \\ 
>     =&  E\left[ (Y - E[Y \mid X])^2 \right] + E\left[(E[Y \mid X] - \varphi(X))^2 \right] \\ &+ 2E[(Y - E[Y \mid X])(E[Y \mid X] - \varphi(X))]
> \end{align} $$
> 
> El primer sumando puede ser simplificado utilizando las propiedades de la esperanza condicional $$ E\left[(Y - E[Y \mid X])^2\right] = E\left[E\left[(Y - E[Y \mid X])^2 \mid X \right]\right] = E[var(Y \mid X)] $$
> El segundo sumando simplemente se acota con $$ E\left[(E[Y \mid X] - \varphi(X))^2 \right] \ge 0 $$ y la igualdad se da sii $\varphi(x) = E[Y \mid X = x]$
> El tercer sumando se anula usando la propiedad de la esperanza condicional $$ E[(Y - E[Y \mid X])(E[Y \mid X] - \phi(X))] = E[E[Y - E[Y \mid X] \mid X](E[Y \mid X] - \varphi(X))] = 0 $$
> 
> Juntando los tres términos el teorema es probado $$ E\left[(Y - \varphi(X))^2\right] \ge E[var(Y \mid X)] $$ con igualdad se da sii $\varphi(X) = E[Y \mid X = x]$

# Observación
---
* Si $g(X) = c$ entonces podemos llegar a ver como $c = E[Y]$ por lo que  $E. C. M = Var(X)$ la "distancia minima" es la [[Varianza|varianza]]
* Si $g(\mathbb{X}) = a + b \cdot X$ entonces buscando el minimo de $E.C.M$ encontramos que esta en función de la [[Covarianza cruzada|covarianza]] de la forma $$ \begin{cases} a = E[Y] - b \cdot E[X] \\ b = \displaystyle\frac{Cov(X, Y)}{Var(X)}  \end{cases} $$ entonces $g(\mathbb{X}) = \displaystyle\frac{Cov(X, Y)}{Var(X)} \cdot (X - E[X]) + E[Y]$, y esta es la [[Recta de regresión|recta de regresión]]

# Nota
---
Se plantea una función $g(X)$ y se intenta encontrar el mínimo del ECM derivando parcialmente con todas las incógnitas e igualando las a $0$