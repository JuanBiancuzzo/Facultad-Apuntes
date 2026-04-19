---
dia: 2026-04-03
etapa: empezado
referencias:
  - "1147"
aliases: 
  - Hibridación sp3#Hibridación sp3
  - Hibridación sp2#Hibridación sp2
  - Hibridación sp#Hibridación sp
tags:
  - carrera/ingeniería-electrónica/quimica/Química-orgnánica-e-inorgánica
  - nota/facultad
vinculoFacultad:
  - tema: Química orgnánica e inorgánica
    capitulo: 5
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la interacción de [[ingeniería electrónica/quimica/Modelo atómico/Modelo atómico orbital|orbitales]] atómicos dentro de un [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomo]] para formar nuevos orbitales híbridos. Los orbitales atómicos hibridados son los que se superponen en la formación de los enlaces, dentro de la [[Teoría del enlace de valencia|Teoría del enlace de valencia]], y justifican la geometría molecular

## Hibridación sp3
---
Tomando como ejemplo la [[Molécula|molécula]] de metano ($\text{C} \text{H}_4$), el [[Carbono|carbono]] central este tiene $6$ [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]], $2$ en el orbital $1\text{s}^2$, $2$ en el orbital $2\text{s}^2$ y los restantes $2$ en el orbital $2\text{p}^2$. Podemos ver en el siguiente grafico como se ubican los electrones en los correspondientes orbitales, donde podemos notar que para el orbital $2\text{p}$ se ubica un electrón en $2\text{p}_x$ y otro en $2\text{p}_y$, dejando $2\text{p}_z$ vacío

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
	}
	
	\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
		node[midway, above=2pt, rotate=90, scale=\scale] {Energía};

	\coordinate (corrimiento) at (0, 0);
	\foreach \l in {1, ..., \subniveles} {
		\tikzmath { 
			\pos = int(\l - 1); 
			\numeroAzimutal = \numerosAzimutales[\pos]; 
			\orbitales = \potencias[\pos]; 
		}
		
		\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
			\ifnum \n < \niveles
			\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
			\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
				\draw ($ 
					(corrimiento |- altura) 
					+ ({\i * (\largo + \interSep)}, 0) 
				$) -- ++(\largo, 0)
					node[midway] (\n-\numeroAzimutal-\i) {};
			}
			\fi
		}
		
		\coordinate (corrimiento) at ($ 
			(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
		$);
	}
	
	\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
		\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
	}

	\begin{scope}[below=2pt, scale=\scale]
		\path (2-p-0) node {$2$p$_x$};
		\path (2-p-1) node {$2$p$_y$};
		\path (2-p-2) node {$2$p$_z$};
	\end{scope}
	
	\tikzmath { \dobles = 2; \simples = 4; }
	\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
		\tikzmath { 
			\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
			\simpleFlecha = (\i <= \simples) ? 1 : 0;
		}
		\ifnum \dobleFlecha = 1
			\path (\orbital) node[above=0pt, scale=\scale] 
				{$\upharpoonleft\downharpoonright$};
		
		\else	
			\ifnum \simpleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft~$};
			\fi	
		\fi	
	}
	
    
