---
dia: 2026-07-03
tags:
  - proyecto-práctico/Drone
  - nota/proyecto
---
# Progreso
---
La intención es tener $4$ módulos, que representan el funcionamiento completo del sistema
1. Estimación de estados
2. Control del sistema
3. Planeamiento de trayectorias
4. Interfaz con el usuario

Para el modelado, sería bueno intentar conseguir un modelo no lineal del sistema, ya que lo usaríamos para la estimación de estados, y la [[ingeniería electrónica/control/Linealización/Linealización Jacobiana|linealización]]. Especialmente para este último, estaría interesante combinar multiples [[ingeniería electrónica/control/Respuesta dinámica/Punto de equilibrio|puntos de equilibrio]], para hacer la linealización alrededor de estos puntos y usar [[Gain Scheduling|gain scheduling]] para controlar de forma lineal incluso en un rango grande de no linealidad

Finalmente, también sería interesante ver como hacer pruebas automáticas para evaluar de forma digital si con el modelado utilizado, se puede garantizar (de nuevo de forma digital y dentro del modelo obtenido) los criterios de estabilidad y limites de diseño impuestos

Se puede utilizar [[Docker container|Docker]] en conjunto con una [[Máquina virtual|máquina virtual]] como [[QEMU|QEMU]] para virtualizar la arquitectura y los recursos que tiene nuestro sistema, obteniendo métricas como tiempos de ejecución, rise time para diferentes tests, y otros que nos parezcan útiles para definir el correcto comportamiento del drone

## Estimación de estados
---
Principalmente sería un [[Observador|observador]], utilizando un [[ingeniería electrónica/taller de control/Observadores/Filtro de Kalman|filtro de Kalman]]. Donde la información se utilizaría un [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]] del drone, no lineal, y las mediciones de sensores como un [[Inertial Measurement Unit (IMU)|IMU]], sensor de distancia para la altura, y/o sensor de presión. Para estos sensores tal vez sea bueno investigar como utilizar [[ingeniería electrónica/embebidos/Conversión analógica a digital y digital a analógica/Direct Memory Access controller|DMA]] e [[ingeniería en informática/sisop/Kernel/Interrupción|interrupciones]] para tener una manera más eficiente de conseguir esa información de los [[colección/componentes/sensores/Sensores|sensores]]

También como una especie de sensor, se puede utilizar un [[Filtro de partículas|filtro de partículas]], con landmarks o un mapa de ocupación para generar una estimación del mapa y localización, es decir, utilizando [[ingeniería electrónica/robotica movil/SLAM/Simultaneous localization and mapping|SLAM]]. Este resultado se utilizaría como información de la posición que sería una variable de estado del sistema. Estaría interesante ver como manejar la memoria necesaria para manejar los mapas, tal vez con un [[Level of Detail (LOD)|LOD]] u una estructura de [[ingeniería en informática/discreta/Grafos/Árbol|árbol]]

Como algo interesante a incluir estimación de perturbaciones, especialmente para ángulos, que pueden serlas variables que más influyan al control

## Control del sistema
---
Utilizando métodos de [[Control por realimentación de estados|control por realimentación de estados]], en conjunto de [[ingeniería electrónica/taller de control/Realimentación de estados/Lineal Quadratic Regulator|LQR]] para crear la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] de ganancias, también incluyendo, lo que a veces se refiere como [[ingeniería electrónica/taller de control/Realimentación de estados/Lineal Quadratic Regulator|LQI]] donde incluye acción integral, pero conociendo que no únicamente seguimiento de referencias por rampas o cambios cuadráticos como método de seguimiento por [[Spline|spline]]

## Planeamiento de trayectorias
---
Este sistema realmente es opcional, ya que no necesariamente en todo momento es necesario que este funcionando, a diferencia de los otros sistemas. Este utilizará el mapa e input del usuario para generar la trayectoria

Este sistema puede usar [[Algoritmo A estrella|A*]] u algún otro método para definir la referencia que se ingresa al controlador

## Interfaz con el usuario
---
Este es el punto de ingreso y salida de información del sistema completo, el cual genera la información mínima para enviar y loggear el sistema, y obtiene la información del usuario para pasar al planeamiento o control