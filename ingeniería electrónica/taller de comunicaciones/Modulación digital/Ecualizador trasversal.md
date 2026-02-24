---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases: 
  - Ecualizador transversal con zero-forcing#Zero-forcing
  - Ecualizador transversal con regresión lineal#Regresión lineal
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Ecualizador|ecualizador]] es [[ingeniería electrónica/señales/Señales y sistemas/Sistema lineal|lineal]] el cual intenta reducir o eliminar completamente el [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital#^isi|ISI]], esto lo logra con el siguiente [[ingeniería electrónica/señales/Sistemas LTI/Sistema lineal e invariante en el tiempo|sistema]] 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.15, transform shape, thick]
    \tikzmath { 
        \largo = 1; \radioCoef = 0.65; \radioSum = 0.5; \sep = 1;
        \radioPunto = 0.05;
        \scale = 1; \scaleCoef = \scale * 0.8;
        
        \coeficientes = 6; \coeficientesMen = int(\coeficientes - 1);
        \medio = int(floor(\coeficientes / 2));
        \medioMen = int(floor(\coeficientes / 2) - 1);
    }
    
    \foreach \i [parse=true] in {0, ..., \coeficientes - 1} {
        % Defino las posiciones de los shift registers
        \path ({\i * \sep + (\i + 0.5) * \largo}, 0) 
            node (shift_\i) {};
            
        % Defino las posiciones de los coeficientes
        \path ({(\i - 0.5) * \sep + \i * \largo}, {-1*(\sep + \radioCoef)})
            node (coef_\i) {};
        
        % Defino las posiciones de las sumas 
        \path ({(\i - 0.5) * \sep + \i * \largo}, {-2*(\sep + \radioCoef) - \radioSum})
            node (sum_\i) {};
    }

    \foreach \i [parse=true] in {0, ..., \coeficientes - 1} {
       \tikzmath {
           let \label = "n";
           if \medio < \i then {
               if \i == \coeficientes - 1 then {
                   \label = "n";
               } else {
                   int \newI;
                   \newI = \coeficientes - 1 - \i;
                    \label = "n - \newI";
               };
           } else {
               if \i == 0 then {
                   \label = "-n";
               } else {
                  \label = "-n + \i";
               };
           };
       } 
    
        \ifnum \i=\medioMen
            \path (shift_\i.center) node[scale=\scale] {$\cdots$};
            \path (sum_\i.center) node[scale=\scale] {$\cdots$};
            
        \else
            \ifnum \i=\medio
                \path (sum_\i.center) node[scale=\scale] {$\cdots$};
            
            \else
                \draw (coef_\i.center) circle (\radioCoef)
                    node[scale=\scaleCoef] {$C_{\label}$};
                        
                \ifnum \i > 0 
                    \draw (sum_\i.center) circle (\radioSum)
                        node[scale=\scale] {$+$};
                \fi
                
                \ifnum \i < \coeficientesMen
                    \fill ($ 
                        (shift_\i.center) + (-{0.5 * (\largo + \sep)}, 0) 
                    $) circle (\radioPunto);
                \fi 
            \fi
                
            \ifnum \i < \coeficientesMen
                \draw ($ 
                    (shift_\i.center) + ({-\largo / 2}, {-\largo / 2}) 
                $) rectangle ++(\largo, \largo)
                    node[midway, scale=\scale] {$T_s$};
            \else
            \fi 
        \fi
    }
    
    \begin{scope}[rounded corners=0.5em]
        \foreach \i [parse=true] in {0, ..., \coeficientes - 1} {
            \tikzmath {
               \intermedio = (\i == \medio || \i == \medioMen) ? 1 : 0; 
               \medioSinPrimero = (\i == \medio || \i == 0) ? 1 : 0;
            }
            \ifnum \i < \coeficientesMen
                \draw[<-] ($ (shift_\i.center) + ({-\largo / 2}, 0) $) 
                    -- ++(-\sep, 0);
            \else
                \draw[->] ($ (sum_\i.center) + ({\largo / 2}, 0) $) 
                    -- ++(\sep, 0);
            \fi
            
            \ifnum \medioSinPrimero=0
                \draw[<-] ($ (sum_\i.center) + ({-\largo / 2}, 0) $) 
                    -- ++(-\sep, 0);
            \fi
                    
            \ifnum \intermedio=0
                \ifnum \i < \coeficientesMen
                    \draw[<-] ($ (coef_\i.center) + (0, \radioCoef) $)
                        -- ++(0, \sep);
                \else
                    \draw[<-] ($ (coef_\i.center) + (0, \radioCoef) $)
                        -- ++(0, \sep)
                        -- ++({-\sep / 2}, 0);
                \fi
                
                    
                \ifnum \i > 0
                    \draw[->] ($ (coef_\i.center) + (0, -\radioCoef) $)
                        -- ++(0, -\sep);
                \else
                    \draw[->] ($ (coef_\i.center) + (0, -\radioCoef) $)
                        -- ++(0, {-\sep - \radioSum})
                        -- ++({\sep + \largo - \radioSum}, 0);
                \fi
            \fi
        }
    \end{scope}
    
    \draw ($ (shift_0.center) + ({-\largo / 2 - \sep}, 0) $)
        node[left=0, scale=\scale] {$x_k$};
    \draw ($ (sum_\coeficientesMen.center) + ({\largo / 2 + \sep}, 0) $)
        node[right=0, scale=\scale] {$z_k$};
    
\end{tikzpicture}
\end{document}
```

El cual se puede representar como $$ z(k) = \sum_{n = -N}^{N} C_n ~ x(k - n), ~~~~ k \in [-2N,~ \cdots,~ 2N] $$ planteándolo de forma matricial $$ \bar{z} = \bar{\bar{X}} ~ \bar{c} $$ donde $$ \begin{matrix}
    \bar{z} = \begin{bmatrix}
        z(-2N) \\ \vdots \\ z(0) \\ \cdots \\ z(2N) 
    \end{bmatrix} \in \mathbb{R}^{4N + 1} ~~~~
    \bar{c} = \begin{bmatrix}
        C_{-N} \\ \vdots \\ C_0 \\ \cdots \\ C_{N} 
    \end{bmatrix} \in \mathbb{R}^{2N + 1} \\\\
    \bar{\bar{X}} = \begin{bmatrix}
        x(-N) & 0 & \cdots & 0 & \cdots & 0 & 0 \\
        x(-N + 1) & x(-N) & \cdots & 0 & \cdots & 0 & 0 \\
        \vdots & \vdots & & \vdots & & \vdots & \vdots \\
        x(N) & x(N - 1) & \cdots & x(0) & \cdots & x(-N - 1) & x(-N) \\
        \vdots & \vdots & & \vdots & & \vdots & \vdots \\
        0 & 0 & \cdots & 0 & \cdots & x(N) & x(N - 1) \\
        0 & 0 & \cdots & 0 & \cdots & 0 & x(N) \\
    \end{bmatrix} \in \mathbb{R}^{(4N + 1) \times (2N + 1)} \\
\end{matrix} $$ 
Buscamos que $\bar{z} = \begin{bmatrix} 0 & \cdots & 0 & 1 & 0 & \cdots & 0 \end{bmatrix}^T$ para eliminar el ISI, pero notemos que tenemos $2N + 1$ incógnitas y $4N + 1$ ecuaciones, haciendo que no exista una solución

## Zero-forcing
---
Podemos disminuir el tamaño de $\bar{\bar{X}}$ y vamos a descartar los más lejanos de $0$, que se resume en reducir $k$ al rango $[-N,~ N]$ para que $\bar{\bar{X}}$ sea cuadrada

Tiene el inconveniente que tiene menos puntos para controlar, y es muy influenciable por el ruido en estos puntos

## Regresión lineal
---
Se propone utilizar [[ingeniería en informática/proba/Representación de variables aleatorias/Recta de regresión|regresión lineal]] utilizando la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] de la [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático medio]], permitiendo controlar todos los puntos de $[-2N,~ 2N]$ y teniendo en cuenta el ruido de los puntos

Como contrapartida, tiene el problema que pierde la exactitud provocando que no elimine el ISI sino que solo lo disminuya