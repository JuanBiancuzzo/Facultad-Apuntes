---
dia: 2024-09-01
tags:
  - ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - nota/facultad
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
---
# Definición
---
Son curvas imaginarias, de modo que su tangente en todo punto del espacio sea la dirección del [[Campo vectorial|campo vectorial]]. Al representar la dirección del campo, se pierde la información del módulo

Para remplazar esta información faltante usamos la densidad de líneas dibujadas, la cual es proporcional a la intensidad del campo. Cuantas más líneas haya alrededor de un punto , mayor es la intensidad del campo en ese punto

## Caso campo eléctrico
---
Las líneas de [[Campo eléctrico|campo]] son salientes de las [[Carga eléctrica|cargas]] positivas (fuentes), y entrantes en las cargas negativas (sumidero)

1. Líneas de campo de una carga puntual positiva

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath {
        \radio = 0.5;
        \grosor = 0.1;
        \alto = 0.45;
        \distancia = 2;
        \dAngulo = 20;
    }
    
    \fill[red] (0, 0) circle (0.5);
    \fill[black] ({-\grosor/2}, {-\alto/2}) rectangle ++(\grosor, \alto);
    \fill[black] ({-\alto/2}, {-\grosor/2}) rectangle ++(\alto, \grosor);

    \foreach \angulo [parse=true] in {0, \dAngulo, ..., 360 - \dAngulo} {
        \draw[red, ->] ({\radio * cos(\angulo)}, {\radio * sin(\angulo)})
            -- ({\distancia * cos(\angulo)}, {\distancia * sin(\angulo)});
    }
    
\end{tikzpicture}
\end{document}
```

2. Líneas de campo de dos cargas positivas

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath {
        \radio = 0.5;
        \grosor = 0.1;
        \alto = 0.45;
        \distancia = 2;
        \dAngulo = 30;
    }
    
    \coordinate (centroA) at (-2, 0);
    \coordinate (centroB) at ( 2, 0);
    
    \foreach \c in {centroA, centroB} {
        \fill[red] (\c) circle (0.5);
        
        \fill[black] ($ (\c) + ({-\grosor/2}, {-\alto/2}) $) 
            rectangle ++(\grosor, \alto);
        \fill[black] ($ (\c) + ({-\alto/2}, {-\grosor/2}) $)
            rectangle ++(\alto, \grosor);
    }

    \foreach \angulo [parse=true] in 
        {120, 120 + \dAngulo, ..., 270 - \dAngulo} 
    {
        \tikzmath { \cosA = cos(\angulo); \sinA = sin(\angulo); }
        \draw[red, ->] ($ (centroA) + ({\radio * \cosA}, {\radio * \sinA}) $)
            -- ($ (centroA) + ({\distancia * \cosA}, {\distancia * \sinA}) $);
    }
    
    \foreach \angulo [parse=true] in 
        {300, 300 + \dAngulo, ..., 450 - \dAngulo} 
    {
        \tikzmath { \cosA = cos(\angulo); \sinA = sin(\angulo); }
        \draw[red, ->] ($ (centroB) + ({\radio * \cosA}, {\radio * \sinA}) $)
            -- ($ (centroB) + ({\distancia * \cosA}, {\distancia * \sinA}) $);
    }
    
    \foreach \actual/\signoX in {centroA/1, centroB/-1} {
    \foreach \signoY in {-1, 1} {
    \foreach \angulo in {0, \dAngulo, ..., 90} {
        \tikzmath { 
            \aNormalizado = \angulo / 90;
            \eX = -1.8 * \aNormalizado - 0.1;
            \cosA = cos(\angulo); 
            \sinA = sin(\angulo);
            \distNormal = \radio + 0.5;
        }
        
        \draw[red, ->] ($ 
            (\actual) 
                + 
            ({\signoX * \radio * \cosA}, {\signoY * \radio * \sinA}) 
        $) .. controls ($ 
            (\actual) 
                + 
            (
                {\signoX * \distNormal * \cosA}, 
                {\signoY * \distNormal * \sinA}
            ) 
        $) 
            and
        ({\signoX * \eX}, {\signoY * (2 - 1)})
        .. ({\signoX * \eX}, {\signoY * 2});
    }            
    }
    }
    
\end{tikzpicture}
\end{document}
```