\end{tikzpicture}
\end{document}
```

Si los [[Hidrógeno|hidrógenos]] usarán su electrón en la [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|unión covalente]] para llenar estos $4$ electrones faltantes, y recordando que los orbitales $\text{p}$ están alineados con los ejes, y por lo tanto están separados por ángulos de $90 \degree$

La unión tendríamos $2$ hidrógenos en lados opuestos del carbono, dado el orbital $2\text{p}_z$ y otros $2$ en el [[licenciatura en ciencias matemáticas/analisis 1/Vectores y geometría del espacio/Plano|plano]] perpendicular, separados por $90 \degree$ cada uno, lo cual podemos imaginar que no es la configuración más estable ya que no esta equidistantes maximizando la [[Distancia|distancia]] entre enlaces

Podemos suponer que con un poco de [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]], un electrón del orbital $2\text{s}$ pasa al orbital $2\text{p}_z$ y tendríamos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
	}
	
	\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
		node[midway, above=2pt, rotate=90, scale=\scale] {Energía};

	\coordinate (corrimiento) at (0, 0);
	\foreach \l in {1, ..., \subniveles} {
		\tikzmath { 
			\pos = int(\l - 1); 
			\numeroAzimutal = \numerosAzimutales[\pos]; 
			\orbitales = \potencias[\pos]; 
		}
		
		\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
			\ifnum \n < \niveles
			\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
			\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
				\draw ($ 
					(corrimiento |- altura) 
					+ ({\i * (\largo + \interSep)}, 0) 
				$) -- ++(\largo, 0)
					node[midway] (\n-\numeroAzimutal-\i) {};
			}
			\fi
		}
		
		\coordinate (corrimiento) at ($ 
			(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
		$);
	}
	
	\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
		\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
	}

	\begin{scope}[below=2pt, scale=\scale]
		\path (2-p-0) node {$2$p$_x$};
		\path (2-p-1) node {$2$p$_y$};
		\path (2-p-2) node {$2$p$_z$};
	\end{scope}
	
	\tikzmath { \dobles = 1; \simples = 5; }
	\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
		\tikzmath { 
			\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
			\simpleFlecha = (\i <= \simples) ? 1 : 0;
		}
		\ifnum \dobleFlecha = 1
			\path (\orbital) node[above=0pt, scale=\scale] 
				{$\upharpoonleft\downharpoonright$};
		
		\else	
			\ifnum \simpleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft~$};
			\fi	
		\fi	
	}
    
\end{tikzpicture}
\end{document}
```

Ahora tendríamos una configuración donde todos los enlaces están a la mayor distancia posible, entre ellos, y podríamos esperar que $3$ de estos enlaces sean más débiles energéticamente dado por lor orbitales $2\text{p}$ y uno fuerte dado por el orbital $2\text{s}$

Cuando se midió, se obtuvo que los $4$ enlaces tenían la misma energía, y acá aparece la idea de hibridación, donde se combina un orbital $\text{s}$ y, en este caso, $3$ orbitales $\text{p}$ para formar $4$ orbitales con una energía promedio y que llamaremos $\text{s} \text{p}^3$, representables de la siguiente forma

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
		
		\distancia = 8 * (\largo + \interSep);
		\altoTotal = \sep * \niveles;
		\alto = 0.25 * (0.5 + 0.3) * \distancia;
	}

	\coordinate (inicio) at ({-0.5 * \distancia}, 0);
	\coordinate (final) at ({+0.3 * \distancia}, 0);
	\draw[->, ultra thick, shorten <=1em, shorten >=1em] 
		(inicio) .. controls 
			($ (inicio) + (\alto, \alto) $) 
			and ($ (final) + (-\alto, \alto) $) 
		.. (final);

	\begin{scope}[cm={1, 0, 0, 1, ({-\distancia / 2 - 4 * (\largo + \interSep)}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\draw ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep)}, 0) 
					$) -- ++(\largo, 0)
						node[midway] (\n-\numeroAzimutal-\i) {};
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
			\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
		}
	
		\begin{scope}[below=2pt, scale=\scale]
			\path (2-p-0) node {$2$p$_x$};
			\path (2-p-1) node {$2$p$_y$};
			\path (2-p-2) node {$2$p$_z$};
		\end{scope}
		
		\tikzmath { \dobles = 1; \simples = 5; }
		\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
	
	\begin{scope}[cm={1, 0, 0, 1, ({\distancia / 2}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\coordinate (\n-\numeroAzimutal-\i) at ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep) + \largo / 2}, 0) 
					$);
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\path (1-s-0) node[below=2pt, scale=\scale] {$1$s};
		\coordinate (altura-sp3) at ($ (2-s-0)!0.25!(2-p-0) $);
		\foreach \orbital [count=\i from 0] in {2-s-0, 2-p-0, 2-p-1, 2-p-2} {
			\coordinate (sp3-\i) at (\orbital |- altura-sp3);	
			\path (sp3-\i) node[below=2pt, scale=\scale] {sp$^3$};
		}
		
		
		\tikzmath { \dobles = 1; \simples = 5; }
		\foreach \orbital [count=\i] in {1-s-0, sp3-0, sp3-1, sp3-2, sp3-3} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\draw ($ (\orbital) + ({-\largo / 2}, 0) $) -- ++(\largo, 0);
			
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
    
