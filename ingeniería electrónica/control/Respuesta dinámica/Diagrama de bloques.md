---
dia: 2025-03-20
etapa: ampliar
referencias:
  - "899"
  - "873"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Interconexiones entre transferencias
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un diagrama de bloques de un [[Sistema|sistema]] es una representación gráfica de las [[Función|funciones]] que lleva a cabo cada componente y el flujo de señales. Tales diagramas muestran las relaciones existentes entre los diversos componentes

Las ventajas de la representación mediante diagramas de bloques es indicar de forma más realista el flujo de las [[Señal|señales]] del sistema real, donde los componentes muestran el flujo y las contribuciones de cada componente al desempeño general del sistema

En un diagrama de bloques todas las variables del sistema se enlazan unas con otras mediante bloques funciones. El bloque funcional o simplemente bloque es un símbolo para representar la operación matemática que sobre la señal de entrada hace el bloque para producir la salida. Las [[Transferencia del sistema|funciones de transferencia]] de los componentes por lo general se introducen en los bloques correspondientes, que se conectan mediante flechas para indicar la dirección del flujo de señales

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, ultra thick]
    \tikzmath { \largo = 2.5; \alto = 1.5; \scale = 0.7; \sep = 1.3; }

    \draw (0, 0) rectangle ++(\largo, \alto)
        node[midway, align=center, scale=\scale]
            {Función de\\transferencia\\$G(s)$};

    \draw[<-] (0, {\alto / 2}) -- ++(-\sep, 0);
    \draw[->] (\largo, {\alto / 2}) -- ++(\sep, 0);    

\end{tikzpicture}
\end{document}
```

## Punto de suma
---
Se indica una operación de suma, mediante un círculo con una cruz. El signo más o el signo menos de cada punto de flecha indica si la señal debe sumarse o restarse

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { \radio = 0.6; \scale = 0.9; \sep = 1.3; }

    \draw (0, 0) circle (\radio); 
    \draw ({\radio * cos(135)}, {\radio * sin(135)})
        -- ({\radio * cos(-45)}, {\radio * sin(-45)});
    \draw ({\radio * cos(-135)}, {\radio * sin(-135)})
        -- ({\radio * cos(45)}, {\radio * sin(45)});
        
    \path (0, 0) -- ++(0, -\radio) node[pos=0.6, scale=\scale] {$-$};
    \path (0, 0) -- ++(-\radio, 0) node[pos=0.6, scale=\scale] {$+$};
    
    \draw[<-] (-\radio, 0) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$a$};
    \draw[<-] (0, -\radio) -- ++(0, -\sep)
        node[above right=2pt, scale=\scale] {$b$};
    \draw[->] (\radio, 0) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$a - b$};

\end{tikzpicture}
\end{document}
```

## Punto de ramificación
---
Un punto de ramificación es aquel a partir del cual la señal de un bloque va de modo concurrente a otros bloques o puntos de suma

## Transferencia de cascada
---
Teniendo como entrada $R(s)$ y bloques en cascada $G_1(s)$ y $G_2(s)$ 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { \largo = 2.5; \alto = 1.5; \scale = 0.85; \sep = 1.3; }

    \coordinate (esq_1) at (0, 0);
    \draw (esq_1) rectangle ++(\largo, \alto) node[midway] {$G_1(s)$};
    \path (esq_1) -- ++(0, \alto) node[midway] (ini_1) {};
    \path ($ (esq_1) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_1) {};
    
    \coordinate (esq_2) at ($ (fin_1) + (\sep, {-\alto / 2}) $);
    \draw (esq_2) rectangle ++(\largo, \alto) node[midway] {$G_2(s)$};
    \path (esq_2) -- ++(0, \alto) node[midway] (ini_2) {};
    \path ($ (esq_2) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_2) {};

    \draw[<-] (ini_1.center) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$R(s)$};
    \draw[->] (fin_1.center) -- (ini_2.center);
    \draw[->] (fin_2.center) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$C(s)$};

