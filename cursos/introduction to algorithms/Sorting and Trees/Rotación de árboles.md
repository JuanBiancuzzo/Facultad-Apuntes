---
dia: 2025-01-21
etapa: empezado
referencias:
  - "701"
  - "839"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
aliases:
  - Tree rotation
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Matemática discreta|matemática discreta]], la rotación de árboles, es una operación en un [[Árbol binario|árbol binario]] que cambia la estructura sin interferir con el [[Relación de orden|orden]] de los elementos, que es importante en árboles como [[Árbol binario de búsqueda|ABB]] o [[Árbol de Adelson-Velsky y Landis|AVL]] 

Se puede ver de forma ilustrativa cual es la trasformación de este

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    
    \tikzmath { \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.2; }
    
    \begin{scope}[cm={1, 0, 0, 1, (0, 0)}]
        \draw (0, 0) circle (\radio) node {$x$};
        \draw ({\sep + cos(-45) * \radio}, {-\sep + sin(-45) * \radio}) 
            circle (\radio) node (centro_y) {$y$};
            
        \draw pic (tA) at (-\sep, -\sep) {Triangulo={A}};
        \draw pic (tB) at ($ (centro_y.center) + (-\sep, -\sep) $) {Triangulo={B}};
        \draw pic (tC) at ($ (centro_y.center) + ( \sep, -\sep) $) {Triangulo={C}};
            
        \tikzmath { \distSep = \radio + 0.3; }
        \begin{scope}[->, shorten <= \distSep cm, ultra thick]
            \draw[shorten >= \distSep cm] (0, 0) -- (centro_y.center);
            
            \draw (0, 0) -- ++(-\sep, -\sep);
            \draw (centro_y.center) -- ++(-\sep, -\sep);
            \draw (centro_y.center) -- ++( \sep, -\sep);
        \end{scope}
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (8, 0)}]
        \draw (0, 0) circle (\radio) node {$y$};
        \draw ({-\sep - cos(-45) * \radio}, {-\sep + sin(-45) * \radio}) 
            circle (\radio) node (centro_x) {$x$};
            
        \draw pic (tA) at ($ (centro_x.center) + (-\sep, -\sep) $) {Triangulo={A}};
        \draw pic (tB) at ($ (centro_x.center) + ( \sep, -\sep) $) {Triangulo={B}};
        \draw pic (tC) at ( \sep, -\sep) {Triangulo={C}};
            
        \tikzmath { \distSep = \radio + 0.3; }
        \begin{scope}[->, shorten <= \distSep cm, ultra thick]
            \draw[shorten >= \distSep cm] (0, 0) -- (centro_x.center);
            
            \draw (0, 0) -- ++(\sep, -\sep);
            \draw (centro_x.center) -- ++(-\sep, -\sep);
            \draw (centro_x.center) -- ++( \sep, -\sep);
        \end{scope}
    \end{scope}
    
    \begin{scope}[->, shorten <= 1.5cm, shorten >= 1.5cm, ultra thick]
        \tikzmath { \elevacion = 1; \porcen = 0.35; }
        \draw (centro_y.center) .. controls 
            ($ (centro_y.center)!\porcen!(centro_x.center) + (0, \elevacion) $) 
                and
            ($ (centro_x.center)!\porcen!(centro_y.center) + (0, \elevacion) $)
                .. (centro_x.center) node[midway, above=2pt] {left rotate(x)};
            
        \draw (centro_x.center) .. controls 
            ($ (centro_x.center)!\porcen!(centro_y.center) + (0, -\elevacion) $) 
                and
            ($ (centro_y.center)!\porcen!(centro_x.center) + (0, -\elevacion) $)
                .. (centro_y.center) node[midway, above=2pt] {right rotate(y)};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  
^representacion

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```