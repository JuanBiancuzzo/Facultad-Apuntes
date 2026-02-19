---
dia: 2025-09-24
etapa: empezado
referencias: []
aliases:
  - DMC
  - Matriz de transición del canal#^matriz-transicion
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se puede [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelar]] un canal con esta estructura

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 1.5; \largo = 1.5;
        \scale = 0.9; 
    }
    
    \draw (0, 0) rectangle ++(\ancho, \alto)
        node[midway, scale=\scale, align=center]{Canal};
    
    \begin{scope}[shorten <=0.5em, shorten >=0.5em]
        \draw[<-] (0, {\alto / 2}) -- ++({-\largo}, 0)
            node[pos=1.1, scale=\scale] {$X$};
        \draw[->] (\ancho, {\alto / 2}) -- ++(\largo, 0)
            node[pos=1.1, scale=\scale] {$Y$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Donde $X$ es la entrada al canal, e $Y$ es la salida del canal, que termina siendo una versión con [[ingeniería electrónica/seguridad/Protección auditiva/Ruido|ruido]] de $X$

Cada uno define un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]], donde no necesariamente el [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Cardinalidad|cardinal (tamaño)]] de los alfabetos tiene que coincidir $$ \begin{align} 
    \mathcal{X} &= \Set{x_0,~ x_1,~ \cdots,~ x_{J - 1}} \\
    \mathcal{Y} &= \Set{y_0,~ y_1,~ \cdots,~ y_{K - 1}} \\
\end{align} $$
Se puede caracterizar este canal con una matriz de transición $P \in \mathbb{R}_{[0~, 1]}^{K \times J}$, donde $P_{ab} = \mathbb{P}(y_a \mid x_b)$, y de la siguiente forma $$ P = \begin{bmatrix}
    \mathbb{P}(y_0 \mid x_0) & \mathbb{P}(y_1 \mid x_0) & \cdots & \mathbb{P}(y_{K - 1} \mid x_0) \\
    \mathbb{P}(y_0 \mid x_1) & \mathbb{P}(y_1 \mid x_1) & \cdots & \mathbb{P}(y_{K - 1} \mid x_1) \\
    \vdots & \vdots & \ddots & \vdots \\
    \mathbb{P}(y_0 \mid x_{J - 1}) & \mathbb{P}(y_1 \mid x_{J - 1}) & \cdots & \mathbb{P}(y_{K - 1} \mid x_{J - 1}) \\
\end{bmatrix} $$ ^matriz-transicion

Gráficamente se puede visualizar de la siguiente forma

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \j = 5; \k = 7; \interSep = 0.7; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
        \lastj = int(\j - 1); \lastk = int(\k - 1); 
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\j * \interSep * 0.5})}] 
        \foreach \i [parse=true] in {0, 1, ..., \j - 2} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (in_\i) {}
                node[left=\radio cm, scale=\scale] {$x_\i$};
        }
        \path (0, {-(\j - 1) * \interSep}) node [scale=1.2] {$\vdots$};
        \fill (0, {-\j * \interSep}) circle (\radio)
            node (in_\lastj) {}
            node[left=\radio cm, scale=\scale] {$x_{J - 1}$};
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\k * \interSep * 0.5})}] 
        \foreach \i [parse=true] in {0, 1, ..., \k - 2} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (out_\i) {}
                node[right=\radio cm, scale=\scale] {$y_\i$};
        }
        \path (0, {-(\k - 1) * \interSep}) node [scale=1.2] {$\vdots$};
        \fill (0, {-\k * \interSep}) circle (\radio)
            node (out_\lastk) {}
            node[right=\radio cm, scale=\scale] {$y_{K - 1}$};
    \end{scope}
    
    \foreach \inicio [parse=true] in {0, 1, ..., \j - 1} {
        \foreach \final [parse=true] in {0, 1, ..., \k - 1} {
            \draw (in_\inicio) -- (out_\final)
                node[midway] (linea_\inicio_\final) {};
        }
    }

    \tikzmath { \angulo = 10; }
    \path (linea_0_0) node[above=2pt, rotate=\angulo] {$P(y_0 \mid x_0)$};
    \path (linea_\lastj_\lastk) node[below=2pt, rotate=-\angulo] 
        {$P(y_{K - 1} \mid x_{J - 1})$};
    
    
