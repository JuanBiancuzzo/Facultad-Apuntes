---
dia: 2023-03-28
tags:
  - carrera/ingeniería-electrónica/seguridad/Prevención-de-incendios
  - nota/facultad
vinculoFacultad:
  - tema: Prevención de incendios
    capitulo: 3
    materia: Seguridad ambiental y del trabajo
    carrera: Ingeniería electrónica
---
# Definición
---
Este [[Modelo]] también conocido como el tetraedro del fuego

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.8, transform shape, thick]
    
    \coordinate (c1) at (0, 0);
    \coordinate (c2) at (2.5, 0.5);
    \coordinate (c3) at (1.7, -0.7);
    \coordinate (c4) at (1.2, 1.8);
    
    \draw[ultra thick] (c1) \foreach \c in {c3, c2, c4, c1, c3, c4} { --(\c) };
    \draw[thin] (c1) -- (c2);
    
    \path (c1) -- (c3) node[midway, above right=0.2cm] (temp) {};
    \draw[<-, dashed, ultra thick] (temp) -- ++(-1, -1) 
        node [below left=2pt, scale=0.7] {Temperatura};
        
    \path (c1) -- (c4) node[midway, below right=0.2cm] (temp) {};
    \draw[<-, ultra thick] (temp) -- ++(-1, 1) 
        node [above left=2pt, scale=0.7] {Reaccción en cadena};
        
    \path (c2) -- (c4) node[midway] (temp) {};
    \draw[<-, ultra thick] (temp) -- ++(1, 1) 
        node [above right=2pt, scale=0.7] {Comburente};
        
    \path (c2) -- (c3) node[midway, above left=0.2cm] (temp) {};
    \draw[<-, ultra thick] (temp) -- ++(1, -1) 
        node [below right=2pt, scale=0.7] {Combustible};
    
\end{tikzpicture}
\end{document}
```

## Tiene 4 componentes:
---
### Combustible
![[Combustible#Definición]]

### Comburente
![[Comburente#Definición]]

### Temperatura
![[Temperatura#Definición]]

### Reacción en cadena
![[Reacción en cadena#Definición]]

## Aclaración
---
Existe un triangulo del fuego, donde no se incluye la reacción en cadena, pero no es un buen modelo.