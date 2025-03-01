---
dia: 2023-09-19
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-transitorio
  - nota/facultad
  - ingeniería-en-informática/adc/Circuitos-en-regimen-transitorio
---
# Definición
---
Un [[Circuito eléctrico|circuito]] RL de [[Circuito de primer orden|primer orden]] es un circuito eléctrico compuesto de un [[Inductor|inductor]] y un [[Capacitor|capacitor]]

### Esquematización
---

```tikz
\usepackage[
	americanvoltages,
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
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.7, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
		\draw (0, 0) node[ground] {} to[short, *-] ++(-1, 0)
			to[L, loops=4, l^=$L$, v=$v_L$] ++(0, 2)
			to[short, -o] ++(1, 0)
			to[short, o-] ++(1, 0)
			to[R, l_=$R$, v^=$v_R$] ++(0, -2)
			to[short] ++(-1, 0);
	\end{circuitikz}
\end{document}
```


## Análisis
---
Al cerrar la llave (en el instante $t=0$), por [[Ley de nodos de Kirchhoff]] de [[Malla]], se puede deducir que $$ \begin{align} 
	         v_R(t) &+ v_L(t) = 0 \\
	L \frac{di}{dt} &+ Ri = 0 \\
	  \frac{di}{dt} &+ \frac{R}{L}i = 0
\end{align} $$
Integrando y utilizando la condición inicial ($i(0) = i_0$) $$ \begin{align} 
	\int_{i_0}^{i(t)} \frac{1}{i} ~ di &= - \int_0^t \frac{R}{L} ~dt \\
	\ln(i) \biggm|_{i_0}^{i(t)} &= - \frac{Rt}{L} \biggm|_0^t \\
	\ln(i(t)) - \ln(i_0) &= - \frac{Rt}{L}  + 0 \\ 
	i(t) &= i_0 \exp \left(- \frac{R}{L} ~ t\right)
\end{align} $$
Donde consideremos $\tau = \frac{L}{R}$ dándonos $$ i(t) = i_0 ~ \exp \left( - \frac{t}{\tau} \right) $$