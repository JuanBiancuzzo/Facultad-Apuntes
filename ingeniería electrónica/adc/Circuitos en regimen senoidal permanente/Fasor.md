---
dia: 2023-09-03
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-electrónica/electro/Campo-electromagnético
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
referencias:
  - "221"
vinculoFacultad:
  - tema: Circuitos en regimen senoidal permanente
    capitulo: 3
    materia: Análisis de circuitos
    carrera: Ingeniería electrónica
  - tema: Campo electromagnético
    capitulo: 2
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
  - tema: Circuitos en régimen alterno permanente
    capitulo: 8
    materia: Física 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Un fasor es una representación gráfica de un número complejo que se utiliza para representar una oscilación, de forma que el fasor suma de varios fasores puede representar la magnitud y fase de la oscilación resultante de la superposición de varias oscilaciones en un proceso de interferencia<sup><a href="#ref-221" style="color: inherit; text-decoration: none;">[221]</a></sup> 

## Representación física
---
Recordemos la [[Función senoidal|senoide]] $$ v(t) = V_m ~ sen(\omega t + \phi) $$
Al trabajar a una [[Función periódica#Frecuencia|frecuencia]] constante, las señales quedan bien definidas con tan solo conocer su amplitud y fase.

Un fasor es un número complejo que representa la amplitud y la fase de una senoide $$ z = r \angle{\phi} = r ~ e^{j \phi} $$
Veremos que los fasores y las señales senoidales resultan equivalente.

### Relación entre fasores y senoides
---
Podemos pasar de la [[Señal|señal]] [[Función senoidal|senoide]] $$ v(t) = V_m ~ sen(\omega t + \phi) $$ a fasores $$ v(t) = Re \left( V_m ~ e^{j\phi} ~ e^{j \omega t}  \right) = Re \left( V ~ e^{j \omega t}  \right) $$ donde $V = V_m ~ e^{j \phi}$

### Dominio temporal y fasorial
---
Los diferentes [[Dominio|dominio de una función]] y sus propiedades. Haciendo énfasis en que estamos trabajando en un régimen senoidal permanente. Esto se puede ver a partir de una [[Transformada de Fourier|transformada de Fourier]] o una [[Transformada de Laplace|transformada de Laplace]] $$ \begin{align}
	\frac{dv}{dt} \Leftrightarrow j \omega V \\
	\int v ~ dt \Leftrightarrow \frac{V}{j \omega}
\end{align} $$

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```