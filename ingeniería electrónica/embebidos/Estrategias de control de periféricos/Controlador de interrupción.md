---
dia: 2024-09-10
tags:
  - ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
aliases:
  - Controlador de interrupción vectorial anidado#Para ARM Cortex-M
  - NVIC#Para ARM Cortex-M
  - Non Maskable Interrupt#^NMI
  - Interrupción no enmascarable#^NMI
  - NMI#^NMI
---
# Definición
---
Un controlador de interrupciones es una unidad que recibe [[Interrupción|interrupciones]] externas y genera una [[Solicitud de interrupción|IRQ]] al [[Procesador|procesador]] 

![[Controlador de interrupciones.png]]

Esta conexión simplificada entre un controlador de interrupciones y el procesador. En el caso de interrupciones de [[Hardware|hardware]], se pueden generar $n$ solicitudes de interrupción externas

El controlador de interrupciones está asociado con un mecanismo que permite descubrir la solicitud de mayor prioridad, en forma de ID o identificador de solicitud de interrupción. Esta información a menudo se denomina vector. A veces, el [[Contador|contador]] de interrupciones se trata como un elemento interno del propio procesador; en otras [[Arquitectura del microprocesador|arquitecturas]] puede ser una interfaz programable bajo el control del procesador

## Para ARM Cortex-M
---
En un [[ARM's Cortex-M|ARM Cortex-M]] se lo conoce como controlador de interrupción vectorial anidado (NVIC) cuyo propósito es gestionar excepciones 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \ancho = 2.5; \alto = 1.5; \sep = 0.2; }
    
    \draw ({-\ancho/2}, -\alto) rectangle ++(\ancho, {2 * \alto})
        node[midway, above=2pt] {NVIC};
    \draw[dashed] ({-\ancho/2 + \sep}, {-\alto + \sep}) 
        rectangle ({\ancho/2 - \sep}, {-2 * \sep})
            node[midway, align=center, scale=0.8] {Configuration\\registers};
    
    \coordinate (nvic-abajo) at (0, -\alto);
    \coordinate (nvic-arriba) at (0, \alto);
    
    \tikzmath { \max = 5; \dist = 1.5; }
    \foreach \i in {1, ..., \max} {
        \coordinate (esquina) at (
            {-\dist -\ancho/2 - (\i - 1) * \sep / 2}, 
            {(\i - 1) * \sep / 2 - \alto}
        );
        
        \filldraw[draw=black, fill=white] (esquina) rectangle ++(-\ancho, \alto)
            node[midway, scale=0.9] {Peripherals};
        
        \draw[->, ultra thick] ($ (esquina) + (0, {\i * \alto / (\max + 1)}) $) 
                node (inicio) {}
            -- ++({\dist + (\i - 1) * \sep / 2}, 0)
                node (final) {};
    }
    \path (inicio.center) -- (final.center) node[midway, above=2pt] {IRQs};
    
    \draw ({-\dist - \ancho/2 - (\max - 1) * \sep / 2}, \alto)
        rectangle ++(-\ancho, {-\alto / 2}) node[midway, scale=0.9] {Peripheral};
    \draw[->, ultra thick] (
        {-\dist - \ancho / 2 - (\max - 1) * \sep / 2}, 
        {3 * \alto / 4}
    ) -- ({-\ancho / 2}, {3 * \alto / 4})
        node[midway, above=2pt] {NMI};
        
    \draw ({\ancho/2 + \dist}, -\alto) node (esquina) {}
        rectangle ++({1.5 * \ancho}, {8 * \alto / 3 + \dist / 3})
            node[midway, align=center, scale=0.8] 
                {Cortex-M\\Processor\\Core};
    
    \draw[->, ultra thick] ($ (esquina) + (0, {\alto / 2}) $) 
            node[right=2pt, scale=0.9] {Exception}
        -- ++(-\dist, 0);
    \draw[->, ultra thick] ($ (esquina) + (0, {3 * \alto / 4}) $) 
            node[right=2pt, scale=0.9] {System}
        -- ++(-\dist, 0);
    
    \draw[<->, ultra thick] ($ (esquina) + (0, {3 * \alto / 2}) $) 
        -- ++(-\dist, 0);
        
    \coordinate (cortex-m-abajo) at ($ (esquina) + (0.75 * \ancho, 0) $);
    
    \draw ({-\ancho/2}, {-\alto - \dist / 2}) rectangle 
        ($ (cortex-m-abajo) + ({0.75 * \ancho}, {-\dist / 2 - 2 * \alto / 3}) $)
            node[midway, scale=0.9] {Internal bus interconnect};
    \draw[<-, ultra thick] (nvic-abajo) -- ++(0, {-\dist / 2}); 
    \draw[->, ultra thick] (cortex-m-abajo) 
            node[above=2pt, scale=0.9] {Bus interface}
        -- ++(0, {-\dist / 2}); 
        
    \draw ({-\ancho/2}, {\alto + \dist / 3}) rectangle ++(\ancho, {2 * \alto / 3})
        node[midway, scale=0.75, align=center] {SysTick\\(System Tick\\Timer)};
    \draw[<-, ultra thick] (nvic-arriba) -- ++(0, {\dist / 3}); 
    
\end{tikzpicture}
\end{document}
```

Una sola línea etiquetada como NMI significa interrupción no enmascarable y se utiliza para permitir que un periférico indique al NVCI que inicie incondicionalmente el proceso de interrupción ^NMI

El otro tipo de interrupción es el [[Solicitud de interrupción|IRQ]]. Por lo general, solo hay un NMI, pero hay muchas líneas IRQ que dependen de la capacidad del modelo NVIC específico

La especificación general de STM NVIC establece que un solo NVIC puede gestionar hasta $256$ canales de interrupción
* De los $256$ canales
    * $240$ pueden ser externos
    * $16$ son siempre internos

Debería pensar en un canal de interrupción más como una construcción de [[Software|software]] que como una implementación de [[Hardware|hardware]]

### Generar una interrupción
---
Hay $5$ condiciones previas que deben cumplirse antes de que se pueda generar una interrupción
* El dispositivo de interrupción potencial debe ser capaz de activar una interrupción (estar armado)
* El NVIC debe estar habilitado
* Las interrupciones globales deben estar habilitadas
* La prioridad de interrupción debe ser mayor que el nivel actual
* Debe ocurrir un evento de activación de hardware real

Estas $5$ condiciones pueden ocurrir en cualquier orden. Sin embargo, todas deben ser verdaderos simultáneamente para que se reconozca y procese una interrupción

En el caso que se reconozca una interrupción, ocurrirán estos $5$ eventos
* Se completará la instrucción que se está ejecutando actualmente
* Se suspenderá el hilo actualmente en ejecución
* El contenido de $12$ registros se almacenará en la [[Stack|pila]]. Se almacenará $18$ palabras adicionales si la [[Unidad de punto flotante (FPU) (Floating Point Unit)|unidad de punto flotante]] estaba activa cuando se reconoció la interrupción
* El [[Registro|registro]] `LR` se establece en un valor específico
* El registro de la [[Unidad de control#^PC|PC]] se carga con la [[Dirección de memoria|dirección]] de la [[Rutina de servicio de interrupción|rutina de servicio de interrupción]] 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \alto = 0.6; \ancho = 2; }
    
    \draw[dashed] (0, -2.2) -- (0, 2);
    \draw (0, 1) -- ++(-1, -1) -- ++(-1, 0) node[left=2pt] {IRQ1};
    \draw (0, 1) -- ++({4 * \ancho}, 0)
        node[midway, below=2pt] {IRQ waveform};
    
    \draw (0, -0.5) 
        rectangle ++(\ancho, -\alto) node[midway, scale=0.8] {PUSH}
        rectangle ++({2 * \ancho}, \alto) node[midway, scale=0.8] {ISR}
        rectangle ++(\ancho, -\alto) node[midway, scale=0.8] {POP};
    
    \draw (\ancho, {-0.5 - \alto}) -- ++(0, -\alto);
    \draw ({3 * \ancho}, {-0.5 - \alto}) -- ++(0, -\alto);
    \draw ({4 * \ancho}, {-0.5 - \alto}) -- ++(0, -\alto);
    
    \draw[<->] (0, {-0.5 - 3 * \alto / 2}) -- ++(\ancho, 0)
        node[midway, fill=white] {$12$};
    \draw[<->] ({3 * \ancho}, {-0.5 - 3 * \alto / 2}) -- ++(\ancho, 0)
        node[midway, fill=white] {$12$};
    
\end{tikzpicture}
\end{document}
```

El punto clave a destacar es que la NVIC, al reconocer una [[Solicitud de interrupción|solicitud de interrupción]] válida, interactuará automáticamente con la [[Microcontrolador|MCU]] utilizando el [[Firmware|firmware]] almacenado dentro de la NVIC

No se necesita ningún código especial, lo que hace que el procesamiento de la interrupción sea lo más rápido posible

Sólo se necesitan $12$ ciclos de reloj, como se muestra en la figura, para pasar de reconocer una interrupción a ejecutar la primera instrucción en el [[Rutina de servicio de interrupción|ISR]]

El cambio de contexto también funciona bastante bien con interrupciones priorizadas donde el ISR de menor prioridad se convierte en un [[Proceso|subproceso]] en segundo plano y el ISR de mayor prioridad se convierte en un subproceso de primer plano. El subproceso en segundo plano es un interrupción pendiente, y por lo tanto hasta que no se vuelva a cumplir las $5$ condiciones previamente mencionadas, no se va a volver a activar 