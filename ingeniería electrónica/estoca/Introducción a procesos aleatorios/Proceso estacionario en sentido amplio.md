---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases:
  - ESA
  - Velocidad de cambio de un proceso estacionario en sentido amplio#Velocidad de cambio de un proceso
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un [[Proceso estocástico|proceso]] $X(t)$ es estacionario en sentido amplio si cumple $$ \begin{align} 
    E[X(t)] &= \mu_X(t) = \mu_X \\
    R_X(t,~ t + \tau) &= E[X(t) ~ X(t + \tau)] = h(\tau) = R_X(\tau)
\end{align} $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]] y $R_X$ es la [[Correlación cruzada#^def-5-3-3|matriz de autocorrelación]]

## Propiedades
---
De estas se puede determinar que la [[Covarianza cruzada#^def-5-3-4|matriz de autocovarianza]] es [[Función|función]] sólo de $\tau$ $$ C_X(t,~ t + \tau) = R_X(t,~ t + \tau) - \mu_X(t) ~ \mu_X(t + \tau) = R_X(\tau) - \mu_X^2 = C_X(\tau) $$
También que la [[Varianza|varianza]] del proceso es constante $$ \sigma_X^2(t) = C_X(t,~ t) = C_X(0) = R_X(0) - \mu_X^2 $$
Tanto $R_X(\tau)$ y $C_X(\tau)$ ambas son no negativas en $\tau = 0$ $$ \begin{array}{c} 
    R_X(0) = E\left[ |X(t)|^2 \right] \ge 0, && C_X(0) = Var(X(t)) \ge 0
\end{array} $$ obteniendo sus [[Máximo|máximo]] en $\tau = 0$ y esto se puede ver usando [[Desigualdad de Cauchy-Schwarz|Cauchy-Schwarz]] $$ \begin{align}
    R_X(\tau)^2 &= E[X(t) ~ \overline{X}(t + \tau)]^2 \\
     &\le E\left[ |X(t)|^2 \right] ~ E\left[ |X(t + \tau)|^2 \right] \\
     &\le R_X^2(0) \\
    C_X(\tau) &= R_X(\tau) - \mu_X^2 \\
     &\le R_X(0) - \mu_X^2 \\
     &\le C_X(0)
\end{align} $$
También son [[Función hermítica|simetría hermítica]] y son [[Función par|funciones pares]]

## Velocidad de cambio de un proceso
---
$R_X(\tau)$ es una medida de la velocidad de cambio del proceso $$ \begin{align} 
    \mathbb{P}(X(t + \tau) - X(t) \ge \varepsilon) &= \mathbb{P}\left((X(t + \tau) - X(t))^2 \ge (\varepsilon)^2 \right) \\
     &\le \frac{1}{\varepsilon^2} E\left[ (X(t + \tau) - X(t))^2 \right] \\
     &\le \frac{1}{\varepsilon^2} \left( E\left[ X^2(t + \tau) \right] + E\left[ X^2(t) \right] - 2 E\left[ X(t + \tau) ~ X(t) \right] \right) \\
     &\le \frac{2 \left( R_X(0) - R_X(\tau) \right)}{\varepsilon^2}
\end{align} $$ notemos que estamos usando la [[Desigualdad de Markov|desigualdad de Markov]]

Si la diferencia $R_X(0) - R_X(\tau)$ es pequeña, entonces la [[Probabilidad|probabilidad]] de que $X(t + \tau)$ difiera de $X(t)$ por más de $\varepsilon$ es baja. Es decir, el proceso no varía mucho en promedio
