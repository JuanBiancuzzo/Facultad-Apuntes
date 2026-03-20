---
dia: 2026-03-17
etapa: empezado
referencias:
  - "1111"
aliases: []
tags:
  - carrera/ingeniería-electrónica/control/Control-Digital
  - nota/facultad
vinculoFacultad:
  - tema: Control Digital
    capitulo: "8"
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dado una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] $f$ y dos [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|enteros]] $m \ge 0$ y $n \ge 1$, la aproximación de Padé de orden $[m / n]$ es la [[ingeniería electrónica/analisis 3/Funciones elementales/Función racional|función racional]] $$ R(x) = \frac{\displaystyle \sum_{j = 0}^{m} a_j ~ x^j}{\displaystyle 1 + \sum_{k = 1}^{n} b_k ~ x^k} = \frac{a_0 + a_1 ~ x + a_2 ~ x^2 + \cdots + a_m ~ x^m}{1 + b_1 ~ x + b_2 ~ x^2 + \cdots + b_n ~ x^n} $$ donde $R(x)$ y $f(x)$ coinciden en $$ \begin{align}
	f(0) &= R(0) \\
	f'(0) &= R'(0) \\
	f''(0) &= R''(0) \\
	&~~\vdots \\
	f^{(m + n)}(0) &= R^{(m + n)}(0) \\
\end{align} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```