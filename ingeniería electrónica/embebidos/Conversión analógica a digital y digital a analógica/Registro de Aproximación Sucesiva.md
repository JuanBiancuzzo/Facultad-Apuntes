---
dia: 2024-10-01
tags:
  - carrera/ingeniería-electrónica/embebidos/Conversión-analógica-a-digital-y-digital-a-analógica
  - nota/facultad
aliases:
  - SAR
---
# Definición
---
La arquitectura de un [[Conversor Analógico-Digital|ADC]] SAR es bastante simple, como se puede ver en el siguiente diagrama

![[DAC.png]]

Primero se introduce una [[Tensión|tensión]] analógica en un [[Circuito eléctrico|circuito]] de seguimiento/retención

Este circuito también se denomina comúnmente circuito de muestra/retención, que toma una muestra instantánea de la tensión analógica [[Variable|variable]] y utiliza esa muestra como valor que se convertirá en un número digital

El bloque `N-BIT REGISTER`, está configurado en un valor medio de escala. Este valor depende de la cantidad de bits de la conversión final

El `N-BIT` [[Conversor Digital-Analógico|DAC]] hace una [[Búsqueda binaria|búsqueda binaria]], empezando con el bit más grande, que representa la mitad de la $V_{REF}$ y usando el `COMPARATOR`, la cual da un $1$ si $V_{IN}$ es mayor que $V_{DAC}$, y $0$ en caso contrario

Si se genera un $1$, se retendrá el bit más significativo en el `REGISTRO N-BIT`, de lo contrario, se restablecerá a $0$. El módulo `SAR LOGIC` se desplazará $1$ bit hacia la derecha y repetirá el proceso de comparación. Esta secuencia se repite hasta que se alcanza y procesa la posición del bit menos significativo

El ADC de STM real utiliza $12$ bits, para la demostración vamos a usar el número $0.72 V_{REF}$ ya que el $0.72$ es periódico en binario 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}
\usetikzlibrary{fpu}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \begin{scope}
    \tikzmath { \bits = 12; \largo = 14; \alto = 8; \sep = 0.75; }
    
    \draw[->] (0, 0) -- ({\largo + 0.5}, 0) node[right=2pt, scale=1.1] {$t$};
    \draw[->] (0, 0) -- (0, {\alto + 1}) 
        node[above=2pt, scale=0.8] {$V_{DAC}/V_{REF}$};
    
    \tikzmath { \pRe = \largo / \bits; }
    \foreach \pos [evaluate=\pos as \bit using int(\bits - \pos)] in 
        {1, ..., \bits} 
    {
        \draw[dashed] ({\pos * \pRe}, -\sep) -- ++(0, {\alto + \sep + 0.5});
        \path ({\pos * \pRe}, {-\sep / 2}) -- ++(-\pRe, 0) 
            node[midway, scale=0.9] {Bit $\bit$};
    }
    
    \tikzmath { \numero = 0.72; \pRe = \largo / \bits; }
    \draw[thin] (-0.2, {\numero * \alto}) -- ++({\largo + 0.7}, 0)
        node[right=2pt] {$V_{IN}$};
    
    \path (0, {\alto / 2}) node (temp) {};
    \foreach \pos [parse=true] in {0, ..., \bits - 1} {
        \tikzmath { 
            coordinate \actual;
            \actual = (temp.center);
            \altura = (\actualy * 0.03515 / \alto);
            \variacion = \alto * ( (\altura < \numero) - 0.5) / (2^int(\pos+1)); 
        }
        \draw[ultra thick] (temp.center) 
            -- ++(\pRe, 0)
                node (rel-\pos) {}
            -- ($ (temp.center) + (\pRe, \variacion) $)
                node (temp) {};
    }
    
    \draw (0.2, \alto) -- ++(-0.4, 0) node[left=2pt, scale=0.9] {$1$};
    \foreach \pos [parse=true] in {0, ..., \bits - 1} {
        \tikzmath {
            coordinate \actual;
            \actual = (rel-\pos.center);
            \altura = (\actualy * 0.0351 / \alto);
            \denominador = int(2^(\pos + 1));
        }
        \pgfkeys{
            /pgf/number format/.cd,frac, 
            frac denom=\denominador
        }
        \draw (rel-\pos.center -| 0.2, 0) -- ++(-0.4, 0);
        \path ($ (rel-\pos.center) + (0.1, 0) $)
            node[above left=2pt, scale=1.1] {$\pgfmathprintnumber{\altura}$};
    }
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Vemos como empezando con `0b1000 0000 0000`, y probamos si es mayor o menor a la tensión que estamos midiendo, si es mayor, en ese bit, se le asigna un $1$, sino un $0$, y se pasa al siguiente bit. En el ejemplo, como era mayor, el número en la siguiente prueba es `0b1100 0000 0000` y como es mayor, entonces pasa a ser $0$ y se prueba `0b1010 0000 0000`, y así siguiendo hasta llegar a `0b1011 1000 0101`
