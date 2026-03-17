---
dia: 2026-03-08
etapa: empezado
referencias: []
aliases:
  - Metal
  - No metal
tags:
  - carrera/ingeniería-electrónica/quimica/tabla-periódica
  - carrera/ingeniería-electrónica/quimica/Compuestos-inorgánicos
  - nota/facultad
vinculoFacultad:
  - tema: Tabla periódica
    capitulo: 2
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Compuestos inorgánicos
    capitulo: 5
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se entiende por metal un elemento con pocos [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] en su última capa ($1$ y $2$) y excepcionalmente ($3$ ó $4$) y gran tendencia a cederlos, es decir una baja [[ingeniería electrónica/quimica/Tabla periódica/Energía de ionización|energía de ionización]]. Los no metales tendrán gran tendencia a la captación de electrones

Por lo tanto a medida que descendemos en un grupo los electrones están "más libres", menos atrapados por el campo de atracción del núcleo y el carácter metálico aumentará

Al avanzar hacia la derecha en un periodo la [[ingeniería electrónica/quimica/Tabla periódica/Afinidad electrónica|afinidad electrónica]] al aumentar, hace que el átomo tenga tendencia a captar electrones (con mayor [[ingeniería electrónica/quimica/Tabla periódica/Electronegatividad|electronegatividad]]), y por tanto el carácter metálico disminuirá

Podemos separarlos en $3$ grupos
1. Los metales, marcados en azul
    * Son [[ingeniería en informática/fisica 2/Electrostática en conductores y dieléctricos/Conductor|conductores de electricidad]], posee brillo, y es maleable y dúctil
2. Los no metales marcados en naranja
    * No conducen, no es maleable ni dúcil
3. Los metaloides marcados en verde
    * Poseen la apariencia de un metal y algunas de sus propiedades pero se comportan químicamente como un no metal

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{verde}{RGB}{166, 178, 78}
\definecolor{naranja}{RGB}{245, 170, 82}
   
