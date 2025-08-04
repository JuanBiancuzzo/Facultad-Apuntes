---
dia: 2022-11-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - carrera/ingeniería-electrónica/señales/Serie-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Serie-de-Fourier
  - nota/facultad
etapa: ampliar
referencias: []
aliases:
  - Suma de Fourier#^suma-fourier
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Serie de Fourier/Resumen.md]]"
  - "[[ingeniería electrónica/señales/Serie de Fourier/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La [[Serie]] de Fourier de $f \in E_P$ ([[Conjunto de funciones periódicas|conjunto de funciones periódicas]] de [[Función periódica#^periodo|periodo]] $P$) es la serie $$ f(t) = \sum_{n = -\infty}^\infty c_n(f) \cdot \exp\left( i \frac{2 \pi n}{P}  t\right) $$ donde los coeficientes $c_n(f)$ son los [[Coeficientes de Fourier|coeficientes de Fourier]]. 

Donde esta igualdad se da cuando la [[Señal|señal]] $f(t)$ tiene [[Energía de una señal|energía]] finita, y para variaciones acotadas, se cumple la [[Condición de Dirichlet para la convergencia puntual|condición de Dirichlet para convergencia puntual]]

Cada proyección $f_m = \sum_{n = - m}^m c_n(f) \cdot e_n$ se denomina suma de Fourier ^suma-fourier

## Caso de señal real
---
Notemos que para el caso donde $f(x) \in \mathbb{R}$, entonces se cumple que $x(t) = x^*(t)$ lo cual implica que $c_n = c^*_{-n}$, de esta forma simplificando la representación de una [[Señal|señal]] $$ x(t) = c_0 + \sum_{n=1}^{\infty} 2 ~ \mathcal{Re} \Set{c_n ~ \exp\left( i n \frac{2\pi}{T}  t\right) } $$

Por lo que podemos concluir que para señales reales, los componentes armónicos negativos y positivos están relacionados y nos podemos quedar con las componentes positivas

## Sistemas LTI
---
Los [[Sistema lineal e invariante en el tiempo|sistemas LTI]] reaccionan de una forma muy satisfactoria a [[Señal|señales]] [[Función exponencial|exponenciales]]. Consideremos el caso de un sistema de tiempo continuo cuya [[Representación de una señal mediante impulsos|respuesta al impulso]] es $h(t)$. Supongamos que la entrada al mismo es $\exp(st)$ donde $s \in \mathbb{C}$. La salida del sistema se puede escribir como $$ \begin{align} y(t) 
	&= \int_{-\infty}^{\infty} h(\tau) ~ x(t - \tau) ~ d\tau \\
	&= \int_{-\infty}^{\infty} h(\tau) ~ \exp(s(t - \tau)) ~ d\tau \\
	&= \exp(st) ~ \int_{-\infty}^{\infty} h(\tau) ~ \exp(s\tau) ~ d\tau 
		= \exp(st) ~ H(s)
\end{align} $$
La acción de un sistema LTI sobre una exponencial se puede escribir entonces como $$ y(t) = \exp(st) ~ H(s) $$ donde $H(s)$ es lo que se denomina la [[Transferencia del sistema|transferencia del sistema]]. Ósea el sistema entrega a la salida la misma señal de entrada pasada por un escalar que depende sólo del sistema y del valor de $s$

Se dice que $\exp(st)$ es un [[Autovalor|autovalor]] para los sistemas LTI y que $H(s)$ corresponde al autovalor asociado con $\exp(st)$ y el sistema con [[Respuesta en frecuencia|respuesta al impulso]] $h(t)$

Por lo tanto, si tomamos $s = j\omega_0$ por lo tanto se define la transferencia como $H(j\omega_0)$ que es la [[Respuesta en frecuencia|respuesta en frecuencia del sistema]] $$ H(j\omega_0) = \int_{-\infty}^{\infty} h(t) \exp(-j\omega_0 t) ~ dt $$
Que podemos concluir que la acción de un sistema LTI sobre una señal periódica es modificar los [[Coeficientes de Fourier|coeficientes de Fourier]] de la señal original mediante una multiplicación por la respuesta en frecuencia evaluada en cada uno de los múltiplos de la armónica fundamental

## Propiedades
---
Vamos a asumir que las señales $x(t)$ son periódicas con periodo $T$ y que cumplen todas las propiedades que discutimos arriba para que existe su representación en serie de Fourier. Denotaremos los [[Coeficientes de Fourier|coeficientes de Fourier]] como $a_k$ y el proceso de mapeo de $x(t)$ en sus coeficientes y viceversa lo escribimos como $$ x(t) \xleftrightarrow{~\mathcal{FS}} a_k $$
### Linealidad
---
Sean $x(t)$ e $y(t)$ [[Función periódica|función periódicas]] de periodo $T$ tales que $x(t) \xleftrightarrow{~\mathcal{FS}} a_k$, $y(t) \xleftrightarrow{~\mathcal{FS}} b_k$. Entonces $$ \alpha x(t) + \beta y(t) \xleftrightarrow{~\mathcal{FS}} \alpha a_k + \beta b_k $$

### Desplazamiento temporal
---
Consideremos $y(t) = x(t - \tau)$ con $\tau \in \mathbb{R}$. Entonces $$ y(t) \xleftrightarrow{~\mathcal{FS}} a_k ~ \exp\left( -jk\omega_0 \tau \right) $$

### Inversión temporal
---
Consideremos $y(t) = x(-t)$. Entonces $$ y(t) \xleftrightarrow{~\mathcal{FS}} a_{-k} $$

### Conjugación y simetría conjugada
---
Consideremos $y(t) = x^*(t)$. Entonces $$ y(t) \xleftrightarrow{~\mathcal{FS}} a_{-k}^* $$
```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}

\begin{document}
	\begin{tikzcd}
		x(t) \arrow[d, <->] 
			& \text{Real y par} \arrow[d, <->]
			& \text{Real e impar} \arrow[dr, <->]
			& \text{Imaginaria y par} \arrow[dl, <->]
			& \text{Imaginaria e impar} \arrow[d, <->] \\
		a_k & \text{Real y par}
			& \text{Real e impar}
			& \text{Imaginaria y par}
			& \text{Imaginaria e impar} \\
	\end{tikzcd}
\end{document}
```

### Multiplicación
---
Sean $x(t)$ e $y(t)$ [[Función periódica|función periódicas]] de periodo $T$ tales que $x(t) \xleftrightarrow{~\mathcal{FS}} a_k$, $y(t) \xleftrightarrow{~\mathcal{FS}} b_k$. Entonces $$ x(t) ~ y(t) \xleftrightarrow{~\mathcal{FS}} \sum_{p = -\infty}^{\infty} a_p ~ b_{k - p} = a_k * b_k $$

### Diferenciación
---
Considerando $y(t) = \frac{dx(t)}{dt}$. Entonces $$ \frac{dx(t)}{dt} \xleftrightarrow{~\mathcal{FS}} jk\omega_0 ~ a_k $$

### Integración
---
Considerando $y(t) = \int_{-\infty}^{t} x(\tau) ~ d\tau$. Entonces $$ \int_{-\infty}^{t} x(\tau) ~ d\tau \xleftrightarrow{~\mathcal{FS}} \frac{a_k}{jk\omega_0} $$
Notemos que en $k = 0$ no esta definida, lo podemos pensar como al integrar se tenga que agregar una constante, esta sería representada con $a_0$ y como la integral no la define, esta no se puede definir por esta forma