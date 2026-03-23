---
dia: 2026-03-21
etapa: empezado
referencias:
  - "893"
aliases:
  - Transferencia de lazo abierto#^lado-abierto
  - Transferencia de lazo cerrado#^lado-cerrado
  - Transferencia de la trayectoria directa#^trayectoria-directa
tags:
  - carrera/ingeniería-electrónica/control/Root-Locus
  - nota/facultad
vinculoFacultad:
  - tema: Root Locus
    capitulo: 6
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dado el [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] representado con el siguiente [[ingeniería electrónica/control/Respuesta dinámica/Diagrama de bloques|diagrama de bloques]] 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=0.9, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.0; \alto = 1.5; \isep = 1.5; \sep = 1.5; \radio = 0.5; 
        \scale = 1.2; \scaleSimb = 0.85; \scaleText = 1.1; \scaleLetra = 1.15;
    }

	\coordinate (foward) at ({-\sep - \largo / 2}, 0);
	\coordinate (control) at ({\radio + \sep + \largo / 2}, 0);
	\coordinate (planta) at ($ (control) + ({2 * (\radio + \sep) + \largo}, 0) $);
	
	\coordinate (diferencia) at ($ (foward)!0.5!(control) $);
	\coordinate (ruido) at ($ (control)!0.5!(planta) $);
	\coordinate (sensor) at ($ (planta) + ({\sep + \radio + \largo / 2}, 0) $);
	
	\coordinate (retro) at ($ 
		(control)!0.5!(planta) + (0, {-\isep - \alto / 2}) 
	$);
	
	\foreach \coor/\arr/\abj/\izq/\der in 
		{diferencia//-/+/, ruido/+//+/, sensor/+//+/} {
		\begin{scope}[cm={1, 0, 0, 1, (\coor)}] 
			\foreach \angle/\label in {-45/\der, 45/\arr, 135/\izq, 225/\abj} {
				\tikzmath { \angleLabel = \angle + 45; }
				\draw (0, 0) -- ({\radio * cos(\angle)}, {\radio * sin(\angle)});
				\path (0, 0) 
					-- ({\radio * cos(\angleLabel)}, {\radio * sin(\angleLabel)})
						node[pos=0.6, scale=\scaleSimb] {$\label$};
			}	
			\draw (0, 0) circle (\radio);
		\end{scope}
	}

	\foreach \coor/\label/\texto in {foward/F(s)/Feedforward, 
		control/C(s)/Controlador, planta/P(s)/Planta} {
		\draw ($ (\coor) + ({-\largo / 2}, {-\alto / 2}) $) 
			rectangle ++(\largo, \alto) 
				node[midway, scale=\scale] {$\label$};
		\path ($ (\coor) + ({-\largo / 2}, {\alto / 2}) $)
			-- ++(\largo, 0)
				node[midway, above=2pt, scale=\scaleText, align=center] 
					{\texto};
	}

	\draw[->] ($ (foward) + ({\largo / 2}, 0) $)
		-- ($ (diferencia) + (-\radio, 0) $)
			node[midway, above=2pt, scale=\scaleLetra] {$y_m$};
	\draw[->] ($ (diferencia) + (\radio, 0) $) 
		-- ($ (control) + ({-\largo / 2}, 0) $) 
			node[midway, above=2pt, scale=\scaleLetra] {$e$};
			
	\draw[->] ($ (control) + ({\largo / 2}, 0) $) 
		-- ($ (ruido) + (-\radio, 0) $) 
			node[midway, above=2pt, scale=\scaleLetra] {$u$};
	\draw[->] ($ (ruido) + (\radio, 0) $) 
		-- ($ (planta) + ({-\largo / 2}, 0) $) 
			node[midway, above=2pt, scale=\scaleLetra] {$\mu$};
	\draw[->] ($ (ruido) + (0, {\radio + \sep}) $) 
		-- ++(0, -\sep) node[pos=-0.05, above=2pt, scale=\scaleLetra]
			{$\nu$};
			
	\draw[->] ($ (planta) + ({\largo / 2}, 0) $) 
		-- ($ (sensor) + (-\radio, 0) $) 
			node[midway, above=2pt, scale=\scaleLetra] {$\eta$};
	\draw[->] ($ (sensor) + (0, {\radio + \sep}) $) 
		-- ++(0, -\sep) node[pos=-0.05, above=2pt, scale=\scaleLetra]
			{$w$};
		
	\draw[->] ($ (sensor) + (0, -\radio) $) node (temp) {}
		-- (temp |- retro)
		-- (diferencia |- retro)
		-- ($ (diferencia) + (0, -\radio) $);
		
	\draw[->] ($ (sensor) + (\radio, 0) $) 
		-- ++(\sep, 0) node[pos=0.65, above=2pt, scale=\scaleLetra] {$y$};
	\draw[->] ($ (foward) + ({-\largo / 2 - \sep}, 0) $) 
		-- ++(\sep, 0) node[pos=0.35, above=2pt, scale=\scaleLetra] {$r$};

\end{tikzpicture}
\end{document}
```

Se conoce como la transferencia de lazo abierto, como la ganancia total del lazo si se rompe el lazo justo antes de la sumar el error $e$, dado por $$ L(s) = C(s) ~ P(s) $$ ^lado-abierto

Se conoce como la transferencia de lazo cerrado, ^lazo-cerrado

Se conoce como la transferencia de trayectoria directa, ^trayectoria-directa

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```