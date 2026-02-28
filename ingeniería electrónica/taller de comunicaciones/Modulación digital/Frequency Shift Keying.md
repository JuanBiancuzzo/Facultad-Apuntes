---
dia: 2026-02-27
etapa: empezado
referencias: []
aliases:
  - M-Frequency Shift Keying
  - FSK
  - M-FSK
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

Se define tantas componentes como símbolos, dados por $$ \varphi_i(t) = \sqrt{\frac{2}{T_s}} \cos\left( \omega_i t \right) ~ h_{tx}(t) $$

%% Dibujo de la constelación %%

Al definir las posiciones de los símbolos en función de la distancia mínima entre símbolos, podemos relacionarla con la energía de símbolos, siendo estos equiprobables, dado por $$ \begin{align}
    E_s &= \frac{1}{M} \sum_{i = 1}^{M} \left\lVert \left(0,~ \cdots,~ \frac{d}{\sqrt{2}},~ \cdots,~ 0 \right) \right\rVert^2 \\
    &= \frac{1}{M} \sum_{i = 1}^{M} \frac{d^2}{2} \\
    &= \frac{d^2}{2}
\end{align} $$

Para aproximar la probabilidad de error, donde se considera el error que se tiene con los vecinos. Notemos que todos los símbolos son vecinos de los otros

Para calcular el error, vamos a plantear $$ P_e = 1 - P_c, ~~~~ P_c = \sum_{i = 1}^{M} \mathbb{P}(s_i) ~ \underbrace{\mathbb{P}(s_i = \hat{s}_i \mid s_i = s)}_\text{sé eligió el símbolo correcto} $$
Para cada símbolo, su probabilidad de acierto es $$ P_{ci} = \left(1 - (M - 1) ~ Q(\cdot) \right) $$ donde $Q(\cdot) = Q\left( \frac{d}{2\sigma} \right)$

Calculamos la probabilidad de acierto como $$ \begin{align}
    P_c &= \frac{1}{M} \sum_{i}^{M} (1 - (M - 1) ~ Q(\cdot)) \\
    &= 1 - (M - 1) ~ Q(\cdot) \\
\end{align} $$ y por lo tanto la probabilidad de error $$ \begin{align}
    P_e &= 1 - (1 - (M - 1) ~ Q(\cdot)) \\
    &= (M - 1) ~ Q(\cdot) \\
    &= (M - 1) ~ Q\left( \frac{d}{2\sigma} \right) \\
    &= (M - 1) ~ Q\left( \sqrt{\frac{E_s}{N_0}} \right) \\
\end{align} $$

## Característica
---
