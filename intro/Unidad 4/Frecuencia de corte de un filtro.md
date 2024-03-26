---
dia: 2023-01-23
materia: intro
capitulo: 4
---
### Definición
---
La frecuencia de corte de un filtro ($f_\text{corte}$) delimita y separa los rangos de lo que se considera las frecuencias que 'pasan' y las que se 'eliminan'.

##### Expresiones
---
Se calcula como:
$$ f_\text{corte} = \frac{1}{2 \pi ~ R ~ C} = \frac{1}{2 \pi ~ \tau} $$

Notar que depende de la [[Constante de tiempo]].

Además, la frecuencia de corte es la frecuencia a la cual la [[Ganancia]] se reduce a 0.707 de su valor máximo.
Es decir, que:
$$\begin{align}
G (f_\text{corte})= \frac{V_0}{V_i}(f_\text{corte})=\frac{1}{\sqrt{2}}
\end{align}$$
Esto generalmente se utiliza en gráficos de ganancia vs frecuencia, como el que se muestra a continuación.

![[Frecuencia de corte.webp]]


