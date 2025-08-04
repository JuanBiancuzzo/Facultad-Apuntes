---
dia: 2022-11-19
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformaciones-conformes
  - carrera/ingeniería-en-informática/analisis-3/Transformaciones-conformes
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Transformaciones conformes/Resumen.md]]"
---
# Definición 
---
Es una [[Transformación conforme]]. Son las funciones racionales de la forma $H_A(z) = \displaystyle\frac{a \cdot z + b}{c \cdot z + d}$, donde el subindice $A$ es la matriz no nula $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \in \mathbb{C}^{2 \times 2}$. Se supone que $c$ y $d$ no son simultaneamente nulos. El dominio de $H_A$ es $\Set{z \in \mathbb{C} : c \cdot z + d \ne 0}$. Una forma util de expresar esta transformación como composición de transformaciones conformes: $$ H_A(z) = \frac{a}{c} \cdot \bigg[ 1 - \frac{det(A)}{a \cdot c} \cdot \frac{1}{z + \frac{d}{c}} \bigg] $$con $c \ne 0$. 