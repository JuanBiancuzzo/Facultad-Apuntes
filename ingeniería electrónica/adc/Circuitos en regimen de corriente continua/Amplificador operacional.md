---
dia: 2023-09-05
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-de-corriente-continua
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-diferenciales
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
aliases:
  - Amplificador
  - OPAMP
  - Amplificador operacional de tensión
referencias:
  - "437"
etapa: ampliar
vinculoFacultad:
  - tema: Circuitos en regimen de corriente continua
    capitulo: 1
    materia: Análisis de circuitos
    carrera: Ingeniería electrónica
  - tema: Amplificadores diferenciales
    capitulo: 5
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un elemento de un [[Circuito eléctrico|circuito]] activo
* Diseñado como un amplificador de [[Tensión|tensión]]
* Diseñado para realizar operaciones matemáticas de suma, resta, multiplicación, división, diferenciación e integración, sobre [[Señal|señales eléctricas]]
* Utilizados en instrumentos, computadoras analógicas y posteriormente en todo circuito

### Simbología
---
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { \alto = 2; \ancho = 2; \largo = 0.7; \radio = 0.1; }
    \draw (0, 0) -- ++(0, \alto)
            node[pos=0.3] (Vmenos) {}
            node[pos=0.7] (Vmas) {}
        -- ++(\ancho, {-\alto / 2})
            node[midway] (VSmas) {}
            node (Vout) {}
        -- cycle
            node[midway] (VSmenos) {};
    
    \foreach \nombre/\signo/\simbolo in {mas/1/+, menos/-1/-} {
        \draw (V\nombre.center)
            node[right=\radio cm] {$\simbolo$}
            -- ++(-\largo, 0);
        \draw ($ (V\nombre.center) + ({-\largo - \radio}, 0) $) 
                node[left=\radio cm] {$V\simbolo$}
            circle (\radio);
        
        \draw (VS\nombre.center) -- ++(0, {\signo * \largo});
        \draw ($ (VS\nombre.center) + (0, {\signo * (\largo + \radio)}) $) 
                node[right=\radio cm] {$VS\simbolo$}
            circle (\radio);
    }
    

    \draw (Vout.center) -- ++(\largo, 0);
    \draw ($ (Vout.center) + ({\largo + \radio}, 0) $) 
            node[right=\radio cm] {$V_{out}$}
        circle (\radio);

    
    
\end{tikzpicture}
\end{document}
```

Donde $V^+$ es la entrada no inversora, $V^-$ es la entrada inversora, $V_{out}$ es la salida, $V^+_S$ alimentación positiva y $V^-_S$ es la alimentación negativa

## Representación
---
Se caracteriza por 

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
		voltage shift=0.5, scale=1.1, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
    	
    	\tikzmath { \largo = 6; }
    	\draw (\largo, 0)
        	-- ++({-\largo * cos(30)}, {\largo * sin(30)})
        	-- ++(0, -\largo)
            	node[pos=0.25] (entradaInversora) {}
            	node[pos=0.75] (entradaNoInversora) {}
        	-- cycle;
        	
        \draw ($ (entradaInversora.center) + (-2, 0) $)
            to[short, v^=$i_{i1}$, o-] ++(2, 0)
                node[right=2pt] {$-$};
        \draw ($ (entradaNoInversora.center) + (-2, 0) $)
            to[short, v_=$i_{i2}$, o-] ++(2, 0)
                node[right=2pt] {$+$};
        
        \draw[->, shorten <= 0.1cm, shorten >= 0.1cm] 
            ($ (entradaNoInversora.center) + (-0.5, 0) $)
            -- ($ (entradaInversora.center) + (-0.5, 0) $)
                node[midway, left=2pt] {$\epsilon$};
                
        \draw[->] ($ (entradaInversora.center) + (-2.5, 0.5) $)
                node[above=2pt] {$R_{id}$}
            -- ++(0, -1)
            -- ++(0.75, 0);
            
        \draw (\largo, 0) to[short] ++(-2.5, 0)
            to[sV, l_=$A_{vol} \epsilon$] ++(0, -1.5)
            to ++(0, -1.5) node[tground] (ground) {};
        
        \draw (\largo, 0) to[short, -o] ++(1.5, 0);
        \draw (ground.center -| {\largo + 1.6}, 0) node[tground] {};
        \draw[->, shorten >= 0.1cm] (ground.center -| {\largo + 1.6}, 0) 
            -- ({\largo + 1.6}, 0)
                node[midway, right=2pt] {$v_0$};
        
        \draw[->] ({\largo + 0.75}, 0.5)
                node[above=2pt] {$R_{o}$}
            -- ++(0, -1)
            -- ++(-0.75, 0);
        
    	
	\end{circuitikz}
\end{document}
```

Donde en el caso ideal
* $A_{vol} \to \infty$
* $R_{id} \to \infty$
* $R_o \to 0$
* $i_{i1},~ i_{i2} \to 0$ 

## Configuraciones
---
El amplificador se puede utilizar de muchas maneras, las configuraciones más conocidas son
 * Inversor ![[Amplificador inversor#^cf9861]] ![[Amplificador inversor#^119653]]
* No inversor ![[Amplificador no inversor#^6a3912]] ![[Amplificador no inversor#^8b2214]]
* Sumador ![[Amplificador sumador#^ab183d]] ![[Amplificador sumador#^d283f3]]
* Diferencial ![[Amplificador diferencial#^f57679]] ![[Amplificador diferencial#^b70835]]
* Integrador ![[Circuito integrador#^020b32]] ![[Circuito integrador#^0d5b6b]]
* Derivador ![[Circuito derivador#^f731f9]] ![[Circuito derivador#^3062c0]]
* Cascada ![[Amplificadores en cascada#^7d5f4d]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```