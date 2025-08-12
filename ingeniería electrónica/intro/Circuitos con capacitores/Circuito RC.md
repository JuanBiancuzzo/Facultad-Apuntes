---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Circuitos-con-capacitores
  - carrera/ingeniería-electrónica/intro/Respuesta-en-frecuencia
  - nota/facultad
aliases:
  - Filtro RC#Respuesta en frecuencia
vinculoFacultad:
  - tema: Circuitos con capacitores
    capitulo: 3
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
  - tema: Respuesta en frecuencia
    capitulo: 4
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
---
# Definición
---
Un [[Circuito eléctrico|circuito]] RC de [[Circuito de primer orden|primer orden]] es un circuito eléctrico compuesto de una [[Resistor|resistencia]] y un [[Capacitor|capacitor]]

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
	bipoles/cuteswitch/thickness=0.5,
	bipoles/cuteswitch/width=0.75
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]

		\coordinate (centro) at (0, 0);

		\draw (centro) 
				node[ground] {}
			to[short] ++(-3, 0)
			to[battery1, l^=$V_0$, invert] ++(0, 3)
			to[short] ++(2, 0)
				node[cuteclosedswitchshape] (llave) {};

		\draw (centro) to[short] ++(3, 0)
			to[C, l_=$C$] ++(0, 3)
			to[short] ++(-0.5, 0)
			to[R, l^=$R$] ++(-2, 0)
			to[short] (llave.out);

	\end{circuitikz}
\end{document}
```
^representacion

## Análisis
---
Al cerrar la llave (en el instante $t=0$), por [[Ley de mallas de Kirchhoff|ley de mallas de Kirchhoff]], se puede deducir que $$ v_0(t)= v_R (t) + v (t) $$
Ahora, por [[Ley de Ohm|ley de Ohm]]
$$ v_0 (t)= i(t) \cdot R + v (t) $$

Y, sabiendo de la [[Capacitor#Relación con la Tensión tensión y la Corriente eléctrica corriente|relación entre corriente y tension en un capacitor]]
$$ i(t) = C \cdot \frac{dv}{dt}(t) $$

Entonces, nos queda una EDO de primer orden
$$ v_0 (t)= RC ~ \frac{dv}{dt}(t) + v(t) $$
Cuya solución, para un escalón de entrada, es
$$ v (t)= v_f + (v_i - v_f) \cdot \exp \left( -\frac{t}{RC} \right) $$

Con
$$ \begin{cases} 
\text{Condicion Inicial}: &  v_i = v(0)\\
\text{Condicion Final}: & v_f = v(\infty)\\
\end{cases} $$
Ahora, sabiendo que en el circuito RC
$$ 
\begin{cases}
\text{Condicion Inicial}:&  v_i = 0\\
\text{Condicion Final}:& v_f = v_0\\
\end{cases}
$$
Reemplazo en
$$\begin{align}
    v(t) &= v_f + (v_i - v_f) ~ \exp\left( -\frac{t}{RC} \right) \\
     &= v_0 + (- v_0) ~ \exp\left( -\frac{t}{RC} \right) \\
     &= v_0 ~ \left(1 - \exp\left( -\frac{t}{RC} \right) \right)
\end{align}
$$
Y, entendiendo que
$$ \begin{cases} 
	v(t) &= v_0 ~ \left(1 - \exp \left( -\frac{t}{RC} \right) \right) \\
	i(t) &= C \cdot \frac{dv}{dt}v(t) \\
\end{cases} $$

Entonces, la [[Corriente eléctrica|corriente]] sobre el [[Capacitor|capacitor]] en función del tiempo

$$ i(t) = \frac{C}{R} \cdot \exp \left( -\frac{t}{RC} \right) $$ ^ecuacion-corriente

$$ v(t) = v_0 ~ \left(1 - \exp \left( -\frac{t}{RC} \right) \right) $$ ^ecuacion-tension

Notemos que $RC$ es la [[Constante de tiempo|constante de tiempo]] $\tau$

## Respuesta en frecuencia
---
Este es uno de los [[Filtro|filtro]] mas básicos que se utilizan para eliminar frecuencias indeseadas

### Características
---
- Dependiendo de donde se tome la tension de salida, sobre el [[Resistor|resistor]] o sobre el [[Capacitor|capacitor]], se obtienen diferentes tipos de respuestas en frecuencia para el mismo circuito
- Variando los valores de los componentes, podemos modificar algunos parámetros de la curva de [[Respuesta en frecuencia|respuesta en frecuencia]]
