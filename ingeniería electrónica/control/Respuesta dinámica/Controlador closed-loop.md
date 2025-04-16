---
dia: 2025-03-14
etapa: ampliar
referencias:
  - "871"
  - "898"
  - "1017"
  - "1018"
  - "899"
  - "873"
  - "882"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
  - carrera/ingeniería-electrónica/circuitos-2/Realimentación-negativa
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
aliases:
  - Controlador feedback
  - Closed-loop control
  - Feedback control
  - Realimentación de un circuito#En circuitos de amplificador
  - Sistema de control realimentado#En teoría de control
  - Sistema de control en lazo cerrado#En teoría de control
  - Realimentación negativa#Realimentación negativa
  - Negative feedback#Realimentación negativa
  - Realimentación positiva#Realimentación positiva
  - Positive feedback#Realimentación positiva
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En un controlador feedback, la variable controlada es medida por un [[Sensores|sensor]] y esa [[Información|información]] es introducida al controlador para influenciar la variable controlada

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
    
    \draw[->] (sys_1_der) -- (sys_2_izq) node[midway, above=2pt] {$u$};
    \draw[->] (sys_2_der) -- ++({2 * \sep}, 0) 
        node[midway, above=2pt] {$y$}
        node[midway] (salida) {};

    \draw [<-] (sys_1_izq) -- ++(-\sep, 0)
        -- ++(0, {-\alto / 2 - \sep}) node (temp) {}
        -- (temp -| salida)
        -- (salida.center);

\end{tikzpicture}
\end{document}
```

## Fundamentos
---
Se lo puede definir un buen controlador si proporciona
* [[Sistema estable|Estabilidad]]
    * El sistema es estable para todo tiempo, es un [[Requisito|requisito]] absoluto
    * El sistema puede ser inestable por $2$ motivos
        1. El sistema siendo controlado es inestable
        2. El mismo feedback vuelve inestable el sistema
* Seguimiento
    * La salida del sistema sigue la señal de referencia tan rápidamente como se pueda
* Rechazo de perturbaciones
    * La salida del sistema debería ser lo más insensible posible a las perturbaciones de entrada
* Robustez
    * Esto es asegurar que independientemente de imperfecciones en la exactitud del modelo o si este cambia a lo largo del tiempo, se tiene que mantener todas las otras metas mencionadas

## En teoría de control
---
Un sistema que mantiene una relación determinada entre la salida y la entrada de referencia, comparándolas y usando la diferencia como medio de control, se denomina sistema de control realimentado

El control realimentado se refiere a una operación que, en presencia de [[Perturbación|perturbaciones]], tiende a reducir la diferencia entre la salida de un [[Sistema|sistema]] y alguna entrada de referencia, y lo realiza tomando en cuenta esta diferencia. Aquí sólo se especifican con este término las perturbaciones impredecibles, ya que las perturbaciones predecibles o conocidas siempre pueden compensarse dentro del sistema

En estos sistemas de control se alimenta al [[Controlador|controlador]] la [[Señal|señal]] de error de actuación, que es la diferencia entre la [[Señal|señal]] de entrada y la señal realimentada, con el fin de reducir el error y llevar la salida del sistema a un valor deseado

El término control en lazo cerrado siempre implica el uso de una acción de control realimentado para reducir el error del sistema

### Efecto de las perturbaciones
---
%% Ver Capitulo 2 Modelado matemático de sistemas de control, Ingeniería de control moderna. para ver este tema %% 

### Realimentación negativa
---
Dado el siguiente [[Diagrama de bloques|diagrama de bloques]] 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5;  \alto = 1.5; \isep = 2;
        \radio = 0.4; 
        \scale = 0.85; \sep = 1.3; 
    }

    \coordinate (esq_1) at (0, {\isep - \alto / 2});
    \draw (esq_1) rectangle ++(\largo, \alto) node[midway] {$G_1(s)$};
    \path (esq_1) -- ++(0, \alto) node[midway] (ini_1) {};
    \path ($ (esq_1) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_1) {};
    
    \coordinate (esq_2) at (0, {-\isep + \alto / 2});
    \draw (esq_2) rectangle ++(\largo, \alto) node[midway] {$G_2(s)$};
    \path (esq_2) -- ++(0, \alto) node[midway] (ini_2) {};
    \path ($ (esq_2) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_2) {};
    
    \coordinate (punto_rami) at ($ (fin_1)!0.5!(fin_2) + (\sep, 0) $);
    
    \tikzmath { \supDer = cos(45); }
    \coordinate (punto_suma) at ($ (ini_1)!0.5!(ini_2) + (-\sep, 0) $);
    \begin{scope}[cm={1, 0, 0, 1, (punto_suma)}]
        \draw (0, 0) circle (\radio); 
        \draw ({-\radio * \supDer}, {\radio * \supDer})
            -- ({\radio * \supDer}, {-\radio * \supDer});
        \draw ({-\radio * \supDer}, {-\radio * \supDer})
            -- ({\radio * \supDer}, {\radio * \supDer});
    \end{scope}
        
    \path (punto_suma) -- ++(0, \radio)
        node[pos=1] (ps_sup) {};
    \path (punto_suma) -- ++(0, -\radio) node[pos=0.6, scale=\scale] {$-$}
        node[pos=1] (ps_inf) {};
    \path (punto_suma) -- ++(-\radio, 0) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_izq) {};
        
    \draw[<-] (ini_1.center) -- (ini_1 -| ps_sup)
        -- (ps_sup.center);
    \draw[->] (ini_2.center) -- (ini_2 -| ps_inf)
        -- (ps_inf.center);
    
    \draw[<-] (ps_izq.center) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$R(s)$};
        
    \draw (fin_1.center) -- (fin_1 -| punto_rami)
        -- (punto_rami);
    \draw[<-] (fin_2.center) -- (fin_2 -| punto_rami)
        -- (punto_rami);
    
    \draw[->] (punto_rami) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$C(s)$};

\end{tikzpicture}
\end{document}
```

