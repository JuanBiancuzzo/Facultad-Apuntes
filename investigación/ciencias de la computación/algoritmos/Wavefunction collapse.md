---
dia: 2024-09-30
etapa: ampliar
referencias:
  - "284"
tags:
  - nota/investigacion
  - investigación/ciencias-de-la-computación/algoritmos
orden: 287
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---

## Algoritmo
---
El [[Algoritmo|algoritmo]] de Wavefunction Collapse le enseña a la [[Computadora|computadora]] como generar nuevos output proceduralmente dado unas instrucciones de como debería verse en forma de un ejemplo. En lo general se usa para crear imágenes, pero puede usarse para generar lo que se necesite

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

Entonces podemos establecer reglas para cada uno, dadas por el siguiente diagrama

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]        
    \tikzmath { 
        \largo = 2.5; \sep = 0.25 / \largo; 
        \separacion = 0.3 / \largo; \alto = 0.2 / \largo;
    }
    
    \foreach \cx/\cy/\angulo in {0/0/0, 0/-\largo/0} {
    \tikzmath {  
        \acc = \largo * cos(\angulo); \auc = -\largo * sin(\angulo);
        \acu = \largo * sin(\angulo); \auu = \largo * cos(\angulo);
    }
    \begin{scope}[cm={\acc, \auc, \acu, \auu, (\cx, \cy)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
        \clip (inicio) rectangle ++(1, 1);
        
        \foreach \pos [parse=true] in {-1 - \sep, -1, ..., 1 + \sep} {
            \draw[dashed, green] ($ (inicio) + (\pos, 0) $) -- ++(1, 1);
            \draw[dashed, green] ($ (inicio) + (1 - \pos, 0) $) -- ++(-1, 1);
        }
    \end{scope}
    }
    
    \foreach \cx/\cy/\angulo in {\largo/0/0, 0/\largo/-90} {
    \tikzmath {  
        \acc = \largo * cos(\angulo); \auc = -\largo * sin(\angulo);
        \acu = \largo * sin(\angulo); \auu = \largo * cos(\angulo);
    }
    \begin{scope}[cm={\acc, \auc, \acu, \auu, (\cx, \cy)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
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
    }
    
    \foreach \cx/\cy/\angulo [parse=true] in {2*\largo/0/0} {
    \tikzmath {  
        \acc = \largo * cos(\angulo); \auc = -\largo * sin(\angulo);
        \acu = \largo * sin(\angulo); \auu = \largo * cos(\angulo);
    }
    \begin{scope}[cm={\acc, \auc, \acu, \auu, (\cx, \cy)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
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
    }
    
    \foreach \cx/\cy/\angulo in {-\largo/0/0} {
    \tikzmath {  
        \acc = \largo * cos(\angulo); \auc = -\largo * sin(\angulo);
        \acu = \largo * sin(\angulo); \auu = \largo * cos(\angulo);
    }
    \begin{scope}[cm={\acc, \auc, \acu, \auu, (\cx, \cy)}]
        \coordinate (inicio) at (-0.5, -0.5);
        
        \draw[ultra thick] (inicio) rectangle ++(1, 1);
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
    }
    
\end{tikzpicture}
\end{document}
```

Donde se puede entender que si existe una arista que conecta dos pixeles, entonces se pueden colocar una al lado de la otra. También por simplificada se asume que las rotaciones, como es ejemplificado con el pixel de la costa arriba de la planicie, son validas mientras se cumpla esas reglas

Teniendo estas reglas, ahora podemos establecer el algoritmo, donde vamos a crear una imagen, en este caso

Cada pixel va a poder ser cualquiera de las cuatro celdas posibles, estando en una [[Principio de superposición|superposición]] de posibles pixeles

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

% PCOM

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \def\celdas{{
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15
	}}
	
	\tikzmath { \chico = 0.3; \grande = 0.7; }
    \coordinate (posM) at (\chico, \chico);
    \coordinate (posO) at (\grande, \chico);
    \coordinate (posC) at (\chico, \grande);
    \coordinate (posP) at (\grande, \grande);
    	
	\tikzmath { \cantX = 7; \cantY = 5; \largo = 1; \cantidad = dim(\celdas); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
    	\tikzmath { 
        	\x = mod(\i, \cantX); \y = int(floor(\i / \cantX)); 
        	\numero = array(\celdas, \i);
        	\bitM = mod(\numero, 2);
        	\bitO = mod(floor(\numero / 2), 2);
        	\bitC = mod(floor(\numero / 4), 2);
        	\bitP = mod(floor(\numero / 8), 2);
        }
        
        \def\bits{{ \bitP, \bitC, \bitO, \bitM }}
        
        \coordinate (esquina) at ({\x * \largo}, {\y * \largo});
    	\draw (esquina) rectangle ++(\largo, \largo);
    	
    	\foreach \letra [count=\j from 0] in {M, O, C, P} {
        	\tikzmath { \simbolo = array(\bits, \j) == 1 ? "\letra" : ""; }
        	\path ($ (esquina) + (pos\letra) $) node [scale=0.8] {\simbolo};
    	}
	}
\end{tikzpicture}
\end{document}
```

Ahora agarramos un pixel con la menor cantidad de superposiciones, o si hay multiples (como en este caso que son todos) se toma uno aleatorio. Teniendo el pixel elegido, se "colapsa" a una de las posibles pixeles

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

% PCOM

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \def\celdas{{
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15,  8, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15,
		15, 15, 15, 15, 15, 15, 15
	}}
	
	\tikzmath { \chico = 0.3; \grande = 0.7; }
    \coordinate (posM) at (\chico, \chico);
    \coordinate (posO) at (\grande, \chico);
    \coordinate (posC) at (\chico, \grande);
    \coordinate (posP) at (\grande, \grande);
    	
	\tikzmath { \cantX = 7; \cantY = 5; \largo = 1; \cantidad = dim(\celdas); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
    	\tikzmath { 
        	\x = mod(\i, \cantX); \y = int(floor(\i / \cantX)); 
        	\numero = array(\celdas, \i);
        	\bitM = mod(\numero, 2);
        	\bitO = mod(floor(\numero / 2), 2);
        	\bitC = mod(floor(\numero / 4), 2);
        	\bitP = mod(floor(\numero / 8), 2);
        }
        
        \def\bits{{ \bitP, \bitC, \bitO, \bitM }}
        
        \coordinate (esquina) at ({\x * \largo}, {\y * \largo});
    	\draw (esquina) rectangle ++(\largo, \largo);
    	
    	\foreach \letra [count=\j from 0] in {M, O, C, P} {
        	\tikzmath { \simbolo = array(\bits, \j) == 1 ? "\letra" : ""; }
        	\path ($ (esquina) + (pos\letra) $) node [scale=0.8] {\simbolo};
    	}
	}
\end{tikzpicture}
\end{document}
```

Habiendo colapsado ese pixel, ahora se debe propagar las reglas establecidas, ya que no cualquier pixel puede tener las $4$ posibles pixeles. Notemos que es algo [[Recursividad|recursivo]], ya que los pixeles adyacentes también tienen limitadas sus posibilidades

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

% PCOM
% 1248

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \def\celdas{{
		15, 15, 15, 11, 15, 15, 15,
		15, 15, 11,  9, 11, 15, 15,
		15, 11,  9,  8,  9, 11, 15,
		15, 15, 11,  9, 11, 15, 15,
		15, 15, 15, 11, 15, 15, 15
	}}
	
	\tikzmath { \chico = 0.3; \grande = 0.7; }
    \coordinate (posM) at (\chico, \chico);
    \coordinate (posO) at (\grande, \chico);
    \coordinate (posC) at (\chico, \grande);
    \coordinate (posP) at (\grande, \grande);
    	
	\tikzmath { \cantX = 7; \cantY = 5; \largo = 1; \cantidad = dim(\celdas); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
    	\tikzmath { 
        	\x = mod(\i, \cantX); \y = int(floor(\i / \cantX)); 
        	\numero = array(\celdas, \i);
        	\bitM = mod(\numero, 2);
        	\bitO = mod(floor(\numero / 2), 2);
        	\bitC = mod(floor(\numero / 4), 2);
        	\bitP = mod(floor(\numero / 8), 2);
        }
        
        \def\bits{{ \bitP, \bitC, \bitO, \bitM }}
        
        \coordinate (esquina) at ({\x * \largo}, {\y * \largo});
    	\draw (esquina) rectangle ++(\largo, \largo);
    	
    	\foreach \letra [count=\j from 0] in {M, O, C, P} {
        	\tikzmath { \simbolo = array(\bits, \j) == 1 ? "\letra" : ""; }
        	\path ($ (esquina) + (pos\letra) $) node [scale=0.8] {\simbolo};
    	}
	}
\end{tikzpicture}
\end{document}
```

### Generalización
---
Dado un set de reglas, un [[Grafo|grafo]] y $n$ estados, se puede realizar este algoritmo, donde cada nodo tiene una superposición de los $n$ estados y podamos colapsar algún nodo, para ir iterando


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```