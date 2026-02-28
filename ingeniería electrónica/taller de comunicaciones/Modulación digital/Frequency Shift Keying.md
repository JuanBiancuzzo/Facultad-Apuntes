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

Donde se eligen las frecuencias con una cierta separación dependiendo si la decodificación de esta [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital coherente|modulación es coherente o no coherente]]

## Probabilidad de error
---
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
## Cotas
---
Se puede acotar esta probabilidad de error con por [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Cota de unión de fronteras por vecinos más cercanos|unión de fronteras por vecinos más cercanos]] dando $$ \begin{align}
    P_e &\le \langle N_e \rangle ~ Q\left(\frac{d}{2\sigma}\right) \\
    &\le \left( \frac{1}{M} \sum_{i = 1}^{M} N_i \right) ~ Q\left(\frac{d}{2\sigma}\right) \\
    &\le \left( \frac{1}{M} \sum_{i = 1}^{M} M - 1 \right) ~ Q\left(\frac{d}{2\sigma}\right) \\
    &\le \left( M - 1 \right) ~ Q\left(\frac{d}{2\sigma}\right) \\
\end{align} $$ no solo es exactamente la misma probabilidad de error calculada antes, sino que también coincide con la [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Cota de unión de fronteras|cota de unión de fronteras]] 

## Relación con probabilidad de error de bit y símbolos
---
Podemos relacionar la probabilidad de error de símbolo con la de bit, de la siguiente forma $$ \mathbb{P}(\text{error de bit} \mid \text{error de símbolo}) = \frac{\overbrace{\mathbb{P}(\text{error de símbolo} \mid \text{error de bit})}^{=~1} ~ P_b}{P_e} $$ esto se da por la [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|fórmula de Bayes]], y donde $P_b$ es la probabilidad de error de bit, por lo que necesitamos calcular la probabilidad de error de bit, sabiendo que hubo un error de símbolo



%% Mostrar porque P_b = \frac{M}{2(M - 1)} P_e %%

## Espaciamiento mínimo de frecuencias
---
Los componentes se diferencian por frecuencia, donde los componentes generan una [[ingeniería en informática/analisis 2/Nomenclatura/Base ortonormal|base ortonormal]], pero no necesariamente $2$ frecuencias arbitrarias son ortonormales, por lo que para obtener cual es la diferencia más chica vamos a plantear el caso general donde no conocemos la fase $$ \begin{align}
    \langle s_1,~ s_2 \rangle &= \int_{0}^{T_s} \cos(2\pi f_1 ~ t) ~ \cos(2\pi f_2 ~ t + \varphi) ~ dt = 0 & \text{con} ~ 0 \le \varphi < 2\pi \\
    &= 
\end{align} $$

## Característica
---
