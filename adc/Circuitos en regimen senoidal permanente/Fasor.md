---
dia: 2023-09-03
materia: adc
capitulo: 3
---
### Definición
---
Recordemos la [[Función senoidal|senoide]] $$ v(t) = V_m ~ sen(\omega t + \phi) $$
Al trabajar a una [[Función senoidal#Frecuencia|frecuencia]] constante, las señales quedan bien definidas con tan solo conocer su amplitud y fase.

Un fasor es un número complejo que representa la amplitud y la fase de una senoide $$ z = r \angle{\phi} = r ~ e^{j \phi} $$
Veremos que los fasores y las señales senoidales resultan equivalente.

#### Relación entre fasores y senoides
---
Podemos pasar de la señal [[Función senoidal|senoide]] $$ v(t) = V_m ~ sen(\omega t + \phi) $$ a fasores $$ v(t) = Re \left( V_m ~ e^{j\phi} ~ e^{j \omega t}  \right) = Re \left( V ~ e^{j \omega t}  \right) $$ donde $V = V_m ~ e^{j \phi}$

#### Dominio temporal y fasorial
---
Los diferentes [[Dominio]] y sus propiedades. Haciendo énfasis en que estamos trabajando en un régimen senoidal permanente. Esto se puede ver a partir de una [[Transformación de Fourier]] o una [[Transformada de Laplace]] $$ \begin{align}
	\frac{dv}{dt} \Leftrightarrow j \omega V \\
	\int v ~ dt \Leftrightarrow \frac{V}{j \omega}
\end{align} $$