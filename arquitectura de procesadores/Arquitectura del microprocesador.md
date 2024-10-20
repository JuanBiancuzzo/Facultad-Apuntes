---
dia: 2024-10-20
estado: Sin empezar
tags:
  - índice
  - arquitectura-de-procesadores
  - nota/investigacion
  - estructura/Microarquitectura
  - embebidos/Microcontroladores-de-32-bits
aliases:
  - Arquitectura de procesador
  - Ciclo fetch-decode-execute
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a agrupar la investigación de [[Arquitectura del microprocesador|arquitectura de procesadores]] para poder ir entendiendo mejor su funcionamiento

## Resumen
---
Para ejecutar un [[Programa|programa]], el [[Procesador|microprocesador]] realiza el llamado ciclo fetch, o ciclo de búsqueda-ejecución
1. Buscar en memoria la próxima instrucción a ser ejecutada ^fetch
2. Decodificar el código de operación de esa instrucción ^decode
3. Ejecutar la instrucción ^execute
4. Repetir

Hay distintas formas de implementar este ciclo de búsqueda, y estas varían en la velocidad o el consumo del mismo

En un procesador muy simple, cada paso de una instrucción se completa antes de iniciar una nueva

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{verde}{RGB}{213, 232, 214} 
\definecolor{azul}{RGB}{220, 233, 243} 
\definecolor{violeta}{RGB}{227, 212, 230} 

\begin{tikzpicture}[scale=0.8, transform shape, ultra thick]
    \tikzmath { \ancho = 1.7; \alto = 0.9; }
    
    \foreach \inst [count=\y from 0] in {1, ..., 4} {
        \path ({-\ancho - 0.1}, {-\y * \alto}) rectangle ++(\ancho, -\alto)
            node[midway] {Instr $\inst$};
        \foreach \accion/\color [count=\xi from 0] in 
            {Fetch/verde, Decode/azul, Execute/violeta} 
        {
            \filldraw[fill=\color, draw=\color!80!black, rounded corners] 
                ({(\xi + 3 * \y) * \ancho}, {-\y * \alto}) 
                    rectangle ++(\ancho, -\alto)
                        node[midway, white] {\accion};
        }
    }
    
    
\end{tikzpicture}
\end{document}
```

Sin embargo, esto no es muy eficiente en términos de uso de recursos internos. Una mejor forma de hacerlo, sería usando la técnica llamada [[Pipelining|pipelining]]

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```