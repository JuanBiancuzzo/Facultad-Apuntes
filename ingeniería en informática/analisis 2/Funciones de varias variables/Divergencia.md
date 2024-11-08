---
dia: 2024-09-04
tags:
  - ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
  - ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
referencias:
  - "225"
aliases:
  - Campo solenoidal
---
# Definición
---
La divergencia mide la diferencia entre el flujo saliente y el flujo entrante de un [[Campo vectorial|campo vectorial]] sobre la [[Superficie|superficie]] que rodea a un volumen de control, por tanto, si el campo tiene "fuentes" la divergencia será positiva, y si tiene "sumideros", la divergencia será negativa. La divergencia mide la rapidez neta con la que se conduce la materia al exterior de cada punto, y en el caso de ser la divergencia idénticamente igual a cero, describe al flujo incompresible del fluido. Llamado también campo solenoidal<sup><a href="#ref-225" style="color: inherit; text-decoration: none;">[225]</a></sup> 

Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}^n$ una [[Función|función]] [[Diferenciable|diferenciable]] definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}^n$. Se define la divergencia de la función $f$ en el punto $x_0 \in U$, denotado por $div ~ \vec{f}(x_0)$ o $\nabla \vec{f}(x_0)$, como el [[Producto punto|producto escalar]] dado por $$ \nabla \vec{f}(x_0) = \left(\frac{\partial}{\partial x_1}(x_0),~ \frac{\partial}{\partial x_2}(x_0),~ \cdots,~ \frac{\partial}{\partial x_n}(x_0) \right) ~ \left(f_1(x_0),~ f_2(x_0),~ \cdots,~ f_n(x_0) \right) $$
## Sistemas de coordenadas
---
A partir de un [[Sistema cartesiano|sistema de coordenadas cartesiano]] se llega de la siguiente forma

$$ \nabla \vec{F} = \displaystyle \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} $$
 
^divergencia-cartesiano

A partir de un [[Sistema cilíndrico|sistema de coordenadas cilíndricas]] se llega de la siguiente forma 

$$ \nabla \vec{F} = \displaystyle \frac{1}{r} \frac{\partial (rF_r)}{\partial r} + \frac{1}{r} \frac{\partial F_\varphi}{\partial \varphi} + \frac{\partial F_z}{\partial z} $$ 
^divergencia-cilindrico

A partir de un [[Sistema esférico|sistema de coordenadas esféricas]] se llega de la siguiente forma

$$ \nabla \vec{F} = \displaystyle \frac{1}{r^2} \frac{\partial (r^2 F_r)}{\partial r} + \frac{1}{r \sin(\theta)} \frac{\partial (\sin(\theta) F_\theta)}{\partial \theta} + \frac{1}{r \sin(\theta)} \frac{\partial F_\varphi}{\partial \varphi} $$ 
^divergencia-esferico

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```