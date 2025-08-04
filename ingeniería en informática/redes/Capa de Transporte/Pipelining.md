---
dia: 2024-06-02
tags:
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Microcontroladores de 32 bits/Resumen.md]]"
  - "[[ingeniería en informática/redes/Capa de Transporte/Resumen.md]]"
---
# Definición
---
Es una idea general, en la cual podemos intercalar [[Proceso|procesos]], agregándolos a una pipe

## En la capa de transporte
---
Se ve que para el [[Protocolo stop-and-wait|protocolo stop-and-wait]], tiene el problema de la velocidad y donde hay tiempo donde ambos, tanto el receptor como el emisor, están esperando sin hacer nada, entre otras [[Protocolo stop-and-wait#Desventajas|desventajas]]

La solución a estos problemas, es permitir que el remitente envíe múltiples paquetes sin esperar a sus [[Protocolo de entrega confiable|acknowledgement]]. Esta técnica se conoce como pipelining, tiene las siguientes consecuencias

* El rango de números de secuencia debe incrementarse, ya que puede haber múltiples [[Paquete|paquetes]] en tránsito sin haber recibido su acknowledgment
* Tanto el emisor deberá [[Buffer|bufferear]] los paquetes que aún no fueron confirmados. Esto también es necesario del lado del receptor
* El rango de números de secuencia y los requerimientos del buffer dependerán de la forma en la que el protocolo responden a los paquetes perdidos. Existen principalmente dos protocolos
	* [[Protocolo Go-Back-N|Go-Back-N]]
	* [[Protocolo Selective Repeat|Selective Repeat]]

## En el procesador
---
Es una técnica para optimizar el [[Arquitectura del microprocesador|ciclo fetch-decode-execute]], tan pronto como se ha cargado una instrucción en el registro de instrucciones interno, se puede recuperar una nueva instrucción mientras se decodifica la primera

Tan pronto como esta decodificación haya terminado, comenzará su ejecución y se podrá iniciar la decodificación de la nueva instrucción

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{verde}{RGB}{213, 232, 214} 
\definecolor{azul}{RGB}{220, 233, 243} 
\definecolor{violeta}{RGB}{227, 212, 230} 

\begin{tikzpicture}[scale=0.9, transform shape, ultra thick]
    \tikzmath { \ancho = 1.7; \alto = 0.9; }
    
    \foreach \inst [count=\y from 0] in {1, ..., 4} {
        \path ({-\ancho - 0.1}, {-\y * \alto}) rectangle ++(\ancho, -\alto)
            node[midway, scale=1.2] {Instr $\inst$};
        \foreach \accion/\color [count=\xi from 0] in 
            {Fetch/verde, Decode/azul, Execute/violeta} 
        {
            \filldraw[fill=\color, draw=\color!80!black, rounded corners] 
                ({(\xi + \y) * \ancho}, {-\y * \alto}) 
                    rectangle ++(\ancho, -\alto)
                        node[midway, white] {\accion};
        }
    }
    
    
\end{tikzpicture}
\end{document}
```

Se puede cargar una nueva instrucción en cada ciclo y su resultado estará disponible dos ciclos después, pero la [[Función periódica#Frecuencia|frecuencia]] de los ciclos será efectivamente mayor, ya que se pueden completar cuatro instrucciones en el tiempo que antes se necesitaba para completar dos

Sin embargo, este tipo de paralelismo deja algunos problemas por resolver. Por ejemplo, si se debe ejecutar una instrucción de bifurcación de [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], la dirección de la siguiente instrucción sólo se conocerá cuando se haya completado la ejecución de la anterior; en este caso, es necesario retrasar la siguiente recuperación, interrumpiendo el pipeline o cancelando la secuencia

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{verde}{RGB}{213, 232, 214} 
\definecolor{azul}{RGB}{220, 233, 243} 
\definecolor{violeta}{RGB}{227, 212, 230} 

\begin{tikzpicture}[scale=0.9, transform shape, ultra thick]
    \tikzmath { \ancho = 1.7; \alto = 0.9; }
    
    \foreach \inst [count=\y from 0] in {1, 2} {
        \path ({-\ancho - 0.1}, {-\y * \alto}) rectangle ++(\ancho, -\alto)
            node[midway, scale=1.2] {Instr $\inst$};
        \foreach \accion/\color [count=\xi from 0] in 
            {Fetch/verde, Decode/azul, Execute/violeta} 
        {
            \filldraw[fill=\color, draw=\color!80!black, rounded corners] 
                ({(\xi + \y) * \ancho}, {-\y * \alto}) 
                    rectangle ++(\ancho, -\alto)
                        node[midway, white] {\accion};
        }
    }
    
    \foreach \inst [count=\y from 2] in {3, 4} {
        \path ({-\ancho - 0.1}, {-\y * \alto}) rectangle ++(\ancho, -\alto)
            node[midway, scale=1.2] {Instr $\inst$};
        \foreach \accion/\color [count=\xi from 0] in 
            {Fetch/verde, Decode/azul, Execute/violeta} 
        {
            \filldraw[fill=\color, draw=\color!80!black, rounded corners] 
                ({(\xi + \y + 2) * \ancho}, {-\y * \alto}) 
                    rectangle ++(\ancho, -\alto)
                        node[midway, white] {\accion};
        }
    }
    
    
\end{tikzpicture}
\end{document}
```

Sin embargo, el beneficio del pipelining es positivo porque los programas tienen muchas
más instrucciones consecutivas que de bifurcación