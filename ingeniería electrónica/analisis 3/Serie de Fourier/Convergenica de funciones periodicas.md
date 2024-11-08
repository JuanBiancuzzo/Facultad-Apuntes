---
dia: 2022-11-29
tags:
  - ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Serie-de-Fourier
---
# Definición
---
Dada $f \in E_P$ ([[Convergenica de funciones periodicas]]) y una [[Sucesión]] $(f_m)_{m = 0}^\infty$ de funciones de $E_P$. 

### Convergnecia puntual
---
![[Convergencia puntual#Definición]]

### Convergencia media
---
![[Convergencia media#Definición]]

### Convergencia cuadratica
---
![[Convergencia cuadrática#Definición]]

### Convergencia uniforme
---
![[Convergencia uniforme#Definición]]

# Observación
---
Para toda $f \in E_P$: $\Vert f \Vert_1 \le \sqrt{P} \Vert f \Vert_2 \le P \Vert f \Vert_\infty$ 

# Diagrama
---
```tikz
\begin{document}
	\begin{tikzpicture}
		\node[draw, inner sep=10pt, align=center] (uni) at (2, 6)
			{$\displaystyle \lim_{m \to \infty} || f - f_m ||_\infty = 0$};
		\node[below=2pt] at (uni.south) {convergencia uniforme};
		
		\node[draw, inner sep=10pt, align=center] (cua) at (8, 6)
			{$\displaystyle \lim_{m \to \infty} || f - f_m ||_2 = 0$};
		\node[below=2pt] at (cua.south) {convergencia cuadrática};

		\node[draw, inner sep=10pt, align=center] (med) at (14, 6)
			{$\displaystyle \lim_{m \to \infty} || f - f_m ||_1 = 0$};
		\node[below=2pt] at (med.south) {convergencia en media};

		\node[draw, inner sep=10pt, align=center] (wei) at (2, 2)
			{$f$ es continua \\ (Teorema de Weiestrass)};
		
		\node[draw, inner sep=10pt, align=center] (pun) at (10, 2)
			{$\displaystyle \forall x \in \left[0, P\right]: \lim_{m \to \infty} |f(x) - f_m(x)| = 0$};
		\node[below=2pt] at (pun.south) {convergencia puntual en todo $\left[0, P\right]$};

		\path (wei.east) -- (pun.west) node[pos=0.5] {y además};

		\draw[->, shorten >=10pt, ultra thick] (uni.east) ++ (0.25, 0) -- (cua.west);
	
		\draw[->, shorten >=10pt, ultra thick] (cua.east) ++ (0.25, 0) -- (med.west);
			
		\draw[->, shorten >=10pt, ultra thick] (uni.south) ++ (0, -1) -- (wei.north);

		\draw[->, shorten >=10pt, ultra thick] (uni.south east) ++ (0.25, -0.25) -- (pun.north west);
		
	\end{tikzpicture}
\end{document}
```