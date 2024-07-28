---
dia: 2024-03-20
aliases:
  - Sistema LTI invariante
tags:
  - señales/Sistemas-LTI
  - nota
---
### Definición
---
Consideremos un [[Sistema lineal e invariante en el tiempo|sistema LTI]] en tiempo continuo con [[Representación de una señal mediante impulsos|respuesta al impulso]] $h(t)$. El [[Sistema invertible|sistema inverso]] $g(t)$ (si existe) debe cumplir con

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) -- (-1, 0)
			node[midway, above=2pt] {$x(t)$};
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$h(t)$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[midway, above=2pt] {$y(t)$};
		\draw (2.5, -0.5) rectangle (4.5, 0.5)
			node[midway] {$g(t)$};
		\draw[->] (4.5, 0) -- (6, 0)
			node[midway, above=2pt] {$x(t)$};
	\end{tikzpicture}
\end{document}
```

Usando la propiedad de asociatividad de la [[Convolución|convolución]] tenemos que $$ x(t) = g(t) ~*~ \left[ h(t) ~*~ x(t) \right] = g(t) ~*~ \left[ g(t) ~*~ h(t) \right] $$
Por lo que podemos decir $$ \delta(t) = g(t) ~*~ h(t) $$ donde $\delta(t)$ es la [[Delta de Dirac|delta de Dirac]]

#### Nota
---
El inverso de un sistema LTI también es un sistema LTI.