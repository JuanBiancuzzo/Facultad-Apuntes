---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
aliases:
  - Media
  - Valor esperado
  - Energía de una variable aleatoria#^def-5-2-8
  - Energía de un proceso estocástico#^def-6-2-2
etapa: ampliar
referencias: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el promedio ponderado que puede tomar una [[Variable aleatoria|variable aleatoria]] $X$. Análogo al centro de masa de un objeto

Sea $X$ una variable aleatoria con [[Función de distribución|función de distribución]] $F_X(x) = \mathbb{P}(X \leq x)$, si $h(X)$ es una [[Función de variable aleatoria|función de variable aleatoria]] cualquiera de $X$, si definimos $A$ como el [[Conjunto|conjunto]] de [[Átomo|átomos]], entonces $$ E[h(X)] = \sum_{x \in A} h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} h(x) \cdot F_{X}'(x) \cdot dx $$

> [!observacion]+ Observación 5.2.7  
> Notemos que el caso que llamaremos esperanza es cuando $h(x)$ sea la [[Función identidad|función identidad]], es decir $h(x) = x$
^obs-5-2-7

> [!definicion]+ Definición 5.2.8 (Energía de una variable aleatoria) 
> Vamos a definir la energía de una variable aleatoria como el caso donde $h(x) = x^2$, y en general denotada como $\mathcal{E}_X = E\left[ X^2 \right]$
^def-5-2-8

### Notación
Se puede expresar $\mu(X) = E[X]$

## Para vector aleatorio
---
Sea $X \in \mathbb{R}^n$ un [[Vector aleatorio|vector aleatorio]] $n$-dimensional. La medio o esperanza de $X$ es un vector de las esperanzas de sus componentes $$ E[X] = \mu_X = \begin{bmatrix} E[X_1] \\ E[X_2] \\ \vdots \\ E[X_n] \end{bmatrix} $$

## Para un proceso estocástico
---
Dada un [[Proceso estocástico|proceso estocástico]] $X$ definimos su esperanza o media (si existe) como $$ E[X(t)] = \mu_X(t) $$
Vemos que la media es una [[Función|función]] determinística del tiempo, que a cada $t_0 \in \mathcal{T}$ le asigna la esperanza de la variable $X(t_0)$

> [!definicion]+ Definición 6.2.2 (Energía de un proceso estocástico) 
> Se define la energía del proceso como $$ \mathcal{E}_X(t) = E\left[ X^2(t) \right] $$
> 
> Notemos que es un caso particular de la [[Correlación cruzada#Para un proceso estocástico|autocorrelación]] al considerar $t_1 = t_2 = t$ dándonos $R_X(t_1,~ t_2) = R_X(t,~ t) = E\left[ X^2(t) \right]$
^def-6-2-2
## Casos específicos
---
Dado una función de variable aleatoria $h(X)$ cualquiera

### Para variable discreta
---
Sea $X$ una [[Variable aleatoria discreta|variable aleatoria discreta]] con [[Función de masa de probabilidad|función de probabilidad]] $p_X(x)$, el valor esperado (o media) de $X$ es $$ E[h(X)] = \sum_{x \in R_X} h(x) \cdot p_X(x) $$ donde $R_X$ es el [[Rango de una variable aleatoria|rango]]

### Para variable continua
---
Sea $X$ una [[Variable aleatoria continua|variable aleatoria continua]] con [[Función de densidad de probabilidad|función de densidad]] $f_X(x)$, el valor esperado de $X$ es $$ E[h(X)] = \int_{x \in \mathbb{R}} h(x) \cdot f_X(x) \cdot dx $$
## Esperanza total
---
Dado los conjuntos $A_1, A_2, \cdots, A_n$ tal que $\displaystyle\bigcup_{i = 1}^{n} A_i = \mathbb{R}$ y  $\displaystyle\bigcap_{i = 1}^{n} A_i = \emptyset$, es decir la [[Partición|partición]] del espacio $\mathbb{R}$, entonces se puede calcular la esperanza usando la [[Esperanza condicional|esperanza condicional]] $$ E[X] = \sum_{i = 1}^{n} E[X | X \in A_i] \mathbb{P}(X \in A_i) $$ 


## Propiedad
---
Sea $X$ una [[Variable aleatoria|variable aleatoria]], se dice que la esperanza es lineal, es decir $$ \begin{align} 
    E[a~X + b] &= a ~ E[X] + b, && a,~ b \in \mathbb{R} \\
    E[AX + b] &= A ~ E[X] + b, && a \in \mathbb{R}^{n \times n},~ b \in \mathbb{R^n}
\end{align} $$

Si las variables $X$ e $Y$ son [[Variables aleatorias independientes|independientes]] entonces $$ E[XY] = E[X] ~ E[Y] $$ y también se cumple que $$ E[g(X) ~ h(Y)] = E[g(X)] ~ E[h(Y)] $$
Se puede calcular la esperanza como $$ E[X] = \int_0^\infty (1 - F_X(x)) \cdot dx - \int_{-\infty}^0 F_X(x) \cdot dx $$

También se puede calcular la esperanza, de una variable aleatoria, de $X$ o de $X^n$ usando la [[Función característica|función característica]] notando la siguiente relación $$ \frac{d^n}{d\omega^n} \Phi_X(\omega) = \frac{d^n}{d\omega^n} E\left[ \exp\left( j\omega X \right) \right] = j^n E\left[ X^n ~ \exp\left( j\omega X \right) \right] $$
Ahora, podemos obtener lo que buscamos, evaluando en $\omega = 0$ y despejando la esperanza, resultando en lo siguiente $$ E\left[ X^n \right] = (-j)^{n} ~ \frac{d^n}{d\omega^n} \Phi_X(\omega) \Bigg|_{\omega = 0} $$
Se puede aplicar para vectores aleatorios, donde $X = [X_1,~ X_2]^T$ con función característica $\Psi_X(\omega_1, \omega_2)$, podemos aplicar las [[Derivada parcial|derivadas parciales]] dándonos la siguiente relación $$ \frac{\partial^{i + k}}{\partial \omega_1^i ~ \partial \omega_2^k} \Psi_X(\omega) = \frac{\partial^{i + k}}{\partial \omega_1^i ~ \partial \omega_2^k} E\bigg[ \exp\Big(j(\omega_1 ~ X_1 + \omega_2 ~ X_2) \Big) \bigg] = j^{i + k} E\left[ X_1^i ~ X_2^j ~ \exp(j\omega^T X) \right] $$
De nuevo, podemos evaluar en $\omega = [0,~ 0]^T$ y despejar la esperanza, resultando en la siguiente expresión $$ E\left[ X_1^i ~ X_2^j \right] = (-j)^{i + k} ~ \frac{\partial^{i + k}}{\partial \omega_1^i ~ \partial \omega_2^k} \Psi_X(\omega) \Bigg|_{\omega_1 = 0,~ \omega_2 = 0} $$

## Observación
---
$E(X)$ no ne necesariamente tiene que pertenecer al [[Soporte|soporte]] $R_X$ 

