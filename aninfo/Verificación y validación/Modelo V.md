---
dia: 2023-10-16
tags:
  - aninfo/Verificación-y-validación
  - nota/facultad
---
# Definición
---

```tikz
\usetikzlibrary {arrows.meta}

\begin{document} 
	\begin{tikzpicture}[scale=1.2, transform shape]
		\draw[ultra thick, align=center] (0, 0) -- (-7, 7)
			node[pos=0.9, fill=darkgray, text width=8em] (usuario)
				{Requerimientos de usuario}
			node[pos=0.7, fill=darkgray, text width=8em] (sistema)
				{Requerimientos del sistema}
			node[pos=0.5, fill=darkgray, text width=8em] (subsistema)
				{Requerimientos del subsistema}
			node[pos=0.3, fill=darkgray, text width=8em] (componente)
				{Requerimientos del componente};

		\draw[ultra thick, align=center] (0, 0) -- (7, 7)
			node[pos=0.9, fill=darkgray, text width=8em] (aceptacion)
				{Prueba de aceptación}
			node[pos=0.7, fill=darkgray, text width=8em] (psistema)
				{Prueba del sistema}
			node[pos=0.5, fill=darkgray, text width=8em] (psubsistema)
				{Prueba del subsistema}
			node[pos=0.3, fill=darkgray, text width=8em] (pcomponente)
				{Prueba del componente};

		\draw[ultra thick, cyan, <->, shorten >=10pt, shorten <=10pt] 
			(usuario) -- (aceptacion);
		\draw[ultra thick, cyan, <->, shorten >=10pt, shorten <=10pt] 
			(sistema) -- (psistema);
		\draw[ultra thick, cyan, <->, shorten >=10pt, shorten <=10pt] 
			(subsistema) -- (psubsistema);
		\draw[ultra thick, cyan, <->, shorten >=10pt, shorten <=10pt] 
			(componente) -- (pcomponente);
	\end{tikzpicture}
\end{document}
```

Nos permiten contrastar las [[Prueba de acetación|pruebas de aceptación]] con los requerimientos del usuario. Los [[Requisito del sistema|requerimientos del sistema]] con las pruebas del [[Sistema]], y de esa forma ir descomponiendo todo el producto.
