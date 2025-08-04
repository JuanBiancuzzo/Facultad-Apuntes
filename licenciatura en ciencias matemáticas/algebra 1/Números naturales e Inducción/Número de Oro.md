---
dia: 2024-11-06
etapa: sin-empezar
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
aliases:
  - Número de la proposrción divina
  - Número de la proporción áurea
vinculoFacultad:
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este número surge de preguntarse, si tenemos un segmento dividido en dos partes de longitudes $\Phi$ y $1$, con $\Phi \ge 1$, ¿cómo tiene que ser $\Phi$ para que la proporción entre esas dos partes $\Phi$ y $1$ sea la misma que la proporción entre todo el segmento $\Phi + 1$ y $\Phi$. Se tiene $$ \frac{\Phi}{1} = \frac{\Phi + 1}{\Phi}, ~~ \text{i.e.} ~~ \Phi^2 = \Phi + 1, ~~ \text{i.e.} ~~ \Phi^2 - \Phi - 1 = 0 $$
Las dos [[Raíz de una función|raíces]] de la ecuación $X^2 - X - 1 = 0$ son $$ \Phi = \frac{1 + \sqrt{5}}{2} \sim 1.61803 \ge 1 ~~~ \text{y} ~~~ \overline{\Phi} = \frac{1 - \sqrt{5}}{2} < 0 $$
Notemos que vale que $\Phi^2 = \Phi + 1$ y $\overline{\Phi} = \overline{\Phi} + 1$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```