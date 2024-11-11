---
dia: 2024-11-10
etapa: empezado
referencias: 
tags:
  - ingeniería-electrónica/electro/Ondas-confinadas
  - nota/facultad
aliases:
  - Línea de transmisión
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una guía de ondas es un dispositivo que se usa para transportar [[Energía electromagnética|energía electromagnética]] y/o [[Información|información]] de un sitio a otro. Generalmente se usa el término línea de transmisión a la guía de ondas usada en el extremo de menor [[Función periódica#Frecuencia|frecuencia]] del espectro. A estas frecuencias es posible utilizar un análisis cuasi estático

Podemos pensar a una línea de transmisión básica como un par de electrodos que se extienden paralelos por una longitud grande (en relación con la longitud de onda) en una dada dirección. El par de electrodos se hallan cargados con distribuciones de carga (variables a lo largo de la línea) iguales y opuestas, formando un [[Capacitor|capacitor]] distribuido. Al mismo tiempo circulan corrientes opuestas (variables a lo largo de la línea) de igual magnitud, creando campo magnético que puede expresarse a través de una inductancia distribuida. La [[Potencia|potencia]] fluye a lo largo de la línea. Los ejemplos más importantes de líneas de transmisión son el par [[Bifilar|bifilar]], el [[Cable coaxial|coaxil]] y la microcinta

Para usar el modelo cuasi estático se representa a la línea como una [[Amplificadores en cascada|cascada de cuadripolos]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{shadings}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{borde}{RGB}{115, 52, 0} 
\definecolor{centro}{RGB}{236, 107, 0} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]

    \tikzmath { \largo = 4; \alto = 1.5; }
    \path[top color=borde, bottom color=borde, middle color=centro] (0, 0)
        rectangle ++(\largo, 0.25);
    \path[top color=borde, bottom color=borde, middle color=centro] (0, \alto)
        rectangle ++(\largo, 0.25);
    
    \draw[dashed] ({\largo / 2 - 0.1}, -0.5) 
        rectangle ({\largo / 2 + 0.1}, {\alto + 0.5});
    \path ({\largo / 2 + 0.1}, -0.5) node[below right=2pt] (inicio) {};
    \path ({\largo + 1}, -0.5) node[below left=2pt] (final) {};
    
    \tikzmath { \ancho = 1.5; \alto = \alto + 1; \sep = 0.6; }
    \foreach \x in {0, ..., 3} {
        \draw ({\x * (\ancho + \sep) + \largo + 1}, -0.5) 
            rectangle ++(\ancho, \alto);
        \path ({\x * (\ancho + \sep) + \largo + 1}, -0.5) -- ++(0, \alto)
            node[pos=0.3] (izqAbajo) {}
            node[pos=0.7] (izqArriba) {};
        \path ({\x * (\ancho + \sep) + \largo + 1 + \ancho}, -0.5) -- ++(0, \alto)
            node[pos=0.3] (derAbajo) {}
            node[pos=0.7] (derArriba) {};
        
        \draw (izqAbajo.center) --++({-\sep / 2}, 0);
        \draw (izqArriba.center) --++({-\sep / 2}, 0);
        \draw (derAbajo.center) --++({\sep / 2}, 0);
        \draw (derArriba.center) --++({\sep / 2}, 0);
    }

\end{tikzpicture}
\end{document}
```

Cada [[Cuadripolo|cuadripolo]] representa un tramo de línea de pequeña longitud frente a la mínima longitud de onda de la [[Señal|señal]]. Por lo tanto cada tramo se puede modelizar como un circuito usando la aproximación cuasi estática