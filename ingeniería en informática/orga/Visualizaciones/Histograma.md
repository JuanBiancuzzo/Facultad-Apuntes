---
dia: 2023-03-20
tags:
  - carrera/ingeniería-en-informática/orga/Visualizaciones
  - nota/facultad
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un [[Plot|plot]] donde se muestra en el eje x una [[Distribución continua|distribución continua]] y en el eje y, la cantidad correspondiente al mismo. Podemos decir que representa la [[Frecuencia relativa|frecuencia de ocurrencia]] de una dada [[Variable aleatoria|variable aleatoria]] dentro de cada bin

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{60, 180, 114}

\begin{tikzpicture}[scale=1.3, transform shape, thick]

    \tikzmath { 
        \cantDivX = 10; \cantDivY = 4; 
        \escalaX = 0.9; \escalaY = 1.5;
        \sepEjeX = 0.5;
    }
    
    \draw[->, ultra thick] ({-0.05 - \sepEjeX}, 0) 
        -- ({\escalaX * (\cantDivX + 1)}, 0);
    \draw[->, ultra thick] (-\sepEjeX, -0.25) 
        -- (-\sepEjeX, {\escalaY * (\cantDivY + 1)});

    \draw (0, 0) -- ++(0, -0.2) node[rotate=90, left=2pt] {$0$};
    \foreach \x in {1, ..., \cantDivX} {
        \tikzmath { \valor = int(\x * 5); }
        
        \draw ({\escalaX * \x}, 0) -- ++(0, -0.2) 
            node[rotate=90, left=2pt] {$\valor00000$};
    }
    \draw ({0.2 - \sepEjeX}, 0) -- ++(-0.4, 0) node[left=2pt] {$0$};
    \foreach \y in {1, ..., \cantDivY} {
        \tikzmath { \valor = int(\y * 5); }
        \draw ({0.2 - \sepEjeX}, {\escalaY * \y}) -- ++(-0.4, 0) 
            node[left=2pt] {$\valor00$};
    }
    
    \def\cantidades{{
		"1900", "2200", "850", "300", "100",
		"20",   "50",   "30",  "0",   "10"
	}}
	
	\tikzmath { \lenCantidades = dim(\cantidades) - 1; }
    \foreach \i in {0, ..., \lenCantidades} {
        \tikzmath { \cantidad = int(array(\cantidades, \i)) / 500; }
        \fill[verde] ({\escalaX * \i}, 0) 
            rectangle ++({\escalaX * 1.01}, {\escalaY * \cantidad});
    }
    
    \path (0, {\escalaY * (\cantDivY + 1)}) -- ++({\escalaX * (\cantDivX + 1)}, 0)
        node[midway, above=2pt, align=center] 
            {Distribución del salario de argentina\\en la encuesta de sysarmy};
    \path (0, {-1.2 * \escalaY}) -- ++({\escalaX * (\cantDivX + 1)}, 0)
        node[midway, below=2pt, align=center] 
            {Salario mensual BRUTO (pesos)};
    \path ({-\sepEjeX - 1.5 * \escalaX}, 0) -- ++(0, {\escalaY * (\cantDivY + 1)})
        node[midway, above=2pt, rotate=90] {Cantidad de encuestados};
    
\end{tikzpicture}
\end{document}
```

Este plot tiene un parámetro que se llama "bins" que nos deja manejar la resolución, donde mientras más grande, más resolución

Esto también puede representar una aproximación de la [[Función de densidad de probabilidad|función de densidad]]/[[Función de masa de probabilidad|masa de probabilidad]]. Podemos obtenerla como $$ \hat{f}_h(x) = \frac{1}{nh} \sum_{i = 1}^{n} \sum_i \mathbb{1}\set{x_i \in B_j} \cdot \mathbb{1}\set{ x \in B_j } $$ donde $B_j = \left[ m_j - \frac{h}{2},~ m_j + \frac{h}{2} \right]$, con $h$ y $m_j$ son la longitud y centro del intervalo respectivamente