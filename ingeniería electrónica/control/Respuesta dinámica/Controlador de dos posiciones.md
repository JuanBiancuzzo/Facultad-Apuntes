---
dia: 2025-03-21
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador on-off
  - Controlador de encendido y apagado
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En un [[Sistema|sistema]] de control de dos posiciones es un [[Controlador automático|controlador]] donde el elemento de actuación sólo tiene dos posiciones fijas que, en muchos casos, son simplemente encendido y apagado. El control de dos posiciones o de encendido y apagado es relativamente simple y barato

Supóngase que la [[Señal|señal]] de salida del controlador es $u(t)$ y que la señal de error es $e(t)$. En el control de dos posiciones, la señal $u(t)$ permanece en un valor ya sea [[Máximo|máximo]] o [[Mínimo|mínimo]], dependiendo de si la señal de error es positiva o negativa. De este modo $$ u(t) = \begin{cases} 
    U_1, && \text{para} ~~ e(t) > 0 \\
    U_2, && \text{para} ~~ e(t) < 0 \\
\end{cases} $$ donde $U_1$ y $U_2$ son constantes. Por lo general, el valor mínimo de $U_2$ es cero o $-U_1$

También puede existir una brecha diferencial, donde $u(t)$ conserva su valor hasta que la señal de error haya superado un umbral mayor a $0$. Este comportamiento se puede modelar con una [[Curva de Histéresis|curva de histéresis]]. Este comportamiento puede ser deseado para evitar la frecuente apagado y prendido de un sistema

Veamos el [[Diagrama de bloques|diagrama de bloques]] en ambos casos ![[Controlador de dos posiciones.png]]

## Ejemplo
---
Como ejemplo, si tenemos una [[Variable de estado|variable de estado]] $q(t)$, podemos ver el efecto que tiene esta brecha diferencial

![[Ejemplo controlador de dos posiciones con brecha diferencial.png]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```