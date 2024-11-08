---
dia: 2024-09-03
tags: 
 - ingeniería-en-informática/analisis-2/Propiedades-de-funciones
 - nota/facultad
---
# Definición
---
Sea $\vec{f} : D \subset \mathbb{R}^2 \to \mathbb{R}^2$ y $C$ una [[Curva|curva]] cerrada, plana, suave o suave a trozos, orientada en sentido positivo, perteneciente a $D$. Entonces podemos aplicar el teorema de Green

El teorema de Green se utiliza para calcular la circulación en entornos de dos dimensiones. Aplicando lo mismo, pero usando una [[Superficie|superficie]] que sea totalmente parte del plano. La normal en este caso sería perpendicular al plano $$ \begin{matrix} 
    \vec{F} = \Big( f_1(x, ~y), ~f_2(x, ~y), ~0 \Big), ~~~~~ \hat{n}=(0, ~0, ~1) \\
    \displaystyle \nabla \times \vec{F} = \left( 0, ~0, ~ \frac{\partial f_2}{\partial x} - \frac{\partial f_1}{\partial y} \right)
\end{matrix} $$
A partir del [[Teorema de Stokes|teorema de Stokes]], llegamos al teorema de Green $$ \begin{align} 
    \oint_{\partial S^+} \vec{f} ~ d\vec{S} &= \iint_{S} \nabla \times \vec{F} ~ d\vec{\sigma} \\
     &= \iint_{S} \left( \frac{\partial f_2}{\partial x} - \frac{\partial f_1}{\partial y} \right) ~ dx ~dy
\end{align} $$
