---
dia: 2025-03-21
etapa: ampliar
referencias:
  - "1022"
tags:
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La delta de Kronecker es una [[Función|función]] de dos variables, generalmente solo [[Números enteros|números enteros]] no negativos. La función vale $1$ si las dos variables son iguales y $0$ en caso contrario $$ \delta_{i,~j} = \begin{cases} 
    1 & \text{si} ~ i = j, \\
    0 & \text{si} ~ i \ne j
\end{cases} $$

En [[Álgebra lineal|álgebra lineal]], la [[Matriz identidad|matriz identidad]] $I$ de orden $n \times n$ tiene entradas iguales a la delta $$ I_{i,~ j} = \delta_{i,~ j} $$ donde $i$ y $j$ toman los valores $1,~ 2,~ \cdots,~ n$

## Propiedades 
---
Se satisfacen las siguientes ecuaciones $$ \begin{matrix}
    \displaystyle \sum_j \delta_{i,~ j} ~ a_j = a_i, && 
    \displaystyle \sum_i a_i ~ \delta_{i,~ j} = a_j, &&
    \displaystyle \sum_k \delta_{i,~ k} ~ \delta_{k,~ j} = \delta_{i,~ j} &&
\end{matrix} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```