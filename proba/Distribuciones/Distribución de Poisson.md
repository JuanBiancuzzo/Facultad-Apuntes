---
dia: 2023-01-23
materia: proba
distribucion: Discreta
---

### Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución de Poisson de parámetro $\mu$ si su [[Función de probabilidad]] es $$ p_X(x) = \frac{1}{x!} \cdot \mu^x \cdot e^{-\mu}$$
##### Notación
$$ X \sim Poi(\mu) $$

#### Notas
---
* El [[Rango]] de $X$ es $R_X = \{ x \in \mathbb{Z} : x \geq 0 \}$
* $\mu > 0$ 
* La [[Esperanza]] es $E[X] = \mu$ y la [[Varianza]] es $Var(X) = \mu$


### Propiedades
---
Sea $X_n$ un [[Vector aleatorio]] donde $X_i  \sim Poi(\mu_i)$, y los [[Variables independientes|intependiente]] entre si. Entonces $$ \sum^n X_i \sim Poi\left(\sum^n \mu_i \right) $$ 