---
dia: 2026-03-05
etapa: empezado
referencias: []
aliases: 
  - Grupo de la tabla periódica#^grupo-periodo
  - Periodo de la tabla periódica#^grupo-periodo
  - Número másico#^numeros
  - Número atómico#^numeros
  - Metal alcalino#^metal-alcalino
  - Metal alcalinotérreo#^metal-alcalinoterreos
  - Halógeno#^halogenos
  - Gas noble#^gas-noble
tags:
  - carrera/ingeniería-electrónica/quimica/tabla-periódica
  - carrera/ingeniería-electrónica/quimica/modelo-atómico
  - nota/facultad
vinculoFacultad:
  - tema: Modelo atómico
    capitulo: 1
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Tabla periódica
    capitulo: 2
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Cada nucleido que aparece en la tabla periódica está representado de la forma 
%% Hacer dibujo de E^A_Z  %%

Donde $Z$, conocido como número atómico, es el número de [[Protón|protones]], y $A$, conocido como número másico, es el número de protones y [[Neutrón|neutrones]] ^numeros

En la tabla, los elementos están representados cuando estos son neutros, por lo que la cantidad de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] es la misma que de protones, o sea, $Z$

En el caso de que sea un [[ingeniería electrónica/quimica/Modelo atómico/Ion|Ion]] y por lo tanto no estar en su estado neutro, se utiliza la esquina superior derecha, para presentar su carga
%% Hacer dibujo de E^A_Z ^{-2} => anoin %%

En la esquina superior izquierda se ubica la masa atómica medida en [[ingeniería electrónica/quimica/Modelo atómico/Unidad de masa atómica|umas]], esta no necesariamente sea un [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|número entero]] ya que se calcula como un promedio ponderado de cada [[ingeniería electrónica/quimica/Modelo atómico/Isótopo|isótopo]] con respecto a su proporción de ocurrencias
%% Hacer dibujo de C_6 ^{umas}  %%

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{verde}{RGB}{166, 178, 78}
\definecolor{naranja}{RGB}{245, 170, 82}
\definecolor{rojo}{RGB}{218, 111, 142}
   
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
    \def\fondos {{ "azul", "verde", "naranja", "rojo", "white" }}
    \def\letras {{ "white", "white", "white", "white", "black" }}
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
    
    %% Ejemplificar cada atomo
    \foreach \i in {1, ..., \cantAtomos} {
        \tikzmath { 
            \nombre = \atomos[int(\i - 1)]; 
            \grupo = (\i > 2) ? getGrupo(\i) : 4;
            \fondo = \fondos[\grupo]; \letra = \letras[\grupo];
        }
        \draw[fill=\fondo, rounded corners = 0.3em] 
            ($ (atomo_\i) + (\minSep, \minSep) $) 
                rectangle ++({\ancho - 2*\minSep}, {\alto - 2*\minSep});
        \path[color=\letra]
            ($ (atomo_\i) + ({\ancho / 2}, 0) $) -- ++(0, \alto)
                node[pos=0.8, scale=\scale] {$\i$}
                node[pos=0.5, scale=\scaleNombre, font=\bfseries] 
                    {\nombre};
    }
    
    \foreach \numAtomo [count=\i from 1] in {3, 4, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 5, 6, 7, 8, 9, 2} {
        \path ($ (atomo_\numAtomo) + (0, \alto) $) -- ++(\ancho, 0)
            node[midway, above=2pt, scale=\scale] {Grupo $\i$};
    }
    
\end{tikzpicture}
\end{document}
```

Se definen los grupos como está indicado en la tabla, por regla general son los las columnas. Por otro lado, el período se refiere a las filas de la tabla ^grupo-periodo

En color azul, en los grupos $1$ y $2$, se encuentran los átomos donde en su configuración externa tiene electrones en el orbital $s$
* Al grupo $1$ se los llama metales alcalinos ^metal-alcalino
* Al grupo $2$ se los llama metales alcalinotérreos ^metal-alcalinoterreos

En color verde, del grupo $13$ al $18$, se encuentran los átomos donde en su configuración externa tienen electrones en el orbital $p$
* Al grupo $17$ se los llaman halógenos ^halogenos
* Al grupo $18$ se los llaman gases nobles ^gas-nobles

En color naranja, del grupo $3$ al $12$, se encuentran los átomos donde en su configuración externa tienen electrones en el orbital $d$. Se los conoce como metales de transición

En color rojo, en la parte inferior pero se encuentran entre el grupo $2$ y $3$,  se encuentran los átomos donde en su configuración externa tienen electrones en el orbital $f$. Se los conoce como metales de transición interna 

## Propiedades periódicas
---
Son propiedades que tienen una tendencia medible y predecible al avanzar en un grupo o en un período

Dependen de $2$ fuerzas contrarias
* La carga nuclear, proporcional a $Z$
* El apantallamiento electrónico, que es el efecto de los electrones que están ubicados por debajo del electrón que estoy considerando

Estas propiedades son
* [[Radio atómico|Radio atómico]]
* [[Radio iónico|Radio iónico]]
* [[Energía de ionización|Energía de ionización]]
* [[Afinidad electrónica|Afinidad electrónica]]
* [[Electronegatividad|Electronegatividad]]
* [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|Carácter metálico]]

![[ingeniería electrónica/quimica/Tabla periódica/img/Propiedades periódicas.png]]
