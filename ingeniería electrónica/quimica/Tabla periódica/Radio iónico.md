---
dia: 2026-03-07
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/tabla-periódica
  - nota/facultad
vinculoFacultad:
  - tema: Tabla periódica
    capitulo: 2
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El radio iónico de un elemento es la parte que le corresponde de la distancia entre los núcleos de [[ingeniería electrónica/quimica/Modelo atómico/Ion|iones]] vecinos en un sólido iónico

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{naranja}{RGB}{245, 170, 82}
   
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath {
        \radioPositivo = 0.5; \radioNegativo = 0.7;
        \angulo = 45; \largo = 0.7; \sep = 0.15;
        \scale = 1; \textScale = 0.7;
    }

    \coordinate (positivo) at (0, 0);
    \filldraw[fill=naranja] (positivo) circle (\radioPositivo);
    \path (positivo) 
        -- ++({\radioPositivo * cos(90 + \angulo)}, 
        {\radioPositivo * sin(90 + \angulo)}
    )
        node[pos=1.3, scale=\scale] {$+$};

    \coordinate (negativo) at ({\radioPositivo + \radioNegativo}, 0);
    \filldraw[fill=azul] (negativo) circle (\radioNegativo);
    \path (negativo) 
        -- ++({\radioNegativo * cos(90 - \angulo)}, 
        {\radioNegativo * sin(90 - \angulo)}
    )
        node[pos=1.3, scale=\scale] {$-$};
        
    \draw (negativo) -- ++(0, {-\radioNegativo - \largo})
        node (punto_inferior) {}; 
        
    \draw (positivo) -- (positivo |- punto_inferior);
    
    \draw[<->] ($ (punto_inferior.center) + (0, \sep) $)
        -- ($ (positivo |- punto_inferior) + (0, \sep) $)
            node[midway, below=2pt, scale=\textScale] {Radio iónico};
        
    
\end{tikzpicture}
\end{document}
```

Los iones positivos sencillos son siempre más pequeños que los átomos de los que derivan y, al aumentar la carga positiva, su tamaño disminuye

Los iones sencillos cargados negativamente son siempre mayores que los átomos de los que derivan. El tamaño aumenta con la carga negativa $$ r_\text{catión} < r_\text{atómico} < r_\text{anión} $$
## Variación periódica
---
Dentro de un grupo, las diferencias entre los radios atómicos e iónicos son muy parecidas

Para los iones con la misma carga, el tamaño aumenta conforme bajamos por un grupo de la [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica|tabla periódica]]