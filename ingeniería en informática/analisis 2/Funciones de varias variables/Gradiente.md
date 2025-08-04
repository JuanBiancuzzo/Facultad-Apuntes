---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/analisis 2/Funciones de varias variables/Resumen.md]]"
---
# Definición
---
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una [[Función|función]] [[Diferenciable|diferenciable]] definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}^n$. Se define el (vector) gradiente de la función $f$ en el punto $x_0 \in U$, denotado por $grad ~ f(x_0)$ o $\nabla f(x_0)$, como el vector de $\mathbb{R}^n$ dado por $$ \nabla f(x_0) = \left(\frac{\partial f}{\partial x_1}(x_0),~ \frac{\partial f}{\partial x_2}(x_0),~ \cdots,~ \frac{\partial f}{\partial x_n}(x_0) \right) $$

## Sistemas de coordenadas
---
A partir de un [[Sistema cartesiano|sistema de coordenadas cartesiano]] se llega de la siguiente forma

$$ \nabla F = \displaystyle \frac{\partial F}{\partial x} ~ \hat{x} + \frac{\partial F}{\partial y} ~ \hat{y} + \frac{\partial F}{\partial z} ~ \hat{z} $$
 
^gradiente-cartesiano

A partir de un [[Sistema cilíndrico|sistema de coordenadas cilíndricas]] se llega de la siguiente forma 

$$ \nabla F = \displaystyle \frac{\partial F}{\partial r} ~ \hat{r} + \frac{1}{r} \frac{\partial F}{\partial \varphi}  ~ \hat{\varphi} + \frac{\partial F}{\partial z} ~ \hat{z} $$ 
^gradiente-cilindrico

A partir de un [[Sistema esférico|sistema de coordenadas esféricas]] se llega de la siguiente forma

$$ \nabla F = \displaystyle \frac{\partial F}{\partial r} ~ \hat{r} + \frac{1}{r} \frac{\partial F}{\partial \theta} ~ \hat{\theta} + \frac{1}{r \sin(\theta)} \frac{\partial F}{\partial \varphi} ~ \hat{\varphi} $$ 
^gradiente-esferico