---
dia: 2026-03-02
etapa: empezado
referencias:
  - "1106"
aliases:
  - Diagrama de Trellis#Diagrama de Trellis
  - Algoritmo de Viterbi#Decodificación
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Codificación
  - nota/facultad
vinculoFacultad:
  - tema: Codificación
    capitulo: 5
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un método de corrección o detección de errores, caracterizado por $2$ valores
* $n$ siendo la cantidad de bits enviados por [[ingeniería electrónica/analisis 3/Transformada de Fourier/Convolución|convolución]]
* $k$ la cantidad de bits utilizados para la convolución

## Codificación
---
Para codificar se necesitan $k$ [[ingeniería en informática/estructura/Registros y contadores/Registro|registros]] de memoria, inicializados en $0$, y se tiene $n$ polinomios generadores con sus respectivos adders, cada uno esta conectado a los $k$ registros

Usaremos como ejemplo $k = 3$ y $n = 3$ donde los polinomios generadores son $$ \begin{align}
    G_1 &= (1,~ 1,~ 1) \\
    G_2 &= (0,~ 1,~ 1) \\
    G_3 &= (1,~ 0,~ 1) \\
\end{align} $$ y tendremos el mensaje $m = 10011$

Se [[Operador Shift|shiftear]] el primer bit del mensaje, en este caso $1$, al primer registro y se utiliza los polinomios generadores para crear los $n$ valores correspondiente dándonos $$ \boxed{1}\boxed{0}\boxed{0} \implies \begin{dcases}
    n_1 = 1 \cdot 1 \oplus 0 \cdot 1 \oplus 0 \cdot 1 = 1 \\
    n_2 = 1 \cdot 0 \oplus 0 \cdot 1 \oplus 0 \cdot 1 = 0 \\
    n_3 = 1 \cdot 1 \oplus 0 \cdot 0 \oplus 0 \cdot 1 = 1 \\
\end{dcases} $$ generando los primeros $3$ bits del mensaje $101$

De forma iterativa, se shiftea el siguiente bit del mensaje, en este caso $0$, al primer registro, y por lo tanto generando $$ \boxed{0}\boxed{1}\boxed{0} \implies \begin{dcases} n_1 = 1 \\ n_2 = 1 \\ n_3 = 0 \end{dcases} $$ extendiendo el mensaje a $101 ~ 110$

Avanzando en el mensaje $$ \begin{align} 
    \boxed{0}\boxed{0}\boxed{1} &\implies \begin{dcases} 
        n_1 = 1 \\ n_2 = 1 \\ n_3 = 1 
    \end{dcases} \\
    \boxed{1}\boxed{0}\boxed{0} &\implies \begin{dcases} 
        n_1 = 1 \\ n_2 = 0 \\ n_3 = 1 
    \end{dcases} \\
    \boxed{1}\boxed{1}\boxed{0} &\implies \begin{dcases} 
        n_1 = 0 \\ n_2 = 1 \\ n_3 = 1 
    \end{dcases} \\
\end{align} $$ obteniendo el mensaje final $$ u = 101 ~ 110 ~ 111 ~ 101 ~ 011 $$
### Diagrama de estados
---
En este diagrama se utiliza un [[ingeniería en informática/discreta/Grafos/Grafo|grafo]] donde los [[ingeniería electrónica/intro/Circuitos con resistencias/Nodo|nodos]] son los últimos $k - 1$ registros y para cada nodo salen dos aristas, cada una de estas aristas representa tener un $0$ o un $1$ en el primer registro, y están dirigido la siguiente estado que estaría representado por los primeros $k - 1$ registros, finalmente el peso representa los $n$ bits generados por los polinomios generadores

Partiendo de nuestro ejemplo se obtiene el diagrama

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{automata, positioning}

