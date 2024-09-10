---
dia: 2024-03-19
tags:
  - redes/Redes-de-computadoras
  - nota/facultad
---
### Definición
---
Un protocolo define el formato y el orden de los mensajes intercambiados entre dos o más [[Host|host]] que se comunican entre sí, así como las acciones tomadas en la transmisión y/o la recepción de un mensaje u otro suceso

#### Protocolo de Red
---
Las [[Host|host]] que intercambian mensajes y llevan a cabo las acciones son los componentes [[Hardware|hardware]] o [[Software|software]] de cierto dispositivo. Cualquier actividad de [[Internet|internet]] que implique dos o más entidades remotas que se comunican por la [[Red|red]] están gobernadas por un protocolo

```tikz
\usetikzlibrary{math}

\begin{document} 
	\def\mensajes{{
		"TCP connection\\request", 
		"TCP connection\\response", 
		"GET url", 
		"file"
	}}
	\tikzmath {
		\dist = 6;
		\tresponse = 1.5;
		\delay = 0.3;
		\itime = 0.5;

		\ftime = \itime + dim(\mensajes) * (\tresponse + \delay) + 0.5;
	}
	
	
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		\draw[|->] ({-\dist / 2}, \ftime) -- ++(0, -\ftime)
			node[pos=0, above=2pt] {Cliente};
		\draw[|->] ({\dist / 2}, \ftime) -- ++(0, -\ftime)
			node[pos=0, above=2pt] {Servidor}
			node[pos=1, right=2pt] {$t$};

		\tikzmath { \lenmenos = dim(\mensajes) - 1; }
		\foreach \i in {0, ..., \lenmenos} {
			\tikzmath { 
				\signo = mod(\i, 2) * 2 - 1; 
				\angulo = atan(\signo * \tresponse / \dist);
				\mensaje = array(\mensajes, \i);
			}
			\draw[->] (
				{\signo * \dist / 2}, 
				{\ftime - \itime - \i * (\tresponse + \delay)}
			) -- ++(-\signo * \dist, -\tresponse)
				node[midway, above=2pt, rotate=\angulo, align=center] 
					{\mensaje};
		}
	\end{tikzpicture}
\end{document}
```
