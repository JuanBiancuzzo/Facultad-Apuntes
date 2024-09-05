---
dia: 2024-09-04
tags:
  - analisis-2/Funciones-de-varias-variables
  - nota/facultad
referencias:
  - "226"
aliases:
  - Rotacional
---
### Definición
---
En el cálculo vectorial, el rotacional o rotor es un operador vectorial sobre [[Campo vectorial|campos vectoriales]] definidos en un [[Conjunto abierto|abierto]] de [[Espacio Rn|espacio]] $\mathbb{R}^3$ que muestra la tendencia de un campo vectorial a inducir [[Rotación|rotación]] alrededor de un punto

Matemáticamente, esta idea se expresa con el [[Límite|límite]] de la circulación del campo vectorial, cuando la [[Curva|curva]] sobre la que se integra se reduce a un punto $$ U \cdot rot ~ F = U \cdot \nabla \times F \equiv \lim_{\Delta S \to 0} \frac{1}{\Delta S} \oint_C F ~ dr $$
Aquí, $\Delta S$ es el área de la [[Superficie|superficie]] apoyada en la curva $C$, que se reduce a un punto. El resultado de este límite no es el rotacional completo (que es un vector), sino solo su componente según la dirección normal a $\Delta S$ y orientada según la regla de la mano derecha. Para obtener el rotacional completo deberán calcularse tres límites, considerando tres curvas situadas en planos perpendiculares<sup><a href="#ref-226" style="color: inherit; text-decoration: none;">[226]</a></sup> 

Se puede calcular, en con el [[Producto cruz|producto vectorial]] dependiendo de cada sistema de coordenadas

A partir de un [[Sistema cartesiano|sistema de coordenadas cartesiano]] se llega de la siguiente forma
$$ \begin{matrix} 
    \nabla \times F = ~ \begin{array}{|ccc|} 
        \hat{x} & \hat{y} & \hat{z} \\
        \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
        F_x & F_y & F_z
    \end{array} \\\\
    \displaystyle \nabla \times F = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) ~ \hat{x} + \left( \frac{\partial F_x}{\partial z}  - \frac{\partial F_z}{\partial x} \right) ~ \hat{y} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) ~ \hat{z}
\end{matrix} $$ 
^rotor-cartesiano

A partir de un [[Sistema cilíndrico|sistema de coordenadas cilíndricas]] se llega de la siguiente forma 
$$ \begin{matrix} 
    \nabla \times F = ~ \begin{array}{|ccc|} 
        \hat{r} & r ~ \hat{\varphi} & \hat{z} \\
        \frac{\partial}{\partial r} & \frac{\partial}{\partial \varphi} & \frac{\partial}{\partial z} \\
        F_r & r ~ F_\varphi & F_z
    \end{array} \\\\
    \displaystyle \nabla \times F = \left( \frac{1}{r} \frac{\partial F_z}{\partial \varphi} - \frac{\partial F_\varphi}{\partial z} \right) ~ \hat{r} + \left( \frac{\partial F_r}{\partial z}  - \frac{\partial F_z}{\partial r} \right) ~ \hat{\varphi} + \frac{1}{r} \left( \frac{\partial (r F_\varphi)}{\partial r} - \frac{\partial F_r}{\partial \varphi} \right) ~ \hat{z}
\end{matrix} $$ 
^rotor-cilindrico

A partir de un [[Sistema esférico|sistema de coordenadas esféricas]] se llega de la siguiente forma
$$ \begin{matrix} 
    \nabla \times F = \displaystyle \frac{1}{r^2 \sin(\theta)} ~  \begin{array}{|ccc|} 
        \hat{r} & r ~ \hat{\theta} & r\sin(\theta) ~ \hat{\varphi} \\
        \frac{\partial}{\partial r} & \frac{\partial}{\partial \theta} & \frac{\partial}{\partial \varphi} \\
        F_r & r ~ F_\theta & r \sin(\theta) ~ F_\varphi
    \end{array} \\\\
    \displaystyle \nabla \times F = \frac{1}{r \sin(\theta)} \left( \frac{\partial (\sin(\theta) ~ F_\varphi)}{\partial \theta} - \frac{\partial F_\theta}{\partial \varphi} \right) ~ \hat{r} + \frac{1}{r} \left(\frac{1}{\sin(\theta)} \frac{\partial F_r}{\partial \varphi}  - \frac{\partial (r F_\varphi)}{\partial r} \right) ~ \hat{\theta} + \frac{1}{r} \left( \frac{\partial (r F_\theta)}{\partial r} - \frac{\partial F_r}{\partial \theta} \right) ~ \hat{\varphi}
\end{matrix} $$ 
^rotor-esferico

### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```