---
dia: 2024-12-24
etapa: empezado
referencias: []
tags:
  - carrera/ingeniería-en-informática/concurrentes/Introducción
  - nota/facultad
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un conjunto de [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programas]] secuenciales que pueden ejecutarse en [[Paralelo|paralelo]]

## Ejecución
---
Dado el siguiente orden causal

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{130, 153, 120} 
\definecolor{azul}{RGB}{129, 153, 191} 
\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { \ancho = 1.2; \alto = 0.7; \sep = 0.8; }    
    
    \filldraw[fill=verde] (0, 0) rectangle ++(\ancho, \alto)
        node[midway, white, scale=0.8] {Ia};
    \path (\ancho, 0) -- ++(0, \alto) 
        node[pos = 0] (finExInfIa) {}
        node[pos = 0.5] (finIa) {};
    
    \path ($ (finExInfIa.center) + (\sep, 0) $) -- ++(0, \alto)
        node[pos = 0] (iniExInfIb) {}
        node[pos = 0.5] (iniIb) {};
    \filldraw[fill=verde] (iniExInfIb.center) rectangle ++(\ancho, \alto)
        node[midway, white, scale=0.8] {Ib};
    \path ($ (iniExInfIb.center) + (\ancho, 0) $) -- ++(0, \alto) 
        node[pos = 0] (finExInfIb) {}
        node[pos = 0.5] (finIb) {};
    
    \path ($ (finExInfIb.center) + (\sep, 0) $) -- ++(0, \alto)
        node[pos = 0] (iniExInfIc) {}
        node[pos = 0.5] (iniIc) {};
    \filldraw[fill=verde] (iniExInfIc.center) rectangle ++(\ancho, \alto)
        node[midway, white, scale=0.8] {Ic};
    \path ($ (iniExInfIc.center) + (\ancho, 0) $) -- ++(0, \alto) 
        node[pos = 0] (finExInfIc) {}
        node[pos = 0.5] (finIc) {};
        
    \path ($ (finExInfIa.center) + ({1.5 * \sep}, {2 * \alto}) $) -- ++(0, \alto)
        node[pos = 0] (iniExInfI1) {}
        node[pos = 0.5] (iniI1) {};
    \filldraw[fill=azul] (iniExInfI1.center) rectangle ++(\ancho, \alto)
        node[midway, white, scale=0.8] {I1};
    \path ($ (iniExInfI1.center) + (\ancho, 0) $) -- ++(0, \alto) 
        node[pos = 0] (finExInfI1) {}
        node[pos = 0.5] (finI1) {};
        
    \path ($ (finExInfI1.center) + (\sep, 0) $) -- ++(0, \alto)
        node[pos = 0] (iniExInfI2) {}
        node[pos = 0.5] (iniI2) {};
    \filldraw[fill=azul] (iniExInfI2.center) rectangle ++(\ancho, \alto)
        node[midway, white, scale=0.8] {I2};
    \path ($ (iniExInfI2.center) + (\ancho, 0) $) -- ++(0, \alto) 
        node[pos = 0] (finExInfI2) {}
        node[pos = 0.5] (finI2) {};
    
    \begin{scope}[->, shorten <=0.1cm, shorten >=0.1cm]
        \draw (finIa.center) -- (iniIb.center);
        \draw (finIb.center) -- (iniIc.center);
        \path (finIc.center) node[right=2pt, scale=0.8] {T1};
        
        \draw (finIa.center) -- (iniI1.center);
        \draw (finI1.center) -- (iniI2.center);
        \path (finI2.center) node[right=2pt, scale=0.8] {T2};
    \end{scope}

\end{tikzpicture}
\end{document}
```

Se podría tener las siguientes posibles ordenamiento de ejecución

![[Orden de ejecución.png]]