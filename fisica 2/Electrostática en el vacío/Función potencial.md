---
dia: 2024-09-01
tags:
  - fisica-2/Electrostática-en-el-vacío
  - nota/facultad
aliases:
  - Potencial eléctrico#Potencial eléctrico
  - Potencial gravitatorio#Potencial gravitatorio
---
### Definición
---


#### Potencial gravitatorio
---


#### Potencial eléctrico
---
Si queremos encontrar la función potencial, y no pensarla solo como una diferencia entre dos puntos, entonces tengo que encontrar un valor de referencia. Como cuando calculamos la fuerza potencial gravitatoria, que depende de un valor de referencia

##### Distribuciones de cargas acotadas
---
En el caso de [[Campo eléctrico#Distribución continua|distribuciones acotadas]], podemos analizar el potencial en el infinito. Esto hará que tienda a $0$ $$ \begin{align} 
    \Delta V^{\infty x_1} = V(x_1) - \underbrace{V(\infty)}_{\to ~ 0} = V(A) &= - \frac{1}{4\pi\epsilon_0} \int \left( \frac{1}{\vec{r}_{x_1} - \vec{r}'} - \frac{1}{\infty} \right) ~ dq' \\
    V(A) &= - \frac{1}{4\pi\epsilon_0} \int \frac{1}{\vec{r}_{x_1} - \vec{r}'} ~ dq' \\
\end{align} $$
##### Distribuciones de cargas no acotadas
---
En el caso de distribuciones no acotadas, nuestra integral no está definida. Por lo que no podemos usar esta definición. Sin embargo, podemos elegir un punto arbitrario $P$ y forzarlo a valer $0$ $$ \Delta V^{Px_1} = V(x_1) - \underbrace{V(P)}_0 = V(x_1) =-\int_{x_1}^P \vec{E} ~ d\vec{l}$$
De esta forma, si resuelvo esta integral, encuentro la función potencial

