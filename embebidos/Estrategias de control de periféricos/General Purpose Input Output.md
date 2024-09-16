---
dia: 2024-09-10
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - GPIO
  - Entrada-salida de propósito general
  - Puerto Input Output
  - I/O port
  - Pin de salida#Output
  - Pin de entrada#Input
  - Input pin#Input
  - Output pin#Output
  - Resistencia de pull up#^pull-up
  - Pull up resistor#^pull-up
  - Resistencia de pull down#^pull-down
  - Pull down resistor#^pull-down
referencias:
  - "243"
  - "241"
---
### Definición
---
GPIO (General Purpose Input/Output, Entrada/Salida de Propósito General) es un pin genérico en un chip, cuyo comportamiento (incluyendo si es un pin de entrada o salida) se puede controlar (programar) por el usuario en tiempo de ejecución

Los pines GPIO no tienen ningún propósito especial definido, y no se utilizan de forma predeterminada. La idea es que a veces, para el diseño de un sistema completo que utiliza el chip podría ser útil contar con un puñado de líneas digitales de control adicionales, y tenerlas a disposición ahorra el tiempo de tener que organizar circuitos adicionales para proporcionarlos<sup><a href="#ref-243" style="color: inherit; text-decoration: none;">[243]</a></sup> 

Los [[Microcontrolador|microcontroladores]] generalmente combinan sus puertos en pines de $8$ puertos de un bit, para poder operar el byte

La gran mayoría de los puertos de entrada/salida en los microcontroladores se puede settear como entrada o salida, esto se tiene que configurar lo antes posible para que se ejecute cuando arranque o se este reseteando el microcontrolador

#### Output
---
Los pins individuales de salida tiene dos posibles [[Tensión|tensiones]] de salida dependiendo de como este setteado el pin
* Si se lo setea a $1$, el pin va a tener un nivel de tensión alto, este valor generalmente es el mismo valor que alimenta el microcontrolador
* Si se lo setea a $0$, la tensión del  pin va a ser lo más cerca de $0$ como pueda el microcontrolador

La diferencia entre las tensiones se consigue a partir de [[Transistor de efecto de campo metal-óxido-semiconductor|transistores]] internos que cambian el pin a la [[Fuente de tensión|fuente]] o a la tierra

```tikz
\usepackage[
	straightvoltages,
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

    \definecolor{rojo}{RGB}{255, 83, 75} 
    \definecolor{azul}{RGB}{107, 73, 252} 

\begin{circuitikz}[
    voltage shift=0.5, scale=1.1, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    \draw (0, 0) to[short, -o] ++(2.5, 0)
        node[above left=2pt] {$P_0$};
        
    \begin{scope}
        \circuitikzset{color=rojo}
        \draw[rojo] (0, 0) to ++(0, 0.5)
            node[nigfetd, xscale=1.2, yscale=1.5, anchor=S] (nmos) {};
        
        \draw[rojo] (nmos.G) to[short, -*] ++(-0.5, 0);
        \path (nmos.D) node (vdd) {};
        
    \end{scope}
    
    \begin{scope}
        \circuitikzset{color=azul}
        \draw[azul] (0, 0) to ++(0, -0.5)
            node[pigfetd, xscale=1.2, yscale=1.5, anchor=S] (pmos) {};
        
        \draw[azul] (pmos.G) to[short, -*] ++(-0.5, 0);
        \path (pmos.D) node (gnd) {};
        
    \end{scope}

    \draw (vdd.center) to[short, -*] ++(0, 0.75)
        node[above=2pt] {$V_{dd}$};
    
    \draw (gnd.center) to[short, l=GND] ++(0, -0.75)
        node[tlground] {};
    
    \draw[ultra thick] ($ (vdd.center -| 0, 0) + (-2, 0) $) 
        -- ++(3.5, 0)
        -- ($ (gnd.center -| 0, 0) + (1.5, 0) $)
        -- ++(-3.5, 0);
\end{circuitikz}
\end{document}
```

Esta es un diagrama simplificado de un pin de salida

