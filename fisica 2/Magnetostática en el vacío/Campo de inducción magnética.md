---
dia: 2023-08-24
tags:
  - fisica-2/Magnetostática-en-el-vacío
  - nota/facultad
  - electro/Campos-eléctricos-y-magnéticos
---
### Definición
---
Existe en una zona del espacio un campo magnético $B$. Los imanes que generan estos campos tienen dos polos. Un polo norte (positivo) y un polo sur (negativo). Los polos iguales se repelen, mientras que los polos distintos se atraen

La unidad del campo magnético es de $\vec{B} = T (\text{tesla}) = \frac{N}{A ~ m}$

#### Carga puntual
---
Usando la [[Ley de Biot y Savalt|ley de Biot y Savalt]], podemos encontrar que el campo magnético de una carga puntual $q_0$ en $\vec{r}'$ es $$ \vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} ~ \frac{q ~ (\vec{v} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} $$
#### Conjunto de cargas
---
Debido al [[Principio de superposición|principio de superposición]], podemos sumar los campos magnéticos de cada carga puntual y llegar a la siguiente definición $$ \vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \sum_i \frac{q_i ~ (\vec{v} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} $$
#### Distribución continua
---
Podemos pensar a este campo magnético como una suma de [[Carga eléctrica|cargas]] infinitesimales. Es decir, una integral $$ \vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \int \frac{I ~ (d\vec{l} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} $$
Para el caso de tener una [[Corriente eléctrica#Corriente superficial|densidad de corriente superficial]] y la [[Corriente eléctrica#Corriente volumétrica|densidad de corriente volumétrica]] sabiendo que $$ I = \int \vec{K} ~ d\vec{l} = \iint \vec{J} ~ d\vec{S} $$ entonces resulta $$ \begin{align} 
    \vec{B}(\vec{r}) &= \frac{\mu_0}{4\pi} \iint \frac{\vec{K} ~ (d\vec{S} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} \\
    \vec{B}(\vec{r}) &= \frac{\mu_0}{4\pi} \iiint \frac{\vec{J} ~ (d\vec{V} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3}
\end{align} $$
