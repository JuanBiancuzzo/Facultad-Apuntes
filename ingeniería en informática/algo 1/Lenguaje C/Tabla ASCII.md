---
dia: 2024-12-23
etapa: terminado
referencias: 
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
vinculoFacultad:
  - tema: Lenguaje C
    capitulo: 2
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta tabla relaciona un número de $8$ [[Información|bits]] a un símbolo 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    
    \tikzmath { 
        \alto = 0.4; \ancho = 1.4; \escala = 0.8; 
        \sepX = 0.5; \sepY = 1;
        \cantidadMax = 48; \cantidadElementos = 2^8;
        \iteraciones = ceil(\cantidadElementos / \cantidadMax);
        \cantPosX = 3;
    }
    
    \foreach \j [parse=true] in {0, ..., \iteraciones - 1} {
        \tikzmath { 
            \desfase = \j * \cantidadMax; 
            \posX = (3 * \ancho + \sepX) * mod(\j, \cantPosX);
            \posY = -(\alto * \cantidadMax + \sepY) * floor(\j / \cantPosX);
        }
        
        \begin{scope}[cm={1, 0, 0, 1, (\posX, \posY)}]
            \draw (0, 0) rectangle ++(\ancho, \alto) 
                node[midway, scale=\escala] {Decimal};
            \draw (\ancho, 0) rectangle ++(\ancho, \alto) 
                node[midway, scale=\escala] {Hexa};
            \draw ({2 * \ancho}, 0) rectangle ++(\ancho, \alto) 
                node[midway, scale=\escala] {Caracter};
            
            \tikzmath { 
                \total = min(int(\cantidadMax + \desfase), \cantidadElementos); 
                \maximo = \total - \j * \cantidadMax;
            }
            \foreach \i [parse=true] in {0, ..., \maximo - 1} {
                \tikzmath { \num = int(\i + \desfase); \numHex = Hex(\num); }
                \draw (0, {-\i * \alto}) rectangle ++(\ancho, -\alto)
                    node[midway, scale=\escala] {$\num d$};
                \draw (\ancho, {-\i * \alto}) rectangle ++(\ancho, -\alto)
                    node[midway, scale=\escala] {$\numHex h$};
                \draw ({2 * \ancho}, {-\i * \alto}) rectangle ++(\ancho, -\alto)
                    node[midway, scale=\escala] {$\char\num$};
            }
        \end{scope}
    }

\end{tikzpicture}
\end{document}
```
