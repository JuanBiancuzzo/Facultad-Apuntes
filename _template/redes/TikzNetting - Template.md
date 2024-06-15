
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
	pics/Server/.style={
	    code={
		    \tikzmath{
			    \bajada=0.4;
			    \largo=0.75;
		    }
		    
			\draw[rounded corners=2pt] (-\largo, {-\bajada / 2}) 
				rectangle ++({2 * \largo}, \bajada);
				
			\draw[rounded corners=2pt] (-\largo, {\bajada / 2}) 
				rectangle ++({2 * \largo}, \bajada);
			\draw[rounded corners=2pt] (-\largo, {-\bajada / 2}) 
				rectangle ++({2 * \largo}, -\bajada);
			
		}
	},
    pics/Router/.style args={#1}{
	    code={
		    \tikzmath{
			    \indentacion=0.3;
			    \bajada=0.4;
			    \cantidad=#1;
			    \largo=0.75;
			    \alto=\bajada * \cantidad;
		    }

			\coordinate (top) at (0, {\alto / 2});
		    
		    \draw (top) ellipse ({\largo} and {\indentacion});
		    \draw (top) -- ++({ 0.7 * \largo}, { 0.35 * \indentacion});
		    \draw (top) -- ++({ 0.7 * \largo}, {-0.35 * \indentacion});
		    \draw (top) -- ++({-0.7 * \largo}, { 0.35 * \indentacion});
		    \draw (top) -- ++({-0.7 * \largo}, {-0.35 * \indentacion});

			\foreach \y in {1, ..., \cantidad} {
				\draw ($ (top) + (\largo, {-\bajada * \y}) $)
					arc (0:-180:{\largo} and {\indentacion});
			}

			\draw (-\largo, {-\alto / 2}) -- ++(0, \alto);
			\draw ( \largo, {-\alto / 2}) -- ++(0, \alto);
			
			\node[align=center] (-above) 
				at (0, {\alto / 2 + \indentacion}) {};
			
			\node[align=center] (-below) 
				at (0, {-\alto / 2 - \indentacion}) {};
				
			\node[align=center] (-left) 
				at (-\largo, 0) {};
				
			\node[align=center] (-right) 
				at ( \largo, 0) {};
	    }
	},
	pics/Router/.default={1}
}

\begin{document}
	\begin{tikzpicture}[scale=1, transform shape, thick]
		\draw pic (r1) at (0, 0) {Router={3}};
		\draw pic (s1) at (3, 0) {Server};
			
	\end{tikzpicture}
\end{document}
```
