---
dia: 2024-07-12
tags:
  - investigación/índice
  - investigación/machine-Learning/Red-Neuronal
  - investigación/ciencias-de-la-computación/Machine-learning/red-Neuronal
  - investigación/matemática/Estadística/Machine-learning/red-Neuronal
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar una de las forma de generar resultado a partir de datos, más conocida

## Resumen
---
#ingeniería-en-informática/orga/Machine-learning 
Es un conjunto de [[Neurona|neuronas]] que pueden estar en capas, para generar uno o varios valores. 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \radio = 0.5; \ysep = 2.5 * \radio; 
        \colI = 5; \colCc = 6; \colCk = 6; \colO = 3; 
    }

    \foreach \cant/\x [count=\i from 0] in
        {\colI/-5, \colCc/-2, \colCk/2, \colO/5} 
    {
        \tikzmath {
            \cantMitad = ceil( \cant / 2 );
            \cantPar = mod( mod( \cant, 2 ) + 1, 2);
            \yInicial = \cantPar * \ysep / 2;
        }
        \foreach \j [parse=true] in {0, ..., \cantMitad - 1} {
            \tikzmath { 
                \infe = int(\cantMitad + \j + 1 * \cantPar - 1);
                \supe = int(\cantMitad - \j - 1);
            }
            \coordinate (c\i-\supe) at (\x, {\yInicial + \j * \ysep});
            \coordinate (c\i-\infe) at (\x, {-\yInicial - \j * \ysep});
            
            \draw (c\i-\supe) circle (\radio);
            \draw (c\i-\infe) circle (\radio);
        }
    }
    
    \foreach \i [parse=true] in {0, ..., \colI - 1}{ \path (c0-\i) node {$I_\i$}; }
    \foreach \i [parse=true] in {0, ..., \colCc - 1}
        { \path (c1-\i) node {$c_{0,\i}$}; }
    \foreach \i [parse=true] in {0, ..., \colCk - 1}
        { \path (c2-\i) node {$c_{k,\i}$}; }
    \foreach \i [parse=true] in {0, ..., \colO - 1}{ \path (c3-\i) node {$O_\i$}; }

    \path ($ (c0-0) + (0, 2 * \radio) $) node {Input};
    \path ($ (c1-0) + (0, 2 * \radio) $) node {Capa $0$};
    \path ($ (c2-0) + (0, 2 * \radio) $) node {Capa $k$};
    \path ($ (c3-0) + (0, 2 * \radio) $) node {Output};

    \path ($ (c1-0)!0.5!(c2-0) + (0, 2 * \radio) $) node {$\cdots$};
    
    \foreach \cInicio/\cantInicio/\cFinal/\cantFinal in 
        {0/\colI/1/\colCc, 1/\colCc/2/\colCk, 2/\colCk/3/\colO}
    {
        \foreach \i [parse=true] in {0, ..., \cantInicio - 1} {
            \foreach \j [parse=true] in {0, ..., \cantFinal - 1} {
                \coordinate (inicio) at (c\cInicio-\i);
                \coordinate (final) at (c\cFinal-\j);
                \draw ($ (inicio) + (\radio, 0) $) .. controls
                    ($ (inicio) + ({3 * \radio}, 0) $) and
                    ($ (final) + ({-3 * \radio}, 0) $)
                 .. ($ (final) + (-\radio, 0) $);
            }
        }
    }

\end{tikzpicture}
\end{document}
```


Es un modelo que resuelve un [[Problema de regresión]] pero aplicando una función ![[Softmax#Formula]]podemos tener de esta forma, asignando cada output una categoría, la [[Probabilidad]] de que sea esa categoría. Por lo tanto, se puede resolver un [[Problema de clasificación]] 

Leer
* [[Python Machine Learning, machine Learning and Deep Learning with Python, scikit-learn, and TensorFlow 2 de Sebastian Raschka, Vahid Mirjalili|Python Machine Learning, machine Learning and Deep Learning with Python, scikit-learn, and TensorFlow 2]]


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```