\end{tikzpicture}
\end{document}
```

Se conoce a los $\mathbb{P}(x_j)$ como probabilidades a priori, ya que son las probabilidades antes de mandarlas. A las $\mathbb{P}(y_k)$ se las llama probabilidades a posteriori

## Probabilidades de error
---
A partir de estas probabilidades se puede definir al probabilidad de error de símbolo como $$ P_{e_j} \triangleq \sum_{k = 0}^{K - 1} \mathbb{P}(y_k \mid x_j) $$
Con esta podemos definir la probabilidad de error como $$ P_e \triangleq \sum_{j = 0}^{J - 1} P_{e_j} ~ \mathbb{P}(x_j) = \sum_{j = 0}^{J - 1} \sum_{k = 0}^{K - 1} \mathbb{P}(y_k \mid x_j) ~ \mathbb{P}(x_j) $$

## Capacidad del canal
---
Se define la capacidad de un canal como $$ c \triangleq \max_{\mathbb{P}(x_j)} I(X \mid Y) $$ con unidades de [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bits]] por uso del canal

## Clases de canales
---
Algunos canales son 

### Canal sin pérdidas
---
Estos canales no pierden información, ya que $\forall j$ se cumple que $P_{e_j} = 0$, ya que se crea una [[ingeniería en informática/proba/Representación de variables aleatorias/Partición|partición]] $\mathcal{Y}_j = \Set{y \in \mathcal{Y}, i \in \set{0,~ 1,~ J - 1} : \mathbb{P}(y \mid x_i) \propto \mathbb{1}\set{ i \ne j }}$ y por lo tanto, si cae en una de estas particiones, se conoce con probabilidad $1$ que símbolo se envió y por lo tanto no hay pérdida de información

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{fpu}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \J = 2; \K = 8; \interSep = 0.7; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
        \proba = \J / \K;
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\J * \interSep * 0.5})}] 
        \foreach \j [parse=true] in {0, 1, ..., \J - 1} {
            \fill (0, {-\j * \interSep}) circle (\radio)
                node (in_\j) {}
                node[left=\radio cm, scale=\scale] {$x_\j$};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\K * \interSep * 0.5})}] 
        \foreach \k [parse=true, count=\i from 0] in {0, 2, ..., \K - 1} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (out_\k) {}
                node[right=\radio cm, scale=\scale] {$y_\k$};
        }
        
        \foreach \k [parse=true, count=\i from \K / 2] in {1, 3, ..., \K - 1} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (out_\k) {}
                node[right=\radio cm, scale=\scale] {$y_\k$};
        }
    \end{scope}
    
    \pgfkeys{/pgf/number format/.cd,frac}
    
    \foreach \final [parse=true] in {0, 2, ..., \K - 1} {
        \draw (in_0) -- (out_\final)
            node[pos=0.9, above=2pt, scale=\scale]{\pgfmathprintnumber{\proba}};
    }
    
    \foreach \final [parse=true] in {1, 3, ..., \K - 1} {
        \draw (in_1) -- (out_\final)
            node[pos=0.9, above=2pt, scale=\scale]{\pgfmathprintnumber{\proba}};
    }
    
\end{tikzpicture}
\end{document}
```

Se puede ver que la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Entropía condicional|entropía condicional]] es $H(X \mid Y) = 0$

