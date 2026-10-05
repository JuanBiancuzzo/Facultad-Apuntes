---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Semaphores-Barriers-y-Condvars
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
aliases:
  - Barrier
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
 Busca que $n$ [[Proceso|procesos]] se ejecuten al mismo tiempo, esto lo consigue [[Estados de un proceso#Blocked|bloqueado procesos]], hasta que se tengan los $n$ procesos necesarios

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{verde}{RGB}{130, 153, 120} 
\definecolor{azul}{RGB}{129, 153, 191} 

\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { 
	    \ancho = 1.2; \alto = 0.7; \sepX = 1.2; \sepY = 1.5;
	    \porcen = 0.2; \intOpacity = 0.8; \escala = 0.8;
	}
	
	\coordinate (cenT1) at (0, 0);
	\coordinate (cenT2) at ($ (cenT1) + ({\sepX + \ancho}, 0) $);
	\coordinate (cenT3) at ($ (cenT2) + ({\sepX + \ancho}, 0) $);
	\coordinate (cenTUltimo) at (cenT3);
	
	\coordinate (midT12) at ($ (cenT1)!0.5!(cenT2) $);
	\coordinate (midT23) at ($ (cenT2)!0.5!(cenT3) $);
	
	\coordinate (cenP1) at ($ (cenT1) + ({ -0.5 * \ancho}, -\sepY) $);
	\coordinate (cenP2) at ($ (cenP1) + ({\sepX + \ancho}, -\sepY) $);
	\coordinate (cenP3) at ($ (cenP2) + ({\sepX + \ancho}, -\sepY) $);
	\coordinate (cenPUltimo) at (cenTUltimo |- cenP3);
	
	\coordinate (cenP1-1) at (cenP1 -| midT12);
	\coordinate (cenP1-2) at (cenP1 -| midT23);
	\coordinate (cenP2-1) at (cenP2 -| midT23);
	
	\coordinate (cenP1-fin) at ($ (cenP1 -| cenTUltimo) + ({0.5 * \ancho}, 0) $);
	\coordinate (cenP2-fin) at (cenP2 -| cenP1-fin);
	\coordinate (cenP3-fin) at (cenP3 -| cenP1-fin);
	
	\foreach \coor/\nombre [count=\i] in {cenT1/Barrera\\-2, cenT2/Barrera\\-1, cenT3/Barrera\\GO} {
	    \filldraw[fill=verde] ($ (\coor) + ({-\ancho / 2}, {-\alto / 2}) $) 
		    rectangle ++(\ancho, \alto)
		        node[midway, white, align=center, scale=\escala] {\nombre};
		\draw ($ (\coor) + (0, {-\alto / 2}) $)
			-- ($ (\coor |- cenPUltimo) + (0, {-\sepY / 2}) $)
				node[below=2pt, scale=0.8] {T\i};
	}
	
	\foreach \partida/\llegada in {cenP1/cenP1-fin, cenP2/cenP2-fin} {
		\draw[->, dashed] (\partida) -- (\llegada);
	}
	
	\foreach \coor/\nombre/\opacity in 
		{cenP1/P1/1, cenP1-1/P1/\intOpacity, cenP1-2/P1/\intOpacity, cenP1-fin/P1/1,
		cenP2/P2/1, cenP2-1/P2/\intOpacity, cenP2-fin/P2/1,
		cenP3/P3/1, cenP3-fin/P3/1} {
		\filldraw[fill=azul, opacity=\opacity] 
			($ (\coor) + ({\ancho / 2}, 0) $)
			-- ++({-\porcen * \ancho}, {\alto / 2})
			-- ++({-(1 - \porcen) * \ancho}, 0)
			-- ++(0, -\alto)
			-- ++({(1 - \porcen) * \ancho}, 0)
			-- cycle;
		\path ($ (\coor) + ({-\ancho / 2}, 0) $) -- ++(\ancho, 0)
			node[white, pos=0.45, scale=\escala] {\nombre};
	}
    
\end{tikzpicture}
\end{document}
```

## En Rust
---
Utilizando el [[ingeniería en informática/taller/Organizacion/Módulo|módulo]] de `sync` de la [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/std/Índice|librería estándar de Rust]] (`std::sync::Barrier`) se inicializa la barrera de la siguiente forma
```rust
	let barrera = Barrera::new(3); 
```

La operación de esperar es 
```rust
	fn wait(&self) -> BarrierWaitResult;
```

El cual tiene un método `BarrierWaitResult::is_leader()` que devuelve `true` en el proceso líder, que es el último proceso en hacer `wait`