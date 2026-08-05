---
etapa: sin-empezar
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 128
---
# Enunciado
---
Un [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] es evaluado con un conjunto de testeo. El análisis informó $120$ verdaderos positivos, $60$ falsos negativos, $30$ falsos positivos y $9790$ verdaderos negativos. Calcular [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Accuracy|accuracy]], [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Precisión|precisión]], [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Recall|recall]] y [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/F-beta score|F1 score]]

# Resolución
---
Para este ejercicio vamos a crear una tabla para organizar los valores $$ \begin{array}{c|c}  
		& \varphi(X) = 0 & \varphi(X) = 1 \\\hline
	 Y = 0 & \stackrel{\text{Verdadaero Negativo}}{9790} 
			& \stackrel{\text{Falso Positivo}}{30} \\\hline
	 Y = 1 & \stackrel{\text{Falso Negativo}}{60} 
			& \stackrel{\text{Verdadero Positivo}}{120}
\end{array} $$ donde el total es $n = 10000$

Ahora simplemente queda utilizar las definiciones y calcularlos $$ \begin{align}
	\text{Accuracy} &= \mathbb{P}\big( Y = \varphi(X) \big) \\
		&\simeq \frac{\#\big( Y = \varphi(X) \big)}{n} \\
		&\simeq \frac{9790 + 120}{10000} \\
		&\simeq 0.991 \\\\
	\text{Precisión} &= \mathbb{P}\big( Y = 1 \mid \varphi(X) = 1 \big) \\
		&\simeq \frac{\#\big( Y = 1,~ \varphi(X) = 1 \big)}{\#\big( \varphi(X) = 1 \big)} \\
		&\simeq \frac{120}{120 + 30} \\
		&\simeq 0.8 \\\\
	\text{Recall} &= \mathbb{P}\big( \varphi(X) = 1 \mid Y = 1 \big) \\
		&\simeq \frac{\#\big( Y = 1,~ \varphi(X) = 1 \big)}{\#\big( Y = 1 \big)} \\
		&\simeq \frac{120}{120 + 60} \\
		&\simeq \frac{2}{3} \\\\
	F_1\text{-Score} &= 2 ~ \frac{\text{Precisión} \cdot \text{Recall}}{\text{Precisión} + \text{Recall}} \\
		&= 2 ~ \frac{0.8 \cdot \frac{2}{3}}{0.8 + \frac{2}{3}} \\
		&= \frac{8}{11} \\
		&\simeq 0.73 \\\\
\end{align} $$
