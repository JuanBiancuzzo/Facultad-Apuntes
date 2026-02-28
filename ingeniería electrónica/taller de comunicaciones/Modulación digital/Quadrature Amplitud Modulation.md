---
dia: 2026-02-27
etapa: empezado
referencias: []
aliases:
  - M-Quadrature Amplitud Modulation
  - QAM
  - M-QAM
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación Digital/Modulación digital|modulación]] se aplica cuando se [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Transmisión en banda pasante|transmite en banda pasante]], y con una [[ingeniería electrónica/señales/Señales y sistemas/Señal#^discreta|señal discreta]], este conjunto de símbolos genera un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] y la transmisión de cada símbolo esta dado por un tiempo $T_s$

Este define dos componentes $$ \begin{align}
    \varphi_0(t) &= \sqrt{\frac{2}{T_s}} \cos(\omega_p t) ~ h_{tx}(t) \\
    \varphi_1(t) &= \sqrt{\frac{2}{T_s}} \sin(\omega_p t) ~ h_{tx}(t) \\
\end{align} $$
En este caso vamos a tomar cuando esta es cuadrada, por lo que se limita la cantidad de símbolos a potencias de $4$

%% Dibujo de la constelación %%

Al definir las posiciones de los símbolos en función de la distancia mínima entre símbolos, podemos relacionarla con la energía de símbolos, siendo estos equiprobables

Notemos que los $4$ cuadrantes son iguales, por lo que podemos calcular solo uno de los cuadrantes, por lo tanto $$\begin{align}
     E_s &= \frac{4}{M} ~ \sum_{i = i}^{m} \sum_{j = 1}^{m} \left\lVert \left( (2i - 1)\frac{d}{2},~ (2j - 1)\frac{d}{2} \right) \right\rVert^2 \\
     &= \frac{d^2}{M} ~ \sum_{i = i}^{m} \sum_{j = 1}^{m} \left( 2i - 1 \right)^2 + \left( 2j - 1 \right)^2 \\
     &= \frac{d^2}{M} ~ \sum_{i = i}^{m} \sum_{j = 1}^{m} 4 \left( i^2 + j^2 \right) - 2 \left( i + j \right) + 2 \\
     &= \frac{2 d^2}{M} ~ \left( 2 \sum_{i = 1}^{m} \sum_{j = 1}^{m} \left( i^2 + j^2 \right) - 2 \sum_{i = 1}^{m} \sum_{j = 1}^{m} \left( i + j \right) + \sum_{i = 1}^{m} \sum_{j = 1}^{m} 1 \right) \\
\end{align}$$ donde $m = \frac{\sqrt{M}}{2}$

Vamos a utilizar los siguientes resultados $$ \begin{dcases} 
    \sum_{i = 1}^{n} i = \frac{n ~ (n + 1)}{2} \\
    \sum_{i = 1}^{n} i^2 = \frac{n ~ (n + 1) ~ (2n + 1)}{6} \\
\end{dcases} $$ donde la primera es la [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Suma de Gauss|suma de Gauss]] y aunque obvio, también notemos que $$ \begin{dcases}
    \sum_{i = 1}^{m} \sum_{j = 1}^{m} i + j = \sum_{i = 1}^{m} \sum_{j = 1}^{m} i + \sum_{i = 1}^{m} \sum_{j = 1}^{m} j =  2m ~ \sum_{i = 1} i \\
    \sum_{i = 1}^{m} \sum_{j = 1}^{m} i^2 + j^2 = \sum_{i = 1}^{m} \sum_{j = 1}^{m} i^2 + \sum_{i = 1}^{m} \sum_{j = 1}^{m} j^2 = 2m ~ \sum_{i = 1}^{m} i^2 \\
\end{dcases} $$
Por lo tanto, siguiendo la expresión de la energía $$ \begin{align} 
    E_s &= \frac{2 d^2}{M} ~ \left( 2 \sum_{i = 1}^{m} \sum_{j = 1}^{m} \left( i^2 + j^2 \right) - 2 \sum_{i = 1}^{m} \sum_{j = 1}^{m} \left( i + j \right) + \sum_{i = 1}^{m} \sum_{j = 1}^{m} 1 \right) \\
     &= \frac{2 d^2}{M} \left( 4m \sum_{i = 1}^{m} i^2 - 4m \sum_{i = 1}^{m} i + \sum_{i = 1}^{m} \sum_{j = 1}^{m} 1 \right) \\
     &= \frac{2 d^2}{M} \left( 4m \left( \frac{m ~ (m + 1) ~ (2m + 1)}{6} \right) - 4m \left( \frac{m ~ (m+1)}{2} \right) + m^2 \right) \\
     &= \frac{2 m^2 ~ d^2}{M} \left( \frac{2}{3} (m + 1) ~ (2m + 1)  - 2 (m + 1) + 1 \right) \\
     &= \frac{2 m^2 ~ d^2}{M} \left( \frac{4}{3} m^2 + 2m + \frac{2}{3} - 2m - 2 + 1 \right) \\
     &= \frac{4 m^2 ~ d^2}{6M} \left( 4 m^2 - 1 \right) \\
\end{align} $$ recordando que $m = \frac{\sqrt{M}}{2}$ entonces $4m^2 = M$, finalmente obtenemos $$ E_s = \frac{d^2}{6}(M - 1) $$
Para aproximar la probabilidad de error, donde se considera el error que se tiene con los vecinos. Notemos que podemos separar los símbolos en $3$ regiones
1. Las esquinas donde solo tienen $2$ vecinos
    * Existen siempre $4$ símbolos en esta región
2. Los aristas donde tiene $3$ vecinos
    * Existen $4\left(\sqrt{M} - 2\right)$ símbolos en esta región 
3. El centro donde tienen $4$ vecinos
    * Existen $\left(\sqrt{M} - 2\right)^2 = M - 4\sqrt{M} + 4$ símbolos en esta región

%% Hacer dibujo de las regiones, mostrando el factor de sqrt(M) %%

Para calcular el error, vamos a plantear $$ P_e = 1 - P_c, ~~~~ P_c = \sum_{i = 1}^{M} \mathbb{P}(s_i) ~ \underbrace{\mathbb{P}(s_i = \hat{s}_i \mid s_i = s)}_\text{sé eligió el símbolo correcto} $$
Para la región con $2$ vecinos en diferentes direcciones, su probabilidad de acierto es $$
    P_{ci} = (1 - Q(\cdot))^2 = \left( 1 - 2Q(\cdot) + Q^2(\cdot) \right)
$$ para la región con $3$ vecinos su probabilidad de acierto es $$ 
    P_{ci} = (1 - Q(\cdot))(1 - 2Q(\cdot)) = \left( 1 - 3Q(\cdot) + 2Q^2(\cdot) \right)
$$ para la región con $4$ vecinos su probabilidad de acierto es $$
    P_{ci} = (1 - 2Q(\cdot))^2 = \left( 1 - 4Q(\cdot) + 4Q^2(\cdot) \right)
$$ donde $Q(\cdot) = Q\left( \frac{d}{2\sigma} \right)$

Calculamos la probabilidad de acierto como $$ \begin{align}
    P_c &= \frac{1}{M} \begin{bmatrix}
        4 \\ \sqrt{M} - 2 \\ M - 4\sqrt{M} + 4
    \end{bmatrix}^T ~ \begin{bmatrix}
       1 - 2Q(\cdot) + Q^2(\cdot) \\ 
       1 - 3Q(\cdot) + 2Q^2(\cdot) \\ 
       1 - 4Q(\cdot) + 4Q^2(\cdot) \\ 
    \end{bmatrix} \\
    &= \frac{1}{M} \begin{bmatrix}
        4 &+& 4 \sqrt{M} - 8 &+& M - 4\sqrt{M} + 4 \\
        -8 &+& 24 - 12 \sqrt{M} &+& 16 \sqrt{M} - 4M - 16 \\
        4 &+& 8 \sqrt{M} - 16 &+& 4M - 16 \sqrt{M} + 16 \\
    \end{bmatrix}^T ~ \begin{bmatrix}
       1 \\ Q(\cdot) \\ Q^2(\cdot) 
    \end{bmatrix} \\
    &= \frac{1}{M} \begin{bmatrix}
        M \\ 4 \left( \sqrt{M} - M \right) \\ 4 \left( \sqrt{M} - 1 \right)^2
    \end{bmatrix}^T ~ \begin{bmatrix}
       1 \\ Q(\cdot) \\ Q^2(\cdot) 
    \end{bmatrix} \\
    &= 1 + 4 \left( \frac{1}{\sqrt{M}} - 1 \right) ~Q(\cdot) + 4 \left( 1 - \frac{1}{\sqrt{M}} \right)^2 ~Q^2(\cdot) \\
\end{align} $$
Finalmente podemos calcular la probabilidad de error $$ \begin{align}
    P_e &= 1 - P_c \\
    &= 1 - \left( 1 + 4 \left( \frac{1}{\sqrt{M}} - 1 \right) ~Q(\cdot) + 4 \left( 1 - \frac{1}{\sqrt{M}} \right)^2 ~Q^2(\cdot) \right)\\
    &= 4 \left( 1 - \frac{1}{\sqrt{M}} \right) ~Q(\cdot) - 4 \left( 1 - \frac{1}{\sqrt{M}} \right)^2 ~Q^2(\cdot) \\
    &\simeq 4 \left( 1 - \frac{1}{\sqrt{M}} \right) ~Q\left( \frac{d}{2\sigma} \right) \\
\end{align} $$ con la expresión de la distancia y recordando que $\sigma^2 = \frac{N_0}{2}$, se obtiene $$ P_e \simeq 4 \left( 1 - \frac{1}{\sqrt{M}} \right) ~Q\left( \sqrt{ \frac{3}{M - 1} \frac{E_s}{N_0}} \right) $$
## Característica
---
