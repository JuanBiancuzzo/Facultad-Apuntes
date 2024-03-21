---
dia: 2023-08-23
materia: dispo
capitulo: 9
---
### Definición
---
En la electrónica digital la información se representa mediante dos rangos distintos de [[Tensión|tensión]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (0, -0.2) --
			(0, 0) -- (0, 4)
			node[pos=0, left=2pt] {$V_{MIN}$}
			node[pos=0.25, left=2pt] {$V_{OL}$}
			node[pos=0.5, left=2pt] {$V_{OH}$}
			node[pos=0.75, left=2pt] {$V_{MAX}$}
			node[pos=1, above left=2pt] {$V$};
		\draw (0, 0) rectangle (3, 1)
			node[midway] {$0$ lógico};
		\draw (0, 1) rectangle (3, 2)
			node[midway] {región indefinida};
		\draw (0, 2) rectangle (3, 3)
			node[midway] {$1$ lógico};
	\end{tikzpicture}
\end{document}
```

* El $0$ lógico: $V_{MIN} \le V < V_{OL}$
* El $1$ lógico: $V_{OH} < V \le V_{MAX}$
* Valor lógico indefinido: $V_{OL} \le V \le V_{OH}$

Una de las operaciones sería la inversión:
![[Inversor ideal#Definición]]