El transistor rojo va a estar [[Triodo del transistor de efecto de campo metal-óxido-semiconductor|conduciendo]] si el pin fue seteado a $1$, pero si esta setteado a $0$, el transistor azul va a estar conduciendo. Solo uno de los dos transistores puede estar conduciendo al mismo tiempo porque sino tendríamos un corto

##### Manejar cargas
---
Para hacer algo útil debemos conectar el pin a una carga. Hay dos formas de conectar una carga a un pin de salida

La primera es cuando el microcontrolador otorga la [[Corriente eléctrica|corriente]] para manejar la carga. En esta configuración el microcontrolador se la refiere como fuente. La corriente pasa de la fuente del microcontrolador al pin de salida y pasa por la carga hasta llegar a la tierra

```tikz
\usepackage[
	straightvoltages,
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

    \definecolor{rojo}{RGB}{255, 83, 75} 
    \definecolor{azul}{RGB}{107, 73, 252} 

\begin{circuitikz}[
    voltage shift=0.5, scale=1.1, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    \draw (0, 0) to[short] ++(2.5, 0)
        node[above left=2pt] {$P_0$}
            -- ++(1, 0)
            -- ++(0, -0.5)
                node (temp) {};
    \draw (temp.center) 
        -- ++(0.5, 0)
        -- ++(0, -1.5)
            node[midway, right=2pt] {Load}
        -- ++(-1, 0)
            node[midway] (temp) {}
        -- ++(0, 1.5)
        -- cycle;
    \draw (temp.center) -- ++ (0, -0.5) node[tlground] {};
        
    \begin{scope}
        \circuitikzset{color=rojo}
        \draw[rojo] (0, 0) to ++(0, 0.5)
            node[nigfetd, xscale=1.2, yscale=1.5, anchor=S] (nmos) {};
        
        \draw[rojo] (nmos.G) to[short, -*] ++(-0.5, 0);
        \path (nmos.D) node (vdd) {};
        
    \end{scope}
    
    \begin{scope}
        \circuitikzset{color=azul}
        \path[azul] (0, 0) to ++(0, -0.5)
            node[pigfetd, opacity=0, xscale=1.2, yscale=1.5, anchor=S] (pmos) {};
        
        \path (pmos.D) node (gnd) {};
        
    \end{scope}

    \draw (vdd.center) to[short, -*] ++(0, 0.75)
        node[above=2pt] {$V_{dd}$};
    
    \draw (gnd.center) to[short, l=GND] ++(0, -0.75)
        node[tlground] {};
    
    \draw[ultra thick] ($ (vdd.center -| 0, 0) + (-2, 0) $) 
        -- ++(3.5, 0)
        -- ($ (gnd.center -| 0, 0) + (1.5, 0) $)
        -- ++(-3.5, 0);
\end{circuitikz}
\end{document}
```

La segunda, es cuando la corriente la otorga una fuente externa, y se lo refiere como sumidero. La corriente va desde la fuente externa, por la carga, por el pin de salida y por la tierra del microcontrolador

```tikz
\usepackage[
	straightvoltages,
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

    \definecolor{rojo}{RGB}{255, 83, 75} 
    \definecolor{azul}{RGB}{107, 73, 252} 

\begin{circuitikz}[
    voltage shift=0.5, scale=1.1, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    \draw (0, 0) to[short] ++(2.5, 0)
        node[above left=2pt] {$P_0$}
            -- ++(1, 0)
            -- ++(0, 0.5)
                node (temp) {};
    \draw (temp.center) 
        -- ++(0.5, 0)
        -- ++(0, 1.5)
            node[midway, right=2pt] {Load}
        -- ++(-1, 0)
            node[midway] (temp) {}
        -- ++(0, -1.5)
        -- cycle;
    \draw (temp.center) to[short, -*] ++ (0, 0.5)
        node[above] {$V_{dd}$};
        
    \begin{scope}
        \circuitikzset{color=rojo}
        \path[rojo] (0, 0) to ++(0, 0.5)
            node[nigfetd, opacity=0, xscale=1.2, yscale=1.5, anchor=S] (nmos) {};
        \path (nmos.D) node (vdd) {};
        
    \end{scope}
    
    \begin{scope}
        \circuitikzset{color=azul}
        \draw[azul] (0, 0) to ++(0, -0.5)
            node[pigfetd, xscale=1.2, yscale=1.5, anchor=S] (pmos) {};
        
        \draw[azul] (pmos.G) to[short, -*] ++(-0.5, 0);
        \path (pmos.D) node (gnd) {};
        
    \end{scope}

    \draw (vdd.center) to[short, -*] ++(0, 0.75)
        node[above=2pt] {$V_{dd}$};
    
    \draw (gnd.center) to[short, l=GND] ++(0, -0.75)
        node[tlground] {};
    
    \draw[ultra thick] ($ (vdd.center -| 0, 0) + (-2, 0) $) 
        -- ++(3.5, 0)
        -- ($ (gnd.center -| 0, 0) + (1.5, 0) $)
        -- ++(-3.5, 0);
\end{circuitikz}
\end{document}
```

