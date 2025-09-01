---
dia: 2025-08-31
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Se me ocurrió una forma de como hacer de forma eficiente, o por lo menos relativamente eficiente la forma en la que se obtiene los elementos que tienen "arrayRef"

Supongamos que tenemos una [[ingeniería en informática/bdd/General/Tabla SQL|tabla]] de Personas, donde esta tiene un arrayRef con Propiedades, para representar la relación que una persona puede tener varias propiedades, y esta la guarda en ese [[ingeniería en informática/algo 1/Lenguaje C/Array|array]]. Por lo tanto, el usuario quiere tener a todas las personas las cuales, por ejemplo, sean mayores que $30$ y ver cuales son sus propiedades. Esto implicaría que quiero una lista de personas, las cuales en el arrayRef tengan un array de propiedades

La solución es hacer una [[Tabla temporal SQL|tabla temporal]] en la cual guardaríamos a las personas mayores que $30$, y una columnas extra a las cuales ahora voy a mencionar. Al mismo tiempo, crearíamos una otra tabla temporal la cual tenga las propiedades ordenadas por el id de la persona. Finalmente esa columna extra, sería la longitud del array, para cada persona, de esta forma se podría indexar y guardar el array de las propiedades en las personas

```tikz
\usetikzlibrary{matrix}
\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\tikzset{ 
	    table/.style={
		    matrix of nodes,    
		    text depth=0.5ex,
	        text height=2ex,
	            
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

	\begin{tikzpicture}	
		\matrix (personas) at (0, 0) [table, nodes={text width=6em}] {
			ID & Nombre & Edad & Len \\
			1 & Juanse   & 35 & 2 \\
			3 & María    & 31 & 1 \\
			7 & Josefina & 36 & 2 \\
		};
		\path (personas-1-1.north -| personas-1-1.west) 
    		-- (personas-1-4.north -| personas-1-4.east)
        		node[midway, above=2pt, font=\bfseries] {\#Personas};

		\matrix (propiedades) at (0, -4.5) [table, nodes={text width=8em}] {
			ID & Direccion & ID Propietario \\
			9  & falsa 123     & 1 \\
			5  & francia 503   & 1 \\
			8  & mexico 2321   & 3 \\
			12 & falsa 123     & 7 \\
			8  & mexico 2321   & 7 \\
		};
		\path (propiedades-1-1.north -| propiedades-1-1.west) 
    		-- (propiedades-1-3.north -| propiedades-1-3.east)
        		node[midway, above=2pt, font=\bfseries] {\#Propiedades};
	
	\end{tikzpicture}
\end{document}
```

Este método permite incluso leer parcialmente la tabla, solo se tiene que tener la precaución de leer la cantidad correcta de la tabla de propiedades, ya que sino se desfasaría 