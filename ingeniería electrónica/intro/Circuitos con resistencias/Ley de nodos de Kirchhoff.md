---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-electrónica/intro/Circuitos-con-resistencias
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - nota/facultad
aliases:
  - Ley de corrientes de Kirchhoff
etapa: terminado
referencias:
  - "872"
vinculoFacultad:
  - "[[ingeniería electrónica/intro/Circuitos con resistencias/Resumen.md]]"
  - "[[ingeniería en informática/fisica 2/Circuitos de corrientes no dependientes del tiempo/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La suma de todas las [[Corriente eléctrica|corrientes]] eléctricas entrantes a un [[Nodo|nodo]] es igual a la suma de todas las corrientes salientes. Esta parte del principio de [[Ecuación de continuidad#En electromagnetismo|conservación de carga]]

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=2, transform shape, thick]
		\draw (-1, 1) to[short, i=I2, european, o-*] (0, 0);
		\draw (-1, -1) to[short, i=I1, european, o-] (0, 0);
		\draw (0, 0) to[short, i_=I3, european, -o] (1, 1);
		\draw (0, 0) to[short, i_=I4, european, -o] (1, -1);
	\end{circuitikz}
\end{document}
```

Entonces $$ \sum^n i_\text{entrante} = \sum^m i_\text{saliente} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```