\end{tikzpicture}
\end{document}
```

Obtenemos la transferencia $H(s)$ con la salida $C(s)$ como $$ H(s) = \frac{C(s)}{R(s)} = G_1(s) ~ G_2(s) $$

## Transferencia en paralelo
---
Teniendo como entrada $R(s)$ y bloques en paralelo $G_1(s)$ y $G_2(s)$ 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5;  \alto = 1.5; \isep = 2;
        \radio = 0.4; 
        \scale = 0.85; \sep = 1.3; 
    }

    \coordinate (esq_1) at (0, {\isep - \alto / 2});
    \draw (esq_1) rectangle ++(\largo, \alto) node[midway] {$G_1(s)$};
    \path (esq_1) -- ++(0, \alto) node[midway] (ini_1) {};
    \path ($ (esq_1) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_1) {};
    
    \coordinate (esq_2) at (0, {-\isep + \alto / 2});
    \draw (esq_2) rectangle ++(\largo, \alto) node[midway] {$G_2(s)$};
    \path (esq_2) -- ++(0, \alto) node[midway] (ini_2) {};
    \path ($ (esq_2) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_2) {};
    
    \coordinate (punto_rami) at ($ (ini_1)!0.5!(ini_2) + (-\sep, 0) $);
    
    \tikzmath { \supDer = cos(45); }
    \coordinate (punto_suma) at ($ (fin_1)!0.5!(fin_2) + (\sep, 0) $);
    \begin{scope}[cm={1, 0, 0, 1, (punto_suma)}]
        \draw (0, 0) circle (\radio); 
        \draw ({-\radio * \supDer}, {\radio * \supDer})
            -- ({\radio * \supDer}, {-\radio * \supDer});
        \draw ({-\radio * \supDer}, {-\radio * \supDer})
            -- ({\radio * \supDer}, {\radio * \supDer});
    \end{scope}
        
    \path (punto_suma) -- ++(0, \radio) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_sup) {};
    \path (punto_suma) -- ++(0, -\radio) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_inf) {};
    \path (punto_suma) -- ++(\radio, 0)
        node[pos=1] (ps_der) {};
        
    \draw[<-] (ini_1.center) -- (ini_1 -| punto_rami)
        -- (punto_rami);
    \draw[<-] (ini_2.center) -- (ini_2 -| punto_rami)
        -- (punto_rami);
    
    \draw (punto_rami) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$R(s)$};
        
    \draw[->] (fin_1.center) -- (fin_1 -| ps_sup)
        -- (ps_sup.center);
    \draw[->] (fin_2.center) -- (fin_2 -| ps_inf)
        -- (ps_inf.center);
    
    \draw[->] (ps_der.center) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$C(s)$};

\end{tikzpicture}
\end{document}
```

Obtenemos la transferencia $H(s)$ con la salida $C(s)$ como $$ H(s) = \frac{C(s)}{R(s)} = G_1(s) + G_2(s) $$

## Transferencia de lazo cerrado
---
Teniendo como entrada $R(s)$ y bloques en [[Controlador closed-loop#En teoría de control|lazo cerrado]] $G_1(s)$ y $G_2(s)$ 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5;  \alto = 1.5; \isep = 2;
        \radio = 0.4; 
        \scale = 0.85; \sep = 1.3; 
    }

    \coordinate (esq_1) at (0, {\isep - \alto / 2});
    \draw (esq_1) rectangle ++(\largo, \alto) node[midway] {$G_1(s)$};
    \path (esq_1) -- ++(0, \alto) node[midway] (ini_1) {};
    \path ($ (esq_1) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_1) {};
    
    \coordinate (esq_2) at (0, {-\isep + \alto / 2});
    \draw (esq_2) rectangle ++(\largo, \alto) node[midway] {$G_2(s)$};
    \path (esq_2) -- ++(0, \alto) node[midway] (ini_2) {};
    \path ($ (esq_2) + (\largo, 0)$) -- ++(0, \alto) node[midway] (fin_2) {};
    
    \coordinate (punto_rami) at ($ (fin_1)!0.5!(fin_2) + (\sep, 0) $);
    
    \tikzmath { \supDer = cos(45); }
    \coordinate (punto_suma) at ($ (ini_1)!0.5!(ini_2) + (-\sep, 0) $);
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
    \path (punto_suma) -- ++(-\radio, 0) node[pos=0.6, scale=\scale] {$+$}
        node[pos=1] (ps_izq) {};
        
    \draw[<-] (ini_1.center) -- (ini_1 -| ps_sup)
        -- (ps_sup.center);
    \draw[->] (ini_2.center) -- (ini_2 -| ps_inf)
        -- (ps_inf.center);
    
    \draw[<-] (ps_izq.center) -- ++(-\sep, 0)
        node[above right=2pt, scale=\scale] {$R(s)$};
        
    \draw (fin_1.center) -- (fin_1 -| punto_rami)
        -- (punto_rami);
    \draw[<-] (fin_2.center) -- (fin_2 -| punto_rami)
        -- (punto_rami);
    
    \draw[->] (punto_rami) -- ++(\sep, 0)
        node[above left=2pt, scale=\scale] {$C(s)$};

\end{tikzpicture}
\end{document}
```

Obtenemos la transferencia $H(s)$ con la salida $C(s)$ como $$ H(s) = \frac{C(s)}{R(s)} = \frac{G_1(s)}{1 + G_1(s) ~ G_2(s)} $$ en este caso, se esta tomando que es una [[Controlador closed-loop#Realimentación negativa|realimentación negativa]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```