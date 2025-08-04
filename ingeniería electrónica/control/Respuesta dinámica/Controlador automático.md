---
dia: 2025-03-20
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Acción de control#^accion-control
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un [[Controlador|controlador]] automático compara el valor real de la salida de una [[Planta|planta]] con la entrada de referencia (el valor deseado), determina la desviación y produce una [[Señal de control|señal de control]] que reduce la desviación a $0$ o a un valor pequeño 

La manera en la cual el controlador automático produce la señal de control  se denomina acción de control ^accion-control

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.3;  \alto = 1.4; \isep = 2;
        \radio = 0.4; 
        \scale = 0.75; \sep = 1; \margen = 0.3;
    }
    
    \tikzmath { \tag = "amp"; }
    \coordinate (esq_\tag) at (0, {\isep - \alto / 2});
    \draw (esq_\tag) rectangle ++(\largo, \alto) node[midway] {Amplificador};
    \path (esq_\tag) -- ++(0, \alto) node[midway] (ini_\tag) {};
    \path ($ (esq_\tag) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_\tag) {};
    
    \tikzmath { \tag = "act"; }
    \coordinate (esq_\tag) at ($ (fin_amp) + (\sep, {-\alto / 2}) $);
    \draw (esq_\tag) rectangle ++(\largo, \alto) node[midway] {Actuador};
    \path (esq_\tag) -- ++(0, \alto) node[midway] (ini_\tag) {};
    \path ($ (esq_\tag) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_\tag) {};
    
    \tikzmath { \tag = "pla"; }
    \coordinate (esq_\tag) at ($ (fin_act) + (\sep, {-\alto / 2}) $);
    \draw (esq_\tag) rectangle ++(\largo, \alto) node[midway] {Planta};
    \path (esq_\tag) -- ++(0, \alto) node[midway] (ini_\tag) {};
    \path ($ (esq_\tag) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_\tag) {};
    
    \tikzmath { \tag = "sen"; }
    \coordinate (temp) at ($ (ini_amp)!0.5!(fin_pla) $);
    \coordinate (esq_\tag) at ($ 
        (temp |- 0, 0) + ({-\largo / 2}, {-\isep + \alto / 2}) 
    $);
    \draw (esq_\tag) rectangle ++(\largo, \alto) node[midway] {Sensor};
    \path (esq_\tag) -- ++(0, \alto) node[midway] (ini_\tag) {};
    \path ($ (esq_\tag) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_\tag) {};
    
    \coordinate (temp) at ($ (fin_pla)!0.5!(fin_sen) $);
    \coordinate (punto_rami) at ($ (temp -| fin_pla) + (\sep, 0) $);
    
    \tikzmath { \supDer = cos(45); }
    \coordinate (temp) at ($ (ini_amp)!0.5!(ini_sen) $);
    \coordinate (punto_suma) at ($ (temp -| ini_amp) + (-\sep, 0) $);
    \begin{scope}[cm={1, 0, 0, 1, (punto_suma)}]
        \draw (0, 0) circle (\radio); 
        \draw ({-\radio * \supDer}, {\radio * \supDer})
            -- ({\radio * \supDer}, {-\radio * \supDer});
        \draw ({-\radio * \supDer}, {-\radio * \supDer})
            -- ({\radio * \supDer}, {\radio * \supDer});
    \end{scope}
        
    \path (punto_suma) -- ++(0, \radio)
        node[pos=1] (ps_sup) {};
    \path (punto_suma) -- ++(0, -\radio) node[pos=0.6, scale=\scale] {$-$}
        node[pos=1] (ps_inf) {};
    \path (punto_suma) -- ++(\radio, 0)
        node[pos=1, right=2pt] (ps_der) {};
    \path (punto_suma) -- ++(-\radio, 0) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_izq) {};
        
    \draw[<-] (ps_izq.center) -- ++({-1.7 * \sep}, 0) 
        node[above right, align=center, scale=\scale] 
            {Entrada de\\referencia}
        node[below right, align=center, scale=\scale] 
            {Punto de\\consigna};
    
    \draw[->] (ps_sup.center) -- (ps_sup |- ini_amp)
        -- (ini_amp.center) node[midway, above=2pt] (label_1) {};
    \draw[<-] (ps_inf.center) -- (ps_inf |- ini_sen)
        -- (ini_sen.center);
    \draw[->] (fin_amp.center) -- (ini_act.center);
    \draw[->] (fin_act.center) -- (ini_pla.center);
    
    \draw (fin_pla.center) -- (fin_pla -| punto_rami)
        -- (punto_rami);
    \draw[<-] (fin_sen.center) -- (fin_sen -| punto_rami)
        -- (punto_rami);
        
    \draw[->] (punto_rami) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {Salida};
        
    \draw[thin, <-] (ps_der.center) -- ++({\sep / 2}, 0)
        node[right=2pt, align=center, scale=\scale]
            {Detector de error};
        
    \draw[thin, <-] (label_1.center) -- ++(0, {\sep / 2})
        node[above=2pt, align=center, scale=\scale] (temp)
            {Señal de error\\de actuación};
    
    \coordinate (blk_inf) at ($ (ps_inf -| ps_izq) + (-\margen, -\margen) $);
    \coordinate (blk_sup) at ($ (temp -| fin_amp) + (\margen, {2 * \margen}) $);
    \draw[thin, dashed] (blk_inf) rectangle (blk_sup);
    
    \path (blk_sup) -- (blk_inf |- blk_sup)
        node[midway, above=2pt, scale=\scale] {Controlador automático};

\end{tikzpicture}
\end{document}
```

Este [[Diagrama de bloques|diagrama de bloques]] de un [[Sistema|sistema]] de control industrial que consiste en un controlador automático, un [[Actuadores|actuador]], una planta y un [[Sensores|sensor]]. El controlador detecta la señal de error, que por lo general, está a un nivel de potencia muy bajo, y la amplifica a un nivel lo suficientemente alto. La salida de un controlador automático alimenta a un actuador

## Clasificación
---
Los controladores industriales se clasifican, de acuerdo con sus acciones de control
* [[Controlador de dos posiciones|Controladores de dos posiciones o on-off]]
* [[Controlador proporcional|Controladores proporcionales]]
* [[Controlador integral|Controladores integrales]]
* [[Controlador proporcional-integral|Controladores proporcionales-integrales]]
* [[Controlador proporcional-derivativo|Controladores proporcionales-derivativos]]
* [[Controlador proporcional-integral-derivativo|Controladores proporcionales-integrales-derivativos]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```