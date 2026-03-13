---
tags:
  - facultad/resumen
  - carrera/ingeniería-electrónica/control/Realizaciones
nombreResumen: Realizaciones
capitulo: "3"
referencias:
  - "877"
  - "899"
  - "884"
  - "913"
  - "920"
  - "888"
  - "889"
materiaResumen: ingeniería electrónica/control/Control automático (TA133).md
infoTemaMateria:
  materia: Control automático
  carrera: Ingeniería electrónica
---
# Índice
---
```dataviewjs
	await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```

# Resumen
---
Considerando una [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]] SISO (single input, single output). La idea será implementar las [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|ecuación de estado]] y de la salida de un [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|sistema dinámico]] partiendo de su función de transferencia. Hay varias formas para poder plantear esto porque en sí hay varias soluciones, varias formas de designar las variables de estados para describir el sistema dinámicos. Estas son 
* [[ingeniería electrónica/control/Realizaciones/Forma canónica controlable|Forma canónica controlable]]
* [[ingeniería electrónica/control/Realizaciones/Forma canónica modal|Forma canónica modal]]
* [[ingeniería electrónica/control/Realizaciones/Forma canónica observable|Forma canónica observable]]

Solo podemos representar en [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|espacio de estados]] las [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema#^estrictamente-propia|transferencias estrictamente propias]]. Recordando la transferencia a partir del espacio de estados $$ G(s) = C ~ (s\mathbb{I} - A)^{-1} ~ B + D $$ con $D = 0$, ya que si no lo fuera sería [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema#^bipropia|bipropia]], ya que partiendo de una transferencia estrictamente propia se puede reescribir de la siguiente forma al agregar una constante $$ \begin{align}
    G(s) &= \frac{b(s)}{a(s)} + d \\
     &= \frac{b_1 ~ s^{n - 1} + \cdots b_{n - 1} ~ s + b_n}{s^n + a_1 ~ s^{n - 1} + \cdots a_{n - 1} ~ s + a_n} + d \\
     &= \frac{d ~ s^n + (b_1 + d ~ a_1) ~ s^{n - 1} + \cdots (b_{n - 1} + d ~ a_{n - 1}) ~ s + (b_n + d ~ a_n)}{s^n + a_1 ~ s^{n - 1} + \cdots a_{n - 1} ~ s + a_n} \\
\end{align} $$ donde vemos que si $d$ es distinto de $0$ entonces pasa a ser bipropia

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasAcumuladas", { archivo: dv.current() });
```