>[!caution]
> Es importante que la fuente externa sea la misma que alimente el microcontrolador, o se puede destruir el IC

##### Corriente de salida
---
Los microcontroladores en general son capaces de manejar bajos niveles de corrientes. El límite de corriente depende del mismo microcontrolador y el pin en especifico. En general hay una corriente [[Máximo|máxima]] total por un grupo de $8$ pines, como también un máximo para todo el microcontrolador

Estos límites están en los data sheets del microcontrolador, debajo del título "Especificaciones eléctricas" o similares. Se dan dos valores `Ioh` corriente de salida en $1$ (Current output high), y `Iol` corriente de salida en $0$ (Current output low). También se puede dar una [[Función|curva]] que represente la relación máxima entre `Voh` vs. `Ioh`, y `Vol` vs. `Ioh`

También es útil revisar la sección sobre el pin que se va a usar, donde cualquier excepción se va a nombrar ahí

#### Input 
---
Como los pines están setteados cada $8$, en general se puede interpretar como un valores entre $0$ y $255$

El pin puede leer como $0$ con una tensión baja, idealmente $0$, o si se puede leer como $1$ cuando sea una tensión alta, idealmente lo más cerca de la fuente de alimentación

Tomando idealmente podemos pensar que tomamos, de $\frac{V_{dd}}{2}$ para arriba, como un $1$ y para abajo como un $0$, donde en el medio no se puede saber como se va a leer

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { \largo = 5; \res = 0.25; }    
    
    \begin{scope}[blue!75!white]
        \draw (0.2, 0.2) -- (\largo, {\largo / 2 + 0.2});
        \clip (0, 0.2) -- (\largo, {\largo / 2 + 0.2})
            -- (\largo, \largo)
            -- cycle;
        
        \foreach \x [parse=true] in {0, \res, ..., 1.414 * \largo} {
            \draw (\x, \x) -- ++(\largo, {-2 * \largo});
        }        
        
        \path (0, 0) -- (\largo, {3 * \largo / 4})
            node[pos=0.7, fill=white, rotate=33.75] {Se lee como $1$}; 
    \end{scope}
    
    \begin{scope}[green]
        \draw (0.2, 0) -- (\largo, {\largo / 2 - 0.2});
        \clip (0.2, 0) -- (\largo, {\largo / 2 - 0.2})
            -- (\largo, 0)
            -- cycle;
        \foreach \x [parse=true] in {0, \res, ..., 1.414 * \largo} {
            \draw (\x, \x) -- ++(\largo, {-2 * \largo});
        }
        
        \path (0, 0) -- (\largo, {\largo / 5})
            node[pos=0.7, fill=white, rotate=11.25] {Se lee como $0$}; 
    \end{scope}
    
    \begin{scope}[red]
        \draw (0, 0) -- (\largo, \largo);
        
        \clip (0, 0) -- (\largo, \largo) 
            -- (0, \largo)
            -- cycle;
        \foreach \x [parse=true] in {0, \res, ..., 1.414 * \largo} {
            \draw (\x, \x) -- ++(-\largo, \largo);
        }
        
        \path (0, 0) -- (\largo, \largo)
            node[midway, fill=white, rotate=45, above=2pt] {No sobrepasar};
    \end{scope}
    
    \draw[->] (-0.3, 0) -- ({\largo + 0.1}, 0)
        node[below left=2pt] {$V_{dd}$};
    \draw[->] (0, -0.3) -- (0, {\largo + 0.1})
        node[rotate=90, above left=2pt] {Tensión del pin};
    \draw[dashed] (0, 0) -- (\largo, {\largo / 2});
    
