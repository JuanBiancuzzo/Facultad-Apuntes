---
dia: 2026-02-17
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dada una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]], se busca reducir la redundancia de la información obtenida

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 1.5; \largo = 2; \sep = \alto / 2;
        \scale = 0.9; 
    }
    
    \draw (0, 0) rectangle ++(\ancho, \alto)
        node[midway, scale=\scale, align=center]{Fuente de\\Información};
        
    \draw[->] (\ancho, {\alto / 2}) -- ++(\largo, 0)
        node[midway, above=2pt, scale=\scale] {$s_k$};
        
    \draw ({\ancho + \largo}, 0) rectangle ++(\ancho, \alto)
        node[midway, scale=\scale, align=center]{Codificación\\de fuente};
        
    \draw[->] ({2 * \ancho + \largo}, {\alto / 2}) -- ++(\largo, 0)
        node[midway, above=2pt, scale=\scale] {$m_k$};
    
\end{tikzpicture}
\end{document}
```

Donde $m_k$ se la llama palabra de código