### Canal determinístico
---
Dado la entrada, se conoce perfectamente la salida, similar al canal sin pérdidas, se crea una partición pero de la entrada, $\mathcal{X}_k = \Set{x \in \mathcal{X}, i \in \set{0,~ 1,~ K - 1} : \mathbb{P}(y_k \mid x) = \mathbb{1}\set{i \ne k}}$ y por lo tanto cada entrada tiene una única salida

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \J = 12; \K = 4; \interSep = 0.7; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
        \groups = int(\J / \K);
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\J * \interSep * 0.5})}] 
        \foreach \i [parse=true] in {0, 1, ..., \J - 1} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (in_\i) {}
                node[left=\radio cm, scale=\scale] {$x_{\i}$};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\K * \interSep * 0.5})}] 
        \foreach \i [parse=true] in {0, 1, ..., \K - 1} {
            \fill (0, {-\i * \interSep}) circle (\radio)
                node (out_\i) {}
                node[right=\radio cm, scale=\scale] {$y_\i$};
        }
    \end{scope}

    \foreach \final [parse=true] in {0, 1, ..., \K - 1} {
        \tikzmath { \added = \groups*\final; }
        \foreach \i [parse=true, evaluate=\i as \inicio using \i+\added] in {0, 1, ..., \groups - 1} {
            \draw (in_\inicio) -- (out_\final)
                node[pos=0.2, above=2pt, scale=\scale] {$1$};
        }
    }
    
    
\end{tikzpicture}
\end{document}
```

Se puede ver que la entropía condicional es $H(Y \mid X) = 0$

### Canal sin ruido
---
Se puede pensar como un caso particular del canal determinístico, donde $|\mathcal{X}_k| = 1$, lo que hace que además permite conocer exactamente la entrada

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \J = 4; \K = \J; \interSep = 0.7; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\J * \interSep * 0.5})}] 
        \foreach \j [parse=true] in {0, 1, ..., \J - 1} {
            \fill (0, {-\j * \interSep}) circle (\radio)
                node (in_\j) {}
                node[left=\radio cm, scale=\scale] {$x_\j$};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\K * \interSep * 0.5})}] 
        \foreach \k [parse=true] in {0, 1, ..., \K - 1} {
            \fill (0, {-\k * \interSep}) circle (\radio)
                node (out_\k) {}
                node[right=\radio cm, scale=\scale] {$y_\k$};
        }
    \end{scope}
    
    \foreach \inicioFinal [parse=true] in {0, 1, ..., \J - 1} {
        \draw (in_\inicioFinal) -- (out_\inicioFinal)
            node[midway, above=2pt, scale=\scale]{$1$};
    }
\end{tikzpicture}
\end{document}
```

Se puede ver que la entropía condicional es $H(X \mid Y) = H(Y \mid X) = 0$

### Canal inútil
---
Este tipo de canal no permite saber que símbolo se envió, ya que $\mathbb{P}(y_k \mid x) = \alpha_k$ para todo $x \in \mathcal{X}$, con la particularidad que $\sum_{k = 0}^{K - 1} \alpha_k = 1$, y por lo tanto la probabilidad de error es $$ \begin{align} 
    P_e &= \sum_{j = 0}^{J - 1} \sum_{k = 0}^{K - 1} \mathbb{P}(y_k \mid x_j) ~ \mathbb{P}(x_j) \\
     &= \sum_{k = 0}^{K - 1} \alpha_k \underbrace{\sum_{j = 0}^{J - 1} \mathbb{P}(x_j)}_{=~1} \\
     &= \sum_{k = 0}^{K - 1} \alpha_k \\
     &= 1 \\
