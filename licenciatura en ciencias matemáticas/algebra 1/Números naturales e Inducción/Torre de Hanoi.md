---
dia: 2024-11-06
etapa: ampliar
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
vinculoFacultad:
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El problema de las torres de Hanoi fue inventado or el matemático francés Edourad Lucas en 1883. Tenemos $3$ estacas, y un cierto número $n$ de discos de distinto diámetro ensartados en la primer estaca, ordenados por tamaño, de mayor a menor estada el menor encima

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
    \definecolor{rojo}{RGB}{238, 6, 2} 
    \definecolor{azul}{RGB}{74, 20, 213} 
    
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \def\posiciones{{1, 1, 1, 1, 1, 1, 1, 1}} 
    \tikzmath { 
        \cantidad = dim(\posiciones);  
        \maxAncho = 3; \alto = 0.4;
        \proposicion = \maxAncho / \cantidad;
        \sep = 1;
    }
    
    \tikzmath { \altoMaximo = (\cantidad + 1) * \alto; }
    \path ({-\maxAncho - \sep}, 0) node (torre1) {} 
        -- ++(0, \altoMaximo) node (torreMax1) {};
    \path (0, 0) node (torre2) {}
        -- ++(0, \altoMaximo) node (torreMax2) {};
    \path ({\maxAncho + \sep}, 0) node (torre3) {}
        -- ++(0, \altoMaximo) node (torreMax3) {};
    
    \foreach \num in {1, 2, 3} {
        \draw[rounded corners=2mm] 
            ($ (torre\num) + ({-(\maxAncho + \sep / 2) / 2}, -0.2) $) 
                -- ++(0, 0.2)
                -- ++({\maxAncho + \sep / 2}, 0)
                -- ++(0, -0.2);
        \draw ($ (torre\num) + ({-(\maxAncho + \sep / 2) / 2}, -0.2) $) 
            -- ++({\maxAncho + \sep / 2}, 0);
    }
    
    \foreach \i [parse=true] in {0, ..., \cantidad - 1} {
        \tikzmath { \posicion = array(\posiciones, \i); }
        
        \ifthenelse{1 = \posicion}{
            \path (torre1) node (temp) {};            
            \path ($ (torre1) + (0, \alto) $) node (torre1) {};
        }{}
        
        \ifthenelse{2 = \posicion}{        
            \path (torre2) node (temp) {};            
            \path ($ (torre2) + (0, \alto) $) node (torre2) {};
        }{}
        
        \ifthenelse{3 = \posicion}{    
            \path (torre3) node (temp) {};            
            \path ($ (torre3) + (0, \alto) $) node (torre3) {};
        }{}
        
        \tikzmath { 
            \ancho = (\cantidad - \i) * \proposicion; 
            \color = mod(\i, 2) == 0 ? "azul" : "rojo";
        }
        \filldraw[fill=\color] ($ (temp) + ({-\ancho / 2}, 0) $) 
            rectangle ++(\ancho, \alto);
    }
    
    \foreach \num in {1, 2, 3} {
        \draw[rounded corners=1mm] ($ (torre\num) + ({-\proposicion / 4}, 0) $) 
            -- ($ (torreMax\num) + ({-\proposicion / 4}, 0) $)
            -- ($ (torreMax\num) + ({\proposicion / 4}, 0) $)
            -- ($ (torre\num) + ({\proposicion / 4}, 0) $);
    }
    
\end{tikzpicture}
\end{document}
```

El objetivo del juego es lograr mover toda la pila de discos a otra estaca, con las condiciones siguientes
* No se puede mover más de un disco a la vez
* Sólo se puede sacar el disco de la parte superior de cada pila de discos
* En todo momento los discos de cada estaca deben estar ordenados por tamaño, de mayor a menor con el menor encima

Notemos que podemos describir como [[Ecuación de recurrencia lineal|recurrencia lineal]] donde $$ a_1 = 1, ~~~~ a_{n + 1} = 2 ~ a_n + 1, ~~ \forall n \in \mathbb{N} $$ es una [[Sucesión|sucesión]] definida por recurrencia, ya que para calcular un término necesitamos conocer el anterior. Además de necesitar conocer el caso base $n = 1$ 

> [!demostracion]- Demostración
> Podemos demostrar que la cantidad de movimiento es $a_n = 2^n - 1$ usando el [[Principio de inducción|principo de inducción]]
> 
> Proponemos que $p(n): ~~ a_n = 2^n - 1, ~~ \forall n \in \mathbb{N}$
>  * Caso base $p(1)$: $2^1 - 1 = 1 = a_1$
>  * Paso inductivo: Dado $h \in \mathbb{N}$
>      * HI: $a_h = 2^h - 1$
>      * Qpq: $a_{h + 1} = 2^{h + 1} - 1$
>  
>  Pero por definición de la sucesión, sabemos que $a_{h + 1} = 2 a_h + 1$. Luego $$ a_{h + 1} = 2 ~ a_h + 1 \underset{\text{HI}}{=} 2(2^h - 1) + 1 = 2^{h + 1} - 2 + 1 = 2^{h + 1} - 2 $$ como se quería probar
>  
>  Se concluye que $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```