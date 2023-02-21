---
dia: 2023-01-23
materia: proba
distribucion: Continua
---

### Definición
---
La [[Variable aleatoria]] $X$ que toma los valores $x \in \mathbb{R}$ tiene una distribucipon normal si su [[Función de densidad]] es de la forma $$ f_X(x) = \varphi(x) = \frac{1}{\sqrt{2 \cdot \pi \cdot \sigma }} \cdot e^{-(x - \mu)^2 \cdot (2 \cdot \sigma^2)^{-1}} $$
##### Notación
$$ X \sim N(\mu, \sigma^2) $$

#### Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = \mathbb{R}$ 
* $\mu \in \mathbb{R}, \sigma^2 > 0$
* La [[Esperanza]] es $E[X] = \mu$ y la [[Varianza]] es $Var(X) = \sigma$.



### Calculo de probabilidad
---
$$ \Phi(x) = F_X(x) = \mathbb{P}(X \leq x) = \int_{-\infty}^{x} \frac{1}{\sqrt{2 \cdot \pi \cdot \sigma} } \cdot e^{-(t - \mu)^2 \cdot (2 \cdot \sigma^2)^{-1}} dt $$

#### Observación
---
Para cuando $\mu = 1$ y $\sigma = 0$ se le dice distrobución normal estandar.


### Propiedades
---
Sean $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(\mu, \sigma^2)$ entonces $Z = \sqrt{n} \frac{\overline{X} - \mu}{\sigma} \sim N(\mu = 0, \sigma^2 = 1)$.

Si $X_1, \cdots, X_n$ son [[Variables independientes|independientes]] con $X_i \sim N(0,1)$, y $U = \displaystyle\sum_{i = 1}^n X_i^2$ entonces $U \sim \chi_n^2$ ([[Distribución Chi cuadrado]])

Sean $Z \sim N(0, 1)$ y $U \sim \chi_n^2$ ([[Distribución Chi cuadrado]]), entonces si $Z$ y $U$ son [[Variables independientes|independientes]] $$ T = \frac{Z}{\sqrt{\displaystyle\frac{U}{n}}} \sim t_n $$ donde $\lim_{n \to \infty} t_n \sim N(0, 1)$ ([[Distribución t-Student]]).