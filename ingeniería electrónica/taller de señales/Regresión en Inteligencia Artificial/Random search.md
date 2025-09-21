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
Este es un método de búsqueda de [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] donde se determina el conjunto valores a probar, como lo dice el nombre de forma aleatoria, y se intenta mejorar la [[Métrica de un modelo|métrica]] probando $k$ combinaciones posibles

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
        \radio = 0.08; \cantPuntos = ceil(1.43 * 7);
    }
    
    \foreach \i in {1, ..., \cantPuntos} {
        \tikzmath {
            \x = random() * \puntosHor;
            \y = random() * \puntosVer;
        }
        
        \fill (\x, \y) circle (\radio);
    }
    
    \foreach \x in {1, ..., \puntosHor} {
        \foreach \y in {1, ..., \puntosVer} {
            \path ({(\x - 1) * \ancho}, {(\y - 1) * \ancho})
                node (punto_\x_\y) {};
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

Tiene la ventaja que puede probar varios valores sin tener repetidos aunque un eje no sea importante, pero tiene la desventaja de no poder asegurarse que se prueben todas las regiones especificadas

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document}

\definecolor{imp}{RGB}{255, 204, 204}
\definecolor{noimp}{RGB}{204, 204, 255}
 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 1.25; \puntosHor = 5; \puntosVer = 3;
        \radio = 0.08; \cantPuntos = ceil(1.43 * 7);
    }
    
    \foreach \x in {1, ..., \puntosHor} {
        \foreach \y in {1, ..., \puntosVer} {
            \path ({(\x - 1) * \ancho}, {(\y - 1) * \ancho})
                node (punto_\x_\y) {};
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
    
    % -- Eje x --
    \tikzmath{ 
        function f(\x) { return 4 * sin(deg(\x)) + \x; };
        \altoX = 1.2 * \ancho; \largoX = (1 + \puntosHor) * \ancho; \vel = 2;
        \bX = .15 * \altoX - f(0); \wX = (.75 * \altoX - \bX) / f(\vel * \largoX); 
        function xfval(\x) { return \wX * f(\vel * \x) + \bX; };
    }
    \coordinate (ini) at ($ (punto_1_\puntosVer) + (-\ancho, \ancho) $);
    \fill[color=imp] (ini) rectangle ++(\largoX, \altoX);
    \path ($ (ini) + (0, \altoX) $) -- ++(\largoX, 0)
        node[midway, above=2pt] {Importante};
    
    \draw[white] ($ (ini) + (0, {xfval(0)}) $) 
        \foreach \x [parse=true] in {0, 0.1, ..., \largoX + .1} {
        -- ($ (ini) + (\x, {xfval(\x)}) $)
    };
    
    % -- Eje y --
    \tikzmath{ 
        \altoY = \altoX; \largoY = (1 + \puntosVer) * \ancho;
        \bY = .475 * \altoY - f(0); 
        \wY = (.525 * \altoY - \bY) / f(\vel * \largoY); 
        function yfval(\y) { return \wY * f(\vel * \y) - \bY; }; 
    }
    \coordinate (ini) at ($ (punto_1_1) + (-\ancho, -\ancho) $);
    \fill[color=noimp] (ini) rectangle ++(-\altoY, \largoY);
    \path ($ (ini) + (-\altoY, 0) $) -- ++(0, \largoY)
        node[midway, above=2pt, rotate=90] {No importante};
    
    \draw[white] ($ (ini) + ({yfval(0)}, 0) $) 
        \foreach \y [parse=true] in {0, 0.1, ..., \largoY + .1} {
        -- ($ (ini) + ({yfval(\y)}, \y) $)
    };
    
    \coordinate (posX) at ($ (punto_1_\puntosVer) + (0, \ancho) $);
    \coordinate (posY) at ($ (punto_1_1) + (-\ancho, 0) $);
    \foreach \i in {1, ..., \cantPuntos} {
        \tikzmath {
            \x = random() * \puntosHor;
            \y = random() * \puntosVer;
        }
        
        \fill (\x, \y) circle (\radio)
            node (punto_\i) {};
            
        \fill[white] ($ (posX) + (\x, {xfval(\x + \ancho)}) $) circle (\radio);
        \fill[white] ($ (posY) + ({yfval(\y + \ancho)}, \y) $) circle (\radio);
    }    
    
\end{tikzpicture}
\end{document}
```
