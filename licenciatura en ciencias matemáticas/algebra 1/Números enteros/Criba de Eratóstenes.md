---
dia: 2024-12-22
etapa: terminado
referencias:
  - "414"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - nota/facultad
vinculoFacultad:
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta tabla construye [[Recursividad|recursivamente]] la lista de todos los [[Número primo|primos]] hasta un número dado

## Ejemplo
---
Veamos un ejemplo donde queremos calcular los números primos hasta $59$

Se escribe la lista de todos los número hasta el $59$, ya descartamos el $0$ y el $1$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Se tachan los múltiplos estrictos del primero de la lista, el $2$, que sabemos que es primo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

El primero que sobrevivió, en este caso el $3$, es claramente primo, ya que sino tendría que ser divisible por un primo más chico que él

Se tachan los múltiplos estrictos (no tachados en la lista) del $3$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2, 3} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Se repite el procedimiento con el $5$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2, 3, 5} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Se repite el procedimiento con el $7$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2, 3, 5} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Se repite el procedimiento con el $11$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2, 3, 5, 7, 11} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Se puede probar que alcanza hacer esto hasta que se alcanzó el último primo $p \le \sqrt{59}$, es decir hasta el primo $p = 11$, pues todo [[Número compuesto|número compuesto]] $n$ es divisible por algún primo menor o igual que su raíz cuadrada

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{rojo}{RGB}{251, 70, 76}
\definecolor{verde}{RGB}{56, 149, 84}
\definecolor{gris}{RGB}{114, 114, 114}

\begin{tikzpicture}[scale=1.2, transform shape, thick]

    \tikzmath { \alto = 5; \ancho = 12; \cantidad = \alto * \ancho - 1; }

    \foreach \num/\color in {0/rojo, 1/rojo} {
        \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
        \fill[\color] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \primo in {2, 3, 5, 7, 11} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
        
        \foreach \num [parse=true] in {2 * \primo, 3 * \primo, ..., \cantidad} {
            \tikzmath { \i = int(\num / \ancho); \j = mod(\num, \ancho); }
            \fill[gris] (\j, -\i) rectangle ++(1, -1);
        }
    }
    
    \foreach \primo in {13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59} {
        \tikzmath { \i = int(\primo / \ancho); \j = mod(\primo, \ancho); }
        \fill[verde] (\j, -\i) rectangle ++(1, -1);
    }
    
    \foreach \i [parse = true] in {0, ..., \alto - 1} {
        \foreach \j [parse = true] in {0, ..., \ancho - 1} {
            \tikzmath { \num = int(\j + \i * \ancho); }
            \draw (\j, -\i) rectangle ++(1, -1)
                node[midway, scale=0.8] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Luego la lista que quedó de números no tachados son todos los primos menores o iguales que $59$, es decir $$ 2,~ 3,~ 5,~ 7,~ 11,~ 13,~ 17,~ 19,~ 23,~ 29,~ 31,~ 37,~ 41,~ 43,~ 47,~ 53,~ 59 $$
# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```