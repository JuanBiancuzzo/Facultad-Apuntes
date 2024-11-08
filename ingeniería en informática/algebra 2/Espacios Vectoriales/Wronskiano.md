---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - ingeniería-electrónica/algebra-2/Espacios-Vectoriales
---
# Definición
---
El wronskiano se puede usar para determinar si un conjunto de funciones son [[Linealmente independiente]], para eso se usa lo siguiente

Dado $\{f_1, f_2, \cdots, f_n\}$ perteneciente a $C^{n-1}(I)$ (funciones continuas con $n-1$ derivadas continuas), se define el wronskiano como:
$$W(f_1, f_2, \cdots, f_n)(x_0)= det\begin{pmatrix}
\begin{bmatrix}
f_1(x_0)       & f_2(x_0)       & \cdots & f_n(x_0)       \\
f_1^{'}(x_0)   & f_2^{'}(x_0)   & \cdots & f_n^{'}(x_0)   \\
\vdots         & \vdots         & \ddots & \vdots         \\ 
f_1^{n-1}(x_0) & f_2^{n-1}(x_0) & \cdots & f_n^{n-1}(x_0) \\
\end{bmatrix}
\end{pmatrix}$$

Donde si el wronskiano es diferente de 0, entonces podemos asegurar que es [[Linealmente independiente]] pero, si es 0 entonces no podemos definir si es o no linealmente independiente