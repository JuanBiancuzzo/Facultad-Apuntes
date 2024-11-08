---
dia: 2023-09-05
tags:
  - ingeniería-electrónica/adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
  - ingeniería-en-informática/adc/Circuitos-en-regimen-de-corriente-continua
aliases:
  - Amplificador
---
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