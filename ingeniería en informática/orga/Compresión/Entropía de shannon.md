---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - investigación/matemática/teoría-de-la-información
  - nota/facultad
  - nota/investigacion
referencias:
  - "196"
etapa: ampliar
vinculoFacultad:
  - tema: Compresión
    capitulo: 4
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La entropía, recibe su nombre por su analogía con la [[Entropía|termodinámica]], y representa el [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|valor medio]] de la [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] que aporta una [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]]. 

En el caso de tener una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\mathcal{S}$, es el valor medio de la información $I(s_i)$ sobre el alfabeto $\mathcal{S}$ $$ H = E[I(\mathcal{S})] = -\sum_i \mathbb{P}(s_i) \cdot \log_2(\mathbb{P}(s_i)) $$ donde $s_i$ es el [[ingeniería en informática/proba/Teoría de probabilidades/Evento|evento]] que se quiere mandar, y por lo tanto $\mathbb{P}(s_i)$ es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] que ocurra ese evento

Las unidades de la entropía son [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bits]] por símbolo de la fuente, donde cabe aclarar que si la base del [[ingeniería electrónica/analisis 3/Funciones elementales/Logaritmo principal|logaritmo]] es distinto de $2$ las unidades cambiarán. En los casos más conocidos 
* Con base igual a $10$ se lo llama Hartley
* Con base igual a $e$ se lo llama Nat

Esta entropía nos va a dar una idea de que tan impredecible es un fenómeno. Ya que se compensan la probabilidad de un evento y los bits de información de ese evento

## Propiedades
---
Se tiene las siguientes propiedades
1. $H(\mathcal{S}) \ge 0$
2. $H(\mathcal{S}) = 0$ sii $\mathbb{P}(s_i) = 1$ para algún $s_i \in \mathcal{S}$
3. $H(\mathcal{S}) \le \log_2(|\mathcal{S}|)$

## Ejemplo
---
Dada una moneda, donde la probabilidad de cara es $x \in [0,1]$ y la probabilidad de ceca es $1-x$. Si calculamos $H(x)$ de este problema, nos queda

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

Donde vemos que cuando $x = 0.5$ que es el momento donde es más difícil predecir si la moneda es cara o ceca, es donde la [[Entropía|entropía]] es mayor. También en los extremos donde la probabilidad de que sea cara, o en otro extremos que sea ceca, es $1$ la entropía termina siendo $0$ ya que no es necesario mandar información

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```