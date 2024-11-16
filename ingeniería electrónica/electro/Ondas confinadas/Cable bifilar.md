---
dia: 2024-11-10
etapa: ampliar
referencias:
  - "504"
tags:
  - ingeniería-electrónica/electro/Ondas-confinadas
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un cable bifilar es una [[Guía de ondas|línea de transmisión]] en la cual la distancia entre dos conductores paralelos es mantenida constante gracias a un material [[Dieléctrico|dieléctrico]]. El mismo material que mantiene el espaciado y el paralelismo entre los conductores sirve también de vaina<sup><a href="#ref-504" style="color: inherit; text-decoration: none;">[504]</a></sup> 

Usando frecuencias bajas podemos usar el modelo cuasi estático, se representa a la línea como una [[Amplificadores en cascada|cascada de cuadripolos]]

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

Estas descripción corresponde a una línea bifilar. En muchas aplicaciones es necesario líneas multifilares, como por ejemplo en circuitos impresos e integrados. Para el análisis circuital es necesario usar coeficientes usar coeficientes de [[Capacitancia|capacidad]]/[[Inductor|inducción]] e inductancias paralelas

La [[Energía electromagnética|energía electromagnética]] puede ingresar a una línea de transmisión de forma de excitación concentrada o distribuida
* Las fuentes concentradas se aplican en un punto determinado de la línea y de la señal se propaga por la línea desde allí. Se simula este tipo de excitación mediante [[Fuente de tensión|fuentes de tensión]] y/o [[Fuente de corriente|corriente]] conectadas en el sitio de ingreso de la excitación
* En el caso de una fuente distribuida la excitación se distribuye a lo largo de la línea. Se simula esta situación mediante una onda, habitualmente plana, que ilumina a la línea en toda o parte de su extensión

Podemos resolverlo
* [[Modelo circuital de la línea ideal|Modelo circuital de la línea ideal]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```