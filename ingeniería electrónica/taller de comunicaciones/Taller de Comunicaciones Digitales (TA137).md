---
etapa: empezado
estado: Cursandola
tags:
  - facultad/materia
  - carrera/ingeniería-electrónica/taller-de-comunicaciones
nombreMateria: Taller de Comunicaciones Digitales
nombreReducido: taller de comunicaciones
cuatri: 25C2
plan: "2023"
codigo: TA137
referencias:
  - 1082
  - 1083
  - 1084
  - 1085
correlativas:
  - tipo: Equivalente
    materia: Redes
  - tipo: Materia
    materia: Señales y sistemas
nombreCarrera: Ingeniería electrónica
---
# Apuntes
---
```dataviewjs
	await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```

## Resumen
---

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.15, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 1.2; \sep = 1.5; \radio = 0.45;
        \scale = 0.9; \distancia = \alto + 1.75 * \sep; 
        \distAWGN = 0.75 * \sep;
    }
    
    \path (0, 0) node (temp) {}; 
    \foreach \texto [count=\i] in {Codificación\\de Fuente, Codificación\\de Canal, Modulación} {
        \draw (temp.center) rectangle ++(\ancho, \alto)
            node[midway, scale=\scale, align=center] {\texto};
            
        \path (temp.center) node (pos_in_\i) {};
        \path ($ (temp.center) + ({\ancho + \sep}, 0) $) 
            node (temp) {};
    }
    
    \path (0, -\distancia) node (temp) {}; 
    \foreach \texto [count=\i] in {Decodificación\\de Fuente, Decodificación\\de Canal, Demodulación} {
        \draw (temp.center) rectangle ++(\ancho, \alto)
            node[midway, scale=\scale, align=center] {\texto};
            
        \path (temp.center) node (pos_out_\i) {};
        \path ($ (temp.center) + ({\ancho + \sep}, 0) $) 
            node (temp) {};
    }
    
    \draw ($ (pos_in_3)!0.5!(pos_out_3) + ({\ancho + 1.25 * \sep}, {\alto / 2}) $)
        circle (\radio)
        node[scale = 1.5] {$+$}
        node (plus) {};
    
        
    \begin{scope}[rounded corners=0.5em, shorten >=0.5em, shorten <=0.5em]
       \foreach \from/\to in {1/2, 2/3} {
            \draw[->] ($ (pos_in_\from) + (\ancho, {\alto / 2}) $)
                -- ($ (pos_in_\to) + (0, {\alto / 2}) $);
                
            \draw[<-] ($ (pos_out_\from) + (\ancho, {\alto / 2}) $)
                -- ($ (pos_out_\to) + (0, {\alto / 2}) $);
       } 
       
       \draw[->] ($ (pos_in_3) + (\ancho, {\alto / 2}) $)
               node (temp) {}
           -- (temp -| plus)
           -- ($ (plus.center) + (0, \radio) $);
           
       \draw[<-] ($ (pos_out_3) + (\ancho, {\alto / 2}) $)
               node (temp) {}
           -- (temp -| plus)
           -- ($ (plus.center) + (0, -\radio) $);
           
        \draw[<-] ($ (plus.center) + (\radio, 0) $) -- ++(\distAWGN, 0)
            node[right=-0.5em, scale=\scale] {AWGN};
    \end{scope}
    
    \begin{scope}[dashed, rounded corners=0.5em]
        \tikzmath { \diff = \sep * 0.3; \AWGNTextSize = 0.7; }
        \foreach \texto [count=\i] in {Compresión, Codificación, Modulación} {
            \draw ($ (pos_in_\i) + (-\diff, {\alto + \diff}) $)
                rectangle ($ (pos_out_\i) + ({\ancho + \diff}, -\diff) $);
                
            \path ($ (pos_out_\i) + (-\diff, -\diff) $) 
                -- ++({\ancho + 2 * \diff}, 0)
                    node[midway, below=2pt, align=center, scale=\scale] {\texto};
        }
        
        \tikzmath { \extraDiff = \distAWGN + \AWGNTextSize + \diff; }
        \draw ($ (plus.center) + ({-\radio - \diff}, {\radio + \diff}) $)
            rectangle ($ (plus.center) + ({\radio + \extraDiff}, {-\radio - \diff}) $);
            
        \path ($ (plus.center) + ({-\radio - \diff}, {-\radio - \diff}) $)
            -- ($ (plus.center) + ({\radio + \extraDiff}, {-\radio - \diff}) $)
                node[midway, below=2pt, align=center, scale=\scale] {Canal};
    \end{scope}
        
\end{tikzpicture}
\end{document}
```

# Bibliografía
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```
