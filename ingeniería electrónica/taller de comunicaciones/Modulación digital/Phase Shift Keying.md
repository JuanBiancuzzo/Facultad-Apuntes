---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases:
  - M-Phase Shift Keying
  - PSK
  - M-PSK
  - BPSK#^BPSK
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
Cabe aclarar que para $M = 2$, se lo suele llamar BPSK y solo se define  solo un componente, coincide con [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Amplitude Shift Keying|2-ASK]] ^BPSK

%% Dibujo de la constelación %%

Podemos definir la posición de los símbolos en función de la distancia mínima, donde notemos que lo importante en sí mismo es el radio $r$ 

%% Dibujo trianglulo %%

Obtenemos entonces una expresión del radio en función de la distancia mínima dada por $$ \begin{align}
    r ~ \sin\left( \frac{\theta}{2} \right) &= \frac{d}{2} \\
    r &= \frac{d}{2 \sin\left( \frac{\theta}{2} \right)} \\
\end{align} $$ con $\theta = \frac{2\pi}{M}$

Al definir las posiciones de los símbolos en función de la distancia mínima entre símbolos, podemos relacionarla con la energía de símbolo, siendo estos equiprobables, dado por $$ \begin{align}
    E_s &= \frac{1}{M} \sum_{i = 0}^{M - 1} \lVert s_i \rVert^2 \\
     &= \frac{1}{M} \sum_{i = 0}^{M - 1} r^2 \\
     &= r^2 \\
     &= \frac{d^2}{4 \sin^2\left( \frac{\pi}{M} \right)}
\end{align} $$

Partiendo del caso de que $M > 2$, para aproximar la probabilidad de error, donde se considera el error que se tiene con los vecinos

Para calcular el error, vamos a plantear $$ P_e = 1 - P_c, ~~~~ P_c = \sum_{i = 1}^{M} \mathbb{P}(s_i) ~ \underbrace{\mathbb{P}(s_i = \hat{s}_i \mid s_i = s)}_\text{sé eligió el símbolo correcto} $$
Notemos que todos los símbolos tiene $2$ vecinos, por lo tanto $$ P_{ci} = \left( 1 - Q(\cdot) \right)^2 $$ donde $Q(\cdot) = Q\left( \frac{d}{2\sigma} \right)$

Se puede calcular la probabilidad de acierto como $$ \begin{align}
    P_c &= \frac{1}{M} \sum_{i = 1}^{M} \left( 1 - Q(\cdot) \right)^2 \\
    &= \left( 1 - 2Q(\cdot) + Q^2(\cdot) \right) \\
\end{align} $$

Finalmente podemos calcular la probabilidad de error $$ \begin{align}
    P_e &= 1 - P_c \\
    &= 1 - \left( 1 - 2Q(\cdot) + Q^2(\cdot) \right) \\
    &= 2Q(\cdot) - Q^2(\cdot) \\
    &\simeq 2 ~ Q\left( \frac{d}{2\sigma} \right) \\
\end{align} $$ con la expresión de la distancia y recordando que $\sigma^2 = \frac{N_0}{2}$, se obtiene $$ P_e \simeq 2 ~ Q\left( \sqrt{ 2 \frac{E_s}{N_0}} \sin\left( \frac{\pi}{M} \right) \right) $$
Para el caso de $M = 2$, notemos que al ser igual que el 2-ASK, entonces su probabilidad de error es de $$ P_e = Q\left( \sqrt{2 ~ \frac{E_s}{N_0}} \right) $$
## Característica
---
Esta modulación tiene el beneficio de no ser afectado por la atenuación ya que la información que diferencia un símbolo de otro es la fase y no la amplitud. También tiene muy buena eficiencia espectral

Tiene como desventaja que para valores grandes de $M$ los símbolos quedan cada vez más cerca a pesar de tener una energía de símbolo cada vez mayor, haciendo que se necesite una mayor [[Relación señal-ruido|relación señal ruido]] para obtener el mismo 

