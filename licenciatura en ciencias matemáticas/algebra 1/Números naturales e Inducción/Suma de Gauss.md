---
dia: 2024-11-04
etapa: terminado
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Supongamos que queremos sumar los $100$ primeros [[Número Natural|números naturales]], o sea $$ 1 + 2 + 3 + \cdots + 98 + 99 + 100 $$
Gauss propone la forma de visualizarlo de la siguiente forma $$ \begin{matrix} 
    S & = & 1 & + & 2 & + & 3 & + & \cdots & + & 98 & + & 99 & + & 100 \\
    S & = & 100 & + & 99 & + & 98 & + & \cdots & + & 3 & + & 2 & + & 1 \\\hline
    2S & = & 101 & + & 101 & + & 101 & + & \cdots & + & 101 & + & 101 & + & 101 & = 100 \cdot 101
\end{matrix} $$
Luego $S = (100 \cdot 101) / 2$

Este procedimiento es claramente generalizable a cualquier número natural $n$, y se obtiene $$ \forall n \in \mathbb{N}: ~~~~ 1 + 2 + \cdots + (n - 1) + n = \frac{n (n + 1)}{2} $$
Notar que este número siempre es un número natural ya que $n (n + 1)$ siempre es un número par

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```