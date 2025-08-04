---
dia: 2024-09-19
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Onda armónica
  - Número de una onda electromagnética#^numero-onda
  - Longitud de una onda electromagnética#^numero-onda
  - Vector de onda#Vector de onda
  - Vector de propagación#Vector de onda
  - Campo armónico
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Ondas electromagnéticas/Resumen.md]]"
---
# Definición
---
Una [[Función|función]] que satisfacen la ecuación de ondas son las [[Ecuación de Laplace|funciones armónicas]] $$ \begin{align} 
    g(z \mp ct) &= g_0 ~ \sin(\omega t \mp kz + \varphi_0) \\ 
     &= g_0 ~ \cos(\omega t \mp kz + \varphi_0) \\ 
\end{align} $$ donde $g_0$ es la amplitud y $\varphi_0$ un ángulo de fase. Estas son funciones de una única [[Función periódica#Frecuencia|frecuencia]] $f = \frac{\omega}{2\pi}$. Estas son funciones de onda periódicas, con [[Función periódica#^periodo|periodo]] $T = \frac{\lambda}{c} = \frac{1}{f}$

Se define el número de onda $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$ en función de la longitud de onda $\lambda$ ^numero-onda

Debido a que cualquier función de cuadrado integrable es representable mediante una [[Integral de Fourier|integral de Fourier]] $$ g(z,~t) = \int_0^\infty G_\omega(z) ~ e^{i(\omega t \mp kz)} d\omega $$ y esta representación es una superposición de funciones armónicas, es posible analizar las propiedades físicas generales de las ondas electromagnéticas usando ondas de una única frecuencia u ondas monocromáticas

Es común utilizar la representación [[Fasor|fasorial]] de las ondas armónicas $$ g(z \mp ct) = |g_0| \mathcal{Re}\Set{ e^{i(\omega t \mp kz + \varphi_0)} } $$
La [[Ecuación de onda|ecuación de ondas de D' Alembert]] se convierte en la [[Ecuación de Helmholtz|ecuación de Helmholtz]] en el caso de ondas armónicas $$ \nabla^2 \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} = 0 \implies \nabla^2 \vec{E} + \frac{\omega^2}{c^2} \vec{E} = 0 \implies \nabla^2 \vec{E} + k^2 \vec{E} = 0 $$ con $k = \frac{\omega}{c}$ y lo mismo ocurre con la ecuación de onda para el [[Material magnético#^campo-magnetico|campo magnético]]

## Vector de onda
---
La expresión fasorial de la onda monocromática $$ g(z,~t) = \tilde{g}_0 ~ e^{i(\omega t - kz)} $$ donde $\tilde{g}_0 = g_0 ~ e^{i\varphi_0}$

Esta representa una onda plana monocromática [[Ecuación de onda#^onda-progresiva|progresiva]] que se propaga según $+z$. Sin embargo, en muchas ocasiones es necesario describir la propagación de una onda plana en una dirección cualquiera $\hat{n}$. Para ello se usa el vector de onda o vector de propagación $\vec{k}$ $$ g(\vec{r},~t) = \mathcal{Re} \Set{ \tilde{g}_0 ~ e^{i(\omega t - \vec{k} \vec{r})} } ~~~~~ \text{con} ~ \vec{k} = k ~ \hat{n} $$ que es un vector cuya dirección y sentido es el de la propagación y cuyo módulo es $\frac{\omega}{c}$

Una onda monocromática plana que se propaga según el vector de onda $\vec{k}$ tiene campos sobre planos transversales a $\vec{k}$. Si suponemos una onda [[Onda plana electromagnética#^polarizacion-lineal|linealmente polarizada]] $$ \begin{align} 
    \vec{E}(\vec{r},~t) &= \mathcal{Re}\Set{ \tilde{E}_0 ~ e^{i(\omega t - \vec{k} \vec{r})} ~ \hat{e}_0 } \\
    \vec{H}(\vec{r},~t) &= \frac{1}{Z_{00}} \hat{n} \times \vec{E}(\vec{r},~t) \\
     &= \frac{1}{\omega \mu} \vec{k} \times \vec{E}(\vec{r},~t) \\
     &= \mathcal{Re}\Set{ \frac{\tilde{E}_0}{Z_{00}} ~ e^{i(\omega t - \vec{k} \vec{r})} ~ \hat{h}_0 }
\end{align} $$ con $\hat{h}_0 = \hat{n} \times \hat{e}_0$

