---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 175
nombre: Modulación biortogonal
---
# Enunciado
---
Considere un sistema de comunicación cuaternario ($M = 4$) que transmite cada $T_s$, los $4$ símbolos [[ingeniería en informática/proba/Teoría de probabilidades/Evento equiprobable|equiprobables]]: $s_1(t)$, $-s_1(t)$, $s_2(t)$ y $-s_2(t)$. Las señales $s_1(t)$ y $s_2(t)$ son [[ingeniería en informática/analisis 2/Nomenclatura/Ortogonalidad|ortogonales]] con igual [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]]. El [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] es [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Ruido blanco|AWGN]] y la [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] del ruido es $\frac{N_0}{2}$. El demodulador consiste de $2$ [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Filtro adaptativo|filtro adaptados]] a $s_1(t)$ y $s_2(t)$ y las salidas en el instante de muestreo óptimo son $U_1$ y $U_2$. La regla de decisión es $$ \begin{align}
	U_1 > |U_2| &\implies s_1(t), & U_1 < -|U_2| &\implies -s_1(t) \\
	U_2 > |U_1| &\implies s_2(t), & U_2 < -|U_1| &\implies -s_2(t) \\
\end{align} $$
1. Calcular la [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Cota de unión de fronteras|cota de unión de eventos]] de la probabilidad de error de símbolo
2. Calcular la probabilidad de error de bit asumiendo [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Código de Gray|código de Gray]]
3. Calcular la probabilidad de error de símbolo y de bit
4. Mostrar que la performance es igual a la de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Shift Keying|QPSK]]

# Resolución
---


# Resultado
---

