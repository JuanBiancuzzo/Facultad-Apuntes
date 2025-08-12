---
dia: 2024-09-05
tags:
  - carrera/ingeniería-electrónica/electro/Campo-electromagnético
  - nota/facultad
referencias:
  - "231"
vinculoFacultad:
  - tema: Campo electromagnético
    capitulo: 2
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
---
# Definición
---
Un campo electromagnético es un campo físico, de tipo tensorial, producido por aquellos elementos cargados eléctricamente, que afecta a partículas con [[Carga eléctrica|carga eléctrica]]

Convencionalmente, dado un [[Sistema|sistema]] de referencia, el campo electromagnético se divide en una "parte eléctrica" y en una "parte magnética". Sin embargo, esta distinción no puede ser universal sino dependiente del observador. Así un observador en movimiento relativo respecto al sistema de referencia medirá efectos eléctricos y magnéticos diferentes, que un observador en reposo respecto a dicho sistema. Esto ilustra la relatividad de lo que se denomina "parte eléctrica" y "parte magnética" del campo electromagnético. Como consecuencia de lo anterior tenemos que ni el "vector" [[Campo eléctrico|campo eléctrico]] ni el "vector" de inducción magnética se comportan genuinamente como magnitudes físicas de tipo vectorial, sino que juntos constituyen un tensor para el que sí existen leyes de transformación físicamente esperables

El campo puede verse como la combinación de un campo eléctrico y un [[Material magnético#^campo-magnetico|campo magnético]]. El campo eléctrico es producido por cargas estacionarias y el campo magnético por cargas en movimiento (corrientes); estos dos se describen a menudo como las fuentes del campo. La forma en que las cargas y las corrientes interactúan con el campo electromagnético se describe mediante las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] y la [[Fuerza de Lorentz|ley de fuerza de Lorentz]]<sup><a href="#ref-231" style="color: inherit; text-decoration: none;">[231]</a></sup> 


```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
    \definecolor{rojo}{RGB}{247, 156, 133}
    \definecolor{azul}{RGB}{195, 195, 213}
\begin{tikzpicture}[scale=1.1, transform shape, thick, z={(10:10mm)}, x={(-45:5mm)}]
    \tikzmath { \definicion = 0.1; \longitud = 11; }
    
    \begin{scope}[canvas is zx plane at y=0] % magnetico
        \draw[gray, opacity=0.8] (0, -2) grid (\longitud, 2);
        
        \draw[ultra thick] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) };
        
        \fill[red, opacity=0.5] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) } -- (\longitud, 0) -- cycle;
        
        \foreach \x in {0, 0.5, ..., \longitud} {
            \draw[opacity=0.8] (\x, 0) -- ++(0, {cos(\x * 90)});
        }
    \end{scope}
    
    \begin{scope}[canvas is zy plane at x=0] % electrico    
        \draw[ultra thick] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) };
        
        \fill[blue, opacity=0.5] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) } -- (\longitud, 0) -- cycle;
        
        \foreach \x in {0, 0.5, ..., \longitud} {
            \draw[opacity=0.8] (\x, 0) -- ++(0, {cos(\x * 90)});
        }
    \end{scope}
    
    \tikzmath { \alto = 2; }
    \draw[->, ultra thick] (0, -\alto, 0) -- (0, \alto, 0) 
        node[above=2pt] {$x$};
    \draw[->, ultra thick] (0, 0, 0) -- (0, 1, 0) 
        node[left=2pt] {$E_x$};
        
    \tikzmath { \alto = 3; }
    \draw[->, ultra thick] (-\alto, 0, 0) -- (\alto, 0, 0) 
        node[right=2pt] {$y$};
    \draw[->, ultra thick] (0, 0, 0) -- (1, 0, 0) 
        node[below=2pt] {$H_y$};
        
    \draw[->, ultra thick] (0, 0, 0) -- (0, 0, {\longitud + 0.25}) 
        node[right=2pt] {$z$};
\end{tikzpicture}
\end{document}
```


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```

