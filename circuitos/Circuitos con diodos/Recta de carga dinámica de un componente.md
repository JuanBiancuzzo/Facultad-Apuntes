---
dia: 2024-03-23
capitulo: 1
tags:
  - circuitos/Circuitos-con-diodos
  - nota
---
### Definición
---
Es la mejor aproximación de la [[Curva característica de un componente|curva del componente X]] en el punto Q dado que su derivada en el punto, sí representa la ecuación de una [[Resistencia|resistencia]]

Esta resistencia se denomina resistencia dinámica, y podemos usarla para calcular con la mejor aproximación lineal posible el movimiento del punto solución con la [[Señal|señal]] alterna

#### Para poder utilizarla
---
* Pasivar las [[Fuente de tensión|fuentes de alterna]] y determinar la [[Curva de carga de un componente|curva de carga]] del componente alineal (naranja)
* Utilizar la ecuación alineal de X (celeste) para encontrar el punto Q
* Encontrar la derivada de X en el punto Q

![[Resistencia dinámica.webp]]

* Hacer el cambio de ejes
* Encontrar $v_x(t)$ e $i_x(t)$ utilizando la curva de carga de X (azul), que es función del tiempo, y la resistencia dinámica (rojo)
* Volver a los ejes de tensiones y corrientes totales. Para esto hay que sumar la constantes $I_{xQ}$ y $V_{xQ}$ que se restó al pasar a los ejes de alterna

![[cambio de ejes de curva de carga de pequeña señal alterna.webp]]