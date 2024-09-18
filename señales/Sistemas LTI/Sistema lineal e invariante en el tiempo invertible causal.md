---
dia: 2024-03-20
aliases:
  - Sistema LTI causal
tags:
  - señales/Sistemas-LTI
  - nota/facultad
---
# Definición
---
Sabemos que para que un [[Sistema lineal e invariante en el tiempo|sistema]] sea [[Sistema causal|causal]] tiene que ocurrir ![[Sistema causal#Definición]]
Podemos entonces $$ \begin{matrix} 
	y(t) &= \displaystyle \int_{-\infty}^{\infty} x(t - \tau) ~ h(\tau) ~ d\tau \\ 
	 &= \displaystyle \int_{-\infty}^{0} x(t - \tau) ~ h(\tau) ~ d\tau \\ 
	 &+ \displaystyle \int_{0}^{\infty} x(t - \tau) ~ h(\tau) ~ d\tau \\ 
\end{matrix} $$
por lo cual debemos tener que $$ h(\tau) = 0, ~~ \tau < 0 $$ y la salida del sistema se puede escribir como $$ \begin{matrix} 
	y(t) &= \displaystyle \int_{0}^{\infty} x(t - \tau) ~ h(\tau) ~ d\tau \\ 
	&= \displaystyle \int_{-\infty}^{t} x(\tau) ~ h(t - \tau) ~ d\tau \\ 
\end{matrix} $$