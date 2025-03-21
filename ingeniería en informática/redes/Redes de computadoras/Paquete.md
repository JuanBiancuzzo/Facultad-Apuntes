---
dia: 2024-04-18
aliases:
  - Mensaje
  - Segmento
  - Datagrama
  - Tramas
tags:
  - carrera/ingeniería-en-informática/redes/Redes-de-computadoras
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Redes-de-computadoras
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
etapa: empezado
---
# Definición
---
Los paquetes se transmiten a través de cada enlace de comunicaciones a una velocidad igual a la [[Delay in packet switches#Tiempo de propagación|velocidad de transmisión]] máxima del enlace

```tikz
\usetikzlibrary{decorations.pathreplacing}

\begin{document} 
	\tikzset{ 
	    texto/.style={ 
			align=center, 
			font=\bfseries
	    }, 
	    llave/.style={
		    decorate, 
			decoration={
				brace, 
				amplitude=10pt, 
			}
	    }
	}

	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
		\path (0, 0) rectangle ++(4.5, 1.2)
			node[texto, midway] {Data};
		\draw (0, 1.2) rectangle ++(4.5, 1.2)
			node[texto, midway] {Header de transporte};
		\draw (0, 2.4) rectangle ++(4.5, 1.2)
			node[texto, midway] {Header de red};
		\path (0, 3.6) rectangle ++(4.5, 1.2)
			node[texto, midway] {Header de enlace};
		\draw[rounded corners] (0, 0) rectangle ++(4.5, 4.8);

		\draw [llave] (-0.3, 0) -- ++(0, 1.2) 
			node[midway, xshift=-2em, rotate=90]{Mensaje};
		\draw [llave, decoration={mirror}] (4.8, 0) -- ++(0, 2.4) 
			node[midway, xshift=2em, rotate=-90]{Segmento};
		\draw [llave, decoration={mirror}] (5.8, 0) -- ++(0, 3.6) 
			node[midway, xshift=2em, rotate=-90]{Datagram};
		\draw [llave, decoration={mirror}] (6.8, 0) -- ++(0, 4.8) 
			node[midway, xshift=2em, rotate=-90]{Tramas};

		\draw[dashed] (0, 1.2) -- (-0.3, 1.2);
		\draw[dashed] (0, 0) -- (-0.3, 0);

		\draw[dashed] (4.5, 0) -- (6.8, 0);
		\draw[dashed] (4.5, 2.4) -- (4.8, 2.4);
		\draw[dashed] (4.5, 3.6) -- (5.8, 3.6);
		\draw[dashed] (4.5, 4.8) -- (6.8, 4.8);

	\end{tikzpicture}
\end{document}
```

En la [[Capa de aplicación|capa de aplicación]] 
* La información que guarda en la data del paquete lo llama Mensaje
En la [[Capa de transporte|capa de transporte]] 
* La información de la capa anterior y su respectivo header lo llama Segmento
En la [[Capa de Red|capa de red]] 
* La información de la capa anterior y su respectivo header lo llama Datagram
En la [[Capa de Enlace|capa de enlace]] 
* La información de la capa anterior y su respectivo header lo llama Tramas

## Formato de mensaje
---
Si formato del mensaje es en [[Número binario|binario]], por lo que busca ser eficiente en el especio y por su densidad de [[Información|información]], no [[Encoding|comprimible]]. Para esto, necesitamos la [[Serialización|serialización]] de los datos

Si el formato del mensaje es en texto plano, suele ser no muy eficiente y tiene poca densidad de información. La serialización pasa a ser legible para las personas, donde suele ser usando [[Javascript Object Notation (JSON)|JSON]] o [[Lenguaje de marcado extensible|XML]]