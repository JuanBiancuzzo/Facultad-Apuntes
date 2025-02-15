---
dia: 2023-04-03
tags:
  - ingeniería-en-informática/orga/Compresión
  - nota/facultad
  - investigación/matemática/teoría-de-la-información
referencias:
  - "196"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La forma de medir la [[Información|información]] esta dada por las siguientes propiedades
* La información $I(x)$ y la [[Probabilidad|probabilidad]] $\mathbb{P}(x)$ son inversamente relacionadas
* $I(x) \ge 0$, observando el [[Evento|evento]] $x$ no hace que se pierda información
* $\mathbb{P}(x) = 1 \implies I(x) = 0$
* Si $\mathbb{P}(x \cap y) = \mathbb{P}(x) ~ \mathbb{P}(y)$, es decir que son [[Eventos independientes|eventos independientes]], entonces $I(x \cap y) = I(x) + I(y)$

La única [[Función|función]] que logra cumplir estas propiedades es $$ I(x) = -log_b( \mathbb{P}(x) ) $$ donde $b$ representa la base en la que se guardaría esa información, en general se usa $b = 2$ para guardarlo en [[Información#Bit|bits]]

Se calcula como el promedio de bits que mande en cada [[Paquete|mensaje]]. Por lo tanto se puede calcular esto de la siguiente forma
$$ H = -\sum_i \mathbb{P}(x_i) \cdot log_2(\mathbb{P}(x_i)) $$

Donde $x_i$ es el evento que se quiere mandar, y por lo tanto $\mathbb{P}(x_i)$ es la probabilidad que ocurra ese evento

Esta entropía nos va a dar una idea de que tan impredecible es un fenómeno. Ya que se compensan la probabilidad de un evento y los bits de información de ese evento.

Veamos un ejemplo de una moneda, donde la probabilidad de cara es $x \in [0,1]$ y la probabilidad de ceca es $1-x$. Si calculamos $H(x)$ de este problema, nos queda

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

Donde vemos que cuando $x = 0.5$ que es el momento donde es más difícil predecir si la moneda es cara o ceca, es donde la [[Entropía|entropía]] es mayor. También en los extremos donde la probabilidad de que sea cara, o en otro extremos que sea ceca, es $1$ la entropía termina siendo $0$ ya que no es necesario mandar [[Información|información]].


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```