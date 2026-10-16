---
dia: 2026-10-16
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 746
etapa: empezado
---
# Enunciado
---
Analice el siguiente extracto de un libro diario y responda

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}
\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=1.2em,
        nodes in empty cells,
            
        nodes={ 
	        align=center,
	        draw=black,
	        text width=6em
	    },        
        row 2/.style={
            nodes={ fill=azul }
        },
		column 3/.style={
			nodes={ text width=18em }
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 5; \filas = 10; }
    \matrix (table) [table] {
		& & & & \\
		Fecha &  Código & Detalle                           & Debe & Haber \\
		 1/10 & Ingreso & Ventas                            & & 2,000.00 \\
		 1/10 &  Activo & Créditos por ventas               & 2,000.00 & \\
		 5/10 &  Activo & Créditos por ventas               & & 2,000.00 \\
		 5/10 &  Activo & Cuenta corriente                  & 2,000.00 & \\
		31/10 &  Egreso & Gastos de administración y ventas & 1,000.00 &  \\
		31/10 &  Pasivo & Sueldos a pagar                   & & 1,000.00 \\
		 5/11 &  Activo & Cuenta corriente                  & & 1,000.00 \\
		 5/11 &  Pasivo & Sueldos a pagar                   & 1,000.00 & \\
    };
	
	\tikzmath { \fila = 1; \colInicio = 1; \colFinal = \columnas; }
	\filldraw[fill=azul] (table-\fila-\colInicio.north -| table-\fila-\colInicio.west)
		rectangle (table-\fila-\colFinal.south -| table-\fila-\colFinal.east)
			node[midway, align=center] {Libro diario};

\end{tikzpicture}
\end{document}
``` 

1. El 31/10 los sueldos se pagaron ^parte-1
2. El 31/10 se devengaron sueldos ^parte-2
3. El 5/11 se pagaron los sueldos ^parte-3
4. El 5/11 se devengaron los sueldos ^parte-4
5. El [[colección/ejercicios/Ejercicio N° 746#^parte-2|punto 2]] y [[colección/ejercicios/Ejercicio N° 746#^parte-3|punto 3]] son correctas ^parte-5
6. El [[colección/ejercicios/Ejercicio N° 746#^parte-1|punto 1]] y [[colección/ejercicios/Ejercicio N° 746#^parte-4|punto 4]] son correctas ^parte-6
7. Ninguna es correcta ^parte-7

# Resolución
---
[[colección/ejercicios/Ejercicio N° 746#^parte-1|1.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-2|2.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-3|3.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-4|4.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-5|5.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-6|6.]] 

[[colección/ejercicios/Ejercicio N° 746#^parte-7|7.]] 

# Resultado
---
