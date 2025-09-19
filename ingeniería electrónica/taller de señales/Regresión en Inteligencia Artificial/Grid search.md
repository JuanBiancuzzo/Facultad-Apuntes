---
dia: 2025-09-19
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Regresión-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este es un método de búsqueda de [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] donde se determina el conjunto valores a probar, que como su nombre lo indica, es determina en función a una grilla, y se intenta mejorar la [[Métrica de un modelo|métrica]] probando todas las combinaciones posibles

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 1.25; \puntosHor = 5; \puntosVer = 3;
        \radio = 0.08; 
    }
    
    \foreach \x in {1, ..., \puntosHor} {
        \foreach \y in {1, ..., \puntosVer} {
            \fill ({(\x - 1) * \ancho}, {(\y - 1) * \ancho})
                circle (\radio) node (punto_\x_\y) {};
        }
    }
    
    \foreach \x in {1, ..., \puntosHor} {
        \draw[dashed] ($ (punto_\x_1) + (0, -\ancho) $)
            -- ($ (punto_\x_\puntosVer) + (0, \ancho) $);
    }
    \foreach \y in {1, ..., \puntosVer} {
        \draw[dashed] ($ (punto_1_\y) + (-\ancho, 0) $)
            -- ($ (punto_\puntosHor_\y) + (\ancho, 0) $);
    }
    
    \draw[<->] ($ (punto_1_1) + ({-.75 * \ancho}, {-1.5 * \ancho}) $)
        -- ($ (punto_\puntosHor_1) + ({.75 * \ancho}, {-1.5 * \ancho}) $)
            node[midway, below=2pt] {$\lambda_1$};
            
    \draw[<->] ($ (punto_1_1) + ({-1.5 * \ancho}, {-.75 * \ancho}) $)
        -- ($ (punto_1_\puntosVer) + ({-1.5 * \ancho}, {.75 * \ancho}) $)
            node[midway, left=2pt] {$\lambda_2$};
    
    
\end{tikzpicture}
\end{document}
```

