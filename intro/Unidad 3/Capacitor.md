---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
El capacitor es un dispositivo electrónico que almacena energía (representada por la [[Capacitancia]])  en un [[Campo eléctrico]] interno.

##### Simbología
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


#### Relación con la [[Tensión|tensión]] y la [[Corriente eléctrica|corriente]]
---
Nos interesa conocer la relación entre la tensión y la corriente del elemento, ya sea la forma [[Ecuación diferencial ordinaria|diferencial]], como la forma integral $$ \begin{CD} 
	i = \frac{dq}{dt} @>>> \boxed{i = C \frac{dv}{dt}} \\
	& @VVV \\
	& & v(t) = \frac{1}{C}\int_{-\infty}^t i(\tau) ~d\tau  & @>>> 
	\boxed{v(t) = \frac{1}{C} \int_{t_0}^t i(\tau) ~d\tau + v(t_0)}
\end{CD} $$
Notemos que la tensión sobre un capacitor debe ser continua

#### [[intro/Unidad 5/Potencia|Potencia]] instantánea
---
El calculo de la potencia esta dada por $$ p = v~i = Cv\frac{dv}{dt} $$

#### [[Energía]] almacenada
---
El calculo de la energía almacenada esta dada por $$ \omega = \int_{-\infty}^t p(\tau) d\tau = \frac{1}{2} C v^2 $$
El capacitor (ideal) no disipa energía, solo la almacena y la vuelve a entregar en otro momento.