\begin{document} 
	\definecolor{rojo}{RGB}{255, 0, 127} 
	\definecolor{azul}{RGB}{0, 127, 204}
    
	\begin{tikzpicture}[scale=1.3, transform shape, thick]
        \def\labels {{ "000", "001", "010", "011", "100", "101", "110", "111" }}
        \tikzmath { 
            function index(\bit, \estado) {
                let \bitUno = mod(floor(\estado / 2), 2);
                let \bitDos = mod(\estado, 2);
                
                return int(
                    4 * mod(\bit * 1 + \bitUno * 1 + \bitDos * 1, 2)
                    + 2 * mod(\bit * 0 + \bitUno * 1 + \bitDos * 1, 2)
                    + 1 * mod(\bit * 1 + \bitUno * 0 + \bitDos * 1, 2));
            };
        }
        
		\node[state] (q_00)                       {$00$};
		\node[state] (q_01) [below right=of q_00] {$01$};
		\node[state] (q_10) [below left=of q_00]  {$10$};
		\node[state] (q_11) [below left=of q_01]  {$11$};
        
        \begin{scope}[shorten >=1pt]
            \tikzmath { 
                \cero = \labels[index(0, 00)]; 
                \uno = \labels[index(1, 00)]; 
            }
            \path[->, azul] (q_00) edge [loop above] node {$\cero$} ();
            \path[->, rojo] (q_00) edge [bend right] 
                node[above left=2pt] {$\uno$} (q_10);
            
            \tikzmath { 
                \cero = \labels[index(0, 10)]; 
                \uno = \labels[index(1, 10)]; 
            }
            \path[->, azul] (q_10) edge [bend right] 
                node[below=2pt] {$\cero$} (q_01);
            \path[->, rojo] (q_10) edge [bend right] 
                node[below left=2pt] {$\uno$} (q_11);
                
            \tikzmath { 
                \cero = \labels[index(0, 01)]; 
                \uno = \labels[index(1, 01)]; 
            }
            \path[->, azul] (q_01) edge [bend right] 
                node[above right=2pt] {$\cero$} (q_00);
            \path[->, rojo] (q_01) edge [bend right] 
                node[above=2pt] {$\uno$} (q_10);
                
            \tikzmath { 
                \cero = \labels[index(0, 11)]; 
                \uno = \labels[index(1, 11)]; 
            }
            \path[->, azul] (q_11) edge [bend right] 
                node[below right=2pt] {$\cero$} (q_01);
            \path[->, rojo] (q_11) edge [loop below] node {$\uno$} ();
        \end{scope}
	\end{tikzpicture}
