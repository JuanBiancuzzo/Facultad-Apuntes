---
dia: 2025-03-14
etapa: ampliar
referencias:
  - "871"
  - "882"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Open-loop control
  - Controlador de lazo abierto
  - Feedforward control
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los [[Sistema|sistemas]] en los cuales la salida no tiene efecto sobre la acción de control se denominan sistemas de control en lazo abierto. En otras palabras, si el [[Controlador|controlador]] no usa las mediciones de la salida del sistema siendo controladas, este sistema se llama controlador open-loop

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { \largo = 2.5; \alto = 1.5; \scale = 0.9; \sep = 1.1; }
    \coordinate (sys_1) at (0, 0);
    \coordinate (sys_2) at ($ (sys_1) + ({\largo + \sep}, 0) $);

    \foreach \coor/\text in {sys_1/Sistema 1, sys_2/Sistema 2} {
        \draw (\coor) rectangle ++(\largo, \alto)
            node[midway, align=center, scale=\scale] {\text};
        
        \coordinate (\coor_arriba) at ($ (\coor) + ({\largo / 2}, \alto) $);
        \coordinate (\coor_abajo)  at ($ (\coor) + ({\largo / 2}, 0) $);
        \coordinate (\coor_izq)    at ($ (\coor) + (0, {\alto / 2}) $);
        \coordinate (\coor_der)    at ($ (\coor) + (\largo, {\alto / 2}) $);
    }

    \draw[<-] (sys_1_izq) -- ++(-\sep, 0) node[midway, above=2pt] {$r$};
    \draw[->] (sys_1_der) -- (sys_2_izq) node[midway, above=2pt] {$u$};
    \draw[->] (sys_2_der) -- ++(\sep, 0) node[midway, above=2pt] {$y$};

\end{tikzpicture}
\end{document}
```

La expresión open-loop refiere al hecho que no hay ningún [[Camino#Camino simple (Path)|camino]] que vuelve a la sección del controlador. Las variables controladas $u$ son independiente de las variables de salida $y$

Algo que todavía no se tuvo en cuenta es el hecho de las [[Perturbación|perturbaciones]], y como las maneja un sistema a lazo abierto. Este sistema lo que puede hacer (sin leer la salida) es [[Sensores|censar]] la perturbación y generar una señal que cancele la perturbación

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5; \alto = 1.5; \radio = 0.6; 
        \scale = 0.9; \sep = 1.1; 
    }
    
    \coordinate (sys_1) at (0, 0);
    \coordinate (suma) at ($ (sys_1) + ({\largo / 2 + \sep + \radio}, 0) $);
    \coordinate (sys_2) at ($ (suma) + ({\radio + \largo / 2 + \sep}, 0) $);

    \foreach \coor/\text in {sys_1/C, sys_2/P} {
        \draw ($ (\coor) + ({-\largo / 2}, {-\alto / 2}) $) 
            rectangle ++(\largo, \alto)
                node[midway, align=center, scale=\scale] {$\text$};
        
        \coordinate (\coor_arriba) at ($ (\coor) + (0, {\alto / 2}) $);
        \coordinate (\coor_abajo)  at ($ (\coor) + (0, {-\alto / 2}) $);
        \coordinate (\coor_der)    at ($ (\coor) + ({\largo / 2}, 0) $);
        \coordinate (\coor_izq)    at ($ (\coor) + ({-\largo / 2}, 0) $);
    }
    
    \foreach \coor in {suma} { \begin{scope}[cm={1, 0, 0, 1, (\coor)}]
        
        \draw (0, 0) circle (\radio); 
        \draw ({\radio * cos(135)}, {\radio * sin(135)})
            -- ({\radio * cos(-45)}, {\radio * sin(-45)});
        \draw ({\radio * cos(-135)}, {\radio * sin(-135)})
            -- ({\radio * cos(45)}, {\radio * sin(45)});
            
        \foreach \i/\j/\dir in {0/1/arriba, 0/-1/abajo, 1/0/der, -1/0/izq} {
            \coordinate (\coor_\dir) at ({\i * \radio}, {\j * \radio});
            \coordinate (\coor_\dir_label) at ($ (0, 0)!0.6!(\coor_\dir) $);
        }
        
    \end{scope} }
    
    \path (suma_arriba_label) node {$+$};
    \path (suma_izq_label) node {$+$};
    
    \draw[<-] (sys_1_izq) -- ++(-\sep, 0) node[midway, above=2pt] {$r$};
    \draw[->] (sys_1_der) -- (suma_izq);
    \draw[->] (suma_der) -- (sys_2_izq);
    \draw[->] (sys_2_der) -- ++(\sep, 0) node[midway, above=2pt] {$y$};

    \draw[<-] (suma_arriba) -- ++(0, {2 * \sep}) 
        node[midway, right=2pt] {$v$}
        node[midway] (temp) {};
    \draw[->] (temp.center) -- (sys_1_arriba |- temp) -- (sys_1_arriba);

\end{tikzpicture}
\end{document}
```

Como este controlador intenta igualar, en forma contraria, a las perturbaciones entonces necesita un buen [[Modelo|modelo]] de la [[Planta|planta]], en caso contrario podría producir efectos no deseados y sin forma de corregirlos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```