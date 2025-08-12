---
dia: 2024-11-15
etapa: empezado
referencias: 
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-confinadas
  - nota/facultad
aliases:
  - Ecuaciones del telegrafista#^ecuaciones-telegrafista
  - Impedancia característica de la línea ideal#^impedancia-caracteristica-linea
  - Modelo de constantes distribuidas
vinculoFacultad:
  - tema: Ondas confinadas
    capitulo: 4
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En una [[Guía de ondas|línea de transmisión]] hay dimensiones, las transversales, que cumplen la condición cuasi-estática ($D \ll \lambda$), pero la otra dimensión (longitudinal) habitualmente no la cumple. Sin embargo, podemos ver la línea como una sucesión o cascada de cuadripolos de longitud infinitesimal y para cada uno de ellos usar un modelo circuital, cuyos parámetros descriptivos son las [[Tensión|tensiones]] y [[Corriente eléctrica|corrientes]] a la entrada y salida, ya que las dimensiones del cuadripolo satisfacen la condición cuasi-estática

```tikz
\usepackage[
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
\begin{circuitikz}[
    voltage shift=0.5, scale=1.3, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    \tikzmath{ \dimension = 2; \porcen = 0.2; \nporcen = 1 - \porcen; }
    
    \draw ({-\dimension / 2}, {-\dimension / 2}) 
        rectangle ++(\dimension, \dimension);
    \path ({-\dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (izqAbajo) {}
        node[pos=\nporcen] (izqArriba) {};
    \path ({ \dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (derAbajo) {}
        node[pos=\nporcen] (derArriba) {};
    
    \tikzmath { \sep = 1; }
    \draw (izqAbajo.center) to[short, -o] ++(-\sep, 0) node (izqAbajoFin) {};
    \draw (izqArriba.center) to[short, -o] ++(-\sep, 0) node (izqArribaFin) {};
    \draw (derAbajo.center) to[short, -o] ++(\sep, 0) node (derAbajoFin) {};
    \draw (derArriba.center) to[short, -o] ++(\sep, 0) node (derArribaFin) {};
    
    \draw[shorten <=0.2cm, <-] (izqArribaFin.center)
        -- ++({-0.8 * \sep}, 0) node[pos=0, scale=0.9, above left=2pt]
            {$i(z,~ t)$};
    \draw[shorten <=0.2cm, ->] (derArribaFin.center)
        -- ++({0.8 * \sep}, 0) node[pos=0, scale=0.9, above right=2pt]
            {$i(z + dz,~ t)$};
    
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (izqAbajoFin.center) 
        .. controls
            ($ (izqAbajoFin.center) + ({-\sep / 2}, 0) $) and
            ($ (izqArribaFin.center) + ({-\sep / 2}, 0) $) ..
        (izqArribaFin.center) node[midway, left=2pt, scale=0.9] {$v(z,~ t)$};
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (derAbajoFin.center) 
        .. controls
            ($ (derAbajoFin.center) + ({\sep / 2}, 0) $) and
            ($ (derArribaFin.center) + ({\sep / 2}, 0) $) ..
        (derArribaFin.center) node[midway, right=2pt, scale=0.9] {$v(z + dz,~ t)$};
    
    \draw[->] ($ (izqAbajoFin) + ({-2 * \sep}, -\sep) $)
        -- ($ (derAbajoFin) + ({2 * \sep}, -\sep) $)
            node[pos=0.9, above right=2pt, scale=0.9] {$z$};
    
\end{circuitikz}
\end{document}
```

Elegimos la dirección del eje cartesiano $z$ a lo largo de la línea. Cada tramo de longitud $dz$ a lo largo de la dirección $z$ puede asociarse a un cuadripolo, como se esquematizó

Asumimos que la línea no presenta pérdidas de [[Energía|energía]]. En tal caso los [[Conductor|conductores]] de la línea serán perfectos ($\sigma \to \infty$) y el [[Dieléctrico|dieléctrico]] entre ellos tampoco tendrá pérdidas