\end{tikzpicture}
\end{document}
```

De esta forma, los $4$ enlaces tiene la misma energía, y forman una geometría tetraédrica 

## Hibridación sp2
---
Con la misma idea que la hibridación $\text{s} \text{p}^3$, utilizando como ejemplo la molécula de $\text{B} \text{F}_3$, donde el átomo de [[Boro|boro]] tiene $5$ electrones disponibles

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
		\dobles = 2; \simples = 3;
	}
	
	\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
		node[midway, above=2pt, rotate=90, scale=\scale] {Energía};

	\coordinate (corrimiento) at (0, 0);
	\foreach \l in {1, ..., \subniveles} {
		\tikzmath { 
			\pos = int(\l - 1); 
			\numeroAzimutal = \numerosAzimutales[\pos]; 
			\orbitales = \potencias[\pos]; 
		}
		
		\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
			\ifnum \n < \niveles
			\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
			\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
				\draw ($ 
					(corrimiento |- altura) 
					+ ({\i * (\largo + \interSep)}, 0) 
				$) -- ++(\largo, 0)
					node[midway] (\n-\numeroAzimutal-\i) {};
			}
			\fi
		}
		
		\coordinate (corrimiento) at ($ 
			(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
		$);
	}
	
	\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
		\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
	}

	\begin{scope}[below=2pt, scale=\scale]
		\path (2-p-0) node {$2$p$_x$};
		\path (2-p-1) node {$2$p$_y$};
		\path (2-p-2) node {$2$p$_z$};
	\end{scope}
	
	\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
		\tikzmath { 
			\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
			\simpleFlecha = (\i <= \simples) ? 1 : 0;
		}
		\ifnum \dobleFlecha = 1
			\path (\orbital) node[above=0pt, scale=\scale] 
				{$\upharpoonleft\downharpoonright$};
		
		\else	
			\ifnum \simpleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft~$};
			\fi	
		\fi	
	}
	
    
\end{tikzpicture}
\end{document}
```

Por lo tanto con un extra de energía, se mueve un electrón del orbital $2 \text{s}$ al orbital $2 \text{p}_y$ y se combinan un orbital $s$ con $2$ orbitales $p$, generando la hibridación $\text{s} \text{p}^2$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
		\dobles = 1; \simples = 4;
		
		\distancia = 8 * (\largo + \interSep);
		\altoTotal = \sep * \niveles;
		\alto = 0.25 * (0.5 + 0.3) * \distancia;
	}

	\coordinate (inicio) at ({-0.5 * \distancia}, 0);
	\coordinate (final) at ({+0.3 * \distancia}, 0);
	\draw[->, ultra thick, shorten <=1em, shorten >=1em] 
		(inicio) .. controls 
			($ (inicio) + (\alto, \alto) $) 
			and ($ (final) + (-\alto, \alto) $) 
		.. (final);

	\begin{scope}[cm={1, 0, 0, 1, ({-\distancia / 2 - 4 * (\largo + \interSep)}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\draw ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep)}, 0) 
					$) -- ++(\largo, 0)
						node[midway] (\n-\numeroAzimutal-\i) {};
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
			\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
		}
	
		\begin{scope}[below=2pt, scale=\scale]
			\path (2-p-0) node {$2$p$_x$};
			\path (2-p-1) node {$2$p$_y$};
			\path (2-p-2) node {$2$p$_z$};
		\end{scope}
		
		\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
	
	\begin{scope}[cm={1, 0, 0, 1, ({\distancia / 2}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\coordinate (\n-\numeroAzimutal-\i) at ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep) + \largo / 2}, 0) 
					$);
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\path (1-s-0) node[below=2pt, scale=\scale] {$1$s};
		\path (2-p-2) node[below=2pt, scale=\scale] {$2$p$_z$};
		
		\coordinate (altura-sp2) at ($ (2-s-0)!0.33!(2-p-0) $);
		\foreach \orbital [count=\i from 0] in {2-s-0, 2-p-0, 2-p-1} {
			\coordinate (sp2-\i) at (\orbital |- altura-sp2);	
			\path (sp2-\i) node[below=2pt, scale=\scale] {sp$^2$};
		}
		
		
		\foreach \orbital [count=\i] in {1-s-0, sp2-0, sp2-1, sp2-2, 2-p-2} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\draw ($ (\orbital) + ({-\largo / 2}, 0) $) -- ++(\largo, 0);
			
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
    
