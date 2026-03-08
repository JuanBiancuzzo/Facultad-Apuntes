---
dia: 2026-03-06
etapa: empezado
referencias: []
aliases:
  - CE
  - Configuración electrónica externa#^cee
  - CEE#^cee
tags:
  - carrera/ingeniería-electrónica/quimica/modelo-atómico
  - nota/facultad
vinculoFacultad:
  - tema: Modelo atómico
    capitulo: 1
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La expresión que indica la ubicación de los [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] en los [[ingeniería electrónica/quimica/Modelo atómico/Modelo atómico orbital|orbitales de un átomo]] en su estado fundamental

Cada orbital tiene una [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] asociada que depende de $n$ [[ingeniería electrónica/quimica/Modelo atómico/Modelo atómico orbital#^numero-principa|número cuántico principal]] y $l$ el [[ingeniería electrónica/quimica/Modelo atómico/Modelo atómico orbital#^numero-azimutal|número cuántico azimutal]]. La energía del orbital aumenta con $n$ y para un mismo $n$, aumenta con $l$. Además los electrones se ubican ocupando los orbitales de menor energía

Para definir el orden en el cual los electrones se ubican en los orbitales, es donde surge la regla de la diagonal
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
   
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \def\numerosAzimutales {{ "s", "p", "d", "f" }}
    \tikzmath {
        \niveles = 8; \subniveles = dim(\numerosAzimutales);
        \scale = 1; \sep = 0.9;
    }

    \begin{scope}[<-, draw=azul]
        \foreach \n in {1, ..., \niveles} {
            \tikzmath { \largo = \sep * (2 + floor((\n - 1) / 2)); }
            \ifnum \n < \niveles 
                \draw (0, {-(\n + 1) * \sep}) -- ++(\largo, \largo);
                
            \else
                \draw (\sep, {-\n * \sep}) 
                    -- ++({\largo - \sep}, {\largo - \sep});
            \fi
        }
    \end{scope}
    
    \foreach \l in {1, ..., \subniveles} {
        \tikzmath { 
            \numeroAzimutal = \numerosAzimutales[int(\l - 1)]; 
            \potencia = int(2 * (2 * \l - 1)); % impares por 2
        }
        \foreach \n [parse=true] in {\l, ..., \niveles - \l + 1} {
            \ifnum \n < \niveles
                \path ({\l * \sep}, {-\n * \sep})
                    node[scale=\scale, fill=white] 
                        {$\n$\numeroAzimutal${}^{\potencia}$};
            \fi
        }
    }
    
\end{tikzpicture}
\end{document}
```

Por el [[Principio de exclusión de Pauli|principio de exclusión de Pauli]], y como el [[ingeniería electrónica/quimica/Modelo atómico/Modelo atómico orbital#^numero-spin|número cuántico de Spin]] teniendo dos valores, por cada orbital puede existir $2$ electrones. Por lo tanto por cada orbital se utiliza el supra índice para indicar la cantidad de electrones disponibles para ese nivel de energía y subnivel de energía

Se puede abreviar esta configuración electrónica, empezando por el [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^gas-noble|gas noble]] previo, y agregando la secuencia de electrones faltantes

Se define la configuración electrónica externa (CEE) a estos últimos electrones después de un átomo noble. Estos son los electrones que interactúan en interacciones químicas ^cee

## Ejemplos
---
Veamos distintos [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] y sus [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^numeros|número atómico]] $Z$ con su configuración electrónica descriptiva, abreviada y externa

| Átomo | $Z$  |     Configuración externa descriptiva     |                 Abreviada                 | Externa |
| :---: | :--: | :---------------------------------------: | :---------------------------------------: | :-----: |
|  Li   | $3$  |        $1\text{s}^2 ~ 2\text{s}^1$        |        $\text{[He]} ~ 2\text{s}^1$        |         $2\text{s}^1$|
|  Be   | $4$  |        $1\text{s}^2 ~ 2\text{s}^2$        |        $\text{[He]} ~ 2\text{s}^2$        |         $2\text{s}^2$|
|   B   | $5$  | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^1$ | $\text{[He]} ~ 2\text{s}^2 ~ 2\text{p}^1$ |         $2\text{s}^2 ~ 2\text{p}^1$|
|   C   | $6$  | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^2$ | $\text{[He]} ~ 2\text{s}^2 ~ 2\text{p}^2$ |         $2\text{s}^2 ~ 2\text{p}^2$|
|   N   | $7$  | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^3$ | $\text{[He]} ~ 2\text{s}^2 ~ 2\text{p}^3$ |         $2\text{s}^2 ~ 2\text{p}^3$|
|   O   | $8$  | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^4$ | $\text{[He]} ~ 2\text{s}^2 ~ 2\text{p}^4$ |         $2\text{s}^2 ~ 2\text{p}^4$|
|   F   | $9$  | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^5$ | $\text{[He]} ~ 2\text{s}^2 ~ 2\text{p}^5$ |         $2\text{s}^2 ~ 2\text{p}^5$|
|  Ne   | $10$ | $1\text{s}^2 ~ 2\text{s}^2 ~ 2\text{p}^6$ |               $\text{[Ne]}$               |         -|
