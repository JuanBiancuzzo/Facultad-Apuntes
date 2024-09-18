---
dia: 2023-11-20
tags:
  - sisop/Virtualización-de-memoria
  - nota/facultad
  - embebidos/Memorias
aliases:
  - Malloc#`malloc()`
  - Free#`free()`
---
# Definición
---
Una memoria puede verse como una gran cantidad de cajones separados, cada uno con su propio número de identificación, comenzando desde $0$ y aumentando a partir de entonces

Así, una posición en la memoria puede verse como un cajón específico y dentro de este un conjunto de cuadros representan los bits de [[Información|información]], un cuadro vacío representa un $0$ binario y un cuadro lleno un $1$ binario

Si todos los cajones están alojados en un solo gabinete, esto representa el chip de memoria

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=0.8, transform shape, thick]
    \tikzmath { \ancho = 0.6; \alto = 2.4; }    
    
    \foreach \i in {0, 1} {
    \foreach \j in {0, 1} {
    \foreach \k in {0, 1} {
    \foreach \q in {0, 1} {
    \foreach \r in {0, 1} {
        \tikzmath { \cantidad = \i + 2 * \j + 4 * \k + 8 * \q + 16 * \r; }
        
        \draw ({\cantidad * \ancho}, 0) rectangle ++(\ancho, \alto);
        \path ({(\cantidad + 0.5) * \ancho}, \alto) 
            node[left=2pt, rotate=-90] {$\r\q\k\j\i$};
    }}}}}

    \path (0, 0) -- ++(0, \alto)
        node[pos=0.1, below=2pt, rotate=-90] {b$7$}
        node[pos=0.5, below=2pt, rotate=-90] {$\cdots$}
        node[pos=0.9, below=2pt, rotate=-90] {b$0$};
    
