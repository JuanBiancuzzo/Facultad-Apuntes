---
dia: 2026-10-17
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 752
etapa: terminado
---
# Enunciado
---
Su proveedor le pide que pague su [[Deuda|deuda]] a costa de iniciarle [[Juicio|juicio]] en caso de no hacerlo. Como no dispone de efectivo, decide pedir un préstamo, $3$ bancos diferentes le ofrecen $\$2,000,000$ a pagar en $3$ meses con las siguientes tasas
* Banco $1$:  [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés#Tasa Nominal Anual|TNA]] $12\%$ con capitalización mensual
* Banco $2$:  [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés#Tasa equivalente|TEM]] $1.1\%$ 
* Banco $3$:  [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés#Tasa Efectiva Anual|TEA]] $13\%$
¿Qué banco elige para pagar el préstamo? Justifique analiticamente su respuesta

# Resolución
---
Pasando todos a TEA, entonces $$ \begin{align}
	\left( 1 + \text{TEA} \right)^1 = \left( 1 + \frac{\text{TNA}}{12} \right)^{12}
	\implies& \text{TEA} \simeq 12.7 \% \tag{Banco 1} \\
	\left( 1 + \text{TEA} \right)^1 = \left( 1 + \text{TEM} \right)^{12}
	\implies& \text{TEA} \simeq 14 \% \tag{Banco 2} \\
	& \text{TEA} =  13 \% \tag{Banco 3} \\
\end{align} $$
Por lo tanto se debería elegir el prestamos del banco $1$