\end{document}
```

En este caso representamos con rojo la arista representante de un $1$ y con azul una arista representante de un  $0$
### Diagrama de Trellis
---
Este diagrama extiende la idea del diagrama de estados visto antes, pero agregando la componente del tiempo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{rojo}{RGB}{255, 0, 127} 
\definecolor{azul}{RGB}{0, 127, 204}
   
\begin{tikzpicture}[scale=1.3, transform shape, thick, shorten <= 0.5em, shorten >= 0.5em]
    \tikzmath {
        \sepX = 2; \sepY = 2; \radio = 0.075;
        \bitsEnviados = 3; \bitsRetorno = 2;
        \puntos = \bitsEnviados + \bitsRetorno; \n = 3; \N = 2^(\n - 1);
        \scale = 0.8; \pos = 0.25; \tick = 0.2;
        
        function siguienteCero(\i) {
            return floor(\i / 2);
        };
        
        function siguienteUno(\i) {
            return int(2 + floor(\i / 2));
        };
        
        function index(\bit, \estado) {
            let \bitUno = mod(floor(\estado / 2), 2);
            let \bitDos = mod(\estado, 2);
            
            return int(
                4 * mod(\bit * 1 + \bitUno * 1 + \bitDos * 1, 2)
                + 2 * mod(\bit * 0 + \bitUno * 1 + \bitDos * 1, 2)
                + 1 * mod(\bit * 1 + \bitUno * 0 + \bitDos * 1, 2));
        };
    }
    \def\labels {{ "000", "001", "010", "011", "100", "101", "110", "111" }}
    \def\swaps {{ {{1,2}} }}

    \foreach \i [parse=true] in {0, ..., \N - 1} {
        \coordinate (q_\i) at (0, {(\N - 1 - \i) * \sepY});
    }
    \coordinate (tiempo) at (0, {-0.5 * \sepY});

    \foreach \currentSwap in \swaps {
        \tikzmath { \swapI = \currentSwap[0]; \swapJ = \currentSwap[1]; }
        \path (q_\swapI) node (temp) {};
        \coordinate (q_\swapI) at (q_\swapJ);
        \coordinate (q_\swapJ) at (temp.center);
    }
    
    \begin{scope}[shorten <= 0, shorten >= 0]
    \draw[->] (tiempo) -- ++({(\puntos + 0.5) * \sepX}, 0)
        node[pos=1.01, above=2pt, scale=\scale] {$t$};
    \foreach \i in {0, ..., \puntos} {
        \draw ($ (tiempo) + ({\i * \sepX}, {\tick / 2}) $) 
            -- ++(0, -\tick) node[below=2pt, scale=\scale] {$\i$};
    }
    \end{scope}
    
    \foreach \label [count=\rama from 0] in {$00$, $01$, $10$, $11$} {
        \path (q_\rama) node[left=0.5cm] {\label};
        \foreach \i in {0, 1, ..., \puntos} {
            \fill ($ (q_\rama) + ({\i * \sepX}, 0) $) 
                circle (\radio);
        }
    }
    
    \foreach \desde/\hasta [count=\i from 0] in {0/0, 2/1, 1/2, 2/2} {
    \tikzmath {
        \labelCero = \labels[index(0, \i)];
        \labelUno = \labels[index(1, \i)];
    }
        
    \foreach \nivel [parse=true] in {\desde, ..., \puntos - 1} {
        \tikzmath {
            \hastaCero = siguienteCero(\i);
            \hastaUno = siguienteUno(\i);
            
            \ceroPos = (\i == \hastaCero) ? 0.5 : \pos;
            \unoPos = (\i == \hastaUno) ? 0.5 : 1 - \pos;
            
            \condicionCorte = \nivel < (\puntos - \hasta) 
                ? 0 : 1;
        }
        \ifnum \nivel < \bitsEnviados
        \draw[rojo, ->] ($ (q_\i) + ({\nivel * \sepX}, 0)$) 
            -- ($ (q_\hastaUno) + ({(\nivel + 1) * \sepX}, 0)$)
                node[pos=\unoPos, fill=white, scale=\scale] {$\labelUno$};
        \fi
        
        \draw[azul, ->] ($ (q_\i) + ({\nivel * \sepX}, 0)$) 
            -- ($ (q_\hastaCero) + ({(\nivel + 1) * \sepX}, 0)$)
                node[pos=\ceroPos, fill=white, scale=\scale] {$\labelCero$};
        
        \ifnum \condicionCorte = 1 
            \breakforeach
        \fi
    }
    }
\end{tikzpicture}
\end{document}
```

Los primeros $3$ periodos son la codificación del mensaje, mientras que los últimos $2$ son el periodo llamada truncamiento forzado, donde se agregan ceros para que el estado vuelva al $00$, haciendo repetible el procedimiento

## Decodificación
---
La decodificación se puede implementar utilizando el mismo diagrama de Trellis, donde ahora las aristas representan la [[Distancia|distancia]] entre los bits dados en el diagrama y los bits recibidos

Dependiendo de la función distancia utilizada de define el tipo de decisión que se toma, si se utiliza la [[investigación/machine Learning/Distancia Hamming|distancia Hamming]] entonces es una Hard-Desition y si se utiliza la [[ingeniería en informática/analisis 2/Nomenclatura/Distancia euclidiana|distancia euclidiana]] entre la señal del modulador y los bits esperados, entonces es una Soft-Desition