Donde como $G_2(s)$ esta restándose a $R(s)$, se lo puede denominar realimentación negativa

### Realimentación positiva
---
Dado el siguiente diagrama de bloques

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5;  \alto = 1.5; \isep = 2;
        \radio = 0.4; 
        \scale = 0.85; \sep = 1.3; 
    }

    \coordinate (esq_1) at (0, {\isep - \alto / 2});
    \draw (esq_1) rectangle ++(\largo, \alto) node[midway] {$G_1(s)$};
    \path (esq_1) -- ++(0, \alto) node[midway] (ini_1) {};
    \path ($ (esq_1) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_1) {};
    
    \coordinate (esq_2) at (0, {-\isep + \alto / 2});
    \draw (esq_2) rectangle ++(\largo, \alto) node[midway] {$G_2(s)$};
    \path (esq_2) -- ++(0, \alto) node[midway] (ini_2) {};
    \path ($ (esq_2) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_2) {};
    
    \coordinate (punto_rami) at ($ (fin_1)!0.5!(fin_2) + (\sep, 0) $);
    
    \tikzmath { \supDer = cos(45); }
    \coordinate (punto_suma) at ($ (ini_1)!0.5!(ini_2) + (-\sep, 0) $);
    \begin{scope}[cm={1, 0, 0, 1, (punto_suma)}]
        \draw (0, 0) circle (\radio); 
        \draw ({-\radio * \supDer}, {\radio * \supDer})
            -- ({\radio * \supDer}, {-\radio * \supDer});
        \draw ({-\radio * \supDer}, {-\radio * \supDer})
            -- ({\radio * \supDer}, {\radio * \supDer});
    \end{scope}
        
    \path (punto_suma) -- ++(0, \radio)
        node[pos=1] (ps_sup) {};
    \path (punto_suma) -- ++(0, -\radio) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_inf) {};
    \path (punto_suma) -- ++(-\radio, 0) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_izq) {};
        
    \draw[<-] (ini_1.center) -- (ini_1 -| ps_sup)
        -- (ps_sup.center);
    \draw[->] (ini_2.center) -- (ini_2 -| ps_inf)
        -- (ps_inf.center);
    
    \draw[<-] (ps_izq.center) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$R(s)$};
        
    \draw (fin_1.center) -- (fin_1 -| punto_rami)
        -- (punto_rami);
    \draw[<-] (fin_2.center) -- (fin_2 -| punto_rami)
        -- (punto_rami);
    
    \draw[->] (punto_rami) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$C(s)$};

