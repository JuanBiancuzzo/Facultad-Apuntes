---
dia: 2024-04-03
tags:
  - carrera/ingeniería-electrónica/algo-1/Introducción-a-la-programación
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-en-informática/algo-1/Introducción-a-la-programación
  - nota/facultad
---
# Definición
---
Una computadora es un dispositivo que puede aceptar instrucciones humanas, las procesa y responde a ellas; o una computadora es un dispositivo informático que se utiliza para procesar datos bajo el control de un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] de computadora ^743ae8

## Partes fundamentales
---
* La [[Microprocesadores|Unidad Central de Procesamiento o CPU]]
	* Controla el funcionamiento de la computadora y lleva a cabo sus funciones de procesamiento de datos
* [[Memoria|La memoria principal]]
	* Almacena datos
* Los periféricos de entrada y salida de datos
	* Transfieren datos entre la computadora y el entorno externo
* Las [[Bus|inter-conexiones o buses]]
	* Es el mecanismos que proporcionan la comunicación entre la CPU, la memora principal y la [[General Purpose Input Output|Entrada/Salida]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \draw (-1, -0.5) rectangle ++(2, 1) node[midway] {ALU};
    \draw (-1, 2) rectangle ++(2, 1) 
        node[midway, align=center] {Control\\Unit};
    \draw (-1, -3) rectangle ++(2, 1) 
        node[midway, align=center] {Memory\\Unit};
    \draw (-1.15, -3.15) rectangle (1.15, 3.15);
    
    \draw (-4.5, -0.5) rectangle ++(2, 1) node[midway] {Input};
    \draw (2.5, -0.5) rectangle ++(2, 1) node[midway] {Output};
    
    \foreach \cx in {-1.8, 1.8} {
        \coordinate (center) at (\cx, 0);
        \fill ($ (center) + (-0.5, 0.075) $) 
            -- ++(0.8, 0)
            -- ++(0, 0.075)
            -- ++(0.2, -0.15)
            -- ++(-0.2, -0.15)
            -- ++(0, 0.075)
            -- ++(-0.8, 0);
    }
    
    \foreach \cy in {-1.25, 1.25} {
        \coordinate (center) at (0, \cy);
        \foreach \signo in {-1, 1} {
            \fill ($ (center) + (-0.075, 0) $)
                -- ++(0, {\signo * 0.2})
                -- ++(-0.075, 0)
                -- ++(0.15, {\signo * 0.2})
                -- ++(0.15, {\signo * -0.2})
                -- ++(-0.075, 0)
                -- ++(0, {\signo * -0.2});
        }
    }
    
\end{tikzpicture}
\end{document}
```
