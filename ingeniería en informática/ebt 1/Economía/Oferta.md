---
dia: 2026-09-03
etapa: empezado
referencias: []
aliases:
  - Ley de la oferta#^ley-oferta
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
La oferta es la cantidad que los [[ingeniería en informática/ebt 1/Economía/Mercado#^ofertantes|vendedores]] están dispuestos a vender a distitnos [[ingeniería en informática/ebt 1/Economía/Precio|precios]], en un período dado. Es importante detallar el período porque las condiciones cambian bastante de un período a otro

La Ley de la oferta, menciona una relación directa entre precio y cantidad ofertada ^ley-oferta
* A mayor precio, mayor es la cantidad ofertada
* A menor precio, menor es la cantidad ofertada

Se puede representar en la curva de oferta dada por la expresión $$ Q_O = f\left( P_{BS},~ P_F,~ Z,~ X \right) $$ donde 
* $P_{BS}$ es el precio del [[ingeniería electrónica/legal/Introducción al derecho/Bien|bien o servicio]] en cuestión
* $P_F$ es el precio de los factores de producción
	* Similar a los [[ingeniería en informática/ebt 1/Economía/Bien complementario|productos complementarios]], pero más directo
* $Z$ es la tecnología
	* Este es el factor clave/diferencial, que logra reducir [[ingeniería en informática/ebt 1/Economía/Precio#^costo|costos]] o aumentar la calidad
* $X$ es la cantidad de organizaciones que ofrecen lo mismo, expectativas del bien o servicio, etc.

```tikz
\usetikzlibrary{matrix}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document}
	\definecolor{azul}{RGB}{23, 65, 125}
	\definecolor{oferta}{RGB}{0, 127, 204}
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
			\sepX = 0.65; \sepY = 1.8; \maxAlto = 3; \maxLargo = 8;
			\alto = \maxAlto * \sepY; \largo = \maxLargo * \sepX;
			\radio = 0.1;
			\diff = 0.5; \sep = 1.5; \tick = 0.1;
			function relacion(\x) {
				return 0.5 + \x / 2;
	        };
		}
	
		\matrix (helados) at (0, 0) [table] {
			Precio ($\$$) & Cantidad \\
			$0.00$ & $0$ \\
			$0.50$ & $0$ \\
			$1.00$ & $1$ \\
			$1.50$ & $2$ \\
			$2.00$ & $3$ \\
			$2.50$ & $4$ \\
			$3.00$ & $5$ \\
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

			\draw[oferta] (0, {relacion(0) * \sepY}) 
				-- ({5 * \sepX}, {relacion(5) * \sepY});
			\foreach \i in {0, 1, ..., 5} {
				\fill[oferta] ({\i * \sepX}, {relacion(\i) * \sepY}) 
					circle (\radio);
			}
		\end{scope}

	\end{tikzpicture}
\end{document}
```

A un mismo precio, los vendedores queren ofrecer otra cantidad: la curva se corre si
* Baja el precio de los fatores
* Mejora la tecnologia
* Entran más empresas al [[ingeniería en informática/ebt 1/Economía/Mercado|mercado]]
* Cambian las expectativas de la [[investigación/storytelling/worldbuilding/Economía|economía]]