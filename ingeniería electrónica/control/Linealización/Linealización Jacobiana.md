---
dia: 2025-03-19
etapa: ampliar
referencias:
  - "879"
  - "899"
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/control/Linealización
  - carrera/ingeniería-electrónica/circuitos/Circuitos-con-diodos
aliases:
  - Análisis de pequeña señal
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Con la finalidad de obtener un [[Modelo matemático|modelo matemático]] [[Sistema lineal|lineal]] para un [[Sistema lineal|sistema no lineal]], se supone que las [[Variable de estado|variables]] sólo se desvían ligeramente de alguna condición de operación. Considérese un [[Sistema|sistema]] cuya entrada es $x(t)$ y cuya salida es $y(t)$. La relación entre $y(t)$ y $x(t)$ se obtiene mediante $$ y = f(x) $$
Si la condición de operación normal corresponde a $\bar{x}$ y $\bar{y}$, la ecuación anterior se expande en [[Serie de Taylor|serie de Taylor]] alrededor de ese punto, del modo $$ y = \bar{y} + \frac{d}{dx}f(\bar{x}) ~ (x - \bar{x}) + \frac{1}{2!} \frac{d^2}{dx^2}f(\bar{x}) ~ (x - \bar{x})^2 + \cdots = \sum_{n = 0}^{\infty} \frac{1}{n!} \frac{d^n}{dx^n} f(\bar{x}) ~ (x - \bar{x})^n $$
Si la variación $x - \bar{x}$ es pequeña, es posible no considerar los términos de orden superior en $x - \bar{x}$. Entonces, usando el [[Polinomio de Taylor|polinomio de Taylor de primer orden]] $$ y = \bar{y} + K ~ (x - \bar{x}) $$ donde $K = \frac{d}{dx} f(x) \bigg|_{x = \bar{x}}$  

En forma general, vamos a tener un [[Sistema invariante en el tiempo|sistema invariante en el tiempo]] dado por $\dot{x} = f(x,~ u)$, para este análisis de pequeña señal, tomando $\bar{x}$ y $\bar{u}$ como su condición de operación, donde la serie de Taylor, usando el operador del [[Jacobiana|Jacobiano]] $D$, de la siguiente forma $$ \dot{x} = \sum_{k = 0}^{\infty} \frac{1}{k!} D^kf(\bar{x},~ \bar{u}) ~ \begin{bmatrix} x - \bar{x} \\ u - \bar{u} \end{bmatrix}^k $$ donde se tiene que un vector elevado a la $k$, es elevar a $k$ cada uno de sus componentes

Suponiendo que los términos para $k > 1$ son despreciables, podemos aproximar entonces $f(x,~ u)$ de la siguiente forma $$ \dot{x} \simeq f(\bar{x},~ \bar{u}) + Df(\bar{x},~ \bar{u}) ~ \begin{bmatrix} x - \bar{x} \\ u - \bar{u} \end{bmatrix} $$
Expresándolo por cada una de sus $i$-esimo componente, donde $i \in [1,~ \cdots,~ N]$ $$ \dot{x}_i = f_i(\bar{x},~ \bar{u}) + \sum_{k = 1}^{N} \frac{\partial}{\partial x_k} f_i(\bar{x},~ \bar{u}) ~ (x_k - \bar{x}_k) + \sum_{k = 1}^{M} \frac{\partial}{\partial u_k} f_i(\bar{x},~ \bar{u}) ~ (u_k - \bar{u}_k) $$ o lo podemos expresar como [[Matriz|matrices]] de la siguiente forma $$ \dot{x} = f(\bar{x},~ \bar{u}) + A (x - \bar{x}) + B(u - \bar{u}) $$ donde tomamos las matrices $$ A = \begin{bmatrix} 
    \displaystyle \frac{\partial}{\partial x_1} f_1 & \displaystyle \frac{\partial}{\partial x_2} f_1 & \cdots & \displaystyle \frac{\partial}{\partial x_N} f_1 \\
    \displaystyle \frac{\partial}{\partial x_1} f_2 & \displaystyle \frac{\partial}{\partial x_2} f_2 & \cdots & \displaystyle \frac{\partial}{\partial x_N} f_2 \\
    \vdots & \vdots & \ddots & \vdots \\
    \displaystyle \frac{\partial}{\partial x_1} f_N & \displaystyle \frac{\partial}{\partial x_2} f_N & \cdots & \displaystyle \frac{\partial}{\partial x_N} f_N 
