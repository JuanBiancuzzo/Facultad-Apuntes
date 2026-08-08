---
etapa: terminado
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 125
---
# Enunciado
---
Por un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal de comunicaciones]] se emiten [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bits]] de forma aleatoria, siendo el $40\%$ de ellos $1$. Dependiendo del bit transmitido, la comunicación es afectada por un ruido aditivo [[colección/distribuciones/continua/Distribución Normal|normal de media nula y varianzas]]: $4$ si el bit es un $0$ y $1$ si el bit es un $1$. Sea $X$ la señal recibida e $Y$ el bit emitido. Hallar el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano|clasificador Bayesiano]] y su respectivo error. Expresar el resultado en función de $\Phi(\cdot)$ ([[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|función de distribución]] de la [[colección/distribuciones/continua/Distribución Normal#^normal-estandar|normal estándar]]) 

# Resolución
---
Primero determinemos la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|distribución]] de los datos. Sabemos que $Y$ los el bit emitido tiene [[colección/distribuciones/discreta/Distribución de Bernoulli|distribución de Bernoulli]] $\text{Ber}(0.4)$, y $X$  se puede definir [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|condicionado]] de la siguiente forma $$ X \mid Y = y \sim \begin{cases}
	\mathcal{N}(0,~ 4), & \text{si} ~ y = 0 \\
	\mathcal{N}(1,~ 1), & \text{si} ~ y = 1 \\
\end{cases} $$
Se puede graficar ilustrativamente como ![[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano#^representacion-grafica]]
Para determinar las regiones $\mathcal{R}_0$ y $\mathcal{R}_1$ basta con analizar $P_{Y \mid X = x}(1) \lessgtr P_{Y \mid X = x}(0)$ . Para cada $x \in \mathbb{R}$, esas regiones son equivalentes a comparar $P_Y(1) ~ p_{X \mid Y = 1}(x) \lessgtr P_Y(0) ~ p_{X \mid Y = 0}(x)$, ya que $p_X(x)$ es la misma de ambos lados

Se puede calcular de forma general el punto o los puntos de intersección, se parte sobre la expresión general $$ \begin{align}
    \frac{\mathbb{P}(a)}{\sqrt{2\pi ~ \sigma_a}} \exp\left( \frac{(x - \mu_a)^2}{2\sigma_a} \right) &= \frac{\mathbb{P}(b)}{\sqrt{2\pi ~ \sigma_b}} \exp\left( \frac{(x - \mu_b)^2}{2\sigma_b} \right) \\
    d ~ \exp\left( \frac{(x - \mu_a)^2}{2\sigma_a} \right) &= \exp\left( \frac{(x - \mu_b)^2}{2\sigma_b} \right) & d &= \frac{\mathbb{P}(a)}{\mathbb{P}(b)} ~ \sqrt{\frac{\sigma_b}{\sigma_a}} \\
    2 \ln(d) + \frac{(x - \mu_a)^2}{\sigma_a} &= \frac{(x - \mu_b)^2}{\sigma_b} \\
    2 \ln(d) ~ \sigma_a + x^2 - 2 \mu_a x + \mu_a^2 &= r ~ x^2 - 2 r ~ \mu_b x + r ~ \mu_b^2 & r &= \frac{\sigma_a}{\sigma_b} \\
    a ~ x^2 + b ~ x + c &= 0 && \begin{cases} 
        a = 1 - r \\
        b = 2 ~ (r \mu_b - \mu_a) \\
        c = \mu_a^2 - r ~ \mu_b^2 + 2 \sigma_a \ln(d) \\
    \end{cases} \\
    \gamma_{1,~2} &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\end{align} $$
En nuestro caso tenes $$ \begin{align} 
    \frac{\mathbb{P}(Y = 0)}{\sqrt{8 \pi}} ~ \exp\left( \frac{x^2}{8} \right) &= \frac{\mathbb{P}(Y = 1)}{\sqrt{2 \pi}} \exp\left( \frac{(x - 1)^2}{2} \right) \\
	\frac{1}{2} \frac{0.6}{0.4} &= \exp\left( \frac{(x - 1)^2}{2} - \frac{x^2}{8} \right) \\
	\ln\left( \frac{3}{4} \right) &= \frac{(x - 1)^2}{2} - \frac{x^2}{8} \\
	3 x^2 - 8 x + 4 + 8 \ln\left( \frac{3}{4} \right) &= 0 \\
\end{align} $$
Dando las [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Frontera de decisión|fronteras de decisión]] $\gamma_1 \simeq 0.23$ y $\gamma_2 \simeq 2.43$, finalmente dando como clasificador $$ \varphi(x) = \begin{cases}
	1 & \text{si} ~ 0.23 < x < 2.43 \\
	0 & \text{si no}
\end{cases} $$
Por último, el error bayesiano esta dado por $$ 1 - \mathbb{E}\left[ \max_{y} P_{Y \mid X}(y) \right] = \sum_{y \in \set{0,~ 1}} \mathbb{P}(Y = y) ~ \mathbb{P}(X \notin \mathcal{R}_y \mid Y = y) $$ en este caso lo podemos calcular usando $\Phi(\cdot)$ de la siguiente forma $$ \begin{align} 
	1 - \mathbb{E}\left[ \max_{y} P_{Y \mid X}(y) \right] =&~ \mathbb{P}(Y = 0) ~ \mathbb{P}(0.23 < X \le 2.43) \\
	 &+ \mathbb{P}(Y = 1) ~ \left( \mathbb{P}(X \le 0.23) + \mathbb{P}(2.43 < X) \right) \\
	=&~ 0.6 \left[ \Phi\left( \frac{2.43}{2} \right) - \Phi\left( \frac{0.23}{2} \right)  \right] \\
	 &+ 0.4 \left[ \Phi\left( 0.23 - 1 \right) + 1 - \Phi\left( 2.43 - 1 \right)  \right] \\
	\simeq& 0.324
\end{align} $$
Se puede ver que el pero error posible, sería de un clasificador dammpy, el cual elegiría la opción más probable ($Y = 0$) y tendría un error de $0.4$, por lo que cualquier otro clasificador tendría un error entre $0.324$ y $0.4$