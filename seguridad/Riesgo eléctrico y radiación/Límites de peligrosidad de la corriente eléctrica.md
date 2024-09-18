---
dia: 2023-04-18
tags:
  - seguridad/Riesgo-eléctrico-y-radiación
  - nota/facultad
---
# Definición
---
Se define en cuatro zonas de peligrosidad establecida por la IEC (international electrotechnical commission) que resumen los efectos de la [[Corriente eléctrica|corriente alterna]] que pasa a través del cuerpo humano en [[Función|función]] del tiempo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}
\pgfkeys{/pgf/number format/.cd,fixed,precision=2}

\begin{document} 
\begin{tikzpicture}[scale=0.9, transform shape, thick]
    \tikzmath { \dnormal = 1; \damplia = 1.3; }
    
    \path (0, 0) node (temp) {};
    \foreach \i in {0, 1, ..., 15} { 
        \tikzmath { 
            \modulo = mod(\i, 3);
            \distancia = \dnormal + (\damplia - \dnormal) * (\modulo == 1); 
            \num = int(1 + 1 * (\modulo == 1) + 4 * (\modulo == 2));
            \escala = pow(10, int(\i / 3) - 1);
            \final = \num * \escala;
        }
        
        \coordinate (c\i-0) at (temp.center);
        \draw[thin] (temp.center) -- ++(0, -0.2)
            node [below=2pt] {$\pgfmathprintnumber{\final}$};
        \draw (temp.center) -- ++(\distancia, 0) node (temp) {};
        
    }
    \draw[->] (temp.center) -- ++(0.1, 0) node[below=2pt] {$I$ [mA]};
    
    \path (0, 0) node (temp) {};
    \foreach \j in {0, 1, ..., 9} { 
        \tikzmath { 
            \modulo = mod(\j, 3);
            \distancia = \dnormal + (\damplia - \dnormal) * (\modulo == 1); 
            \num = int(1 + 1 * (\modulo == 1) + 4 * (\modulo == 2));
            \escala = pow(10, int(\j / 3) + 1);
            \final = \num * \escala;
        }
        
        \coordinate (c0-\j) at (temp.center);
        \draw[thin] (temp.center) -- ++(-0.2, 0)
            node [left=2pt] {$\pgfmathprintnumber{\final}$};
        \draw (temp.center) -- ++(0, \distancia) node (temp) {};
        
    }
    \draw[->] (temp.center) -- ++(0, 0.1) node[left=2pt] {$t$ [ms]};
    
    \foreach \i in {0, 1, ..., 15} { \draw[thin] (c\i-0) -- ++ (c0-9 -| 0, 0); }
    \foreach \j in {0, 1, ..., 9} { \draw[thin] (c0-\j) -- ++ (c15-0 |- 0, 0); }
    
    \draw[ultra thick] (c2-0) -- ++(c0-9 -| 0, 0);
        
    \foreach \i/\lable/\bdif in {1/1/1, 4/2/1, 8/3/0, 13/4/1} {
        \tikzmath { \ancho = \dnormal + (\damplia - \dnormal) * \bdif; }
        \draw ($ (c\i-0 |- c0-4) + ({\ancho / 2}, {\damplia / 2})$)
            circle (0.3) node {$\lable$};
    }
    
    \draw[ultra thick] (c11-0) -- ++(c0-1 -| 0, 0); 
    \draw [ultra thick] (c11-0 |- c0-1) .. controls
            (c9-0 |- c0-3) and (c6-0 |- c0-6)
        .. (c6-0 |- c0-9);
        
    \draw [ultra thick] (c11-0 |- c0-1) .. controls
            (c11-0 |- c0-8) and ($ (c7-0 |- c0-2) + ({\damplia / 2}, 0) $)
        .. ($ (c7-0 |- c0-9) + ({\damplia / 2}, 0) $);
        
\end{tikzpicture}
\end{document}
```

#### Zona 1
Ningún efecto, hasta el umbral de percepción.

#### Zona 2
Ningún efecto fisiológico peligroso.

#### Zona 3
Efectos patológicos reversibles, que aumentan la [[Corriente eléctrica|intensidad de la corriente]] y con el tiempo (contracciones musculares, dificultades respiratorias, aumento de la presión sanguínea, perturbación cardiaca, etc.)

#### Zona 4
Probable [[Fibrilación ventricular|fibrilación ventricular]], [[Paro respiratorio|paro respiratorio]], [[Quemadura|quemadura]], paro cardíaco.