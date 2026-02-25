---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases:
  - M-Amplitude Shift Keying
  - ASK
  - M-ASK
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

Es equivalente al [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Pulse-Amplitud Modulation|M-PAM]], ya que propone un solo componente $$ \varphi(t) = \sqrt{\frac{2}{T_s}} \cos(\omega_p t) ~ h_{tx}(t) $$
%% Dibujo de la constelación %%

Al definir las posiciones de los símbolos en función de la distancia mínima entre símbolos, podemos relacionarla con la energía de símbolo, siendo estos equiprobables, dado por $$ \begin{align}
    E_s &= \frac{1}{M} \sum_{i = 0}^{M - 1} \lVert s_i \rVert^2 \\
    &= \frac{2}{M} \sum_{j = 0}^{\left\lfloor \frac{ M - 1}{2} \right\rfloor } \left( (2j + 1) \frac{d}{2} \right)^2 \\
    &= \frac{d^2}{2M} \sum_{j = 0}^{\left\lfloor \frac{ M - 1}{2} \right\rfloor } (2j + 1)^2 = \frac{d^2}{2M} \sum_{j = 1}^{ \frac{M}{2} } (2j - 1)^2 \\
    &= \frac{d^2}{2M} \left( \frac{M}{6} ~ (M^2 - 1) \right)\\
    &= \frac{d^2}{12} (M^2 - 1)\\
\end{align} $$
Notemos que $M - 2$ símbolos tiene dos vecinos, y los restantes $2$ tiene un único vecino, aproximando el error de un símbolo al error que ocurre con sus vecinos, podemos aproximar la probabilidad de error para cualquier $M$ como $$ \begin{align}
    P_e &= 2 ~ Q(\cdot) + 2 \sum_{k = 1}^{M - 2} Q(\cdot), & Q(\cdot) = Q\left( \frac{d}{2\sigma} \right) \\
     &= \left( 2 + 2 \sum_{k = 1}^{M - 2} 1 \right) ~ Q(\cdot)  \\
     &= 2(M - 1) ~ Q(\cdot) 
\end{align} $$ con la expresión de la distancia y recordando que $\sigma^2 = \frac{N_0}{2}$, se obtiene $$ \begin{align}
    P_e &= 2(M - 1) Q\left( \frac{d}{2\sigma} \right) \\
     &= 2(M - 1) Q\left( \frac{1}{2} \sqrt{ \frac{12 ~ E_s}{M^2 - 1} ~ \frac{2}{N_0} } \right) \\
     &= 2(M - 1) Q\left( \sqrt{ \frac{6}{(M^2 - 1)} ~ \frac{E_s}{N_0} } \right) \\
\end{align} $$

## Característica
---
Esta modulación tiene inconvenientes con la atenuación generada por el canal, ya que las regiones de decisión se modifican según la atenuación 
