---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Topología/2
  - ingeniería-electrónica/analisis-2/Topología/2
---
# Definición
---
Como con funciones de una variable, donde la derivada nos daba la pendiente de la recta tangente, por lo tanto podríamos construirla

El equivalente seria el plano tangente en un punto $(x_0, y_0)$, en una [[Función|función]] tal que cualquier punto se pueda escribir $(x_0, y_0, f(x_0, y_0))$

El plano tangente, tiene que tener como normal $N_p = \bigg( -\frac{\partial f}{\partial x}(x_0, y_0), -\frac{\partial f}{\partial y}(x_0, y_0), 1 \bigg)$ ([[Normal de una superficie|normal de una superficie]]), entonces sabiendo la normal, podemos llegar a la ecuación que es 

$$ z = f(x_0, y_0) + \frac{\partial f}{\partial x}(x_0, y_0)(x - x_0) + \frac{\partial f}{\partial y}(x_0, y_0)(y - y_0) $$

Tambien la podemos escribir como

$$ (\vec{X} - \vec{a}) \cdot \vec{n}_0 = 0 $$

Donde $\vec{n}_0 = \vec{F}'_u(u_0, v_0) \times \vec{F}'_v(u_0, v_0)$

## Nota
---
Si $f$ es [[Diferenciable|diferenciable]], entonces [[Gradiente|Gradiente]] es perpendicular al [[Conjunto de nivel|conjunto de nivel]] de $f(x_0, y_0)$

Para eso podemos parametrizar la curva de nivel, generando un $\vec{g}(t)$, que podemos derivar, por lo que ahora tenemos que 

$$ \nabla f(x_0, y_0) \cdot (\vec{g}'(t_0)) = 0 $$

Donde $t_0$ es un $t$ que $\vec{g}(t_0) = (x_0, y_0)$