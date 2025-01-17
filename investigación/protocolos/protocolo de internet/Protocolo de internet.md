---
dia: 2024-10-14
estado: Tenemos en sí la idea de varios protocolos, pero me gustaría investigarlos más y tal vez implementar alguno de ellos para darme una idea de como funcionan
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/protocolos/protocolo-de-internet
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
aliases:
  - Internet Protocol
  - IP
  - Protocolo de red
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar los protocolos que sean específicamente a través de internet 

## Resumen
---
#ingeniería-en-informática/redes/Redes-de-computadoras #ingeniería-electrónica/redes/Redes-de-computadoras 
Las [[Host|host]] que intercambian mensajes y llevan a cabo las acciones son los componentes [[Hardware|hardware]] o [[Software|software]] de cierto dispositivo. Cualquier actividad de [[Internet|internet]] que implique dos o más entidades remotas que se comunican por la [[Red|red]] están gobernadas por un [[Protocolo|protocolo]]

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


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```