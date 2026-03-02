---
dia: 2026-03-01
etapa: empezado
referencias: []
aliases:
  - Differential M-Phase Shift Keying
  - D M-PSK
  - DPSK
  - Binary Differential Phase Shift Keying#^DPSK
  - BPSK#^DPSK
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
Este tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación Digital/Modulación digital|modulación]] se aplica cuando se [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Transmisión en banda pasante|transmite en banda pasante]], y con una [[ingeniería electrónica/señales/Señales y sistemas/Señal#^discreta|señal discreta]], este conjunto de símbolos genera un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] y la transmisión de cada símbolo esta dado por un tiempo $T_s$, donde también recae en la clasificación de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital coherente|modulación no coherente]]

Este define dos componentes $$ \begin{align}
    \varphi_0(t) &= \sqrt{\frac{2}{T_s}} \cos(\omega_p t + \phi) ~ h_{tx}(t) \\
    \varphi_1(t) &= \sqrt{\frac{2}{T_s}} \sin(\omega_p t + \phi) ~ h_{tx}(t) \\
\end{align} $$ donde la fase $\phi$ no es conocida por el receptor, por eso es no coherente

Para mandar información de la fase, se hace mediante la diferencia de fase entre el símbolo en análisis y el símbolo anterior, y luego se sigue con la misma metodología que [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Shift Keying|M-PSK]]

Cabe aclarar que para $M = 2$, se lo suele llamar DPSK y solo se define  solo un componente ^DPSK

## Probabilidad de error
---

## Detección óptimo
---
Esto lo logramos a partir de dos [[Correlador|correladores]], uno para cada componente, donde lo relevante es la separación de fase de $\pi$ entre ellos, ya que no conocemos $\phi$, después con un delay de $T_s$ se puede comparar con el símbolo anterior, dándonos la fase 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { 
        \largo = 1.75;  \alto = 1; \radio = 0.4; 
        \scale = 0.9; \sep = 1.35; \isep = 2;
    }

    % Definimos posiciones
    \path (0, 0) node (inicio) {}
        -- ++({0.75 * \sep + \radio}, 0) node (suma_exp) {}
        -- ++({\radio + \sep + \largo / 4}, 0) node (correlador) {}
        -- ++({\largo / 4 + \sep / 2}, 0) node (interseccion){}
        -- ++({\sep / 2 + \largo / 2}, -\sep) node (delay_ts) {}
        -- ++({\largo / 2 + \sep / 2}, \sep) node (diferencia) {}
        -- ++({\radio + \sep + \largo / 2}, 0) node (deteccion) {}
        -- ++({\largo / 2 + 0.75 * \sep}, 0) node (final) {};
    \path ($ (suma_exp) + (0, {\radio + \sep / 2}) $) node (exponente) {};

    % Dibujamos simbolos
    \path (inicio) node[left=2pt, scale=\scale] {$r(t)$};
    \path (exponente) node[above=2pt, scale=\scale] 
        {$\sqrt{\frac{2}{T_s}} ~ \exp(j \omega_p t)$};
    \path (final) node[right=2pt, scale=\scale] {$\hat{s}_i(t)$};
    
    \draw ($ (correlador.center) + ({-\largo / 4}, {-0.75 * \alto}) $) 
        rectangle ++({\largo / 2}, {1.5 * \alto})
            node[midway, scale=\scale] 
                {$\displaystyle\int_{0}^{T_s}$};
            
    \draw ($ (delay_ts.center) + ({-\largo / 2}, {-\alto / 2}) $)
        rectangle ++(\largo, \alto)
            node[midway, scale=\scale, align=center] 
                {Delay\\$T_s$};
                
    \draw ($ (deteccion.center) + ({-\largo / 2}, {-\alto / 2}) $)
        rectangle ++(\largo, \alto)
            node[midway, scale=\scale] {Desición};
            
    \fill (interseccion.center) circle (0.075);
    
    \foreach \centro/\arr/\der/\abj/\izq in 
        {suma_exp/$\times$///, diferencia///$-$/$+$} {
        \begin{scope}[cm={1, 0, 0, 1, (\centro)}]
            \draw (0, 0) circle (\radio);
            \foreach \angulo/\simbolo in 
                {90/\arr, 0/\der, -90/\abj, -180/\izq} {
                \path (0, 0) -- (
                    {\radio * cos(\angulo)}, 
                    {\radio * sin(\angulo)}
                ) node [pos=0.6, scale=\scale] {\simbolo};
                
                \draw (0, 0) -- (
                    {\radio * cos(\angulo + 45)}, 
                    {\radio * sin(\angulo + 45)}
                );
            }
        \end{scope}
    }

    % Dibujamos lineas
    \begin{scope}[->, rounded corners=0.5em, ultra thick]
        \draw (inicio.center) -- ($ (suma_exp) + (-\radio, 0) $);
        \draw (exponente.center) -- ($ (suma_exp) + (0, \radio) $);
        
        \draw ($ (suma_exp) + (\radio, 0) $) 
            -- ($ (correlador) + ({-\largo / 4}, 0) $);
            
        \draw ($ (correlador) + ({\largo / 4}, 0) $)
            -- (interseccion.center)
            -- ($ (diferencia) + (-\radio, 0) $);
            
        \draw (interseccion.center)
            -- (interseccion |- delay_ts)
            -- ($ (delay_ts) + ({-\largo / 2}, 0) $);
            
        \draw ($ (delay_ts) + ({\largo / 2}, 0) $)
            -- (diferencia |- delay_ts)
            -- ($ (diferencia) + (0, -\radio) $);
            
        \draw ($ (diferencia) + (\radio, 0) $)
            -- ($ (deteccion) + ({-\largo / 2}, 0) $);
            
        \draw ($ (deteccion) + ({\largo / 2}, 0) $) -- (final.center);
    \end{scope}

\end{tikzpicture}
\end{document}
```

Podemos representar los dos componentes con la [[ingeniería electrónica/analisis 3/Funciones elementales/Función exponencial|exponencial]] compleja, e integrando después de este producto, genera el resultado del correlador