Partiendo del ejemplo que venimos usando, el mensaje codificado esta dado por $$ u = 101 ~ 110 ~ 111 ~ 101 ~ 011 $$ donde haremos la decisión soft ya que es la más compleja y utilizaremos [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Shift Keying#^BPSK|BPSK]] para definir el valor de cada bit, tomando el bit $1$ al valor $+1 \cos(\cdot)$ y el bit $0$ al valor $-1 \cos(\cdot)$

Supongamos que al recibir, obtuvimos el mensaje $$ z = \begin{array}{c:c} 101 ~ 110 ~ 1\textcolor{#FF0080}{0}1 ~ 101 ~ \textcolor{#FF0080}{1}11 & 011 ~ 111 \end{array} $$ marcado con otro color los bits que cambiaron en la transmisión y agregando los bits de truncamiento forzado

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{matrix}

\begin{document} 
\definecolor{rojo}{RGB}{255, 0, 127} % #FF0080
\definecolor{azul}{RGB}{0, 127, 204} % #007ecc
\definecolor{amarillo}{RGB}{249, 207, 50} 
   
\begin{tikzpicture}[
    scale=1.1, transform shape, thick, 
    shorten <= 0.5em, shorten >= 0.5em,
    every left delimiter/.style={xshift=0.15cm, yshift=-0.1cm},
    every right delimiter/.style={xshift=-0.15cm, yshift=-0.1cm}
]
    \def\labels {{ "000", "001", "010", "011", "100", "101", "110", "111" }}
    \def\swaps {{ {{1,2}} }}
    \def\bitsRecibidos {{ 
        {{1.1,-1.05,0.9}}, {{0.85,1.05,-0.9}}, 
        {{0.95,-1.1,0.85}}, {{1.05,-0.85,0.9}}, 
        {{1.1,0.95,0.9}}, {{-1.05,0.9,1.1}}, 
        {{0.85,0.95,1.05}} 
    }}
    \tikzmath {
        \sepX = 2; \sepY = 2; \radio = 0.075;
        \bitsEnviados = 5; \bitsRetorno = 2;
        \puntos = \bitsEnviados + \bitsRetorno; \n = 3; \N = 2^(\n - 1);
        \scale = 0.7; \pos = 0.25; \tick = 0.2;
        
        function siguienteCero(\i) {
            return floor(\i / 2);
        };
        
        function siguienteUno(\i) {
            return int(2 + floor(\i / 2));
        };
        
        function distancia(\x1, \y1, \z1, \x2, \y2, \z2) {
            return veclen(\x1 - \x2, veclen(\y1 - \y2, \z1 - \z2));
        };
        
        function index(\bit, \estado) {
            let \bitUno = mod(floor(\estado / 2), 2);
            let \bitDos = mod(\estado, 2);
            
            return int(
                4 * mod(\bit * 1 + \bitUno * 1 + \bitDos * 1, 2)
                + 2 * mod(\bit * 0 + \bitUno * 1 + \bitDos * 1, 2)
                + 1 * mod(\bit * 1 + \bitUno * 0 + \bitDos * 1, 2));
        };
    }

    \foreach \i [parse=true] in {0, ..., \N - 1} {
        \coordinate (q_\i) at (0, {(\N - 1 - \i) * \sepY});
    }
    \coordinate (tiempo) at (0, {-0.5 * \sepY});
    \coordinate (bits) at ({0.5 * \sepX}, {(\N - 0.8) * \sepY});

    \foreach \currentSwap in \swaps {
        \tikzmath { \swapI = \currentSwap[0]; \swapJ = \currentSwap[1]; }
        \path (q_\swapI) node (temp) {};
        \coordinate (q_\swapI) at (q_\swapJ);
        \coordinate (q_\swapJ) at (temp.center);
    }
    
    \begin{scope}[shorten <= 0, shorten >= 0]
    \draw[->] (tiempo) -- ++({(\puntos + 0.5) * \sepX}, 0)
        node[pos=1.01, above=2pt, scale=\scale] {$t$};
    \foreach \i [parse=true] in {0, ..., \puntos} {
        \draw ($ (tiempo) + ({\i * \sepX}, {\tick / 2}) $) 
            -- ++(0, -\tick) node[below=2pt, scale=\scale] {$\i$};
    }
    \foreach \i [parse=true] in {0, ..., \puntos - 1} {
        \tikzmath {
            \numCero = \bitsRecibidos[\i][0];
            \numUno  = \bitsRecibidos[\i][1];
            \numDos  = \bitsRecibidos[\i][2];
        }
        \matrix[
            matrix of nodes, anchor=south,
            left delimiter=(, right delimiter=),
            inner sep=0, outer sep = 0, column sep=0, row sep=2pt,
            nodes={inner sep=.333em},
        ] at ($ (bits) + ({\i * \sepX}, 0) $) 
            { \numCero \\ \numUno \\ \numDos \\ };
    }
    \end{scope}
    
    \foreach \label [count=\rama from 0] in {$00$, $01$, $10$, $11$} {
        \path (q_\rama) node[left=0.5cm] {\label};
        \foreach \i in {0, 1, ..., \puntos} {
            \fill ($ (q_\rama) + ({\i * \sepX}, 0) $) 
                circle (\radio);
        }
    }

    \pgfkeys{/pgf/number format/.cd,fixed,precision=2}
    \foreach \desde/\hasta [count=\i from 0] in {0/0, 2/1, 1/2, 2/2} {
    \tikzmath {
        \indexCero = index(0, \i);
        \xCero = int(2 * mod(floor(\indexCero / 4), 2) - 1);
        \yCero = int(2 * mod(floor(\indexCero / 2), 2) - 1);
        \zCero = int(2 * mod(floor(\indexCero / 1), 2) - 1);
        
        \indexUno = index(1, \i);
        \xUno = int(2 * mod(floor(\indexUno / 4), 2) - 1);
        \yUno = int(2 * mod(floor(\indexUno / 2), 2) - 1);
        \zUno = int(2 * mod(floor(\indexUno / 1), 2) - 1);
    }
        
    \foreach \nivel [parse=true] in {\desde, ..., \puntos - 1} {
        \tikzmath {
            \xRx = \bitsRecibidos[\nivel][0];
            \yRx = \bitsRecibidos[\nivel][1];
            \zRx = \bitsRecibidos[\nivel][2];
            
            \distCero = distancia(\xCero,\yCero,\zCero, \xRx,\yRx,\zRx);
            \labelCero = \labels[\indexCero];
            \distUno = distancia(\xUno,\yUno,\zUno, \xRx,\yRx,\zRx);
            \labelUno = \labels[\indexUno];
            
            \hastaCero = siguienteCero(\i);
            \hastaUno = siguienteUno(\i);
            
            \ceroPos = (\i == \hastaCero) ? 0.6 : \pos;
            \unoPos = (\i == \hastaUno) ? 0.6 : 1 - \pos;
            \distCeroPos = (\i == \hastaCero) ? \pos : 1 - \pos;
            \distUnoPos = \pos;
            
            \condicionCorte = \nivel < (\puntos - \hasta) 
                ? 0 : 1;
        }
        \ifnum \nivel < \bitsEnviados
        \draw[rojo, ->] ($ (q_\i) + ({\nivel * \sepX}, 0)$) 
            -- ($ (q_\hastaUno) + ({(\nivel + 1) * \sepX}, 0)$)
                node[pos=\unoPos, fill=white, scale=\scale] 
                    {$\labelUno$}
                node[pos=\distUnoPos, fill=white, scale=\scale, text=amarillo] {\pgfmathprintnumber{\distUno}};
        \fi
        
        \draw[azul, ->] ($ (q_\i) + ({\nivel * \sepX}, 0)$) 
            -- ($ (q_\hastaCero) + ({(\nivel + 1) * \sepX}, 0)$)
                node[pos=\ceroPos, fill=white, scale=\scale]
                    {$\labelCero$}
                node[pos=\distCeroPos, fill=white, scale=\scale, text=amarillo] {\pgfmathprintnumber{\distCero}};
        
        \ifnum \condicionCorte = 1 
            \breakforeach
        \fi
    }
    }
\end{tikzpicture}
\end{document}
```

En amarillo tenemos la distancia del vector recibido y el vector que se obtiene en tendría para cada rama del ciclo 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```