---
dia: 2023-01-23
materia: proba
distribucion: Continua
---

### Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución t-Studen de parametro $\nu$ si su [[Función de densidad]] es $$ f_X(t) = \frac{\Gamma(\frac{\nu + 1}{2})}{\sqrt{\nu \cdot \pi} \cdot \Gamma(\frac{\nu}{2})} \cdot \bigg(1 + \frac{t^2}{\nu} \bigg)^{-\frac{\nu + 1}{2}} $$ donde $\Gamma(x)$ es la [[proba/Distribuciones/Función Gamma]].

##### Notación
$$ X \sim t_\nu $$
#### Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = \mathbb{R}$ 
* $\nu > 0$
* La [[Esperanza]] es $E[X] = 0$ y la [[Varianza]] es $Var(X) = \frac{\nu}{\nu - 2}, \nu > 2$.

#### Relaciones
---
![[Relaciones entre distribuciones#Distribución Chi cuadrado , Distribución normal y Distribución t-Student]]

![[Relaciones entre distribuciones#Distribución t-Student y Distribución normal]]