\end{tikzpicture}
\end{document}
```


Cuando la [[Señal|señal]] se acerca a $\frac{V_{dd}}{2}$, un poco de [[Ruido|ruido]] puede cambiar un $0$ en un $1$ o viceversa, y causar una lectura incorrecta. Notemos que si $V_{dd}$ es bajo, cada vez el ruido puede generar mayores problemas, y cabe remarcar que esto puede significar aumentar la fuente que alimente el microcontrolador, y aumentando su consumo, que es algo a tener en cuenta en el momento de diseño

Por regla general, se quiere que si se desea leer un $0$, que la tensión en el pin sea lo más cercano a $0$, y en el caso que se lea como un $1$, la tensión en el pin sea lo más cercana a $V_{dd}$

La separación depende del microcontrolador como también del pin que se este usando, como a veces incluso por la [[Temperatura|temperatura]]

> [!caution]
> En el caso de que el pin reciba más de $V_{dd}$ puede dañar el IC. En caso de que reciba menos de $0$ V, puede causar daños internos del circuito y destruir el IC

##### Resistencias de pull up y pull down
---
A veces se quiere tener como default que se lea un $0$ o un $1$. Esto nos permite en cierta forma reducir la posibilidad de ruido y/o en la situación de que se desconecte el circuito que imponga el componente. Para eso se usan
* [[Resistor|Resistencia]] de pull up, va a permitir settear el input cercano a $V_{dd}$ y por lo tanto que se lea como $1$ ^pull-up
* Resistencia de pull down, va a permitir settear el input cercano a la tierra y por lo tanto que se lea como $0$ ^pull-down

```tikz
\usepackage[
	straightvoltages,
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
    voltage shift=0.5, scale=1.2, transform shape, thick,
    loops/.style={circuitikz/inductors/coils=#1}
]
    
    \draw[ultra thick] (0, 2) 
        -- ++(2, 0)
            node[midway] (vdd) {}
        -- ++(0, -4)
            node[pos=0.45] (p0) {}
            node[pos=0.55] (p1) {}
        -- ++(-2, 0)
            node[midway] (gnd) {};
    
    \draw (vdd.center) to[short, -*] ++(0, 0.75) 
        node[right=2pt] {$V_{dd}$};
    \draw (gnd.center) to[short, l^=GND] ++(0, -0.75)
        node[tlground] {}; 
    
    \draw[->] (p0.center) node[above right=2pt] {P$0$}
        -- ++(3, 0) node[pos=0.6] (temp0) {}
            node[above=2pt, align=center] {Pull Up};
    \draw[->] (p1.center) node[below right=2pt] {P$1$}
        -- ++(3, 0) node[pos=0.6] (temp1) {}
            node[below=2pt] {Pull Down};
    
    \draw (temp0.center) to[R, l_=R$1$, *-*] 
        ($ (temp0.center |- vdd.center) + (0, 0.75) $)
            node[right=2pt] {$V_{dd}$}; 
    \draw (temp1.center) to[R, l^=R$2$, *-] 
        ($ (temp1.center |- gnd.center) + (0, -0.75) $)
            node[tlground] {}; 
    
\end{circuitikz}
\end{document}
```

No hay una forma de determinar el valor de esa resistencia. En el caso de un valor bajo de resistencia, se lo llama strong pull up, ya que necesita mucha corriente para sobre pasar esa resistencia. Una resistencia de valor alto, se la llama weak pull up porque no necesita mucha corriente para sobre pasarla

En casos de estar en un circuito muy ruidoso, es preferible aumentar esa resistencia pero al aumentarla genera un mayor aumento de energía y que ese componente sea capaz de manejar esa corriente

#### Cambiar entre input y output
---
Hay aplicaciones en las que cambiar entre input y output es útil o necesario, como lo puede ser la comunicación entre dos microcontroladores

Hay que tener en cuenta que algunos microcontroladores pueden tardar un par de ciclos de reloj para cambiar de dirección y la información que se lee de estos sea confiable

### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```