\end{tikzpicture}
\end{document}
```

Donde como $G_2(s)$ esta sumándose a $R(s)$, se lo puede denominar realimentación positiva

## En circuitos de amplificador
---
Considerando un sistema realimentado ideal

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { \largor = 1.5; \radio = 0.5; \scale = 1; \sep = 1.3; }

    \draw (0, 0) rectangle (\largor, \largor)
        node[midway, scale=\scale] {Fuente};
    \path (\largor, 0) -- ++(0, \largor)
        node[midway] (fin_fuente) {};
    
    \path (fin_fuente.center) -- ++(\sep, 0)
        node (pos_sum) {};
    \draw ($ (pos_sum.center) + (\radio, 0) $) circle (\radio)
        node[scale=\scale] {$\sum$};
    \path (pos_sum.center) -- ++({2 * \radio}, 0)
        node (fin_sum) {};
    \path (pos_sum.center) -- ++(\radio, -\radio)
        node (neg_sum) {};
    
    \path (fin_sum.center) -- ++(\sep, 0)
        node (ini_amp) {};
    \draw ($ (ini_amp.center) + (0, {-\largor / 2}) $)
        rectangle ++(\largor, \largor) 
            node[midway, scale=\scale] {$a$};
    \path ($ (ini_amp.center) + (\largor, 0) $)
        node (fin_amp) {};
    
    \path (fin_amp.center) -- ++({2 * \sep + 2 * \radio}, 0)
        node[midway] (muestro) {}
        node (ini_carga) {};
    \draw ($ (ini_carga.center) + (0, {-\largor / 2}) $)
        rectangle ++(\largor, \largor) 
            node[midway, scale=\scale] {Carga};
    
    \path ($ (ini_amp.center) + (0, {-\sep - \largor}) $)
        node (ini_reali) {};
    \draw ($ (ini_reali.center) + (0, {-\largor / 2}) $)
        rectangle ++(\largor, \largor) 
            node[midway, scale=\scale] {$f$};    
    \path ($ (ini_reali.center) + (\largor, 0) $)
        node (fin_reali) {};
        
    \draw[->] (fin_fuente.center) -- (pos_sum.center)
        node[midway, above=2pt, scale=\scale] {$x_s$}
        node[pos=0.9, above=2pt, scale=\scale] {$+$};
    
    \draw[->] (fin_sum.center) -- (ini_amp.center)
        node[midway, above=2pt, scale=\scale] {$x_e$};
    
    \draw[->] (fin_amp.center) -- (ini_carga.center);
    
    \draw[->] (muestro.center) -- (muestro |- fin_reali)
            node[pos=0, above=2pt, scale=\scale] {$x_0$}
        -- (fin_reali.center);
    
    \draw[->] (ini_reali.center) -- (ini_reali -| neg_sum)
        -- (neg_sum.center)
            node[midway, right=2pt, scale=\scale] {$x_f$}
            node[pos=0.9, left=2pt, scale=\scale] {$-$};

\end{tikzpicture}
\end{document}
```


La señal de retroalimentación $x_f$ es sustraída de la fuente de señales $x_s$, que es la entrada al [[Amplificador operacional|amplificador]] de retroalimentación completo, para producir la señal $x_i$, que es la entrada al amplificador básico $$ x_o = a ~ x_e $$Suponiendo que la el amplificador de realimentación no carga al amplificador, podemos obtener $$ \begin{align} 
    x_f &= f ~ x_o \\ 
    x_e &= x_s - x_f 
\end{align} $$
Combinándolas obtenemos $$ x_e = x_s - f ~ x_o $$y usando la primera expresión obtenemos $$ \begin{align} 
    x_o &= a ~ x_s - af ~ x_o \\
    \frac{x_o}{x_s} = A &= \frac{a}{1 + af} = \frac{a}{1 + T} \tag{1}
\end{align} $$ donde $T$ es la [[Ganancia de lazo|ganancia de lazo]]

Esta expresión es fundamental para el análisis de realimentación, ya que nos deja ver que si $T \gg 1$, la ganancia del amplificador realimentado tiene de $$ A \underset{T \to \infty}{\longrightarrow} \frac{1}{f} $$ esto nos dice que el amplificador realimentado se comporta como más como el bloque de realimentación que el amplificador $a$, los cual si tenemos un bloque de realimentación lineal, va a volver más lineal al amplificador realimentado

En una realimentación negativa, el bloque de realimentación fuerza 

### Sensibilidad de la ganancia
---
La realimentación negativa, especialmente si $T \gg 1$, permite la independencia del bloque $a$ que puede ser sensible a la temperatura, a los parámetros de los transistores, entre otras cosas

También podemos ver la sensibilidad o la perdida de esta, en la ganancia del amplificador realimentado. Derivando la expresión $(1)$ obtenemos $$ \frac{dA}{da} = \frac{(1 + af) - af}{(1 + af)^2} = \frac{1}{(1 + af)^2} $$
Que si tomamos la derivada como pequeños cambios en los valores de las ganancias podemos despejar la relación de cambio $$ \begin{align}
\delta A &= \frac{\delta a}{(1 + af)^2} \\
\frac{\delta A}{A} &= \frac{1 + af}{a} ~ \frac{\delta a}{(1 + af)^2} \\
\frac{\delta A}{A} &= \frac{\frac{\delta a}{a}}{1 + af} = \frac{\frac{\delta a}{a}}{1 + T}
\end{align} $$
Esto muestra que la ganancia del amplificador realimentado tiene una relación de cambio $\frac{1}{T}$ más chica que la relación de cambio del amplificador sin realimentar, disminuyendo las [[Perturbación|perturbación]] del bloque $a$

### Aumento de ancho de banda
---


### Modelos de realimentación en circuitos
---
Se tiene 4 modelos de retroalimentación 
* [[Realimentación de un amplificador de tensión|Muestreo de tensión y suma de tensión]]
* [[Realimentación de un amplificador de transresistencia|Muestreo de tensión y suma de corriente]]
* [[Realimentación de un amplificador de transconductancia|Muestreo de corriente y suma de tensión]]
* [[Realimentación de un amplificador de corriente|Muestreo de corriente y suma de corriente]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```