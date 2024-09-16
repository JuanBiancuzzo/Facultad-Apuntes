---
dia: 2023-09-05
tags:
  - adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
  - circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
aliases:
  - Amplificador
---
### Definición
---
Es un elemento de un [[Circuito eléctrico|circuito]] activo
* Diseñado como un amplificador de [[Tensión|tensión]]
* Diseñado para realizar operaciones matemáticas de suma, resta, multiplicación, división, diferenciación e integración, sobre [[Señal|señales eléctricas]]
* Utilizados en instrumentos, computadoras analógicas y posteriormente en todo circuito

##### Simbología
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

#### Configuraciones
---
El amplificador se puede utilizar de muchas maneras, las configuraciones más conocidas son
 * Inversor ![[Amplificador inversor#^cf9861]] ![[Amplificador inversor#^119653]]
* No inversor ![[Amplificador no inversor#^6a3912]] ![[Amplificador no inversor#^8b2214]]
* Sumador ![[Amplificador sumador#^ab183d]] ![[Amplificador sumador#^d283f3]]
* Diferencial ![[Amplificador diferencial#^f57679]] ![[Amplificador diferencial#^b70835]]
* Integrador ![[Circuito integrador#^020b32]] ![[Circuito integrador#^0d5b6b]]
* Derivador ![[Circuito derivador#^f731f9]] ![[Circuito derivador#^3062c0]]
* Cascada ![[Amplificadores en cascada#^7d5f4d]]

#### Implementaciones
---
Se tienen distintas configuraciones de amplificadores como

##### Amplificadores usando un TBJ
---
* Amplificador emisor común ![[Amplificador Emisor Común con un transistor bipolar de juntura#^6b9228]]  ![[Amplificador Emisor Común con un transistor bipolar de juntura#^daaa29]]
* Amplificador colector común / Seguidor ![[Amplificador Colector Común con un transistor bipolar de juntura#^5c5e25]]  ![[Amplificador Colector Común con un transistor bipolar de juntura#^e8dc2c]]
* Amplificador base común ![[Amplificador Base Común con un transistor bipolar de juntura#^4ae162]]  ![[Amplificador Base Común con un transistor bipolar de juntura#^364fd0]]

##### Amplificadores usando un MOSFET
---
* Amplificador source común ![[Amplificador Source Común con un transistor de efecto de campo metal-óxido-semiconductor#^bef7b2]]  ![[Amplificador Source Común con un transistor de efecto de campo metal-óxido-semiconductor#^27b24b]]
*  Amplificador drain común ![[Amplificador Drain Común con un transistor de efecto de campo metal-óxido-semiconductor#^6e8ccc]] ![[Amplificador Drain Común con un transistor de efecto de campo metal-óxido-semiconductor#^84a8e4]]
 * Amplificador gate común ![[Amplificador Gate Común con un transistor de efecto de campo metal-óxido-semiconductor#^699639]]  ![[Amplificador Gate Común con un transistor de efecto de campo metal-óxido-semiconductor#^5ee09c]]

##### Amplificadores usando un JFET
---
* Amplificador source común ![[Amplificador Source Común con un transistor de efecto de campo de unión#^f67315]]  ![[Amplificador Source Común con un transistor de efecto de campo de unión#^837c41]]
* Amplificador drain común ![[Amplificador Drain Común con un transistor de efecto de campo de unión#^9a3871]]  ![[Amplificador Drain Común con un transistor de efecto de campo de unión#^1b22df]]
* Amplificador gate común ![[Amplificador Gate Común con un transistor de efecto de campo de unión#^9a23eb]]  ![[Amplificador Gate Común con un transistor de efecto de campo de unión#^f4b95c]]
##### Resolución
---
La resolución de un amplificador significa encontrar el punto de polarización, continua o reposo $Q$ y en señal encontrar los parámetros como la [[Ganancia|ganancia]] con respecto a la [[Señal|señal]] de entrada $A_v$ y con el generador $v_s$ dando $A_{vs}$, como también las resistencias de entrada $R_i$ y de salida $R_o$

Teniendo un amplificador básico para el cual plantear una idea general, vamos a usar un [[Amplificador Emisor Común con un transistor bipolar de juntura|amplificador emisor común]] que usa un [[Transistor bipolar de juntura|TBJ]] 

![[Amplificador básico.png]]

Para resolverlo, debemos encontrar el punto de continua o reposo ($Q$), donde para [[Función periódica#Frecuencia|frecuencia]] $0$ (es decir continua) los [[Capacitor|capacitores]] se comportan como abiertos que ya están cargados 

![[Amplificador general en continua.png]]

Recorriendo la [[Malla|malla]] de entrada, tenemos $$ I_B = \frac{V_{BB} - V_{BE}}{R_B} = I_{BQ}  $$
Suponiendo [[Modo activo directo del transistor bipolar de juntura|MAD]] podemos encontrar la relación entre $I_B$ e $I_C$, dado por $I_B ~ \beta_F = I_C$, usando eso y la malla de salida $$ V_{CEQ} = V_{CC} - I_{CQ} ~ R_C $$ si $V_{CEQ} > 0$ entonces nuestra suposición es correcta, y si no se cumple significa que no esta en ese [[Transistor bipolar de juntura#Modos de operación|modo de operación]]

De esta forma ya tenemos los valores de reposo. Ahora encontremos los valores importantes para pequeña señal, con origen en $Q$

![[Amplificador general en pequeña señal.png]]

Graficando la [[Curva de salida|curva de salida]], con la [[Recta de carga estática de un componente|recta de carga estática]] y la [[Recta de carga dinámica de un componente|recta de carga dinámica]] 

![[Recta de salida para un amplificador simple.png]]