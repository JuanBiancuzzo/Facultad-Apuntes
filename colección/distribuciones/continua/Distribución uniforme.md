---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - distribuciones/continua
  - nota/colección
nombreDistribucion: Uniforme
tipoDistribucion: continua
vinculoFacultad:
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Para una [[Variable aleatoria continua]] se define su [[Función de densidad de probabilidad]] de forma que $$ f_X(x) = \frac{1}{b - a} \cdot \mathbb{1} \{ a < x < b \}$$

### Notación
$$ X \sim U(a, b) $$

## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [a, b]$ 
* $a < b$
* La [[Esperanza]] es $E[X] = \frac{a + b}{2}$ y la [[Varianza]] es $Var(X) = \frac{(b - a)^2}{12}$.

# Razonamiento
---
Supongamos que $X$ es una [[Variable aleatoria continua]]que toma todos los valores sobre el intervalo $[a, b]$. Si la [[Función de densidad de probabilidad]] esta dada por $$ f_X(x) = \begin{cases} 
	k & \text{ si } a < x < b \\
	0 & \text{ en otro caso }
\end{cases} $$
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]
		\draw[->] (-0.5, 0) -- (2.75, 0);
		\draw[->] (0, -0.5) -- (0, 1.5)
			node[above=2pt] {$f_x(x)$};
		\filldraw[fill=green!20!black, opacity=50] (0.75, 0) 
			rectangle (2, 0.8);
		\draw[dashed] (0, 0.8) node[left=2pt] {$k$} -- (0.75, 0.8);
		\path (0.75, 0) node[below=2pt] {$a$};
		\path (2, 0) node[below=2pt] {$b$};
	\end{tikzpicture}
\end{document}
```

Por definición sabemos que $$ \int_{-\infty}^{\infty}f_X(x)dx = 1$$
Por lo que en nuestro caso, eso da que $$ (a - b) \cdot k = 1 $$ 
Entonces podemos encontrar el valor de $k$ como $$ k = \frac{1}{a - b} $$
## Relaciones
---
![[Relaciones entre distribuciones#Distribución Beta y Distribución uniforme]]