\begin{tikzpicture}[scale=1.15, transform shape, thick]
    \def\atomos {{ 
        "H", "He", 
        "Li", "Be", "B", "C", "N", "O", "F", "Ne",
        "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
        "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
        "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
        "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
        "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Bd", "Sg", "Bh", "Hs", "Mt"
    }}
    \tikzmath {
        \periodos = 7; 
        \grupoS = 2; \grupoP = 6; \grupoD = 10; \grupoF = 14; 
        \alto = 1.1; \ancho = 0.85; 
        \sep = 0.9; \sepF = 0.75 * \sep; \minSep = 0.035;
        \scale = 0.55; \scaleNombre = 1; 
        \cantAtomos = dim(\atomos);
        
        \atHe = 2; \atNe = 10; \atAr = 18; \atKr = 36; \atXe = 54; \atRn = 86;
        
        function getGrupo(\z) {
            integer \diff; 
            if notgreater(\z, \atAr) then {
                \diff = notgreater(\z, \atNe) ? \atHe : \atNe;
                return notgreater(\z - \diff, \grupoS) ? 0 : 1;
            } else {
                 if notgreater(\z, \atXe) then {
                     \diff = notgreater(\z, \atKr) ? \atAr : \atKr;
                     if notgreater(\z - \diff, \grupoS) then {
                         return 0;
                     } else {
                         return notgreater(\z - \diff - \grupoS, \grupoD) ? 2 : 1;
                     };
                 } else {
                     \diff = notgreater(\z, \atRn) ? \atXe : \atRn;
                     if notgreater(\z - \diff, \grupoS) then {
                         return 0;
                     } else {
                         if notgreater(\z - \diff - \grupoS, \grupoF) then {
                             return 3;
                         } else {
                             return notgreater(\z - \diff - \grupoS - \grupoF, \grupoD) ? 2 : 1;
                         };
                     };
                 };
            };
        };
    }

    % Posiciones
    {
        \coordinate (atomo_1) at (0, 0.5);
        \coordinate (atomo_2) at ({(\grupoS + \grupoP + \grupoD - 1) * \ancho}, 0);
        
        \tikzmath { \gruposActuales = \grupoS + \grupoP; }
        \foreach \i [parse=true] in {1, ..., 2 * \gruposActuales} {
            \tikzmath {
                \numAtomo = int(\i + 2);
                \periodo = 1 + floor((\i - 1) / \gruposActuales); 
                \grupoReducido = mod(\i - 1, \gruposActuales); 
                \grupo = (\grupoReducido < 2) 
                    ? \grupoReducido : \grupoReducido + \grupoD;
                
                \x = \grupo; \y = \periodo;
            }
            % grupo y periodo
            \coordinate (atomo_\numAtomo) at ({\ancho * \x}, {-\alto * \y});
        }
        
        \tikzmath { \gruposActuales = \grupoS + \grupoP + \grupoD; }
        \foreach \grupo [parse=true] in {0, ..., \gruposActuales - 1} {
            \foreach \periodo [count=\i from 0] in {3, 4} {
                \tikzmath {
                    \numAtomo = int(18 + \i * \gruposActuales + \grupo + 1);
                    \x = \grupo; \y = \periodo;
                }
                % grupo y periodo
                \coordinate (atomo_\numAtomo) 
                    at ({\ancho * \x}, {-\alto * \y});
            }
        }
        \foreach \grupo [parse=true] in {0, ..., \gruposActuales - 1} {
            \foreach \inicio [count=\periodo from 5] in {55, 87} {
                \tikzmath {
                    \numDelGrupo = (\grupo < 3) ? \grupo : \grupo + \grupoF;
                    \numAtomo = int(\inicio + \numDelGrupo);
                    \x = \grupo; \y = \periodo;
                }
                % grupo y periodo
                \coordinate (atomo_\numAtomo) 
                    at ({\ancho * \x}, {-\alto * \y});
            }
        }
        
        \foreach \i [parse=true] in {0, ..., \grupoF - 1} {
            \foreach \inicio [count=\j from 1] in {58, 90} {
                \tikzmath { \numAtomo = int(\inicio + \i); }
                \coordinate (atomo_\numAtomo) at ($ 
                    (atomo_105) + ({\ancho * \i}, {-\alto * \j - \sepF}) 
                $);
            }
        }
    }
    
    %% Ejemplificar cada atomo
    \coordinate (atomo_71) at (atomo_57);
    \coordinate (atomo_103) at (atomo_89);
    
    \foreach \i in {1, ..., \cantAtomos} {
        \tikzmath { 
            \nombre = \atomos[int(\i - 1)]; 
            \grupo = getGrupo(\i) ;
            
            if \i <= 2 then {
                \fondo = "naranja";
            } else {
                \fondo = (\grupo == 0 || \grupo == 2) ? "azul" : "naranja";
            };
            
            if \i == 5 || \i == 14 || \i == 32 || \i == 33 || \i == 51 || \i == 52 || \i == 84 then {
                \fondo = "verde";
            };
            if \i == 13 || \i == 31 || \i == 49 || \i == 50 || \i == 81 || \i == 82 || \i == 83 then {
                \fondo = "azul";
            };
            
            \mostrar = (\grupo == 3) ? 0 : 1;
        }
        
        \ifnum \mostrar = 1 
            \draw[fill=\fondo, rounded corners = 0.3em] 
                ($ (atomo_\i) + (\minSep, \minSep) $) 
                    rectangle ++({\ancho - 2*\minSep}, {\alto - 2*\minSep});
            \path[color=white]
                ($ (atomo_\i) + ({\ancho / 2}, 0) $) -- ++(0, \alto)
                    node[pos=0.8, scale=\scale] {$\i$}
                    node[pos=0.5, scale=\scaleNombre, font=\bfseries] 
                        {\nombre};
        \fi
    }
    
    \foreach \numAtomo [count=\i from 1] in {3, 4, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 5, 6, 7, 8, 9, 2} {
        \path ($ (atomo_\numAtomo) + (0, \alto) $) -- ++(\ancho, 0)
            node[midway, above=2pt, scale=\scale] {Grupo $\i$};
    }
    
\end{tikzpicture}
\end{document}
```