\end{align} $$
Por este motivo se le dice inútil

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \J = 2; \K = 2; \interSep = 2; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\J * \interSep * 0.5})}] 
        \foreach \j [parse=true] in {0, 1, ..., \J - 1} {
            \fill (0, {-\j * \interSep}) circle (\radio)
                node (in_\j) {}
                node[left=\radio cm, scale=\scale] {$x_\j$};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\K * \interSep * 0.5})}] 
        \foreach \k [parse=true] in {0, 1, ..., \K - 1} {
            \fill (0, {-\k * \interSep}) circle (\radio)
                node (out_\k) {}
                node[right=\radio cm, scale=\scale] {$y_\k$};
        }
    \end{scope}
        
    
    \draw (in_0) -- (out_0) node[pos=0.5, above=2pt, scale=\scale] {$\alpha$};
    \draw (in_1) -- (out_0) node[pos=0.8, right=2pt, scale=\scale] {$\alpha$};
    \draw (in_0) -- (out_1) node[pos=0.8, right=2pt, scale=\scale] {$1 - \alpha$};
    \draw (in_1) -- (out_1) node[pos=0.5, above=2pt, scale=\scale] {$1 - \alpha$};
    
\end{tikzpicture}
\end{document}
```

En este caso, se da que la entropía condicional es $H(X \mid Y) = H(Y)$ y $H(Y \mid X) = H(X)$ y por lo tanto la [[Información mutua|información mutua]] es nula, es decir $I(X \mid Y) = 0$

### Canal simétrico
---
Este tipo de canal la misma probabilidad de error para cada símbolo, y se puede ver en la matriz de transición como que cada fila tiene el mismo conjunto de números, y las columnas también $$ P = \begin{bmatrix}
    \frac{1}{3} & \frac{1}{3} & \frac{1}{6} & \frac{1}{6} \\
    \frac{1}{6} & \frac{1}{6} & \frac{1}{3} & \frac{1}{3} \\
\end{bmatrix} $$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{fpu}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \J = 2; \K = 4; \interSep = 1.5; \sep = 4; \radio = 0.1;
        \scale = 0.9; 
    }
   
    \begin{scope}[cm={1, 0, 0, 1, (0, {\J * \interSep * 0.5})}] 
        \foreach \j [parse=true] in {0, 1, ..., \J - 1} {
            \fill (0, {-\j * \interSep}) circle (\radio)
                node (in_\j) {}
                node[left=\radio cm, scale=\scale] {$x_\j$};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (\sep, {\K * \interSep * 0.5})}] 
        \foreach \k [parse=true] in {0, 1, ..., \K - 1} {
            \fill (0, {-\k * \interSep}) circle (\radio)
                node (out_\k) {}
                node[right=\radio cm, scale=\scale] {$y_\k$};
        }
    \end{scope}
    
    \pgfkeys{/pgf/number format/.cd,frac,frac shift=1}

    \tikzmath{ \proba = 1/3; }
    \foreach \final [parse=true] in {0, 1, ..., (\K / 2) - 1} {
        \foreach \inicio [parse=true] in {0, 1, ..., \J - 1} {
            \draw (in_\inicio) -- (out_\final)
                node[pos=0.7, above=2pt, scale=\scale]
                    {\pgfmathprintnumber{\proba}};
        }
    }
    
    \tikzmath{ \proba = 1/6; }
    \foreach \i [parse=true] in {(\K / 2), (\K / 2) + 1, ..., \K - 1} {
        \tikzmath { \final = int(\i); }
        \foreach \inicio [parse=true] in {0, 1, ..., \J - 1} {
            \draw (in_\inicio) -- (out_\final)
                node[pos=0.4, above=2pt, scale=\scale]
                    {\pgfmathprintnumber{\proba}};
        }
    }
    
\end{tikzpicture}
\end{document}
```

Se puede calcular la entropía condicional $$ \begin{align}
    H(Y \mid X) &= -\sum_{k = 0}^{K - 1} \mathbb{P}(y_k \mid x) ~ \log_2\left( \mathbb{P}(y_k \mid x) \right) \\
     &= -\sum_{k = 0}^{K - 1} p_k ~ \log_2\left(p_k\right),~~~ p_k = \mathbb{P}(y_k \mid x),~ \forall x \in \mathcal{X} \\
\end{align} $$