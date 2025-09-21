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

Tiene la ventaja de definir muy bien el rango de que valores que se quiere probar. Tiene la desventaja de si un parámetro no tiene tanta influencia en el el resultado final, se desperdician muchos entrenamientos sin conseguir mucha información

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
    
    
    % -- Eje X --
    \tikzmath{ 
        function f(\x) { return 4 * sin(deg(\x)) + \x; };
        \alto = 1.2 * \ancho; \largo = (1 + \puntosHor) * \ancho; \vel = 2;
        \b = .15 * \alto - f(0); \w = (.75 * \alto - \b) / f(\vel * \largo); 
    }
    \coordinate (ini) at ($ (punto_1_\puntosVer) + (-\ancho, \ancho) $);
    \fill[color=imp] (ini) rectangle ++(\largo, \alto);
    \path ($ (ini) + (0, \alto) $) -- ++(\largo, 0)
        node[midway, above=2pt] {Importante};
    
    \draw[white] ($ (ini) + (0, {\w * f(0) + \b}) $) 
        \foreach \x [parse=true] in {0, 0.1, ..., \largo + .1} {
        -- ($ (ini) + (\x, {\w * f(\vel * \x) + \b}) $)
    };
    
    \coordinate (pos) at ($ (punto_1_\puntosVer) + (0, \ancho) $);
    \foreach \i [evaluate=\i as \x using \i * \ancho] in {1, ..., \puntosHor} {
        \fill[white] ($ (pos) + (punto_\i_1 |- 0, {\w * f(\vel * \x) + \b}) $)
            circle (\radio);
    }
    
    % -- Eje y --
    \tikzmath{ 
        \largo = (1 + \puntosVer) * \ancho; \vel = 2; 
        \b = .475 * \alto - f(0); \w = (.525 * \alto - \b) / f(\vel * \largo); 
    }
    \coordinate (ini) at ($ (punto_1_1) + (-\ancho, -\ancho) $);
    \fill[color=noimp] (ini) rectangle ++(-\alto, \largo);
    \path ($ (ini) + (-\alto, 0) $) -- ++(0, \largo)
        node[midway, above=2pt, rotate=90] {No importante};
    
    \draw[white] ($ (ini) + ({\w * f(0) - \b}, 0) $) 
        \foreach \y [parse=true] in {0, 0.1, ..., \largo + .1} {
        -- ($ (ini) + ({\w * f(\vel * \y) - \b}, \y) $)
    };
    
    \coordinate (pos) at ($ (punto_1_1) + (-\ancho, 0) $);
    \foreach \i [evaluate=\i as \y using \i * \ancho] in {1, ..., \puntosVer} {
        \fill[white] ($ (pos) + (punto_1_\i -| {\w * f(\vel * \y) - \b}, 0) $)
            circle (\radio);
    }
    
    
\end{tikzpicture}
\end{document}
```

