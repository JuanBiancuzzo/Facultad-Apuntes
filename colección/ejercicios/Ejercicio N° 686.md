---
dia: 2026-09-08
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 686
etapa: terminado
---
# Enunciado
---
Sea un objeto con una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|orientación]] definida por una matriz $R_1$ respecto de una [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] de trabajo. Indicar la nueva orientación del objeto si se produce una rotación del mismo sobre el eje Z en la terna de trabajo en $90 \degree$
1. $R_\text{final} = R_1 \cdot R_Z(90\degree)$ ^parte-1
2. $R_\text{final} = R_Z(90\degree) \cdot Q_1$ ^parte-2
3. $R_\text{final} = R_Z(-90\degree) \cdot R_1$ ^parte-3
4. $R_\text{final} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} R_1$ ^parte-4
5. $R_\text{final} = R_1 \cdot R_Z(-90\degree)$ ^parte-5

# Resolución
---
Para resolverlo, podemos entender que nos poden la rotación de la cinta desde un punto de vista nuevo, por lo que podemos expresarlo como $R_\text{nueva}^\text{cinta}$ y tenemos que $R_1$ representa la rotación de la cinta desde el punto de vista viejo $R_\text{vieja}^\text{cinta}$ por lo que la forma de relacionarlos es $$ \begin{align} 
	R_\text{nueva}^\text{cinta} &= R_\text{nueva}^\text{vieja} ~ R_\text{vieja}^\text{cinta} \\
	R_\text{final} &= R_\text{nueva}^\text{vieja} ~ R_1 \\
\end{align} $$
Dejandonos con las opciones [[colección/ejercicios/Ejercicio N° 686#^parte-2|2]] y [[colección/ejercicios/Ejercicio N° 686#^parte-3|3]], por lo que tenemos que ver el valor de $R_\text{nueva}^\text{vieja}$ y como nos dicen "se produce una rotación del mismo sobre el eje Z de la terna de trabajo en $90\degree$" por lo tanto habla que $R_\text{nueva}^\text{vieja} = R_Z(90\degree)$, haciendo que la respuesta final sea el [[colección/ejercicios/Ejercicio N° 686#^parte-2|punto 2]]

# Resultado
---
La opción correcta es [[colección/ejercicios/Ejercicio N° 686#^parte-2|punto 2]]