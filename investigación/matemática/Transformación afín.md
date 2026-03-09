---
dia: 2024-11-10
etapa: empezado
tags:
  - investigación/matemática
  - carrera/ingeniería-electrónica/robótica-móvil/Repaso-álgebra
  - nota/facultad
  - nota/investigacion
referencias:
  - "486"
aliases:
  - Transformación homogénea
vinculoFacultad:
  - tema: Repaso álgebra
    capitulo: 1
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se puede de definir una transformación afín, la cual representa una [[Translación|translación]] y una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]], donde en $2$ [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensiones]] $$ \begin{align} 
    \begin{bmatrix} x \\ y \end{bmatrix}_B &= \begin{bmatrix} 
        \cos \theta & \sin \theta \\ 
        -\sin \theta & \cos \theta \\ 
    \end{bmatrix}^{B}_{A} ~ \begin{bmatrix} x \\ y \end{bmatrix}_A + \begin{bmatrix} t_x \\ t_y \end{bmatrix}_A \\
     &= R^{B}_{A} ~ \begin{bmatrix} x \\ y \end{bmatrix}_A + t_A
\end{align} $$
Para representarlo con una sola [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] se puede $$ \begin{align} 
    \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}_B &= \begin{bmatrix} 
        R^{B}_{A} & t_A \\ 
        0 & 1 \\ 
    \end{bmatrix} ~ \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}_A \\
     &= \xi^{B}_{A} ~ \begin{bmatrix} x \\ y \\ 1 \end{bmatrix}_A 
\end{align} $$
Donde la composición se puede expresar como $$ \xi_1 ~ \xi_1 = \begin{bmatrix} 
    R_1 & t_1 \\ 0 & 1
\end{bmatrix} ~ \begin{bmatrix} 
    R_2 & t_2 \\ 0 & 1
\end{bmatrix} = \begin{bmatrix} 
    R_1 ~ R_2 & t_1 + R_1 ~ t_2 \\ 0 & 1
\end{bmatrix} $$
Su [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz inversa|matriz inversa]] esta dada por $$ \xi^{-1} = \begin{bmatrix} 
    R & t \\ 0 & 1
\end{bmatrix}^{-1} = \begin{bmatrix} 
    R^T & -R^T ~ t \\ 0 & 1
\end{bmatrix} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```