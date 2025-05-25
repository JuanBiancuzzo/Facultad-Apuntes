---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases:
  - ESE
  - Proceso estacionario en sentido estricto de primer orden#Proceso estacionario de primer orden
  - Proceso estacionario en sentido estricto de segundo orden#Proceso estacionario de segundo orden
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un [[Proceso estocástico|proceso estocástico]] es estacionario en sentido estricto (ESE) si sus [[Función de distribución#^FIDI|FIDIs]] son [[Sistema invariante en el tiempo|invariante por translaciones de tiempo]]. Es decir, para cualquier constante $\tau$, cualquier $n$ y para instantes cualesquiera $t_1 < t_2 < \cdots < t_n$ $$ X(t_1,~ \cdots,~ t_n) \sim X(t_1 + \tau,~ \cdots,~ t_n + \tau) $$

Si un proceso es ESE, su distribución no depende de cuándo se comienza a contar el tiempo, sino que importa las distancias relativas entre cada uno de los tiempos. Un ejemplo sería el [[Ruido blanco|ruido blanco]]

Cabe aclarar que tiene que cumplirse que $t_k + \tau \in \mathcal{T}$, para $k \in [1,~ n]$, ya que sino no tiene sentido la definición de distribución que se esta planteando


> [!observacion]+ Observación 6.1.2  
> Cualquier [[Proceso estocástico|proceso]] que sea estacionario estricto, debe ser [[Proceso estacionario en sentido amplio|estacionario en sentido amplio]]
^obs-6-1-2

## Proceso estacionario de primer orden
---
Un [[Proceso estocástico|proceso]] $X(t)$ es estacionario de primer orden, su FIDI tiene que cumplir que $$ F_{X(t)} = F_{X(0)} = F_X, ~~~~ \forall t \in \mathcal{T} $$
Luego, las [[Probabilidad|probabilidades]] de [[Evento|eventos]] que involucren solamente a $X(t)$ tampoco depende del tiempo $$ \begin{array}{c} 
    \mathbb{P}(X(t) \in A) = \text{cte}, && E[g(X(t))] = \text{cte}
\end{array} $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]]

## Proceso estacionario de segundo orden
---
Un proceso $X(t)$ es estacionario de segundo orden, su FIDI tiene que cumplir que $$ F_{X(t_1),~ X(t_2)} = F_{X(0),~ X(t_2 - t_1)} = F_{X(t_1 - t_2),~ X(0)}, ~~~~ \forall t_1,~ t_2 \in \mathcal{T} $$
Luego $F_{X(t_1),~ X(t_2)}$ depende solamente de $|t_2 - t_1|$, así como las probabilidades de eventos que involucren a $X(t_1)$ y $X(t_2)$  $$ E[g(X(t_1),~ X(t_2))] = h(|t_2 - t_1|) $$ donde $h$ es una [[Función|función]] cualquiera y $E[\cdot]$ es la esperanza

Esto mismo se ve reflejado en la [[Covarianza cruzada#Para un proceso estocástico|autocovarianza]] y la [[Correlación cruzada#Para un proceso estocástico|autocorrelación]] que dependen sólo de la diferencia entre los tiempos $$ \begin{align} 
    R_X(t_1,~ t_2) = E[X(t_1) ~ X(t_2)] &\equiv R_X(t_2 - t_1) = R_X(\tau) \\
    C_X(t_1,~ t_2) = R_X(t_1,~ t_2) - \mu_X(t_1) ~ \mu_X(t_2) &\equiv R_X(t_2 - t_1) - \mu_X^2 = C_X(\tau)
\end{align} $$ donde $\tau$ es la diferencia entre los tiempos

Notemos que ambas son [[Función par|funciones pares]], ya que ambas son (por la definición por fuera de estacionariedad) funciones simétricas

Estas funciones también tienen sus [[Máximo|máximo]] cuando la diferencia es nula, es decir $|C_X(\tau)| \le C_X(0)$ y $|R_X(\tau)| \le R_X(0)$, lo cual no implica que es el único máximo.

> [!demostracion]- Demostración
> Se puede ver que aplicando la [[Desigualdad de Cauchy-Schwarz|desigualdad de Cauchy-Schwarz]] $$ \begin{align}
>     |E[X(t_1) ~ E(t_2)]| &\le \left( E\left[ X(t_1) \right]^2 ~ E\left[ X(t_2) \right]^2 \right)^\frac{1}{2} \\
>      &\le R_X(0)
 \end{align} $$

Si en algún $\tilde{\tau}$ se tiene que $R_X(\tilde{\tau}) = R_X(0)$ entonces $R_X$ es [[Función periódica|periódica]] de [[Función periódica#^periodo|período]] $\tilde{\tau}$

