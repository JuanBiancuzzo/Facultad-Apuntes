---
dia: 2023-01-23
tags:
  - intro/Circuitos-con-capacitores
  - nota/facultad
  - fisica-2/Electrostática-en-conductores-y-dieléctricos
  - fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
aliases:
  - Potencia de un capacitor#Potencia instantánea
  - Energía de un capacitor#Energía almacenada
---
# Definición
---
Los capacitores están formados por dos [[Conductor|conductores]], de [[Carga eléctrica|cargas]] opuestas e igual módulo. Entre estos capacitores podemos medir un [[Campo eléctrico|campo eléctrico]], que nace en las cargas positivas, y muere en las cargas negativas. Este capacitor tiene la capacidad de almacenar [[Energía|energía]] (representada por la [[Capacitancia|capacitancia]])

Para cargar ambos conductores con cargas opuestas, utilizamos una pila. La pila mueve cargas de un capacitor al otro. La pila tiene asociada una [[Tensión|diferencia de potencial]] , la cual que permite mover las cargas, hasta que entre los dos conductores haya la misma diferencia de potencial que entre los bornes de la pila

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]

    \draw (0, 0) to[battery1, invert, l^=$\Delta V$] ++(0, 2)
        to ++(4, 0)
        to[C, l^=$C$] ++(0, -2)
        to ++(-4, 0);
	
	\end{circuitikz}
\end{document}
```

La carga final del capacitor resulta proporcional a la diferencia de potencial de la [[Pila|pila]], siendo $C$ la capacitancia del capacitor ![[Capacitancia#^47ee97]]

### Simbología
---
```tikz
\usepackage{circuitikz} 
\usetikzlibrary{decorations.pathreplacing}

\begin{document} 
	\tikzset{ 
	    llave/.style={
		    decorate, 
			decoration={
				brace, 
				amplitude=10pt, 
			}
	    }
	}
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape]
		\draw (0, 2) to[C, l^=$C$] ++(0, 1);
		\path (-1, 3) -- ++(2, 0) 
				node[midway, yshift=2em]{Símbolo general};

		\draw (-2, 0) to[cC, invert, l^=$C$] ++(0, 1);
		\draw ( 0, 0) to[elko, invert, l^=$C$] ++(0, 1);
		\draw [llave, decoration={mirror}, ultra thick] (-3, -0.5) 
			-- ++(4, 0) 
				node[midway, yshift=-2em]{Polarizado};

		\draw ( 2, 0) to[vC, l^=$C$] ++(0, 1);
		\path (1, -0.5) -- ++(2, 0) 
				node[midway, yshift=-2em]{Variable};
	\end{circuitikz}
\end{document}
```


## Relación con la tensión y la corriente
---
Nos interesa conocer la relación entre la [[Tensión|tensión]] y la [[Corriente eléctrica|corriente]] del elemento, ya sea la forma [[Ecuación diferencial ordinaria|diferencial]], como la forma integral 

$$ \begin{CD} 
	i = \frac{dq}{dt} @>>> \boxed{i = C \frac{dv}{dt}} \\
	& @VVV \\
	& & v(t) = \frac{1}{C}\int_{-\infty}^t i(\tau) ~d\tau  & @>>> 
	\boxed{v(t) = \frac{1}{C} \int_{t_0}^t i(\tau) ~d\tau + v(t_0)}
\end{CD} $$
^relacion-tension-corriente

Notemos que la tensión sobre un capacitor debe ser continua

## Potencia instantánea
---
El calculo de la [[Potencia|potencia]] esta dada por $$ p = v~i = Cv\frac{dv}{dt} $$

## Energía almacenada
---
El calculo de la [[Energía|energía]] almacenada esta dada por $$ U = \int_{-\infty}^t p(\tau) d\tau = \frac{1}{2} C v^2 $$
El capacitor (ideal) no disipa energía, solo la almacena y la vuelve a entregar en otro momento

