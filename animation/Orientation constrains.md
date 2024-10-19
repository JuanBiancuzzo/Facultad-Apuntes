---
dia: 2024-10-08
etapa: ampliar
referencias:
  - "154"
tags:
  - animation
  - nota/investigacion
aliases:
  - Angle constrains
orden: 126
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Dado dos puntos, se los limita a las posiciones donde ambos están a una cierta distancia. En general, a uno de los puntos se lo deja fijo en una posición y al otro se lo mueve para satisfacer la limitación

Ahí aparece la consideración de que punto tomar, ya que técnicamente hay multiples puntos determinados por una distancia

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]    
    \tikzmath{ 
        \radio = 0.1; \anguloMinimo = 30; \anguloMaximo = 80; \distancia = 2;
        \angulo = random(\anguloMaximo - \anguloMinimo) + \anguloMinimo;
    }
    
    \coordinate (A) at (0, 0);
    \coordinate (dir) at ({cos(\angulo)}, {sin(\angulo)});
    \coordinate (B) at ($ (A)!\distancia!(dir) $);
    
    \fill (A) circle (\radio) node[left=2pt] {$A$};
    \fill (B) circle (\radio) node[above right=2pt] {$B$};
    
    \tikzmath { \extension = \distancia + 1; }
    \coordinate (dirMin) at ({cos(\anguloMinimo)}, {sin(\anguloMinimo)});
    \coordinate (dirMax) at ({cos(\anguloMaximo)}, {sin(\anguloMaximo)});
    
    \draw[dashed] (A) -- ($ (A)!\extension!(dirMin) $);
    \fill ($ (A)!\extension!(dirMin) $) circle ({\radio / 2})
        node[right=2pt] {mínimo};
        
    \draw[dashed] (A) -- ($ (A)!\extension!(dirMax) $);
    \fill ($ (A)!\extension!(dirMax) $) circle ({\radio / 2})
        node[left=2pt] {máximo};    
    
    \draw[dashed] (A) -- (B);
    \draw[->] (A) -- (\extension, 0);
    \draw ($ (A) + (\distancia, 0) $) 
        arc[radius=\distancia cm, start angle=0, end angle=\angulo];
    
    
\end{tikzpicture}
\end{document}
```

%% Agregar una implementación si lo termino implementando  %%

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```