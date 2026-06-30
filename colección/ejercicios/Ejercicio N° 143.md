---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 143
nombre: Entropía máxima
---
# Enunciado
---
Una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente binaria]] $S$ de [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] posee un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] de $2$ símbolos, $s_0$ y $s_1$, con [[investigación/matemática/Probabilidad/Probabilidad|probabilidades]] de ocurrencia $\mathbb{P}(s_0) = p$ y $\mathbb{P}(s_1) = 1 - p$
1. Exprese y grafique la [[ingeniería en informática/orga/Compresión/Entropía|entropía]] de la fuente, $H(S)$, en función de $p$
2. Analice el gráfico obtenido

# Resolución
---
Dada una moneda, donde la probabilidad de $s_0$ es $p \in [0,1]$ y la probabilidad de $s_1$ es $1-p$. Si calculamos $H(p)$ de este problema, nos queda

```tikz
\usepackage{pgfplots}
\begin{document} 

\pgfplotsset{minor grid style={color=gray, thin, opacity=0.5}} 
\pgfplotsset{major grid style={color=gray, thick}} 

\begin{tikzpicture}[scale=1.5, transform shape]
	\begin{axis}[
		xmin=-0.2, ymin=-0.2,
		xmax=1.2, ymax=1.2, 
		samples=50,
		axis lines=middle,
		xtick={-0.5, 0, 0.5, 1, 1.5},
		ytick={-0.5, 0, 0.5, 1, 1.5},
		minor tick num=5,
		grid=both,
		xticklabel style={anchor={north west}},
		yticklabel style={anchor={south east}},
	]
	  \addplot[orange, ultra thick, domain=0:1] 
		  { -\x * log2(\x) - (1 - \x) * log2(1 - \x) };
	\end{axis}	
\end{tikzpicture}
\end{document}
```

Donde vemos que cuando $p = 0.5$ que es el momento donde es más difícil predecir si la moneda es $s_0$ o $s_1$, es donde la entropía es mayor. También en los extremos donde la probabilidad de que sea $s_0$, o en otro extremos que sea $s_1$, es $1$ la entropía termina siendo $0$ ya que no es necesario mandar información

