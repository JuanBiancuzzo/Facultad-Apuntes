---
etapa: empezado
dia: 2026-07-21
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 216
---
# Enunciado
---
Sea $$ \begin{align} 
	Z &\sim \text{Cat}(c_1,~ \cdots,~ c_K) & 
	X \mid Z = k &\sim \text{Exp}(\lambda_k) 
\end{align} $$
Escriba la expresión del paso E y obtenga las ecuaciones de actualización del paso M. Derive las expresiones de actualización para $c_k$ y $\lambda_k$ 

# Resolución
---
Tomando al conjunto de variables desconocidas $\theta = \set{\forall k \in [1,~ K]:~ c_k,~ \lambda_k}$

Para el paso de la E, buscamos $$ \begin{align} 
	Q^{(t)} (z \mid x) &= p\left(z \mid x,~ \theta^{(t - 1)} \right) \\
	Q^{(t)} (k \mid x) &= p\left(k \mid x,~ \theta^{(t - 1)} \right) \\
	 &= \frac{p\left(x \mid k,~ \theta^{(t - 1)} \right) ~ p(k,~ \theta^{(t - 1)})}{p(x)} \\
	 &= \frac{p\left(x \mid k,~ \theta^{(t - 1)} \right) ~ c_k^{(t - 1)}}{\displaystyle\sum_{m = 1}^{K} p\left(x,~ m,~ \theta^{(t - 1)} \right) } \\
	 &= \frac{p\left(x \mid k,~ \theta^{(t - 1)} \right) ~ c_k^{(t - 1)} }{\displaystyle\sum_{m = 1}^{K} p\left(x \mid m,~ \theta^{(t - 1)} \right) p(m,~ \theta^{(t - 1)}) } \\
	Q^{(t)} (k \mid x) &= \frac{p\left(x \mid k,~ \theta^{(t - 1)} \right) ~ c_k^{(t - 1)}}{\displaystyle\sum_{m = 1}^{K} p\left(x \mid m,~ \theta^{(t - 1)} \right) ~ c_m^{(t - 1)} } \\
\end{align} $$
Habiendo utilizando la [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|probabilidad condicional]], en conjunto de [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de masa de probabilidad marginal|marginal]] para obtener $p(x)$, y utilizando nuevamente la probabilidad condicional para calcular la marginal, se obtiene esta expresión general

Reconozcamos que $p\left(x \mid k,~ \theta^{(t - 1)} \right)$ es una [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de densidad de probabilidad|función de densidad]] de una [[colección/distribuciones/continua/Distribución exponencial|exponencial]], por lo que finalmente podemos expresar la función $Q$ de la siguiente forma $$ Q^{(t)} (k \mid x) = \frac{ c_k^{(t - 1)} ~ \lambda_k^{(t - 1)} ~ \exp\left( -\lambda_k^{(t - 1)} ~ x \right) }{\displaystyle\sum_{m = 1}^{K} c_m^{(t - 1)} ~ \lambda_m^{(t - 1)} ~ \exp\left( -\lambda_m^{(t - 1)} ~ x \right) } ~ \mathbb{1}\Set{ x \ge 0 } $$ 
Para el paso M, tenemos que maximizar la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperanza]] del [[ingeniería electrónica/analisis 3/Funciones elementales/Función logaritmica|logaritmo]] de la [[ingeniería en informática/proba/Inferencia estadística/Función de verosimilitud|función de verosimilitud]] $p\left( z \mid x,~ \theta} \right)$