---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/robótica-móvil/Repaso-álgebra
  - nota/facultad
aliases:
  - Perpendicularidad entre vectores
  - Sistema ortogonal
  - Conjunto ortogonal
  - Matriz ortogonal#Para matrices
vinculoFacultad:
  - tema: Nomenclatura
    capitulo: 1
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
  - tema: Espacios euclídeos
    capitulo: 3
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
  - tema: Repaso álgebra
    capitulo: 1
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
# Definición
---
Se define a dos vectores $x, y \in \mathbb{R}^n$ son ortogonales si $\langle x, y \rangle = 0$, a esto se llega a partir de la [[Desigualdad de Cauchy-Schwarz|desigualdad de Cauchy-Schwarz]] 

Teniendo un [[Conjunto|conjunto]] de vectores $v_1, v_2, \cdots, v_k$ en $\mathbb{R}^n$, es un conjunto ortogonal si

$$v_i \cdot v_j = 0, \text{ si } i \ne j$$

Algo a notar, un conjunto ortogonal, por si mismo siempre es [[Linealmente independiente|linealmente independiente]]

## Relación con el producto cruz
---
En este caso, partiendo de la definición del [[Producto cruz|producto cruz]], se puede definir a dos vectores ortogonales si 
$$ \lVert x \times y \rVert = \lVert x \rVert \cdot \lVert y \rVert$$
Utilizando la [[Norma|norma]] como $\lVert \cdot \rVert$

## Para matrices
---
La matriz $Q$ es ortogonal sii sus vectores columnas o filas, representan una [[ingeniería en informática/analisis 2/Nomenclatura/Base ortonormal|base ortonormal]] $$ q_{*i}^T q_{*i} = \begin{cases}
    1 & \text{si} ~ i = j \\
    0 & \text{si} ~ i \ne j \\
\end{cases} ~~~~ \forall i,~j $$ y esta [[ingeniería en informática/algebra 2/Transformaciones lineales/Matriz de una transformación lineal|transformación lineal]], preserva la norma

### Propiedades
---
* La [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz transpuesta|transpuesta]] es la inversa $$ Q ~ Q^T = Q^T ~ Q = \mathbb{I} $$
* El [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Determinante|determinante]] tiene norma unitaria $$ 1 = \det(\mathbb{I}) = \det\left( Q^T ~ Q \right) = \det\left( Q ~ Q^T \right) = \det(Q)^2 $$