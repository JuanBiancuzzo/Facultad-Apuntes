---
dia: 2024-04-09
materia: adc
capitulo: 5
---
### Definición
---
Este [[Filtro|filtro]] se lo puede caracterizar por su [[Transferencia del sistema#Transformada de Laplace|transferencia en el espacio de frecuencia]] $H(s)$, de forma ideal 

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[->, ultra thick] (-5, 0) -- (5, 0)
			node[below=2pt] {$\omega$};
		\draw[->, ultra thick] (0, -0.2) -- (0, 2)
			node[right=2pt, scale=0.85] {$|H(j\omega)|$};

		\draw[ultra thick] (-3.5, 0) 
			node[below=2pt] {$-W-\omega_0$}
			-- ++(0, 1) 
			-- ++(2, 0)
			-- ++(0, -1)
			node[below=2pt] {$W-\omega_0$};
		\draw[thick] (-2.5, 0.1) -- ++ (0, -0.2)
			node[pos=0, above=2pt, scale=0.8] {$-\omega_0$};
			
		\draw[ultra thick] (1.5, 0) 
			node[below=2pt] {$-W + \omega_0$}
			-- ++(0, 1) 
			-- ++(2, 0)
			-- ++(0, -1)
			node[below=2pt] {$W + \omega_0$};
		\draw[thick] (2.5, 0.1) -- ++ (0, -0.2)
			node[pos=0, above=2pt, scale=0.8] {$\omega_0$};
	\end{tikzpicture}
\end{document}
```

#### Forma real
---
Sabiendo que los filtros pueden representarse un pasa bajos de la siguiente forma $$ H(s) = h_0 \frac{\frac{w_0}{Q} ~ s}{s^2 + \frac{w_0}{Q} s + w_0^2} $$
Donde vamos a definir $\omega_d = \mathcal{Im}(\omega_p)$ donde $w_p$ son las [[Función raíz|raíz]] de $s^2 + \frac{w_0}{Q} s + w_0^2$ y por lo tanto la amplitud de la transferencia

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[->, ultra thick] (-5, 0) -- (5, 0)
			node[below=2pt] {$\omega$};
		\draw[->, ultra thick] (0, -0.2) -- (0, 2)
			node[right=2pt, scale=0.85] {$|H(j\omega)|$};

		\foreach \x in {-4.5, 0.5} {		
			\draw[ultra thick] (\x, 0)
				.. controls ({\x + 0.5}, 0) and ({\x + 1}, 1) 
					.. ({\x + 1.5}, 1)
				-- ({\x + 2.5}, 1)
				.. controls ({\x + 3}, 1) and ({\x + 3.5}, 0) 
					.. ({\x + 4}, 0);
			\draw[dashed, thick] ({\x + 2.7}, 0) 
				node[below=2pt] {$\omega_d$}
				-- ++(0, 1.5);
			\draw[dashed, thick] ({\x + 1.3}, 0) 
				node[below=2pt] {$\omega_d$}
				-- ++(0, 1.5);
		}
		
	\end{tikzpicture}
\end{document}
```
