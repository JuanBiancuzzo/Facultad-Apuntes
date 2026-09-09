---
dia: 2026-09-04
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
En el equilibrio,  la cantidad que los [[ingeniería en informática/ebt 1/Economía/Mercado#^demandante|compradores]] quieren comprar es exactamente la que los [[ingeniería en informática/ebt 1/Economía/Mercado#^ofertantes|vendedores]] quieren vender

Este es la intersección entre la [[ingeniería en informática/ebt 1/Economía/Demanda|curva de demanda]] y la [[ingeniería en informática/ebt 1/Economía/Oferta|curva de oferta]]. Ahí el [[ingeniería en informática/ebt 1/Economía/Precio|precio]] se llama precio de equilibrio y la cantidad, la cantidad de equilibrio

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document}
\definecolor{colDemanda}{RGB}{218, 111, 142}
\definecolor{colOferta}{RGB}{0, 127, 204}
\begin{tikzpicture}[scale=0.95, transform shape, thick]
	\tikzmath { 
		\sepY = 1.8; \sepX = 0.65; 
		\maxAlto = 3.5; \maxLargo = 16;
		\alto = \maxAlto * \sepY; \largo = \maxLargo * \sepX;
		\radio = 0.1;
		\diff = 0.5; \sep = 1.5; \tick = 0.1;
		\interY = 2; \interX = 7;
		
		function demanda(\x) {
			\pendiente = (3 - 0.5) / (1 - 15);
			return \pendiente * (\x - \interX) + \interY;
		};
		function oferta(\x) {
			\pendiente = (1 - 3) / (1 - 13);
			return \pendiente * (\x - \interX) + \interY;
		};
	}
	
	\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
		node[pos=1.01, right=2pt, align=center] {Cantidad de\\helados};
	\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
		node[pos=1.01, above=2pt] {Precio del helado};
		
	\foreach \i in {2, 4, ..., \maxLargo} {
		\draw ({\i * \sepX}, {\tick / 2})	-- ++(0, -\tick) 
			node [below=2pt] {$\i$};
	}
	
	\foreach \j in {0.5, 1, ..., \maxAlto} {
		\draw ({\tick / 2}, {\j * \sepY}) -- ++(-\tick, 0) 
			node [left=2pt] {$\j$};
	}
	
	\foreach \color/\funcion/\nombre in {colDemanda/demanda/D, colOferta/oferta/O} {
		\tikzmath { \inicio = 1; \final = \maxLargo - 1; }
		\draw[\color] ({\inicio * \sepX}, {\funcion(\inicio) * \sepY}) 
			-- ({\final * \sepX}, {\funcion(\final) * \sepY})
				node[pos=0.9, above=2pt] {\nombre};
	}
	\fill ({\interX * \sepX}, {\interY * \sepY}) circle (\radio);
	
	\draw[dashed] (0, 0) rectangle ({\interX * \sepX}, {\interY * \sepY});
	\path (0, 0) node[above right=2pt, align=center] 
		{Beneficios de\\la empresa};

\end{tikzpicture}
\end{document}
```

Cuando, por ejemplo, la curva de demanda se mueve

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document}
\definecolor{colDemanda}{RGB}{218, 111, 142}
\definecolor{colOferta}{RGB}{0, 127, 204}
\begin{tikzpicture}[scale=0.95, transform shape, thick]
	\tikzmath { 
		\sepY = 1.8; \sepX = 0.65; 
		\maxAlto = 3.5; \maxLargo = 16;
		\alto = \maxAlto * \sepY; \largo = \maxLargo * \sepX;
		\radio = 0.1;
		\diff = 0.5; \sep = 1.5; \tick = 0.1;
		\interY = 2; \interX = 7; 
		\diffInterY = 0.5; \diffInterX = 3;
		
		function demanda(\x) {
			\pendiente = (3 - 0.5) / (1 - 15);
			return \pendiente * (\x - \interX) + \interY;
		};
		function demandaNueva(\x) {
			\pendiente = (3 - 0.5) / (1 - 15);
			return \pendiente * (\x - \interX - \diffInterX) + \interY + \diffInterY;
		};
		function oferta(\x) {
			\pendiente = (1 - 3) / (1 - 13);
			return \pendiente * (\x - \interX) + \interY;
		};
	}
	
	\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
		node[pos=1.01, right=2pt, align=center] {Cantidad de\\helados};
	\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
		node[pos=1.01, above=2pt] {Precio del helado};
		
	\foreach \i in {2, 4, ..., \maxLargo} {
		\draw ({\i * \sepX}, {\tick / 2})	-- ++(0, -\tick) 
			node [below=2pt] {$\i$};
	}
	
	\foreach \j in {0.5, 1, ..., \maxAlto} {
		\draw ({\tick / 2}, {\j * \sepY}) -- ++(-\tick, 0) 
			node [left=2pt] {$\j$};
	}
	
	\foreach \color/\funcion/\nombre in 
		{black/demanda/D_2, colDemanda/demandaNueva/D, colOferta/oferta/O} 
	{ \begin{scope}
		\clip (0, 0) rectangle ({\maxLargo * \sepX}, {\maxAlto * \sepY});
		\tikzmath { \inicio = 1; \final = \maxLargo - 1; }
		\draw[\color] ({\inicio * \sepX}, {\funcion(\inicio) * \sepY}) 
			-- ({\final * \sepX}, {\funcion(\final) * \sepY})
				node[pos=0.9, above=2pt] {$\nombre$};
	\end{scope} }
	\fill ({\interX * \sepX}, {\interY * \sepY}) circle (\radio);
	\fill ({(\interX + \diffInterX) * \sepX}, {(\interY + \diffInterY) * \sepY})
		circle (\radio);
	
	\draw[dashed] (0, 0) rectangle ({\interX * \sepX}, {\interY * \sepY});
	\draw[dashed] (0, 0) rectangle 
		({(\interX + \diffInterX) * \sepX}, {(\interY + \diffInterY) * \sepY});

\end{tikzpicture}
\end{document}
```

No se modificó la oferta, e igual hay una mayor ganancia porque hay un nuevo punto de equilibrio

De forma general se tiene $4$ casos

| Modificación       | Precio         | Cantidad         |
| ------------------ | -------------- | ---------------- |
| Aumenta la demanda | Sube el precio | Sube la cantidad |
| Cae la demanda     | Baja el precio | Baja la cantidad |
| Aumenta la oferta  | Baja el precio | Suba la cantidad |
| Cae la oferta      | Sube el precio | Baja la cantidad |
