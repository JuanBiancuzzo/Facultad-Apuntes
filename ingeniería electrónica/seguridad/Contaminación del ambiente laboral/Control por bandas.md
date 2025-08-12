---
dia: 2023-03-21
tags:
  - carrera/ingeniería-electrónica/seguridad/Contaminación-del-ambiente-laboral
  - nota/facultad
vinculoFacultad:
  - tema: Contaminación del ambiente laboral
    capitulo: 2
    materia: Seguridad ambiental y del trabajo
    carrera: Ingeniería electrónica
---
# Definición
---
Hay dos tipos bandas de control, bandas de severidad, bandas de exposición

## Bandas de control
---
* Es un método administrativo cualitativo que estratifica el [[Riesgo|riesgo]] potencial en niveles (bandas) y asigna controles a cada una de ellas
* Se aplica a [[Nanomateriales|nanomateriales]] [[Insoluble|insoluble]]

  ```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { \alto = 1; \ancho = 1.5; }
    
    \foreach \i in {-1, ..., 3} {
        \foreach \j in {0, ..., 4} {
            \ifthenelse{\i = -1 \AND \j = 4} {} {
                \coordinate (c\i\j) at ({\i * \ancho}, {\j * \alto});
                \draw (c\i\j) rectangle ++(\ancho, \alto);
            }
        }
    }
    
    \foreach \ij in {00, 10, 20, 01, 11} {
        \filldraw[fill=green!50!black, ultra thick] (c\ij) 
            rectangle ++(\ancho,  \alto) node[midway, white] {RL1};
    }
    \foreach \ij in {02, 12, 21, 30} {
        \filldraw[fill=yellow, ultra thick] (c\ij) 
            rectangle ++(\ancho,  \alto) node[midway, white] {RL2};
    }
    \foreach \ij in {03, 13, 22, 31} {
        \filldraw[fill=orange, ultra thick] (c\ij) 
            rectangle ++(\ancho,  \alto) node[midway, white] {RL3};
    }
    \foreach \ij in {23, 33, 32} {
        \filldraw[fill=red, ultra thick] (c\ij) 
            rectangle ++(\ancho,  \alto) node[midway, white] {RL3};
    }
    
    \path ($ (c24) + (0, \alto) $) node[above=2pt] {Exposición};
    \path (c-12) node[above=2pt, rotate=90] {Severidad};
    \foreach \ij in {-10, 04} { 
        \path ($ (c\ij) + ({\ancho / 2}, {\alto / 2}) $) 
            node[scale=0.8, align=center] {Bajo\\$0$-$25$};
    }
    \foreach \ij in {-11, 14} { 
        \path ($ (c\ij) + ({\ancho / 2}, {\alto / 2}) $) 
            node[scale=0.8, align=center] {Medio\\$26$-$50$};
    }
    \foreach \ij in {-12, 24} { 
        \path ($ (c\ij) + ({\ancho / 2}, {\alto / 2}) $) 
            node[scale=0.8, align=center] {Alto\\$51$-$75$};
    }
    \foreach \ij in {-13, 34} { 
        \path ($ (c\ij) + ({\ancho / 2}, {\alto / 2}) $) 
            node[scale=0.8, align=center] {Muy alto\\$76$-$100$};
    }
    
\end{tikzpicture}
\end{document}
```

* RL1: Ventilación general
* RL2: Controles ingeniería, campana de extracción
* RL3: Contenido
* RL4: Requiere estudio especializado

## Bandas de severidad
---
* La puntuación por severidad se obtiene como un 70% del nanomaterial y un 30% del material parental
* Puntuación
	* Superficie (10 puntos)
	* Forma de partícula (10 puntos)
	* Diámetro de partícula (10 puntos)
	* Solubilidad (10 puntos)
	* Carcinogenidad (6 puntos)
	* [[Toxicidad|Toxicidad]] en sistema reproductivo (6 puntos)
	* Mutagenicidad (6 puntos)
	* Toxicidad dérmica (6 puntos)
	* asmagenicidad (6 puntos)

## Bandas de exposición
---
* Puntuación
	* Estimación de la cantidad de material utilizado (25 puntos)
	* Pulverulencia/neblina (30 puntos)
	* Número de empleados con una exposición similar (15 puntos)
	* Frecuencia de la actividad (15 puntos)
	* Duración de la actividad (15 puntos)

Una forma de estimar esta banda de exposición es con la siguiente tabla

| Cantidad de material utilizado en un dia | Polvo en el ambiente  | Cantidad de trabajadores con similar exposición | Frecuencia anual       | Duración de la operación en hora |
| ---------------------------------------- | --------------------- | ----------------------------------------------- | ---------------------- | -------------------------------- |
| $> 100$ -> $25$                          | Alto -> $30$          | $> 15$ -> $15$                                  | Diaria -> $15$         | $> 4$ -> $15$                    |
| $11-110$ -> $12,5$                       | Medio -> $15$         | $11-15$ -> $10$                                 | Semanal -> $10$        | $1-4$ -> $10$                    |
| $0-10$ -> $6,25$                         | Bajo -> $7,5$         | $6-10$ -> $5$                                   | Mensual -> $5$         | $30-60$ min -> $5$               |
|                                          |                       | $1-5$ -> $0$                                    | $>$ Mensual -> $0$     | $< 30$ min -> $0$                |
| Desconocido -> $18,75$                   | Desconocido -> $22,5$ | Desconocido -> $11,25$                          | Desconocido -> $11,25$ | Desconocido -> $11,25$                                 |

Con 0 a 25 es baja, de 26 a 50 es media, de 51 a 75 es alta, y de 76 a 100 es muy alta