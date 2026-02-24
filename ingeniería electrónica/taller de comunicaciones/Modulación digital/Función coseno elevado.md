---
dia: 2026-02-23
etapa: empezado
referencias: []
aliases:
  - Filtro de coseno elevado
  - Filtro raised cosine
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
Se define la [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] del coseno elevado para dos parámetros, $T$ que representa el rango de la función y $r$ llamado factor de caída con un rango de $0$ a $1$, dando la expresión $$ f(x) = \begin{dcases}
    1, & |x| \le \frac{1 - r}{2 T} \\
    \frac{1}{2}\left[ 1 +  \cos\left( \frac{\pi T}{r} \left[ |x| - \frac{1 - r}{2T} \right] \right) \right], & \frac{1 - r}{2T} < x \le \frac{1 + r}{2T} \\
    0, & \text{sino}
\end{dcases} $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\definecolor{col1}{RGB}{255, 0, 127} 
	\definecolor{col2}{RGB}{255, 25, 25} 
	\definecolor{col3}{RGB}{229, 51, 178} 
	\definecolor{col4}{RGB}{178, 102, 229} 
	\definecolor{col5}{RGB}{102, 127, 229} 
	\definecolor{col6}{RGB}{0, 127, 204}
    
	\tikzmath {
        \sep = 0.25; \interSep = 2; \ancho = 5; \alto = 3;
        \periodo = 0.8 * \ancho; \altoF = 0.6 * \alto; \dx = 0.05; 
        \scale = 1;
        \quasiPi = 3.1415;
        
        function coseno_elevado(\x, \r, \periodo) {
            let \T = 1 / \periodo;
            let \rDif = (1 - \r)/(2 * \T);
            let \rSum = (1 + \r)/(2 * \T);
            if (\rDif < abs(\x)) && (abs(\x) <= \rSum) then {
                return (\altoF / 2) * (1 + cos(deg( 
                    (\quasiPi * \T / \r) * (abs(\x) - (1 - \r)/(2 * \T)) 
                )) );
            } else {
                if abs(\x) <= \rDif then {
                    return \altoF;
                } else {
                   return 0;
                };
            };
        };
	}
	\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
        \draw[->] ({-\sep - \ancho}, 0) -- ({\ancho + \sep}, 0) 
            node[pos=1.01, above=2pt, scale=\scale] {$x$};
        \draw[->] (0, -\sep) -- (0, \alto)
            node[pos=1.01, right=2pt, scale=\scale] {$f(x)$};

        \foreach \x/\label [parse=true] in {0.5 * \periodo/2T, \periodo/T} {
            \draw (\x, {\sep / 2}) -- (\x, {-\sep / 2}) 
                node[below=2pt, scale=\scale] {$\frac{1}{\label}$};
            \draw (-\x, {\sep / 2}) -- (-\x, {-\sep / 2}) 
                node[below=2pt, scale=\scale] {$-\frac{1}{\label}$};
        }

       \foreach \r/\color in {0/col1, 0.25/col3, 0.5/col4, 1/col6} {
           \draw[color = \color] (0, {coseno_elevado(0, \r, \periodo)})
           \foreach \x [parse=true] in {\dx, 2 * \dx, ..., 0.5 * \periodo - \dx, 0.5 * \periodo, 0.5 * \periodo + \dx, ..., \ancho } {
                -- (\x, {coseno_elevado(\x, \r, \periodo)})
           };
           
           \draw[color = \color] (0, {coseno_elevado(0, \r, \periodo)})
           \foreach \x [parse=true] in {\dx, 2 * \dx, ..., 0.5 * \periodo - \dx, 0.5 * \periodo, 0.5 * \periodo + \dx, ..., \ancho } {
                -- (-\x, {coseno_elevado(\x, \r, \periodo)})
           };
       } 
        
	\end{tikzpicture}
\end{document}
```
^representacion

Esta función generalmente representa un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro|filtro]] y esta siendo su [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]], por lo que su [[ingeniería electrónica/señales/Sistemas LTI/Respuesta en frecuencia|respuesta al impulso]] de este filtro viene por $$ h(t) = \begin{dcases}
    \frac{\pi}{4T} \text{sinc}\left( \frac{1}{2r} \right), & t = \pm \frac{T}{2r} \\
    \frac{1}{T} \text{sinc}\left( \frac{t}{T} \right) \frac{\cos\left( \frac{\pi r t}{T} \right)}{1 - \left( \frac{2rt}{T} \right)^2}, & \text{sino}
\end{dcases} $$