\end{tikzpicture}
\end{document}
```

Dejando libre un orbital $\text{p}$ y logrando que se tenga una molécula plana triangular

## Hibridación sp
---
Con la misma idea que la hibridación $\text{s} \text{p}^3$, utilizando como ejemplo la molécula de $\text{C} \text{O}_2$, donde el átomo de carbono tiene $6$ electrones disponibles, y utiliza $2$ electrones para cada [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|doble enlace]] con los [[Oxígeno|oxígenos]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
		\dobles = 2; \simples = 4;
	}
	
	\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
		node[midway, above=2pt, rotate=90, scale=\scale] {Energía};

	\coordinate (corrimiento) at (0, 0);
	\foreach \l in {1, ..., \subniveles} {
		\tikzmath { 
			\pos = int(\l - 1); 
			\numeroAzimutal = \numerosAzimutales[\pos]; 
			\orbitales = \potencias[\pos]; 
		}
		
		\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
			\ifnum \n < \niveles
			\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
			\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
				\draw ($ 
					(corrimiento |- altura) 
					+ ({\i * (\largo + \interSep)}, 0) 
				$) -- ++(\largo, 0)
					node[midway] (\n-\numeroAzimutal-\i) {};
			}
			\fi
		}
		
		\coordinate (corrimiento) at ($ 
			(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
		$);
	}
	
	\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
		\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
	}

	\begin{scope}[below=2pt, scale=\scale]
		\path (2-p-0) node {$2$p$_x$};
		\path (2-p-1) node {$2$p$_y$};
		\path (2-p-2) node {$2$p$_z$};
	\end{scope}
	
	\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
		\tikzmath { 
			\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
			\simpleFlecha = (\i <= \simples) ? 1 : 0;
		}
		\ifnum \dobleFlecha = 1
			\path (\orbital) node[above=0pt, scale=\scale] 
				{$\upharpoonleft\downharpoonright$};
		
		\else	
			\ifnum \simpleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft~$};
			\fi	
		\fi	
	}
	
    
\end{tikzpicture}
\end{document}
```