\end{tikzpicture}
\end{document}
```

Se selecciona mediante una señal, el chip select (CS), que puede verse como la llave para bloquear o desbloquear la puerta del gabinete

El siguiente paso es crear lo que se llama un mapa de memoria, un modelo de las memorias disponibles en un sistema. Independientemente de si la memoria es interna o externa al [[Microcontrolador|microcontrolador]], el modelo de mapa de memoria será el mismo

La celda de memoria está representada por dos [[Operador NOT|inversores]] en loop. Se utilizan dos [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] como gate para transferir el bit de datos de dos líneas verticales, $D$ y $\overline{D}$. Durante la lectura, estos dos [[Transistor|transistores]] de paso son seleccionados en una fila por un [[Multiplexor|decodificador]], controlado por la dirección de la posición de memoria a la que acceder. Para un acceso de lectura, los valores directo y [[Complementario|complementario]] se conectan a un [[Amplificador diferencial|amplificador diferencial]] para proporcionar la señal `DataOut`. La salida está disponible en el caso de un ciclo de lectura

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\definecolor{fondo}{RGB}{251, 244, 203}
\begin{tikzpicture}[scale=0.9, transform shape, thick]
    
    \tikzmath { 
        \ancho = 6; \alto = 8.5; \diff = 0.05; 
        \rc = 0.2cm; \rcf = \rc + \diff cm;
    }
    
    \foreach \z in {0, ..., 7} {
        \fill[black, rounded corners=\rcf] 
            (-\diff, -\diff, \z) rectangle 
                ++({\ancho + 2 * \diff}, {\alto + 2 * \diff}, 0);
    }
    
    \foreach \z in {0, ..., 7} { \begin{scope}[canvas is xy plane at z=\z]
    
        \filldraw[fill=fondo, draw=white, ultra thick, rounded corners=\rc] 
            (0, 0) rectangle ++(\ancho, \alto);
            
        \path (\ancho, 0) node[right=0.3cm, scale=0.9] {$D\z$};
    
    \end{scope}}
    
    \tikzmath { \sepMin = 0.5; \radio = 0.075; }
    \begin{scope}[canvas is xy plane at z=7, white]    
        \draw[ultra thick, black] ({ (1/8) * \ancho }, -\sepMin) 
            -- ++(0, \sepMin);
        \draw[ultra thick, black] ({ (1/2) * \ancho }, -\sepMin) 
            -- ++(0, \sepMin);
        \tikzmath { \sep = (1/2 - 1/8) * \ancho / 10; }
        \foreach \pos [parse=true] in {0.125 * \ancho, 0.5 * \ancho} {
            \foreach \x in {1, ..., 8} {
                \draw[black] ({ \pos + \x * \sep }, -\diff) 
                    -- ++(0, -\sepMin);
            }
        }
        \draw[decorate, decoration = {brace}, ultra thick, black] 
            ({(1/8) * \ancho - 0.5 * \sep}, -0.7) -- ++({9 * \sep}, 0)
        		node[midway, black, yshift=-0.6em, scale=0.6] 
            		{DataIn($7 ~ ... ~ 0$)};
        \draw[decorate, decoration = {brace}, ultra thick, black] 
            ({(1/2) * \ancho + 8.5 * \sep}, -0.6) -- ++({-9 * \sep}, 0)
        		node[midway, black, yshift=-0.9em, scale=0.6] 
            		{DataOut($7 ~ ... ~ 0$)};
        
        
        \draw[ultra thick] ({ (1/8) * \ancho }, 0) -- ++(0, \sepMin);
        \draw[ultra thick] ({ (1/2) * \ancho }, 0) -- ++(0, \sepMin);
        
        \draw ({(1/8) * \ancho}, {1.8 * \sepMin}) -- ++(0, 1.5 * \sepMin)
            node (inicio1) {};
        \draw ({(7/8) * \ancho}, {1.8 * \sepMin}) -- ++(0, 1.5 * \sepMin)
            node (inicio2) {};
        
        \draw ({(1/8) * \ancho}, {2.5 * \sepMin}) 
            -- ({(1/2) * \ancho - (2/6) * \sepMin}, {2.5 * \sepMin})
            -- ({(1/2) * \ancho - (2/6) * \sepMin}, {1.8 * \sepMin});
        \draw ({(7/8) * \ancho}, {2.5 * \sepMin}) 
            -- ({(1/2) * \ancho + (2/6) * \sepMin}, {2.5 * \sepMin})
            -- ({(1/2) * \ancho + (2/6) * \sepMin}, {1.8 * \sepMin});
            
        \draw ({(1/8) * \ancho}, {0.5 * \sepMin}) 
            -- ({(7/8) * \ancho}, {0.5 * \sepMin}) 
            -- ++(0, {0.5 * \sepMin});
        
        \foreach \cx [parse=true, count=\i] in 
            {0.125 * \ancho, 0.875 * \ancho} 
        {
            \filldraw[fill=black, draw=white, ultra thick] (\cx, \sepMin)
                -- ++({-\sepMin / 2}, 0)
                -- ++({\sepMin / 2}, {0.8 * \sepMin})
                    node[pos=0.6] (temp\i) {}
                -- ++({\sepMin / 2}, {-0.8 * \sepMin})
                -- cycle;
        }
        
        \draw[black] (temp1.center -| -\diff, 0) -- ++({-\sepMin}, 0)
                node[pos=0.8, black, above=2pt, scale=0.8] {Wr};
        \draw (temp1.center -| 0, 0) -- (temp1.center);
        \draw (temp2.center) -- ++({-1.2 * \sepMin}, 0)
                node[pos=0.8, above=2pt, scale=0.8] {Wr};
        
        \filldraw[fill=black, draw=white, ultra thick]
            ({(7/8) * \ancho}, {1.8 * \sepMin + \radio}) circle (\radio);
        
        \filldraw[fill=black, draw=white] ({(1/2) * \ancho}, \sepMin)
            -- ++({-\sepMin / 2}, {0.8 * \sepMin})
                node[pos=0.4] (temp) {}
            -- ++(\sepMin, 0)
            -- ++({-\sepMin / 2}, {-0.8 * \sepMin})
            -- cycle;
        \filldraw[fill=black, draw=white]
            ({(1/2) * \ancho + (2/6) * \sepMin}, {1.8 * \sepMin + \radio}) 
                circle (\radio);
        
        \draw[white] (temp.center) -- ++({-1.2 * \sepMin}, 0)
            node[pos=0.8, white, above=2pt, scale=0.8] {Rd};
        
        \tikzmath { \altoMax = 2; }
        \foreach \i in {0, ..., 2} { 
            \coordinate (centro) at ($ (inicio1.center)!0.5!(inicio2.center) + (0, {\altoMax/2}) $);
            
            \foreach \signo/\id in {1/izq, -1/der} {
                \filldraw[fill=black, draw=white] ($ 
                    (centro) + 
                    ({\signo * \sepMin / 2}, {\signo * (1/5) * \altoMax}) 
                $) -- ++(0, {\sepMin / 2})
                    -- ++({-\signo * 0.8 * \sepMin}, {-\sepMin / 2})
                        node (temp) {}
                    -- ++({\signo * 0.8 * \sepMin}, {-\sepMin / 2})
                    -- cycle;
                \filldraw[fill=black, draw=white]
                    ($ (temp.center) + ({-\signo * \radio / 2}, 0) $)
                        circle (\radio);
                \draw (temp) -- ++({-\signo * \sepMin}, 0)
                    -- ++(0, {-\signo * (2/5) * \altoMax})
                        node[midway] (medio-\id) {}
                    -- ++({\signo * (\sepMin - \radio)}, 0);
            }
            
            \coordinate (md-izq) at (medio-izq.center);
            \coordinate (mi-izq) at ($ (inicio1.center) + (0, {\altoMax/2}) $);
            \coordinate (centro-izq) at ($ (mi-izq)!0.5!(md-izq) $);
            
            \coordinate (mi-der) at (medio-der.center);
            \coordinate (md-der) at ($ (inicio2.center) + (0, {\altoMax/2}) $);
            \coordinate (centro-der) at ($ (mi-der)!0.5!(md-der) $);
            
            \foreach \id in {izq, der} {
                \tikzmath { \anchoMosfet = 1.5 * \sepMin; }
                \draw ($ (centro-\id) + ({\anchoMosfet/2}, {\sepMin/3}) $)
                    -- ++(0, {-\sepMin / 3})
                    -- (md-\id);
                \draw ($ (centro-\id) + ({-\anchoMosfet/2}, {\sepMin/3}) $)
                    -- ++(0, {-\sepMin / 3})
                    -- (mi-\id);
                \draw[ultra thick] 
                    ($ (centro-\id) + ({-\anchoMosfet/2}, {\sepMin/3}) $) 
                        -- ++(\anchoMosfet, 0);
                \draw ($ (centro-\id) + ({-\anchoMosfet/2}, {\sepMin/2}) $) 
                    -- ++(\anchoMosfet, 0)
                        node[midway] (temp) {};
                \draw (temp.center) 
                    -- ($ (centro-\id) + (0, {\altoMax / 2 - 0.2}) $)
                        node (final-\id) {};
            }

            \draw (final-der.center) -- (final-izq.center)
                -- (final-izq.center -| 0, 0)
                    node (extremo-\i) {};
            
            
            \draw (inicio1.center) -- ++(0, \altoMax) node (inicio1) {};
            \draw (inicio2.center) -- ++(0, \altoMax) node (inicio2) {};
        }
        
        \foreach \j in {1, 2} {
            \draw ($ (inicio\j.center) + ({-\sepMin/2}, {-(5/3)*\altoMax - \sepMin}) $)
                -- ++(\sepMin, \sepMin);
            \draw ($ (inicio\j.center) + ({-\sepMin/2}, {-(5/3)*\altoMax - 1.5 * \sepMin}) $)
                -- ++(\sepMin, \sepMin);
        }
        
        \draw (inicio1.center) node[above=1pt, scale=0.8] {$D(7)$};
        \draw (inicio2.center) node[above=1pt, scale=0.8]
            {$\overline{D(7)}$};
        
    \end{scope}
    
    \coordinate (extremo-05) at ($ (extremo-0)!0.5!(extremo-1) $);
    
    \begin{scope}
        \clip ($ (extremo-0) + (0, {-4 * \sepMin}) $) 
            rectangle ++({-8 * \sepMin}, {14 * \sepMin});
        \foreach \id in {0, 05, 1, 2} { 
            \foreach \z in {0, ..., 7} { 
                \draw[black] ($ (extremo-\id) + (-\diff, 0, -\z) $) 
                    -- ++(-\sepMin, 0);
            }
            \draw[black] ($ (extremo-\id) + ({-\sepMin - \diff}, 0) $) 
                -- ++(0, 0, -7);
            \draw[black] ($ (extremo-\id) + (-\diff, 0) $) 
                -- ++({-4 * \sepMin}, 0)
                    node[midway] (mid-\id) {}
                    node (extremo-\id) {};
        }
        \path (mid-0) node[above=2pt, scale=0.8] {$Sel(n - 1)$};
        \path (mid-05) node[above=2pt, scale=0.8] {$Sel(n - 2)$};
        \path (mid-1) node[above=2pt, scale=0.8] {$Sel(1)$};
        \path (mid-2) node[above=2pt, scale=0.8] {$Sel(0)$};
        
        \draw ($ (extremo-2) + (0, {2 * \sepMin}) $)
            -- ++({-1.5 * \sepMin}, -\sepMin)
            -- ($ (extremo-0) + ({-1.5 * \sepMin}, -\sepMin) $)
                node[midway] (punto-medio) {}
            -- ++({1.5 * \sepMin}, -\sepMin)
            -- cycle;
        
        \draw (punto-medio.center) -- ++({-2 * \sepMin}, 0)
            node[pos=0.8, above=2pt] {Cs};        
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Para un ciclo de escritura, ocurre el mismo proceso pero a la inversa. La señal Datln se activa dentro de las línea verticales mediante fuentes buffers. El par inversor recibe el nuevo valor $D$ y $\overline{D}$ para escribir. Habrá un cortocircuito si el valor a escribir y el que ya está en la celta tienen niveles opuestos

Sin embargo, los transistores están diseñados para soportar esto. El valor a escribir siempre gana gracias a los transistores más potentes. Cuando ya no se selecciona el chip, los transistores que pasan se cierran y el par inversor mantiene el valor memorizado

## Clasificación
---
![[Clasificación de memorias.png]]

## API
---
Es importante, cuando se está trabajando con memoria, cuáles son las funciones que permiten obtener y liberar memoria, y los errores comunes al utilizar estas herramientas

### `malloc()`
---
La utilización de la función `malloc()` es bastante sencilla se le pasa la cantidad de bites que es necesaria reservar en el [[Heap|heap]] y si hay espacio en el mismo devuelve un puntero al [[Espacio de direcciones|nuevo espacio]] reservado, en caso de fallar devuelve un `NULL`

```c
#include <stdlib.h>

