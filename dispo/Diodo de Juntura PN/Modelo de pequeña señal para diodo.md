---
dia: 2023-09-16
materia: dispo
capitulo: 3
aliases:
  - MPS para diodo
---
### Definición
---
La intención del [[Modelo|modelo]] es poder aplicar [[Principio de superposición|superposición]] de una fuente de [[Tensión|tensión]] aplicada sobre el [[Diodo de Juntura PN|diodo]] ($v_D$), donde tenemos una parte continua ($V_D$) y una pequeña señal dependiente del tiempo ($v_d(t)$) $$ v_D(t) = V_D + v_d(t) $$
Con la [[Corriente del Diodo|corriente del diodo]] es $$ i_D(t) = f(v_D(t) = V_D + v_d(t)) $$ $$ i_D(v_D(t)) = I_0 \left( \exp\left( \frac{q~v_D(t)}{kT} \right) - 1 \right) = I_0 \left( \exp\left( \frac{q~(V_D + v_d(t))}{kT} \right) - 1 \right) $$
Donde podemos decir que $$ i_{D1} = I_0 \left( \exp\left( \frac{q~V_D}{kT} \right) - 1 \right) ~~~~~ i_{D2} = I_0 \left( \exp\left( \frac{q~v_d(t)}{kT} \right) - 1 \right) $$
Como el [[Diodo]] es [[Función C-lineal|no lineal]], vemos que $i_D(t) \ne i_{D1} + i_{D2}$, por lo que este [[Modelo|modelo]] intenta linealizar la respuesta [[Entorno|entorno]] a un punto de reposo ($v_D = V_D$)

#### Modelo
---
Queremos [[Función R-lineal|linealizar]] la [[Corriente del Diodo|corriente]] del [[Diodo]], para eso sabemos que podemos aplicar un [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor de orden 1]] para aproximar nuestra [[Corriente del Diodo|corriente]] dándonos $$ i_D(t) \approx i_D(t) \biggm|_{v_D = V_D} + \frac{\partial i_D(t)}{\partial v_D(t)} \Biggm|_{v_D=V_D} \cdot \underbrace{v_D(t) - V_D}_{=~ v_d(t)} $$
Reemplazando la corriente del diodo $$ i_D(t) \approx \underbrace{I_0 \left[ \exp\left( \frac{V_D}{V_{th}} \right) - 1 \right]}_{I_D} + \frac{1}{V_{th}} ~ I_0 ~ \left[ \exp\left( \frac{V_D}{V_{th}} \right) \right] \cdot v_d(t) $$ donde $V_{th}$ es el [[Relación de Einstein|potencial térmico]].

Dejándonos la ecuación para la corriente $$ \begin{align} 
	i_D(t) &\approx I_D + \underbrace{\frac{I_D + I_0}{V_{th}} \cdot v_d(t)}_{i_d(t)} \\
	\implies i_D(t) &\approx I_D + i_d(t)
\end{align} $$
##### Modelo para bajas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización. Podemos evaluar la [[Corriente eléctrica|corriente]] $$ i_D(V_D) \approx I_D(V_D) + \frac{\partial i_D}{\partial v_D} \Biggm|_{v_D=V_D} v_d $$
Entonces, como dijimos $$ i_d = \frac{\partial i_D}{\partial v_D} \Biggm|_{v_D=V_D} v_d = g_d ~ v_d $$
Definimos $g_d \equiv$ [[Conductancia dinámica|conductancia dinámica]] $[g_d] = S$

Produciendo el circuito equivalente

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
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) to[R, l^=$g_d$, o-o] (0, -2);
	\end{circuitikz}
\end{document}
```


##### Modelo para altas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización

Donde se definen dos capacidades
* $C_j \equiv$ [[Capacidad de juntura]] $[C_j] = F$
* $C_d \equiv$ [[Capacidad de difusión]] $[C_d] = F$

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
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, -1) to[short, o-] ++(0, 1)
			to[C, l_=$C_j$] ++(0, 2)
			to[short, -o] ++(0, 1);

		\draw (0, 0) to[short, *-] ++(1.5, 0)
			to[C, l_=$C_d$] ++(0, 2)
			to[short, -*] ++(-1.5, 0);

		\draw (0, 0) to[short, *-] ++(-1.5, 0)
			to[R, l_=$g_d$] ++(0, 2)
			to[short, -*] ++(1.5, 0);

	\end{circuitikz}
\end{document}
```

#### Rango de validez
---
El [[Propagación de errores]] que cometemos entre el valor estimado de la señal $i_d(t)$ y el valor real $i_D(t) - I_D$ queremos que sea pequeño, suponiendo que queremos un $10\%$  respecto de la variación real diremos que $$ ((i_D(t) - I_D) - i_d(t)) < 10\% ~ (i_D(t) - I_D) $$
Pero esta inecuación no tiene solución, por lo que podemos encontrar una [[Cota superior]] a este error, aplicando la [[Serie de Taylor|serie de Taylor]], ya que notemos que $$ \underbrace{
	(\underbrace{i_D(t)}_{\displaystyle\sum_{n = 0}^\infty \frac{f^{(n)}(V_D)}{n!} v_d(t)^n} - 
	\underbrace{(I_D + i_d(t))}_{\displaystyle\sum_{n = 0}^1 \frac{f^{(n)}(V_D)}{n!} v_d(t)^n })
	}_{\displaystyle\sum_{n = 2}^\infty \frac{f^{(n)}(V_D)}{n!} v_d(t)^n}
	~~~< 10\% ~~ \underbrace{(i_D(t) - I_D)}_{\displaystyle\sum_{n = 1}^\infty \frac{f^{(n)}(V_D)}{n!} v_d(t)^n} $$
Vamos a aproximar estas [[Serie|series]], asumiendo que el valor máximo de $v_d(t)$ es chico, por lo que los términos siguientes al primero, no afectan el calculo, dándonos $$ \frac{1}{2} \frac{\partial^2 i_D}{\partial v_D^2}\biggm|_{V_D} \cdot v_d^2 = \frac{1}{2} \frac{I_D + I_0}{V_{th}^2} \cdot v_d^2 < 0.1 \cdot \frac{I_D + I_0}{V_{th}} ~ v_d $$
##### En [[Convención de signos para la tensión de polarización#Polarización inversa|Inversa]]
---
En inversa tenemos que $I_D \approx - I_0$ $$ \begin{align} 
	\frac{1}{2} \frac{-I_0 + I_0}{V_{th}^2} \cdot v_d^2 &< 0.1 \cdot \frac{-I_0 + I_0}{V_{th}} ~ v_d \\
	0 \cdot v_d &< 0
\end{align} $$
Por lo que se cumple siempre, y no tiene sentido evaluar este error ya que las corrientes involucradas son muy pequeñas. En la mayoría de las aplicaciones prácticas pueden despreciarse.

##### En [[Convención de signos para la tensión de polarización#Polarización directa|Directa]]
---
En directa tenemos que $$ \begin{align} 
	\frac{1}{2} \frac{I_D + I_0}{V_{th}^2} \cdot v_d^2 &< 0.1 \cdot \frac{I_D + I_0}{V_{th}} ~ v_d \\
	v_d &< 0.2 \cdot V_{th}
\end{align} $$
Que a temperatura ambiente se obtiene $v_d < 5.2 ~mV$ pero en la práctica por las aproximaciones dadas al encontrar la [[Corriente del Diodo|corriente del diodo]], termina valiendo que $$ |v_d| < 10 ~mV ~ \text{(pico)} $$