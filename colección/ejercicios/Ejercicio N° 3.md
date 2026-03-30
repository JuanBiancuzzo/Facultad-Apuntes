---
etapa: sin-empezar
dia: 2026-03-29
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 3
---
# Enunciado
---
Completar el siguiente cuadro

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}

\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=2.3ex,
        nodes in empty cells,
            
        nodes={
            % rectangle,
            draw=black,
            align=center,
            text width=6em,
            font=\bfseries
        },        
    }
}
\begin{tikzpicture}
    \tikzmath { \n = 5; \filas = (\n * (\n + 1)) / 2 + 1; }

    \matrix (table) [table] {
		 & & & & & & \\
		 & & & & & & \\
		$^{64}_{30}$ Zn & $0$ & $30$ & $64$ & $30$ & $34$ & $30$ \\
		$^{?}_{35}$ Br $^-$ &  &  & & & $46$ & \\
		& $0$ & & & $82$ & $136$ & \\
		& $2+$ & & & & $124$ & $80$ \\
		$^{59}_{27}$ Br $^{3+}$ & & & & & & \\
		& $0$ & & $132$ & & & $54$ \\
		& $2-$ & $8$ & & & $10$ & \\
		& $4+$ & & $118$ & $50$ & & \\
		& $1-$ & & & & $74$ & $54$ \\
		$^{?}_{29}$ Cu $^+$ & & & $63$ & & & \\
		& $2+$ & $80$ & $202$ & & & \\
    };
	
	\begin{scope}[fill=azul, draw=black, font=\bfseries, align=center]
		\foreach \texto [count=\i] in {Símbolos, Carga, Z, A} {
	        \filldraw (table-1-\i.north -| table-1-\i.east)
	            rectangle (table-2-\i.south -| table-2-\i.west)
	                node[midway] {\texto};
		}
		
		\filldraw (table-1-5.north -| table-1-5.west)
			rectangle (table-1-7.south -| table-1-7.east)
	            node[midway] {Número de:};
				
		\foreach \texto [count=\i from 5] in 
			{Protones, Neutrones, Electrones} {
	        \filldraw (table-2-\i.north -| table-2-\i.east)
	            rectangle (table-2-\i.south -| table-2-\i.west)
	                node[midway] {\texto};
		}
	\end{scope}

\end{tikzpicture}
\end{document}
```

# Resolución
---



# Resultado
---

