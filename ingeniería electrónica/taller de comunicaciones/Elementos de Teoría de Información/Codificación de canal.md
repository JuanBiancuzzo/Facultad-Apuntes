---
dia: 2026-02-17
etapa: empezado
referencias: []
aliases: 
  - 2do Teorema de Shannon#^teo-8-1-9
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se puede [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelar]] el proceso de codificación de un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] con esta estructura

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 1.5; \largo = 1.5;
        \scale = 0.9; 
    }
    
    \draw (0, 0) rectangle ++(\ancho, \alto)
        node[midway, scale=\scale, align=center]{Codificación\\de canal};
    
    \begin{scope}[shorten <=0.5em, shorten >=0.5em]
        \draw[<-] (0, {\alto / 2}) -- ++({-\largo}, 0)
            node[pos=1.1, scale=\scale] {$u$};
        \draw[->] (\ancho, {\alto / 2}) -- ++(\largo, 0)
            node[pos=1.1, scale=\scale] {$v$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Donde $u = \left(u_1,~ u_2,~ \cdots,~ u_k \right)$ y $v = \left(v_1,~ v_2,~ \cdots,~ v_n \right)$, donde son $k$ dígitos de información del mensaje, y $n$ dígitos de codificación de la palabra de código

Se define $T_S$ la duración de un símbolo del mensaje, y $T_C$ la duración de un símbolo de palabra de código, y se cumple $$ k ~ T_S = n ~ T_C \implies \frac{k}{n} = \frac{T_C}{T_S} \triangleq R $$ donde $R$ es la tasa del código


> [!teorema]+ Teorema 8.1.9 (Teorema de codificación de canal) 
> Dada una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/orga/Compresión/Entropía|entropía]] $H(\mathcal{S})$, con la duración de un símbolo de entrada al codificador $T_S$ y un canal $c$ con duración de un símbolo de salida del codificador $T_C$, entonces si $$ \frac{H(\mathcal{S})}{T_S} \le \frac{c}{T_C} $$ entonces $\forall \varepsilon > 0$ existe un [[Esquema de codificación|esquema de codificación]] para el cual $$ P_e < \varepsilon $$
> 
> > [!demostracion]- Demostración
^teo-8-1-9

Se define las dos cantidades descriptas en el teorema como 
* $\displaystyle\frac{H(\mathcal{S})}{T_S}$ como la tasa de información promedio de la fuente en bits por segundo
* $\displaystyle\frac{c}{T_C}$ como la capacidad del canal por unidad de tiempo en bits por segundo
