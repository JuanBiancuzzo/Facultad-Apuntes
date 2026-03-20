---
dia: 2024-03-11
aliases:
  - Sistema LTI
  - Solución forzada en el tiempo#Solución
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
etapa: ampliar
referencias:
  - "899"
  - "873"
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Sistemas LTI
    capitulo: 2
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El análisis de los [[Sistema|sistemas]] en tiempo discreto y continua depende fuertemente de la estructura intrínseca de los mismo, siendo el mismo en general complejo desde el punto de vista matemático y operacional  

Sin embargo, en el caso de los sistemas [[Sistema lineal|lineales]] e [[Sistema invariante en el tiempo|invariantes en el tiempo]] permiten un análisis en extremo simple

La linealidad nos permite usar el [[Principio de superposición|principio de superposición]] y la invarianza en el tiempo permite los retardos temporales de la señal de entrada.

## Conclusión
---
* Para determinar la salida de un sistema LTI a una entrada determinada es necesario realizar una [[Convolución|suma o integral de convolución]] entre la [[Respuesta en frecuencia|respuesta al impulso]] del sistema y la mencionada entrada
* Los sistemas LTI, tanto de tiempo continuo como de tiempo discreto, están caracterizados completamente por su [[Representación de una señal mediante impulsos|respuesta al impulso]] $h(t)$ o $h[n]$. Esto es privativo de dichos sistemas. Otros sistemas no lineales y/o variantes en el tiempo no puede ser caracterizados por una respuesta al impulso
* Muchas propiedades de interés de los sistemas LTI pueden determinarse mediante un análisis de la respuesta al impulso

## Solución continua
---
Dada $\frac{dx}{dt} = Ax + Bu$ con $x(0) = x_0$, proponemos la solución $$ x(t) = x_0 ~ e^{At} + \int_0^t e^{A(t - \tau)} ~ Bu(\tau) ~ d\tau $$
Usando el [[Teorema fundamental del cálculo|Teorema fundamental del cálculo]] podemos ver que $$ \begin{align}
    \frac{d}{dt} \left[ x_0 ~ e^{At} + \int_0^t e^{A(t - \tau)} ~ Bu(\tau) ~ d\tau \right] &= x_0 ~ A ~ e^{At} + e^{A(t - t)} ~ Bu(t) - 0 + \int_0^t A ~ e^{A(t - \tau)} ~ Bu(\tau) ~ d\tau \\
    &= x_0 ~ A ~ e^{At} + \int_0^t A ~ e^{A(t - \tau)} ~ Bu(\tau) ~ d\tau + Bu(t)
\end{align} $$
Sacando la [[Matriz|matriz]] $A$ como factor común, podemos ver lo siguiente $$ \begin{align} 
    \frac{d}{dt} x &= A ~ \left( x_0 ~ e^{At} + \int_0^t e^{A(t - \tau)} ~ Bu(\tau) ~ d\tau \right) + Bu(t) \\
    &= Ax + Bu
\end{align} $$
Donde la condición inicial se cumple ya que $e^{A ~ 0} = 1$ y $\int_a^a f(\tau) ~ d\tau = 0$

## Solución discreta
---
La entrada y salida son las secuencias $$ \begin{matrix}
	u = \Set{u(0),~ u(1),~ u(2),~ \cdots,~ u(k),~ \cdots ~} 
	& \text{y} & 
	y = \Set{y(0),~ y(1),~ y(2),~ \cdots,~ y(k),~ \cdots ~}
\end{matrix} $$
Al ser un [[ingeniería electrónica/señales/Señales y sistemas/Sistema causal|sistema causal]], se puede describir como una [[ingeniería electrónica/señales/Sistemas LTI/Ecuación en diferencia|ecuación en diferencia]] $$ y(k) = -a_1 ~ y(k - 1) - \cdots - a_n ~ y(k - n) + b_0 ~ u(k) + \cdots + b_m ~ u(k - m) $$ y podemos notar que el valor actual de $y(k)$ solo depende de la entrada actual y pasadas, y la salidas pasadas




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```