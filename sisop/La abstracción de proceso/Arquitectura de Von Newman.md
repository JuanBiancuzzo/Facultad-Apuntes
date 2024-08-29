---
dia: 2023-11-15
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
  - embebidos/Microcontroladores-de-32-bits
---
### Definición
---
El ciclo de una instrucción en una arquitectura de Von Newman es
1. Obtener la instrucción (Fetch)
2. Decodificar la instrucción (Decode)
3. Ejecutar la instrucción (Execute)
4. CP $\implies$ Próxima instrucción


```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
			\draw (0, 0) rectangle ++(2, 2)
				node[midway] {UAL};
			\draw (0, 2) rectangle ++(1, -0.5)
				node[midway, scale=0.9] {AC};

			\draw (0, 3.5) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {RN};
			\path (1, 4.5) node[scale=0.9] {$\vdots$};
			\draw (0, 4.75) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {R1};
			\draw (0, 5.75) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {R0};
			
			\draw (4, 1) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {RI};
			\draw (5, 4) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {SI};

			\draw (9, 1) rectangle ++(2, 0.5)
				node[midway, scale=0.9] {RM};
			\draw (9, 2) rectangle ++(2, 2)
				node[midway] {Memoria};
			\draw (8, 2) rectangle ++(0.5, 2)
				node[midway, rotate=-90, scale=0.9] {RDM};

			\draw (-1, -1) -- (12, -1);
			\draw[->] (0.5, -1) -- ++(0, 1);
			\draw[->] (1.5, -1) -- ++(0, 0.5);

			\draw[->] (9.5, -1) -- ++(0, 2);
			\draw[<-] (10.5, -1) -- ++(0, 2);
			
			\draw[->] (5, -1) -- (5, 1);
			\draw[->] (5, 1.5) -- (5, 3);

			\draw[->] (0.8, 2) -- ++(0, 1)
				-- (8, 3);
			\draw (1.5, 0) -- (1.5, -0.5)
				-- (3, -0.5)
				-- (3, 2.25)
				-- (5, 2.25);
			
			\draw[->] (2.5, 3) -- (2.5, 6)
				-- (2, 6);
			\draw[->] (2.5, 5) -- ++(-0.5, 0);
			\draw[->] (2.5, 3.75) -- ++(-0.5, 0);

			\draw[->] (0, 6) -- ++(-0.75, 0);
			\draw[->] (0, 5) -- ++(-0.75, 0);
			\draw[->] (0, 3.75) -- ++(-0.75, 0);
			
			\draw[<->] (-0.75, -1) -- (-0.75, 6.75)
				-- (3.5, 6.75)
				-- (3.5, 3);
	\end{tikzpicture}
\end{document}
```
