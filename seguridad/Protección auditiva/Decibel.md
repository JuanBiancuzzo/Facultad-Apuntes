---
dia: 2023-04-03
materia: seguridad
capitulo: 4
---
### Definición
---
Dado que el oído humano, es sensible a un gran intervalo de intensidades, es que resulta conveniente el uso de una escala logarítmica para la cuantificación tanto de: [[Intensidad]], [[Potencia]] y [[Presión sonora]].

El decibel, es el unidad relativa empleada en acústica entre el valor que se desea evaluar y uno de referencia: $$ G_{dB} = 10 \cdot \log\left(\frac{P_2}{P_1} \right) $$
Si consideramos las [[Tensión|tensiones]] correspondientes a cada una de las potencias obtenidas $$ \begin{align} 
	G_{dB} &= 10 ~ \log \left( \frac{P_2}{P_1} \right) = 10 ~ \log \left( \frac{V_2^2 / R_2}{V_1^2 / R_1} \right) \\
	&= 10 ~ \log \left( \frac{V_2}{V_1} \right)^2 + 10 ~ \log \left( \frac{R_1}{R_2} \right) \\
	G_{dB} &= 20 ~ \log \left( \frac{V_2}{V_1} \right) - 10 ~ \log \left( \frac{R_1}{R_2} \right)
\end{align} $$
Considerando $R_1 = R_2$ obtenemos  $$ \boxed{G_{dB} = 20 ~ \log \left( \frac{V_2}{V_1} \right)} $$ y análogamente $$ \boxed{G_{dB} = 20 ~ \log \left( \frac{I_2}{I_1} \right)} $$