---
etapa: sin-empezar
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 127
---
# Enunciado
---
Sean $P$ y $Q$ $2$ [[colección/distribuciones/discreta/Distribución de Bernoulli|distribuciones Bernoulli]] de parámetros $\frac{1}{2}$ y $\frac{1}{3}$ respectivamente. Calcular $KL(P || Q)$ y $KL(Q || P)$ que corresponde a la [[ingeniería en informática/orga/Compresión/Divergencia de Kullback-Leibler|divergencia de Kullback-Leibler]]

# Resolución
---
Recordemos la expresión de la divergencia de Kullback-Leibler $$ D_{KL}(P \mid\mid Q) = \sum_{y \in \mathcal{Y}} P(y) ~ \ln\left(\frac{P(y)}{Q(y)} \right),~~~ [\text{nat}] $$
Como nuestras distribuciones Bernoulli, se tiene que $$ \begin{align} 
	P(y) &= \left( \frac{1}{2} \right)^y ~ \left( \frac{1}{2} \right)^{1 - y} \\
	Q(y) &= \left( \frac{1}{3} \right)^y ~ \left( \frac{2}{3} \right)^{1 - y} \\
\end{align} $$ donde $y \in \set{0,~ 1}$, entonces calculandolos $$ \begin{align}
	P(y = 0) &= \frac{1}{2} & Q(y = 0) &= \frac{2}{3} \\
	P(y = 1) &= \frac{1}{2} & Q(y = 1) &= \frac{1}{3} \\
\end{align} $$ 
Finalmente, se obtiene $$ \begin{align} 
	D_{KL}(P \mid\mid Q) &= \frac{1}{2} \left[ \ln\left( \frac{1}{2} \cdot \frac{3}{2} \right) + \ln\left( \frac{1}{2} \cdot \frac{3}{1} \right) \right] \\
	 &= \frac{1}{2} \left[ \ln\left( \frac{3}{4} \right) + \ln\left( \frac{3}{2}  \right) \right] \\
	 &\simeq 0.059 ~ \text{nat} \\
	D_{KL}(Q \mid\mid P) &= \frac{2}{3} ~ \ln\left( \frac{2}{3} \cdot 2 \right) + \frac{1}{3} ~ \ln\left( \frac{1}{3} \cdot 2 \right) \\
	 &= \frac{2}{3} ~ \ln\left( \frac{4}{3} \right) + \frac{1}{3} ~ \ln\left( \frac{2}{3} \right) \\
	 &\simeq 0.057 ~ \text{nat} \\
\end{align} $$