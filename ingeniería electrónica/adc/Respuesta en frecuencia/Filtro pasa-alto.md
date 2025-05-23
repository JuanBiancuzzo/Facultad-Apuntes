---
dia: 2024-04-09
tags:
  - carrera/ingeniería-electrónica/adc/Respuesta-en-frecuencia
  - nota/facultad
  - carrera/ingeniería-en-informática/adc/Respuesta-en-frecuencia
---
# Definición
---
Este [[Filtro|filtro]] se lo puede caracterizar por su [[Transferencia del sistema#Transformada de Laplace|transferencia en el espacio de frecuencia]] $H(s)$, de forma ideal 

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[->, ultra thick] (-3, 0) -- (3, 0)
			node[below=2pt] {$\omega$};
		\draw[->, ultra thick] (0, -0.2) -- (0, 2)
			node[right=2pt, scale=0.85] {$|H(j\omega)|$};

		\draw[ultra thick] (1, 0)
			node[below=2pt] {$W$}
			-- (1, 1)
			-- (3, 1);
		\draw[ultra thick] (-1, 0)
			node[below=2pt] {$W$}
			-- (-1, 1)
			-- (-3, 1);
	\end{tikzpicture}
\end{document}
```

## Forma real
---
Sabiendo que los filtros pueden representarse un pasa bajos de la siguiente forma $$ H(s) = h_0 \frac{s^2}{s^2 + \frac{w_0}{Q} s + w_0^2} $$
Donde vamos a definir $\omega_d = \mathcal{Im}(\omega_p)$ donde $w_p$ son las [[Función raíz|raíz]] de $s^2 + \frac{w_0}{Q} s + w_0^2$ y por lo tanto la amplitud de la transferencia

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[->, ultra thick] (-3, 0) -- (3, 0)
			node[below=2pt] {$\omega$};
		\draw[->, ultra thick] (0, -0.2) -- (0, 2)
			node[right=2pt, scale=0.85] {$|H(j\omega)|$};

		\draw[ultra thick] (0.5, 0) 
			.. controls (1.5, 0) and (1, 1) 
				.. (2, 1)
			-- (3, 1);
		\draw[ultra thick] (-0.5, 0) 
			.. controls (-1.5, 0) and (-1, 1) 
				.. (-2, 1)
			-- (-3, 1);
		
		\draw[dashed, thick] (1.5, 0) 
			node[below=2pt] {$\omega_d$}
			-- ++(0, 1.5);
		\draw[dashed, thick] (-1.5, 0) 
			node[below=2pt] {$\omega_d$}
			-- ++(0, 1.5);
	\end{tikzpicture}
\end{document}
```
