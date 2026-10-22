---
dia: 2026-10-17
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 753
etapa: terminado
---
# Enunciado
---
Para el banco elegido en el [[colección/ejercicios/Ejercicio N° 752|ejercicio anterior]], calcule las $3$ cuotas, amortizaciones e intereses que pagaría si el [[ingeniería en informática/ebt 1/Finanzas/Préstamo|préstamo]] fuese
* [[ingeniería en informática/ebt 1/Finanzas/Préstamo#Sistema Francés|Sistema Francés]]
* [[ingeniería en informática/ebt 1/Finanzas/Préstamo#Sistema Alemán|Sistema Alemán]]

# Resolución
---
Para recordar lo que se eligió es el Banco $1$ el cual tiene una [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés#Tasa Nominal Anual|TNA]] del $12\%$, y el prestamos es por $\$2,000,000$  

Para el sistema Francés, recordemos que cada cuota se calcula como $$ C = \frac{P}{f_i^n},~~~ \text{con} ~ f_i^n = \frac{(1 + i)^n - 1}{(1 + i)^n \cdot i} $$ donde $P$ es el préstamo, e $i$ el interés que en este caso es de $i = 0.12$, dando entonces $3$ cuotas de $C = \$832,697$

Para calcular la amortizaciones $A_k$ y los intereses $I_k$, recordando que $$ \begin{align} 
	A_k &= C - I_k \\
	I_k &= \left( P - \sum_{j = 1}^{k - 1} A_j \right) \cdot i
\end{align} $$
Por lo tanto se puede crear una tabla con los valor $$ \begin{array}{c|c} 
	k & I_k ~ [\$] & A_k ~ [\$] \\\hline
	1 & 240,000 & 592,697 \\\hdashline
	2 & 168,876 & 663,822 \\\hdashline
	3 &  89,217 & 743,480
\end{array} $$

Para el sistema Alemán, la amortización es constante dado por $$ A = \frac{P}{n} = \$ 666,666 $$
Para calcular los intereses $I_k$ y cuotas $C_k$, recordando que $$ \begin{align}
	I_k &= (P - (k - 1) ~ A) ~ i \\
	C_k &= A + I_1 
\end{align} $$
Por lo tanto se puede crear una tabla con los valor $$ \begin{array}{c|c} 
	k & I_k ~ [\$] & C_k ~ [\$] \\\hline
	1 & 240,000 & 906,666 \\\hdashline
	2 & 160,000 & 826,666 \\\hdashline
	3 &  80,000 & 746,666
\end{array} $$