void* malloc(size_t size);
```

Si bien esta forma de usar malloc puede parecer sencilla hay que prestar mucha atención a la hora de utilizarla porque puede generar varios tipos de errores

1. `malloc()` devuelve un puntero a un bloque de memoria de por lo menos size bytes adecuadamente alineado al cualquier tipo de datos que pueda contener el bloque. En la práctica esta [[Alinear memoria|aliniamiento]] depende de la arquitectura
	* 32 bits: `malloc()` devuelve valores de direcciones múltiplos de $8$
	* 64 bits: `malloc()` devuelve valores de direcciones múltiplos de $16$
2. Devuelve `NULL` si algo salió mal y setea errno
3. No inicializa el bloque de memoria, este último se puede solucionar usando `calloc()`

### `free()`
---
De la misma forma en que la memoria es creada una ve que deja de utilizarse debe ser [[Heap|liberada]], al igual que en la contabilidad el debe tiene que balancear si se ha reservado espacio para alguna cantidad $X$ de memoria una vez que no se utiliza más debe ser liberada, para ello se utiliza `free()`

```c
#include <stdlib.h>

void free(void* ptr);
```

* `ptr` debe ser un bloque que devolvió `malloc()`, `calloc()` o `realloc()`. De no ser así el comportamiento de `free()` está indefinido
* `free()` no avisa si algo salió mal
