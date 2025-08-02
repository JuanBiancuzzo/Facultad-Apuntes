---
dia: 2024-08-28
tags:
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-electrónica/estructura/Sistema-ARC
  - carrera/ingeniería-en-informática/estructura/Sistema-ARC
  - nota/facultad
aliases:
  - Sintaxis de ensamblador en ARC#Sintaxis
  - Subrutinas de ensamblador en ARC#Subrutinas
  - Macros de ensamblador en ARC#Macros
  - Arquitectura de set de instrucciones
  - ISA
  - Arquitectura de set de instrucciones de ARC#Set de instrucciones de ARC
  - ISA de ARC#Set de instrucciones de ARC
---
# Definición
---
Un [[Codificación de código máquina|código binario]] determinado sólo se puede ejecutar en una [[Arquitectura del microprocesador|arquitectura de procesador]] específica. En general, cada nuevo familia de procesadores agrega algunas instrucciones o cambia la codificación, o incluso el conjunto de instrucciones completo

## Set de instrucciones de ARC
---
Las instrucciones son las siguientes

| Mnemónico | Función                                                |
| --------- | ------------------------------------------------------ |
| `ld`      | Carga un registro desde memoria                        |
| `st`      | Salvar un registro en memoria                          |
| `sethi`   | Cargar los $22$ bits más significativos de un registro |
| `andcc`   | Producto lógico bit a bit                              |
| `orcc`    | Suma lógica bit a bit                                  |
| `orncc`   | Suma lógica negada bit a bit                           |
| `srl`     | Desplazar a derecha                                    |
| `addcc`   | Sumar                                                  |
| `call`    | Salgo (llamado) a subrutina                            |
| `jmpl`    | Retorno de subrutina                                   |
| `be`      | Bifurcación (salto por igual)                          |
| `bneg`    | Bifurcación (salto) por negativo                       |
| `bcs`     | Bifurcación (salto) por arrastre                       |
| `bvs`     | Bifurcación (salto) por desborde                       |
| `ba`      | Bifurcación (salto) incondicional                      |

* Las operaciones que terminan en "cc" alteran el contenido de los flags luego de la operación
* La bifurcación salta a una [[Dirección de memoria|dirección de memoria]] si se cumple una condición
* El salto por igual verifica el flag cero

## Sintaxis
---
Se toma la siguiente sintaxis 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    
    \tikzmath { \diff = 0.2; }
    \path (0, 0) node (temp) {};
    \foreach \largo [count=\i] in {1.3, 1.3, 2, 1, 5} {
        \draw (temp.center)
            -- ++(0, 0.2)
            -- ++(\largo, 0)
                node[midway] (pos\i) {}
            -- ++(0, -0.2) node (temp) {};
        \path (temp.center) -- ++(\diff, 0) node (temp) {};
    }
    
    \path (pos1) node[below=0.1cm] {lab\_1:};
    \path (pos1) node[above=0.1cm, align=center] {Rótulo\\$\downarrow$};
    
    \path (pos2) node[below=0.1cm] {addcc};
    \path (pos2) node[above=0.1cm, align=center] {Mnemónico\\$\downarrow$};
    
    \path (pos3) node[below=0.1cm] {\%r1, \%r2,};
    \path (pos3) node[above=0.1cm, align=center] 
        {Operandos\\de origen\\$\downarrow$};
    
    \path (pos4) node[below=0.1cm] {\%r3};
    \path (pos4) node[above=0.1cm, align=center] 
        {Operandos\\de destino\\$\downarrow$};
    
    \path (pos5) node[below=0.1cm] {!Ejemplo de código simbólico};
    \path (pos5) node[above=0.1cm, align=center] {Comentario\\$\downarrow$};

\end{tikzpicture}
\end{document}
```

* Distingue mayúsculas de minúsculas
* Números por defecto es en [[Base númerica|base]] $10$
* Si empieza con "$0$x" o finaliza con "h", se trata de hexadecimal

## Subrutinas
---
La instrucción `call` llama a la subrutina deseada, guarda la dirección de retorno en %r$15$. La instrucción `jmpl` índica la siguiente línea a ejecutar. Se utiliza para volver de una subrutina

## Macros
---
Una macro es una porción de código que se ejecuta antes del ensamblado. En el proceso de expansión de macros, sus nombres se intercambian por el código correspondiente, reemplazando con los parámetros necesarios

## Diferencias entre subrutinas y macros
---
Las macro se accede en tiempo de ensamblado, por lo que es más rápido. La subrutina es accedida por la instrucción `call` y termina con un `jmpl`, en tiempo de ejecución

Los parámetros de una macro son interpretados por el ensamblador, mientras que los de una subrutina es accedida por [[Memoria|memoria]] o [[Registro|registro]]

El [[Código de máquina|código de máquina]] de una macro se repite tantas veces como se invoque. En el caso de la subrutina, el código se encuentra en un solo lugar y se referencia a él cuándo se necesita