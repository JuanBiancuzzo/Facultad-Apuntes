---
dia: 2024-04-03
tags:
  - algo-1/Introducción-a-la-programación
  - nota
  - taller/Sintaxis
---
### Definición
---
Estos se dividen a su vez en tipos de datos Ordinales y tipos de datos No Ordinales

#### Tipo de dato Ordinal
---
Son aquellos cuyos valores poseen sucesor y predecesor

| Tipo de dato        | Rango                                                         |
| ------------------- | ------------------------------------------------------------- |
| Byte                | $0 \cdots 255$                                                |
| Palabra             | $0 \cdots 65~535$                                             |
| Palabra Larga       | $0 \cdots 4~294~967~295$                                      |
| Entero pequeño      | $-32~767 \cdots 32~767$                                       |
| Entero Corto        | $-128 \cdots 128$                                             |
| Entero Largo        | $-2~147~483~648 \cdots 2~147~483~648$                         |
| Entero              | Entero pequeño o Entero Largo                                 |
| Entero de $64$ bits | $-9~223~372~036~854~775~807 \cdots 9~223~372~036~854~775~807$ |
| Booleano            | Verdadero o falso                                             |
| Caracter            | A, B, C, $\cdots$, etc ($256$ posibles)                       |

Notemos que el dato Booleano sigue la [[Álgebra de Boole|álgebra de Boole]].

#### Tipo de dato No Ordinal
---
Son aquellos que no pueden determinarse su sucesor y un predecesor

| Tipo de dato | Rango                                           |
| ------------ | ----------------------------------------------- |
| Real         | depende de la plataforma                        |
| Simple       | $1.5 \times 10^{-45} \cdots 3.4 \times 10^{38}$ |
| Doble        | $5 \times 10^{-324} \cdots 1.7 \times 10^{308}$ |

#### Representación algorítmica
---
* [[Representación de enteros|Enteros]]
* [[Punto flotante|Punto flotante]]
* [[Valor booleano|Booleanos]]
* [[Representación de un caracter|Caracteres]]