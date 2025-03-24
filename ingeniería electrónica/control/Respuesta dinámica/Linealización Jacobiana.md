---
dia: 2025-03-19
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Linealización
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
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