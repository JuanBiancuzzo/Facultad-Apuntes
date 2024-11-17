---
dia: 2024-09-05
tags:
  - ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
  - ingeniería-electrónica/analisis-3/Ecuaciones-diferenciales
  - ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - ingeniería-en-informática/analisis-3/Ecuaciones-diferenciales
aliases:
  - Operador de Laplace
---
# Definición
---
Para cada entero positivo $n$ y cada [[Conjunto compacto|conjunto compacto]] $K \subset \mathbb{R}^n$, sea $C^2(K, \mathbb R)$ el espacio de las funciones $u : K \to \mathbb R$ de clase $C^2$ en $K'$ y [[Función continua|continuas]] en $K$. Se trata de un [[Espacio vectorial|espacio vectorial]] real de [[Dimensión|dimensión]] infinita. Ahora, consideremos el espacio $C^0(K', \mathbb R)$ de las funciones continuas $K' \to \mathbb R$, otro espacio vectorial real de dimensión infinita.

La [[Transformación lineal|transformación lineal]] $\Delta : C^2(K, \mathbb R) \to C^0(K', \mathbb R)$ tal que para cada [[Función|función]] $u \in C^2(K, \mathbb R)$ y cada punto $x = \left( x_1, x_2, \cdots, x_n \right) \in K'$ tal que $$ \Delta u(x) = \sum_{i = 1}^n \displaystyle \frac{\partial^2 u}{\partial x_i^2}(x) $$
Esta [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transformación]] lineal se denomina operador de Laplace

También se puede ver como es el operador que resulta de tomar la [[Divergencia|divergencia]] del [[Gradiente|gradiente]]. Opera sobre un campo escalar $$ \Delta f = \nabla^2 f = div ~ \Big[ grad ~ f \Big] = \nabla ~ \Big[ \nabla ~ f \Big] $$
## Sistemas de coordenadas
---
A partir de un [[Sistema cartesiano|sistema de coordenadas cartesiano]] se llega de la siguiente forma

$$ \Delta F = \nabla^2 F = \displaystyle \frac{\partial^2 F}{\partial x^2} + \frac{\partial^2 F}{\partial y^2} + \frac{\partial^2 F}{\partial z^2} $$
 
^laplaciano-cartesiano

A partir de un [[Sistema cilíndrico|sistema de coordenadas cilíndricas]] se llega de la siguiente forma 

$$ \Delta F = \nabla^2 F = \displaystyle \frac{1}{r} \frac{\partial}{\partial r} \left( r ~ \frac{\partial F}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 F}{\partial \varphi^2} + \frac{\partial^2 F}{\partial z^2} $$ 
^laplaciano-cilindrico

A partir de un [[Sistema esférico|sistema de coordenadas esféricas]] se llega de la siguiente forma

$$ \Delta F = \nabla F^2 = \displaystyle \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 ~ \frac{\partial F}{\partial r} \right) + \frac{1}{r^2 \sin(\theta)} \frac{\partial}{\partial \theta} \left( \sin(\theta) ~ \frac{\partial F}{\partial \theta} \right) + \frac{1}{r^2 \sin^2(\theta)} \frac{\partial^2 F}{\partial \varphi^2} $$ 
^laplaciano-esferico