\end{bmatrix}_{\displaystyle  (\bar{x},~ \bar{u})} ~~~~ B = \begin{bmatrix} 
    \displaystyle \frac{\partial}{\partial u_1} f_1 & \displaystyle \frac{\partial}{\partial u_2} f_1 & \cdots & \displaystyle \frac{\partial}{\partial u_M} f_1 \\
    \displaystyle \frac{\partial}{\partial u_1} f_2 & \displaystyle \frac{\partial}{\partial u_2} f_2 & \cdots & \displaystyle \frac{\partial}{\partial u_M} f_2 \\
    \vdots & \vdots & \ddots & \vdots \\
    \displaystyle \frac{\partial}{\partial u_1} f_N & \displaystyle \frac{\partial}{\partial u_2} f_N & \cdots & \displaystyle \frac{\partial}{\partial u_M} f_N 
\end{bmatrix} $$

Tomando un [[Punto de equilibrio|punto de equilibrio]] $(x_e,~ u_e)$, recordando que $f_i(x_e,~ u_e) = 0$, $\forall i \in [1,~ \cdots,~ N]$, y usando el cambio de variable $z = x - x_e$ y $v = u - u_e$ obtenemos $$ \dot{z} = A z + Bv $$


Dado un [[Sistema|sistema]] $\dot{x} = f(x,~ u)$, donde $x \in \mathbb{R}^n$ y $u \in \mathbb{R}$, con la solución $y = h(x,~ u)$ donde $y \in \mathbb{R}$. Vamos a linealizar en un punto $z = x - x_0$ e $v = u - u_0$ usando el [[Polinomio de Taylor|polinomio de Taylor de orden 1]] teniendo así $$ \begin{array}{l}
    \begin{cases} 
        \displaystyle \dot{x}_1 = f_1(x,~ u) \approx f_1(z,~ v) + \sum_i^n \frac{\partial}{\partial x_i} f_1 \Big|_{z,~ v)} \\
        ~~~~~~ \vdots \\
        \displaystyle \dot{x}_n = f_n(x,~ u) \approx f_n(z,~ v) + \sum_i^n \frac{\partial}{\partial x_i} f_n \Big|_{(z,~ v)} \\
    \end{cases} \\\\
    ~~~~ w = y - h(x_0,~ u_0)
\end{array} $$ para valores de $x$ y $u$ cercanos a $x_0$ y $u_0$

Esto se puede expresar de forma más simple usando el [[Jacobiana|Jacobiano]] obteniendo así la siguiente expresión $$ \dot{x} = Df(z,~ v) ~ [1,~ \cdots,~ 1]^T + [f_1(z, v),~ \cdots,~ f_n(z, v)]^T $$
Ahora, notemos que si tomamos a $x_0$ y a $u_0$ como un [[Punto de equilibrio|punto de equilibrio]] $(x_e,~ u_e)$, entonces se simplifica a $$ \dot{x} = Df(z,~ v) ~ [1,~ \cdots,~ 1]^T $$
Que se puede reescribir la ecuación del sistema y su solución como $$ \begin{matrix} 
    \frac{dz}{dt} = Az + Bv, && w = Cz + Dv
\end{matrix} $$ donde $$ \begin{matrix} 
    \displaystyle A = \frac{\partial f}{\partial x} \Bigg|_{(x_e,~ u_e)} &&
    B = \frac{\partial f}{\partial u} \Bigg|_{(x_e,~ u_e)} &&
    C = \frac{\partial h}{\partial x} \Bigg|_{(x_e,~ u_e)} &&
    D = \frac{\partial h}{\partial u} \Bigg|_{(x_e,~ u_e)} 
\end{matrix} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```