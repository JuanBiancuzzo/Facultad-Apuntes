---
dia: 2026-09-03
etapa: empezado
referencias: []
aliases:
  - Ley de la demanda#^ley-demanda
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La demanda es la cantidad que los [[ingeniería en informática/ebt 1/Economía/Mercado#^demandante|compradores]] están dispuestos a adquirir a distintos [[ingeniería en informática/ebt 1/Economía/Precio|precios]], en un período dado

La Ley de la demanda, menciona una relación inversa entre precio y cantidad demandada ^ley-demanda
* A mayor precio, menor es la cantidad demandada
* A menor precio, mayor es la cantidad demandada

Se puede representar en la curva de demanda dada por la expresión $$ Q_D = f\left( P_{BS},~ Y,~ P_S,~ P_C,~ X \right) $$ donde 
* $P_{BS}$ es el precio del [[ingeniería electrónica/legal/Introducción al derecho/Bien|bien o servicio]] en cuestión
* $Y$ es el ingreso disponible
* $P_S$ es el precio del [[ingeniería en informática/ebt 1/Economía/Bien sustituto|bien o servicio sustituto]]
* $P_C$ es el precio del [[ingeniería en informática/ebt 1/Economía/Bien complementario|bien o servicio complementario]]
* $X$ todo factor extra, como gustos y preferencias, tamaño del mercado, expectativas, etc

```tikz
\usetikzlibrary{matrix}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document}
	\definecolor{azul}{RGB}{23, 65, 125}
	\definecolor{demanda}{RGB}{218, 111, 142}
	\tikzmath { \largoTexto = 2.5; \altoTexto = 0.3; }	
	\tikzset{ 
	    table/.style={
		    matrix of nodes,    
		    text depth=0.5ex,
	        text height=\altoTexto cm,
			text width=\largoTexto cm,
	            
	        nodes={
	            rectangle,
	            draw=black,
	            align=center,
	            text width=8em,
	            font=\bfseries
	        },        
	
	        row 1/.style={
	            nodes={
	                fill=azul,
	                draw=black,
	                font=\bfseries
	            }
	        }
	    }
	}

	\begin{tikzpicture}[scale=0.95, transform shape]
		\tikzmath { 
			\sepX = 0.65; \sepY = 1.8; \maxAlto = 3; \maxLargo = 12;
			\alto = \maxAlto * \sepY; \largo = \maxLargo * \sepX;
			\radio = 0.1;
			\diff = 0.5; \sep = 1.5; \tick = 0.1;
			function relacion(\x) {
				return \maxAlto - \x / 4;
	        };
		}
	
		\matrix (helados) at (0, 0) [table] {
			Precio ($\$$) & Cantidad \\
			$0.00$ & $12$ \\
			$0.50$ & $10$ \\
			$1.00$ & $8$ \\
			$1.50$ & $6$ \\
			$2.00$ & $4$ \\
			$2.50$ & $2$ \\
			$3.00$ & $0$ \\
		};
		
		\coordinate (tabla_sup_izq) at (helados-1-1.north -| helados-1-1.west);
		\coordinate (tabla_sup_der) at (helados-1-2.north -| helados-1-2.east);
		
		\coordinate (tabla_inf_izq) at (helados-8-1.south -| helados-8-1.west);
		\coordinate (tabla_inf_der) at (helados-8-2.south -| helados-8-2.east);
		
		\path  (tabla_sup_izq) -- (tabla_sup_der)
			node[midway, above=2pt, font=\bfseries] 
				{Demanda de helados};
				
		\coordinate (origen) at ($ 
			(tabla_inf_der)!0.5!(tabla_sup_der) + (\sep, {-\alto / 2}) 
		$);
		
		\begin{scope}[cm={1, 0, 0, 1, (origen)}, thick]
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, align=center] {Cantidad de\\helados};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt] {Precio del helado};
				
			\foreach \i in {2, 4, ..., \maxLargo} {
				\draw ({\i * \sepX}, {\tick / 2})	-- ++(0, -\tick) 
					node [below=2pt] {$\i$};
			}
			
			\foreach \j in {0.5, 1, ..., \maxAlto} {
				\draw ({\tick / 2}, {\j * \sepY}) -- ++(-\tick, 0) 
					node [left=2pt] {$\j$};
			}

			\draw[demanda] (0, {relacion(0) * \sepY}) 
				-- ({\maxLargo * \sepX}, {relacion(\maxLargo) * \sepY});
			\foreach \i in {0, 2, ..., \maxLargo} {
				\fill[demanda] ({\i * \sepX}, {relacion(\i) * \sepY}) 
					circle (\radio);
			}
		\end{scope}

	\end{tikzpicture}
\end{document}
```

A un mismo precio, los compradores queren otra cantidad: la curva se corre si
* Sube el ingreso disponible
* Sube el precio de un sustituto
* Baja el precio de un complementario
* Cambian los gustos o las expectativas
* Crece el tamaño del [[ingeniería en informática/ebt 1/Economía/Mercado|mercado]]