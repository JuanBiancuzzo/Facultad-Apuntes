---
dia: 2026-08-24
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 622
etapa: empezado
---
# Enunciado
---
1. Se transmite [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Shift Keying|16PSK]] a $R_b = 256 ~ \text{kbps}$, una [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] de transmision de $Pt = 20 ~ \text{dBm}$, una respuesta de amplitud plana del canal de $10^{-5}$ y $N_o = 4~10^{-21}$ ^parte-1
	1. Mínimo [[Ancho de banda|ancho de banda]] no ideal del canal para caso I y caso II ^parte-1-1
	2. Diagrama de bloques del transmisor, canal y receptor ^parte-1-2
	3. Calculo del [[ingeniería en informática/redes/Capa Física Inalámbrica/Bit error rate|BER]] ^parte-1-3
	4. Con cual sistema de transmision digital se lograria minimizar el BER sobre el mismo canal de ancho de banda calculado en [[colección/ejercicios/Ejercicio N° 622#^parte-1-1|punto 1.1]], manteniendo $T_b$, misma cantidad de simbolos, misma $Pt$ y sin utilizar codificacion de canal ^parte-1-4
	5. Idem a [[colección/ejercicios/Ejercicio N° 622#^parte-1-4|punto 1.4]] pero sin la necesidad de mantener la misma $T_b$. Calcular la nueva $T_b$ ^parte-1-5

2. Codigo convolucional $(2,~ 1)$ con $g_1 = 111$ y $g_2 = 101$ ^parte-2
	1. Minimo ancho de banda ^parte-2-1
	2. Diagrama de estados y [[ingeniería electrónica/taller de comunicaciones/Codificación/Código convolucional#Diagrama de Trellis|trellis]] para $3$ bits y truncamiento ^parte-2-2
	3. dfree y t ^parte-2-3
	4. Probabilidad de simbolo sin y con codificacion de canal ^parte-2-4
	5. Se podria usar dicho codificador en un sistema que pasa de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Pulse-Amplitud Modulation|2-PAM]] a 4-PAM TCM cumpliendose las reglas de Ungerboeck que sean necesarias? Calcular la ganancia asintótica ^parte-2-5

3. Se daba una tabla $$ \begin{array}{|c|c|}
	    \hline
	    U & m \\\hline
	    u_1 & 1011001 \\\hline
	    u_2 & 0111010 \\\hline
	    \vdots & \vdots \\\hline
	    u_8 & 1110100 \\\hline
   \end{array} $$ ^parte-3
	1. Ancho de banda minimo, dmin, t, e ^parte-3-1
	2. Tabla de patrones de errores vs sindromes. De que tipo es? ^parte-3-2
	3. Probabilidad de que un bloque de k bits se detecte correctamente si no se usa dicho codigo, y cuando se utiliza FEC con dicho codigo ^parte-3-3
	4. Si se realiza ARQ con dicho codigo, hallar los patrones de error que no son detectables ^parte-3-4

# Resolución
---