3. Líneas de campo de un [[Dipolo de carga|dipolo eléctrico]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{azul}{RGB}{0, 3, 249} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath {
        \radio = 0.5;
        \grosor = 0.1;
        \alto = 0.45;
        \dist = 1;
        \dAngulo = 30;
    }
    
    \coordinate (centroA) at (-2, 0);
    \coordinate (centroB) at ( 2, 0);

    \fill[red] (centroA) circle (\radio);
    \fill[azul] (centroB) circle (\radio);
    
    \fill[black] ($ (centroA) + ({-\grosor/2}, {-\alto/2}) $) 
        rectangle ++(\grosor, \alto);
    \fill[black] ($ (centroA) + ({-\alto/2}, {-\grosor/2}) $)
        rectangle ++(\alto, \grosor);
        
    \fill[black] ($ (centroB) + ({-\alto/2}, {-\grosor/2}) $)
        rectangle ++(\alto, \grosor);
    
    \draw[red, ->] ($ (centroA) + (-\radio, 0) $) -- ++(-2, 0);
    \draw[azul, <-] ($ (centroB) + (\radio, 0) $) -- ++(2, 0);
    
    \foreach \angulo [parse=true] in {0, \dAngulo, ..., 90} {
    \foreach \signoY in {-1, 1} {
        \tikzmath {
            \aNorm = \angulo / 90;
            \mitadY = \signoY * \aNorm * 2;
            \cosA = cos(\angulo);
            \sinA = sin(\angulo);
        }
        
        \coordinate (inicio) at ($ (centroA) + ({\radio * \cosA}, {\signoY * \radio * \sinA)}) $);
        \coordinate (mitad) at (0, \mitadY);
        \coordinate (final) at ($ (centroB) + ({-\radio * \cosA}, {\signoY * \radio * \sinA}) $);
        
        \draw[red, ->] (inicio) 
            .. controls 
                ($ (inicio) + (
                    {\dist * \aNorm * \cosA}, 
                    {\signoY * \dist * \aNorm * \sinA}
                ) $)
                    and
                ($ (mitad) + ({\aNorm * \aNorm - 1}, 0 ) $)
            .. (mitad);
        \draw[azul, ->] (mitad) 
            .. controls 
                ($ (mitad) + ({1 - \aNorm * \aNorm}, 0 ) $)
                    and
                ($ (final) + (
                    {-\dist * \aNorm * \cosA}, 
                    {\signoY * \dist * \aNorm * \sinA}
                ) $)
                .. (final);
    }
    }
    
    \foreach \centro/\signoX/\dir/\color in 
        {centroA/1/->/red, centroB/-1/<-/azul} 
    {
    \foreach \signoY in {-1, 1} {
        \tikzmath { 
            \angulo = 90 + \dAngulo / 2; 
            \dirX = \signoX * cos(\angulo);
            \dirY = \signoY * sin(\angulo);
        }
        
        \coordinate (inicio) at ($ (\centro) + ({\radio * \dirX}, {\radio * \dirY}) $);
        
        \draw[\color, \dir] (inicio) .. controls
            ($ (\centro) + ({(\radio + \dist) * \dirX}, {(\radio + \dist) * \dirY}) $)
                and
            ($ (\centro) + (0, {\signoY * (\dist + \radio)}) $)
        .. ({-\signoX * 1.5 * \dist}, {\signoY * 2});
        
        \tikzmath { 
            \angulo = 90 + 3 * \dAngulo / 2; 
            \dirX = \signoX * cos(\angulo);
            \dirY = \signoY * sin(\angulo);
        }
        \coordinate (inicio) at ($ (\centro) + ({\radio * \dirX}, {\radio * \dirY}) $);
        
        \draw[\color, \dir] (inicio) .. controls
            ($ 
                (\centro) 
                    + 
                (
                    {(\radio + 1.2 * \dist) * \dirX}, 
                    {(\radio + 1.2  * \dist) * \dirY}
                )
            $)
        .. ($ 
                (\centro) 
                    + 
                (
                    {(\radio + 1.5 * \dist) * \dirX}, 
                    {(\radio + 2  * \dist) * \dirY}
                )
            $);
        
        \tikzmath { 
            \angulo = 180 - \dAngulo / 2; 
            \dirX = \signoX * cos(\angulo);
            \dirY = \signoY * sin(\angulo);
        }
        \coordinate (inicio) at ($ (\centro) + ({\radio * \dirX}, {\radio * \dirY}) $);
        
        \draw[\color, \dir] (inicio) .. controls
            ($ 
                (\centro) 
                    + 
                (
                    {(\radio + 1.2 * \dist) * \dirX}, 
                    {(\radio + 1.2  * \dist) * \dirY}
                )
            $)
        .. ($ 
                (\centro) 
                    + 
                (
                    {(\radio + 1.8 * \dist) * \dirX}, 
                    {(\radio + 3  * \dist) * \dirY}
                )
            $);
    }
    }

    
\end{tikzpicture}
\end{document}
```

## Caso campo magnético
---
Las líneas de [[Campo de inducción magnética|campo]] son salientes del polo positivo (fuentes), y entrantes en el polo negativo (sumidero)