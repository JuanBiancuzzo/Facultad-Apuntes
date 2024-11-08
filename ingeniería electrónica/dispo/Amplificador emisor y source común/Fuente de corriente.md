---
dia: 2023-01-23
tags:
  - ingeniería-electrónica/dispo/Amplificador-emisor-y-source-común
  - nota/facultad
---
# Definición
---
Es aquella que genera una intensidad de [[Corriente eléctrica|corriente]] entre sus terminales constante e independiente de la carga.

### Simbología
---
```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
	\draw (0, 0) to[american, isource, l^=$I$] ++ (0, 2);
	\end{circuitikz}
\end{document}
```

## Implementación
---
Como se analizó en [[Amplificador Source Común con un transistor de efecto de campo metal-óxido-semiconductor#Relación de compromiso de $A_{vo}$, $R_D$, $V_{DD}$ e $I_{DQ}$|Relaciones de compromiso para el Amplificador Source Común]], es necesario tener una [[Resistencia|resistencia]] de polarización $R_D$ elevada para aumentar la [[Ganancia|ganancia]]

Una alternativa para la resistencia de polarización $R_D$ es utilizar fuentes de corriente.

### El transistor N-MOS como fuente de corriente
---
![[el transistor N-MOS como fuente de corriente.webp]]

$$ i_{out} = \frac{1}{2} \mu ~ C'_{ox} \frac{W}{L} (V_{REF} - V_T)^2 ~ (1 + \lambda \cdot v_{out}) $$

Características
* El valor de la [[Corriente eléctrica|corriente]] de salida es $i_D$ y está definida por una [[Tensión|tensión]] de referencia $V_{REF}$
* El [[Transistor de efecto de campo metal-óxido-semiconductor|transistor]] funciona como fuente de corriente en [[Transistor de efecto de campo metal-óxido-semiconductor#Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET) Saturación|régimen de saturación]] 
* Hay un valor mínimo de tensión de salida para el cual la fuente funciona correctamente $v_{out} = V_{DS(sat)}$
* Presenta una resistencia de salida $R_{out} = r_0$
* El [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|transistor N-MOS]] es un sumidero de corriente

### El transistor P-MOS como fuente de corriente
---
![[el transistor P-MOS como fuente de corriente.webp]]

$$ i_{out} = \frac{1}{2} \mu ~ C'_{ox} \frac{W}{L} ~ (V_{REF} - V_{DD} - V_T)^2 ~ (1 - \lambda (v_{out} - V_{DD}) ) $$
Características
* El valor de la [[Corriente eléctrica|corriente]] de salida es $i_{out} = - i_D$ y está definido por una tensión de referencia $V_{REF}$
* El [[Transistor de efecto de campo metal-óxido-semiconductor|transistor]] funciona como fuente de corriente en [[Transistor de efecto de campo metal-óxido-semiconductor#Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET) Saturación|régimen de saturación]]
* Hay un valor máximo de tensión de salida para el cual la fuente funciona correctamente $v_{out} = V_{DD} + V_{DS (sat)}$
* Presenta una [[Resistencia|resistencia]] de salida $R_{out} = r_0$
* El [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-P|transistor P-MOS]] es una fuente de corriente

## Copia de corriente
---
Se puede generar una fuente usando el [[Circuito eléctrico|circuito]] que se llama [[Copia de corriente espejo simple|copia de corriente espejo]] ![[Copia de corriente espejo simple#Definición]]