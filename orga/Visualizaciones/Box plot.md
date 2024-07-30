---
dia: 2023-03-20
tags:
  - orga/Visualizaciones
  - nota/facultad
---
### Definición
---
En este [[Plot]] se muestran 5 valores:
- El central de la caja verde es la [[Mediana]]. También visto como el punto que separa a la mitad a la población.
- Los extremos de la caja son los [[Cuantil|cuantiles]] 1 y 3, que representan el punto donde separan 25% de la población para inferior o superior, respectivamente.
- Los bigotes representan, son el valor más alejado en cada dirección, hasta 1.5 veces el rango intercuartílico (que es la diferencia entre el cuantil 1 y 3).

```tikz
\usepackage{pgfplots}
\usetikzlibrary{pgfplots.statistics}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		
	\end{tikzpicture}
\end{document}
```

![[Box plot.webp|600]]

El resto de los valores se los llama outliers.