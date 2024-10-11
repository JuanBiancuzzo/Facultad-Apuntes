---
dia: 2024-09-30
etapa: empezado
referencias:
  - "284"
tags:
  - algoritmos
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---

## Algoritmo
---
El [[algoritmos/Índice|algoritmo]] de Wavefunction Collapse le enseña a la [[Computadora|computadora]] como generar nuevos output proceduralmente dado unas instrucciones de como debería verse en forma de un ejemplo. En lo general se usa para crear imágenes, pero puede usarse para generar lo que se necesite

![[Wavefunction collapse example.png]]

### Idea
---
Vamos a tomar como ejemplo crear un mapa, donde en cada pixel de ese mapa puede haber 
* Planicie (`P`)
* Costa (`C`)
* Océano (`O`)
* Montañas (`M`)


```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { \largo = 2.5; \sep = 0.5; }
    
    \foreach \letra [count=\i from 0] in {P, C, O, M} {
         \coordinate (pos\letra) at ({(\largo + \sep) * \i}, 0);   
    }
    
    \tikzmath { 
        \sep = 0.25 / \largo; 
        \separacion = 0.3 / \largo; \alto = 0.2 / \largo;
    }
    \begin{scope}[cm={\largo, 0, 0, \largo, (posP)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
        \path (inicio) -- ++(1, 0) node [midway, below=2pt, scale=1/\largo] {$P$};
        \clip (inicio) rectangle ++(1, 1);
        
        \foreach \pos [parse=true] in {-1 - \sep, -1, ..., 1 + \sep} {
            \draw[dashed, green] ($ (inicio) + (\pos, 0) $) -- ++(1, 1);
            \draw[dashed, green] ($ (inicio) + (1 - \pos, 0) $) -- ++(-1, 1);
        }
    \end{scope}
    
    \begin{scope}[cm={\largo, 0, 0, \largo, (posC)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
        \path (inicio) -- ++(1, 0) node [midway, below=2pt, scale=1/\largo] {$C$};
        \clip (inicio) rectangle ++(1, 1);
        
        \begin{scope} 
            \clip (inicio) rectangle ($ (inicio) + (0.2, 1) $);
            \foreach \pos [parse=true] in {-1 - \sep, -1, ..., 1 + \sep} {
                \draw[dashed, green] ($ (inicio) + (\pos, 0) $) -- ++(1, 1);
                \draw[dashed, green] ($ (inicio) + (1 - \pos, 0) $) -- ++(-1, 1);
            }
        \end{scope}
        \begin{scope} 
            \clip ($ (inicio) + (0.2, 0) $) rectangle ($ (inicio) + (0.5, 1) $);
            
            \foreach \pos [parse=true] in {-1 - \sep, -1, ..., 1 + \sep} {
                \draw[dotted, yellow] ($ (inicio) + (\pos, 0) $) -- ++(1, 1);
                \draw[dotted, yellow] ($ (inicio) + (1 - \pos, 0) $) -- ++(-1, 1);
            }
        \end{scope}
        
        
        \foreach \posX/\posY in {0.5/0.6, 0.5/0, 0.5/-0.6} {
            \coordinate (pos) at ({\posX/2}, {\posY/2});
            \draw[cyan, ultra thick] ($ (pos) + (0, \alto) $) 
                .. controls ($ (pos) + (0, {\alto/2}) $) 
                and ($ (pos) + ({-\separacion / 2}, 0) $)
                .. ($ (pos) + (-\separacion, 0) $);
            \draw[cyan, ultra thick] ($ (pos) + (0, \alto) $) 
                .. controls ($ (pos) + (0, {\alto/2}) $) 
                and ($ (pos) + ({\separacion / 2}, 0) $)
                .. ($ (pos) + (\separacion, 0) $);
        }
    \end{scope}
    
    \begin{scope}[cm={\largo, 0, 0, \largo, (posO)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
        \path (inicio) -- ++(1, 0) node [midway, below=2pt, scale=1/\largo] {$O$};
        \clip (inicio) rectangle ++(1, 1);
        
        \foreach \posX/\posY in {-0.4/0.5, -0.4/-0.3, 0.4/0.3, 0.4/-0.5} {
            \coordinate (pos) at ({\posX/2}, {\posY/2});
            \draw[cyan, ultra thick] ($ (pos) + (0, \alto) $) 
                .. controls ($ (pos) + (0, {\alto/2}) $) 
                and ($ (pos) + ({-\separacion / 2}, 0) $)
                .. ($ (pos) + (-\separacion, 0) $);
            \draw[cyan, ultra thick] ($ (pos) + (0, \alto) $) 
                .. controls ($ (pos) + (0, {\alto/2}) $) 
                and ($ (pos) + ({\separacion / 2}, 0) $)
                .. ($ (pos) + (\separacion, 0) $);
        }
    \end{scope}
    
    \begin{scope}[cm={\largo, 0, 0, \largo, (posM)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
        \path (inicio) -- ++(1, 0) node [midway, below=2pt, scale=1/\largo] {$M$};
        \clip (inicio) rectangle ++(1, 1);
                    
        
        \tikzmath { \sep = 0.25; }
        \begin{scope} 
            \clip (inicio) -- ++(1, 0) -- ++(0, {3 / 16}) -- ++(-1, 0) -- cycle
            ($ (inicio) + (0, 1) $) -- ++(1, 0) 
                -- ++(0, {-3 / 16}) -- ++(-1, 0) -- cycle;
            \tikzmath { \sep = 0.25 / \largo; }
            \foreach \pos [parse=true] in 
                {-1 - \sep, -1, ..., 1 + \sep}
            {
                \draw[dashed, green] ($ (inicio) + (\pos, 0) $) -- ++(1, 1);
                \draw[dashed, green] ($ (inicio) + (1 - \pos, 0) $) -- ++(-1, 1);
            }
        \end{scope}
        
        \clip ($ (inicio) + (0, {3 / 16}) $) rectangle
            ($ (inicio) + (1, {1 - 3 / 16}) $);
        \begin{scope}[cm={0.5, 0, 0, 0.5, (0, 0)}]
            
            \draw[brown, ultra thick] (-0.9, -0.4)
                -- ++(0.1, 0.3)
                -- ++(0.1, 0)
                -- ++(0.1, 0.2)
                -- ++(0.1, 0)
                -- ++(0.2, 0.3)
                -- ++(0.1, -0.3)
                -- ++(0.05, 0)
                -- ++(0.1, -0.3) 
                -- ++(0.05, 0) node (temp) {}
                -- ++(0.1, -0.2);
            \draw[brown, ultra thick] (temp.center)
                -- ++(0.15, 0.3)
                -- ++(0.1, 0.05)
                -- ++(0.1, 0.2)
                -- ++(0.05, -0.1)
                -- ++(0.1, 0.1)
                -- ++(0.1, -0.4)
                -- ++(0.2, -0.3)
                -- ++(0.1, -0.1);
        \end{scope}
        
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Estamos queriendo crear un mapa posible, de forma procedural, por lo que asignar de forma aleatoria no es suficiente

Las reglas que mencionábamos antes se refieren a como podemos combinar, por la ausencia de las reglas lo interpretaremos como una forma en la que no podemos combinarlas

Notemos que hay configuraciones que no tienen sentido, como que una montaña este al lado del océano sin una costa de por medio. O, que si pensamos que la costa tiene una orientación donde solo a la izquierda hay tierra y a la derecha hay agua, entonces no tiene sentido que a la izquierda haya océano

%%  Avanzar %%

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```