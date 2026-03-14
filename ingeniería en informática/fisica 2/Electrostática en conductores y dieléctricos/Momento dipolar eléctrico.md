---
dia: 2024-09-02
etapa: sin-empezar
tags:
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-electrónica/quimica/Enlaces-químicos
  - nota/facultad
vinculoFacultad:
  - tema: Electrostática en conductores y dieléctricos
    capitulo: 3
    materia: Física 2 A
    carrera: Ingeniería en informática
  - tema: Enlaces químicos
    capitulo: 3
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Está formado por dos [[Carga eléctrica|cargas]] $q$, del mismo [[Norma|módulo]] y signo opuesto, separadas una [[Distancia euclidiana|distancia]] $\delta$. Nos interesa el [[Campo eléctrico|campo]] del dipolo para valores mucho mayores que $\delta$

Definimos el momento dipolar del [[ingeniería electrónica/robotica movil/Repaso álgebra/Vector|vector]] $\vec{p}$ $$ \lVert \vec{p} \rVert = q ~ \delta $$tiene la dirección de la [[Recta|recta]] que une ambas cargas, apuntando hacia la carga positiva

Si el dipolo se encuentra en un campo eléctrico, se produce un [[Torque|torque]] $\tau$ sobre el mismo. Este torque tiende a alinear el dipolo ($\vec{p}$) en la dirección del campo externo

## Entre átomos
---
Cuando los [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] de una [[Molécula|molécula]] comparten sus [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] de forma desigual, el átomo es más [[ingeniería electrónica/quimica/Tabla periódica/Electronegatividad|electronegativo]] atrae con más fuerza del par de electrones compartido, es decir, la nube electrónica es más grande de su lado. También sucede cuando un átomo tiene un par solitario de electrones y la diferencia de electronegatividad apunta en la misma dirección

En el caso de que haya más de un enlace, se deben tomar en cuenta el momento dipolar de cada enlace y la geometría espacial de la molécula, sumando los momentos dipolares

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{verde}{RGB}{166, 178, 78}
\definecolor{rojo}{RGB}{218, 111, 142}
   
\begin{tikzpicture}[scale=1.7, transform shape, thick]
    \tikzmath {
		\sep = 0.7; \eSep = 0.2; \eInterSep = 0.2; 
		\puntosPorLado = 4; \eRadio = 0.02;
        \scale = 1; \scaleEq = 0.6;  
    }
	
	\coordinate (CO2) at (0, 0);
	\coordinate (SO2) at ({5 * \sep}, 0);
	
	\begin{scope}[cm={1, 0, 0, 1, (CO2)}]
		\def\angulos {{ 0, 180 }} 
		\tikzmath { \cantAngulos = dim(\angulos); }
		
		\coordinate (O-1) at (-\sep, 0);
		\coordinate (C) at (0, 0);
		\coordinate (O-2) at (\sep, 0);

		\foreach \coor/\label in {O-1/O, C/C, O-2/O} {
			\path (\coor) node[scale=\scale] {\label};

			\foreach \i [parse=true] in {0, ..., \cantAngulos - 1} {
				\tikzmath {
					\ang = \angulos[\i];
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (temp-inicio) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (temp-final) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
				
				\foreach \k [parse=true] in {0, ..., \puntosPorLado - 1} {
					\tikzmath {
						\num = int(\i * \puntosPorLado + \k);
						\porcen = (\k + 1) / (\puntosPorLado + 1);
					}
					\path (temp-inicio) -- (temp-final) 
						node[pos=\porcen] (temp) {};
					\coordinate (\coor-\num) at (temp.center);
				} 
			}
		}
		
		\draw (C-1) -- (O-2-6);
		\draw (C-2) -- (O-2-5);
		
		\draw (C-6) -- (O-1-1);
		\draw (C-5) -- (O-1-2);
		
		\draw[|->] ($ (C-0) + (0, 0.2) $) -- ($ (O-2-0) + (0, 0.2) $) 
			node[midway, above=2pt, scale=\scaleEq] {$\mu_{CO}$}; 
			
		\draw[|->] ($ (C-7) + (0, 0.2) $) -- ($ (O-1-7) + (0, 0.2) $) 
			node[midway, above=2pt, scale=\scaleEq] {$\mu_{CO}$}; 
			
		\path ($ (C) + (0, {-\sep / 4}) $) node[below=2pt, scale=\scaleEq] 
			{$2\delta^{+}$};
			
		\path ($ (O-1) + (0, {-\sep / 4}) $) node[below=2pt, scale=\scaleEq] 
			{$\delta^{-}$};
		\path ($ (O-2) + (0, {-\sep / 4}) $) node[below=2pt, scale=\scaleEq] 
			{$\delta^{-}$};
	\end{scope}

	\begin{scope}[cm={1, 0, 0, 1, (SO2)}]
		\def\angulos {{ 45, 90, 135, 225, 315 }} 
		\tikzmath { \cantAngulos = dim(\angulos); }
		
		\coordinate (O-1) at ({-2 * \sep / 3}, 0);
		\coordinate (S) at (0, {2 * \sep / 3});
		\coordinate (O-2) at ({2 * \sep / 3}, 0);

		\foreach \coor/\label in {O-1/O, S/S, O-2/O} {
			\path (\coor) node[scale=\scale] {\label};

			\foreach \i [parse=true] in {0, ..., \cantAngulos - 1} {
				\tikzmath {
					\ang = int(\angulos[\i]);
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (temp-final) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (temp-inicio) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
				
				\foreach \k [parse=true] in {0, ..., \puntosPorLado - 1} {
					\tikzmath {
						\porcen = (\k + 1) / (\puntosPorLado + 1);
					}
					\path (temp-inicio) -- (temp-final) 
						node[pos=\porcen] (temp) {};
					\coordinate (\coor-\ang-\k) at (temp.center);
				} 
			}
		}
		
		\foreach \i in {1, 2} {
			\fill (S-90-\i) circle (\eRadio);
		}
		
		\draw (S-315-1) -- (O-2-135-2);
		\draw (S-315-2) -- (O-2-135-1);
		
		\draw ($ (S-225-1)!0.5!(S-225-2) $) 
			-- ($ (O-1-45-1)!0.5!(O-1-45-2) $);

		\draw[|->] (S-45-0) -- (O-2-45-0);
		\draw[|->] (S-135-3) -- (O-1-135-3);
		
		\path ($ (S) + (0, {\sep / 4}) $) 
			node[above right=2pt, scale=\scaleEq] {$\delta^{+}$};
		\path ($ (O-1) + (0, {-\sep / 4}) $) node[below=2pt, scale=\scaleEq] 
			{$\delta^{-}$};
		\path ($ (O-2) + (0, {-\sep / 4}) $) node[below=2pt, scale=\scaleEq] 
			{$\delta^{-}$};
	\end{scope}
    
\end{tikzpicture}
\end{document}
```

Para conocer o estimar la estructura espacial de la molécula, debemos tener en cuenta también los pares de electrones libres

Por regla general, cuando en los enlaces existan pares de electrones libres, la geometría electrónica no coincide con la molecular, y pasa a ser polar