Por lo tanto con un extra de energía, se mueve un electrón del orbital $2 \text{s}$ al orbital $2 \text{p}_z$ y se combinan un orbital $s$ con un orbitales $p$, generando la hibridación $\text{s} \text{p}$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
	\def\numerosAzimutales {{ "s", "p" }}
	\def\potencias {{ 1, 3 }}
	\tikzmath {
		\niveles = 3; \scale = 1; \sep = 1.2; 
		\largo = 0.5; \interSep = 0.2; \factorCre = 0.6;
		\subniveles = dim(\numerosAzimutales);
		\dobles = 1; \simples = 6;
		
		\distancia = 8 * (\largo + \interSep);
		\altoTotal = \sep * \niveles;
		\alto = 0.25 * (0.5 + 0.3) * \distancia;
	}

	\coordinate (inicio) at ({-0.5 * \distancia}, 0);
	\coordinate (final) at ({+0.3 * \distancia}, 0);
	\draw[->, ultra thick, shorten <=1em, shorten >=1em] 
		(inicio) .. controls 
			($ (inicio) + (\alto, \alto) $) 
			and ($ (final) + (-\alto, \alto) $) 
		.. (final);

	\begin{scope}[cm={1, 0, 0, 1, ({-\distancia / 2 - 4 * (\largo + \interSep)}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\draw ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep)}, 0) 
					$) -- ++(\largo, 0)
						node[midway] (\n-\numeroAzimutal-\i) {};
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\foreach \nS [parse=true] in {1, ..., \niveles - 1} {
			\path (\nS-s-0) node[below=2pt, scale=\scale] {$\nS$s};
		}
	
		\begin{scope}[below=2pt, scale=\scale]
			\path (2-p-0) node {$2$p$_x$};
			\path (2-p-1) node {$2$p$_y$};
			\path (2-p-2) node {$2$p$_z$};
		\end{scope}
		
		\foreach \orbital [count=\i] in {1-s-0, 2-s-0, 2-p-0, 2-p-1, 2-p-2} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
	
	\begin{scope}[cm={1, 0, 0, 1, ({\distancia / 2}, {-\altoTotal / 2})}]
		\draw[->] ({-\sep / 2}, 0) -- ({-\sep / 2}, {\niveles * \sep})
			node[midway, above=2pt, rotate=90, scale=\scale] {Energía};
	
		\coordinate (corrimiento) at (0, 0);
		\foreach \l in {1, ..., \subniveles} {
			\tikzmath { 
				\pos = int(\l - 1); 
				\numeroAzimutal = \numerosAzimutales[\pos]; 
				\orbitales = \potencias[\pos]; 
			}
			
			\foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
				\ifnum \n < \niveles
				\coordinate (altura) at (0, {(\n + (\l - 1) * \factorCre) * \sep});
				\foreach \i [parse=true] in {0, ..., \orbitales - 1} {
					\coordinate (\n-\numeroAzimutal-\i) at ($ 
						(corrimiento |- altura) 
						+ ({\i * (\largo + \interSep) + \largo / 2}, 0) 
					$);
				}
				\fi
			}
			
			\coordinate (corrimiento) at ($ 
				(corrimiento) + ({(\largo + \interSep) * \orbitales}, 0)
			$);
		}
		
		\path (1-s-0) node[below=2pt, scale=\scale] {$1$s};
		\path (2-p-1) node[below=2pt, scale=\scale] {$2$p$_y$};
		\path (2-p-2) node[below=2pt, scale=\scale] {$2$p$_z$};
		
		\coordinate (altura-sp) at ($ (2-s-0)!0.5!(2-p-0) $);
		\foreach \orbital [count=\i from 0] in {2-s-0, 2-p-0} {
			\coordinate (sp-\i) at (\orbital |- altura-sp);	
			\path (sp-\i) node[below=2pt, scale=\scale] {sp};
		}
		
		
		\foreach \orbital [count=\i] in {1-s-0, sp-0, sp-1, 2-p-1, 2-p-2} {
			\tikzmath { 
				\dobleFlecha = (\i <= \dobles) ? 1 : 0; 
				\simpleFlecha = (\i <= \simples) ? 1 : 0;
			}
			\draw ($ (\orbital) + ({-\largo / 2}, 0) $) -- ++(\largo, 0);
			
			\ifnum \dobleFlecha = 1
				\path (\orbital) node[above=0pt, scale=\scale] 
					{$\upharpoonleft\downharpoonright$};
			
			\else	
				\ifnum \simpleFlecha = 1
					\path (\orbital) node[above=0pt, scale=\scale] 
						{$\upharpoonleft~$};
				\fi	
			\fi	
		}
	\end{scope}
    
\end{tikzpicture}
\end{document}
```

Dejando libre $2$ orbitales $\text{p}$ y logrando que se tenga una molécula lineal

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```