Las [[Carga eléctrica|cargas]] y corrientes en los conductores crearán [[Campo eléctrico|campos eléctricos]] y [[Material magnético#^campo-magnetico|campo magnético]] cuya energía almacenada puede modelizarse por componentes reactivos puros: [[Capacitor|capacitores]] e [[Inductor|inductores]]. La capacidad está asociada al campo eléctrico creado por las cargas en los conductores de la línea y la inductancia al campo magnético generado por las corrientes que circulan por ella

```tikz
\usepackage[
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
\begin{circuitikz}[
    voltage shift=0.5, scale=1.3, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    \tikzmath{ \dimension = 3; \porcen = 0.2; \nporcen = 1 - \porcen; }
    
    \draw ({-\dimension / 2}, {-\dimension / 2}) 
        rectangle ++(\dimension, \dimension);
    \path ({-\dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (izqAbajo) {}
        node[pos=\nporcen] (izqArriba) {};
    \path ({ \dimension / 2}, {-\dimension / 2}) -- ++(0, \dimension)
        node[pos=\porcen] (derAbajo) {}
        node[pos=\nporcen] (derArriba) {};
        
    \draw (izqArriba.center) 
        to[L, loops=4, l^=$L~dz$] ++({0.7 * \dimension}, 0) 
            node[above=2pt, scale=0.9] {$A$}
        to[short] ++({0.3 * \dimension}, 0);
    \draw (izqAbajo.center) -- (derAbajo.center);
    \draw ($ (izqAbajo.center) + ({0.7 * \dimension, 0}) $)
        to[C, l^=$C~dz$, *-*] ++(0, {(\nporcen - \porcen) * \dimension});
    
    \tikzmath { \sep = 1; }
    \draw (izqAbajo.center) to[short, -o] ++(-\sep, 0) node (izqAbajoFin) {};
    \draw (izqArriba.center) to[short, -o] ++(-\sep, 0) node (izqArribaFin) {};
    \draw (derAbajo.center) to[short, -o] ++(\sep, 0) node (derAbajoFin) {};
    \draw (derArriba.center) to[short, -o] ++(\sep, 0) node (derArribaFin) {};
    
    \draw[shorten <=0.2cm, <-] (izqArribaFin.center)
        -- ++({-0.8 * \sep}, 0) node[pos=0, scale=0.9, above left=2pt]
            {$i(z,~ t)$};
    \draw[shorten <=0.2cm, ->] (derArribaFin.center)
        -- ++({0.8 * \sep}, 0) node[pos=0, scale=0.9, above right=2pt]
            {$i(z + dz,~ t)$};
    
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (izqAbajoFin.center) 
        .. controls
            ($ (izqAbajoFin.center) + ({-\sep / 2}, 0) $) and
            ($ (izqArribaFin.center) + ({-\sep / 2}, 0) $) ..
        (izqArribaFin.center) node[midway, left=2pt, scale=0.9] {$v(z,~ t)$};
    \draw[shorten >= 0.3cm, shorten <= 0.3cm, ->] (derAbajoFin.center) 
        .. controls
            ($ (derAbajoFin.center) + ({\sep / 2}, 0) $) and
            ($ (derArribaFin.center) + ({\sep / 2}, 0) $) ..
        (derArribaFin.center) node[midway, right=2pt, scale=0.9] {$v(z + dz,~ t)$};
        
\end{circuitikz}
\end{document}
```

Nos queda así el cuadripolo, donde $L~dz$ es la inductancia del tramo y $C ~ dz$ su capacidad 

Podemos aplicar ahora las [[Ley de nodos de Kirchhoff|ley de Kirchhoff]] a este modelo cuasi-estático. Aplicando al [[Nodo|nodo]] $A$ lleva a $$ i(z + dz) - i(z) + C ~ dz ~ \frac{\partial v}{\partial t} \bigg|_z = 0 $$ donde el último término representa la corriente que sale de $A$ por el capacitor. Pero, a primer orden $$ i(z + dz) - i(z) \approx \frac{\partial i}{\partial z} \bigg|_z ~ dz \implies \frac{\partial i}{\partial z} \bigg|_z \approx -C ~\frac{\partial v}{\partial t} \bigg|_z $$
Análogamente, si calculamos la [[Malla|malla]] formada por el cuadripolo en sentido antihorario, tenemos $$ v(z + dz) + L ~ dz ~ \frac{\partial i}{\partial t} - v(z) \approx 0 $$ de donde se obtiene, nuevamente a primer orden $$ \frac{\partial v}{\partial z} \bigg|_z \approx -L ~ \frac{\partial i}{\partial t} \bigg|_z $$
Estas dos ecuaciones diferenciales ligadas para la tensión y la corriente a la entrada del cuadripolo son las llamadas ecuaciones del telegrafista para la línea ideal ^ecuaciones-telegrafista

Con el fin de analizar el significado de estas ecuaciones nos conviene desacoplar las [[Ecuación diferencial en derivadas parciales|ecuaciones diferenciales]], para lo cual derivamos la primera respecto del tiempo y la segunda respecto de $z$ $$ \begin{matrix} 
    \displaystyle \frac{\partial^2 i}{\partial z ~ \partial t} = -C ~ \frac{\partial^2 v}{\partial t^2} &&&
    \displaystyle \frac{\partial^2 v}{\partial z^2} = -L~ \frac{\partial^2 v}{\partial t ~ \partial z}
\end{matrix} $$ donde se ha sobreentendido que las cantidades se calculan en $z$. Pero las derivadas cruzadas son iguales, de manera que nos queda $$ \frac{\partial^2 v}{\partial z^2} - LC ~ \frac{\partial^2 v}{\partial t^2} = 0 $$
Esta ecuación diferencial para la tensión $v(z,~ t)$ se denomina [[Ecuación de onda|ecuación de ondas o ecuación de D' Alembert]]. Es una ecuación diferencial lineal homogénea a derivadas parciales, cuya solución es cualquier [[Función|función]] del tipo $$ v(z,~ t) = f(z \mp ct), ~~~~ \text{con} ~ c = \frac{1}{\sqrt{LC}} $$
Esta función representa una onda que se propaga a lo largo del eje $z$ con velocidad $c$
 
Si se toma el signo $(-)$ de la doble determinación, la onda se propaga en el sentido de $+z$ ([[Ecuación de onda#^onda-progresiva|onda progresiva]]), mientras que si se toma el signo $(+)$ la propagación es según $-z$ ([[Ecuación de onda#^onda-regresiva|onda regresiva]])

Se obtiene una ecuación idéntica para la corriente $i(z,~ t)$ a lo largo de la línea

Además de las ondas de tensión y corriente están vinculadas entre sí. Consideremos una onda progresiva con $v(z,~ t) = f(z - ct)$ y $i(z,~ t) = g(z - ct)$. Entonces $$ \frac{\partial v}{\partial z} = -L ~ \frac{\partial i}{\partial t} \implies \begin{cases} 
    \displaystyle \frac{\partial v}{\partial z} = \frac{\partial f}{\partial u} ~ \frac{\partial u}{\partial z} = \frac{\partial f}{\partial u} \\\\
    \displaystyle \frac{\partial i}{\partial t} = \frac{\partial g}{\partial u} ~ \frac{\partial u}{\partial t} = -c \frac{\partial g}{\partial u} \\
\end{cases} $$
Luego $\frac{\partial f}{\partial u} = L ~ c ~ \frac{\partial g}{\partial u}$ e integrando $f(z - ct) = \sqrt{\frac{L}{C}} ~ g(z - ct)$ de donde $$ v(z,~ t) = Z_0 ~ i(z,~ t) ~~~~ \text{con} ~ Z_0 = \sqrt{\frac{L}{C}} $$La cantidad $Z_0$ tiene dimensiones de [[Impedancia|impedancia]] y se llama impedancia característica de la línea ^impedancia-caracteristica-linea

Junto con la velocidad de propagación de las ondas $c = \frac{1}{\sqrt{L ~ C}}$ son los parámetros fundamentales que describen el comportamiento de la línea como dispositivo transmisor de [[Energía|energía]]

## Diferencias entre constantes distribuidas y concentradas
---
Debemos señalar las diferencias de este modelo circuital de constantes distribuidas con el [[Modelo de constantes concentradas|modelo de constantes concentradas]]. En un circuito de constantes concentradas, la corriente que entra en el "nodo" es la misma que la que sale (ley de Kirchhoff de nodos), y las variaciones de tensión a lo largo del circuito se concentran en cada elemento concentrado, que desde el punto de vista geométrico no tiene extensión. No hay variación de tensión a lo largo de los "cables de conexión" entre elementos concentrados, que se consideran volúmenes equipotenciales

En una [[Guía de ondas|línea de transmisión]] la situación es totalmente diferente. La corriente que cruza secciones transversales a la línea y la tensión entre los conductores medios sobre una sección transversal dependen de la posición. Así, no se cumplen las leyes de Kirchhoff. Hay acumulación de carga a lo largo de la línea. La tensión varía punto a punto a lo largo de la línea y no hay sitios (salvo se conecte un elemento concentrado desde fuera de la línea) donde haya una "caída" abrupta de tensión

Por este motivo, la línea no puede reemplazarse por una impedancia concentrada, salvo en el caso particular en que su dimensión longitudinal sea despreciable frente a la mínima longitud de onda de la señal (condición cuasi-estacionaria)