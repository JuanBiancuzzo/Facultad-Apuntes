---
dia: 2024-10-08
etapa: ampliar
referencias:
  - "154"
tags:
  - animation
  - nota/investigacion
orden: 356
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Dado dos puntos, se limita los ángulos en los que se puede estar. En muy pocas ocasiones se tiene un único punto para satisfacer la limitación, por lo que aparece un calculo especifico a la situación para determinar que punto tomar 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \tikzmath{ \radio = 0.1; \distancia = 2; \angulo = 30; }
    \coordinate (A) at (0, 0);
    \coordinate (dir) at ({cos(\angulo)}, {sin(\angulo)});
    \coordinate (B) at ($ (A)!\distancia!(dir) $);
    
    \fill (A) circle (\radio) node[above=2pt] {$A$};
    \fill (B) circle (\radio) node[above right=2pt] {$B$};
    
    \draw[ultra thick] (A) -- (B) 
        node [midway, rotate=\angulo, above=2pt] {$d$};
    \draw[dashed] (A) circle (\distancia);
    
\end{tikzpicture}
\end{document}
```


%% Agregar una implementación si lo termino implementando  %%

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```