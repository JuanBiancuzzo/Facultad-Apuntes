---
dia: 2024-06-15
aliases:
  - Subnet
tags:
  - redes/Capa-de-Red
  - nota
---
### Definición
---
Un host típicamente tiene un único enlace para conectarse a la [[Red|red]]. Cuando el protocolo de red del [[Host|host]] quiere enviar un [[Paquete|datagrama]], lo hace a través de un [[Router interface|interfaz]]

Cada [[Internet Protocol Address|dirección IP]] tiene un tamaño de $32$ bits y está anotado en dotted-decimal notation. Cada byte está separado por un punto y escrito en notación decimal. Una porción de la dirección IP de una interfaz estará determinada por la subnet a la cual está directamente conectada

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[dashed] (0, 0) rectangle ++(1.8, 0.7)
			node[midway] {$157$};
		\draw[dashed] (2, 0) rectangle ++(1.8, 0.7)
			node[midway] {$92$};
		\draw[dashed] (4, 0) rectangle ++(1.8, 0.7)
			node[midway] {$48$};
		\draw[dashed] (6, 0) rectangle ++(1.8, 0.7)
			node[midway] {$2$};
		
		\path (1.9, 0.1) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0);
	\end{tikzpicture}
\end{document}
```

Para determinar una subnet
