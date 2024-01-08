---
dia: 2023-01-22
materia: analisis 2
capitulo: 1
---
### Definición
---
Donde queremos llegar a poder encontrar $PR_{y \to x}$

```tikz 
\usepackage{tikz-cd} 
\begin{document} 
	\begin{tikzcd}[row sep=2.5em] 
		A' \arrow[rr,"f'"] 
		\arrow[dr,swap,"a"] 
		\arrow[dd,swap,"g'"] &&   
		B' \arrow[dd,swap,"h'" near start] 
		\arrow[dr,"b"] \\ & A 
		\arrow[rr,crossing over,"f" near start] &&   
		B \arrow[dd,"h"] \\ 
		C' \arrow[rr,"k'" near end] 
		\arrow[dr,swap,"c"] && 
		D' \arrow[dr,swap,"d"] \\ & 
		C \arrow[rr,"k"] 
		\arrow[uu,<-,crossing over,"g" near end]&& D 
	\end{tikzcd} 
\end{document} 
```

![[Pasted image 20211013144255.png]] 

$$PR_{y \to x} = \frac{y \cdot x}{\lVert x \rVert ^ 2} x = \frac{y \cdot x}{\lVert x \rVert} \hat{x}$$

Donde usamos las definiciones de [[Norma]] y [[Versor]]
