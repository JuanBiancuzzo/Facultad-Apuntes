---
dia: 2024-02-27
capitulo: 8
tags:
  - dispo/Dispositivos-de-potencia
---
### Definición
---
Se diseñan y fabrican para
* Soportar [[Corriente eléctrica|corrientes]] y/o tensiones elevadas
* Favorecen la disipación de [[Calor|calor]]
* Poseer [[Resistencia|resistencia]] de encendido baja
* Poseer resistencia de apagado muy alta
* Conmutar rápidamente

Tenemos
* [[Transistor de efecto de campo metal-óxido-semiconductor de potencia|Transistor de efecto de campo metal-óxido-semiconductor de potencia]]
* [[TBJ de potencia|TBJ de potencia]]

Para evitar la aparición de puntos calientes (hot-spots) se usan diseños interdigitados (finger interleaving), donde se busca disminuir la densidad de corriente.

#### Principios básicos de funcionamiento
---
* En un [[Transistor bipolar de juntura|TBJ]], $I_C$ se controla con $I_B$
* En un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]], $I_D$ se controla con $V_{GS}$

Los objetos son: asilar la [[Malla|malla]] de control de la malla de salida, y con una [[Potencia|potencia]] se controlar otra mucho mayor

#### Características de un dispositivo ideal
---
* Alta densidad de corriente (en conducción)
* Bloqueo de alta [[Tensión|tensión]] $V_{CE}$ o $V_{DS}$ (en apagado)
* Bajo tiempos de conmutación $t_{on}$, $t_{off}$
* Que soporte grandes $\frac{di}{dt}$ y $\frac{dv}{dt}$

#### Velocidad de conmutación
---
En el TBJ las [[Capacitancia|capacidades]] son mayores que en el MOSFET, entonces el TBJ es más lento que el MOSFET

#### Resistencia de paso o de encendido
---
En el TBJ la [[Corriente eléctrica volumetrica|corriente circula a través del área del Emisor]]. En el MOSFET la circulación de [[Corriente eléctrica superficial|corriente es en superficie]]. Entonces el TBJ tiene menor [[Resistencia|resistencia]] de paso (maneja corrientes mayores) que el MOSFET.

#### Comparación aproximada
---
Es una aproximación de las características 

| Parámetros                                             | [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] | [[Transistor bipolar de juntura|TBJ]] |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- | -------------------------------------------- |
| [[Impedancia\|Impedancia]] de entrada                  | Alta $(10^{10} ~ \Omega)$                                                    | Media $(10^{4} ~ \Omega)$                    |
| [[Ganancia\|Ganancia]] en corriente                    | Alta $(10^{7})$                                                              | Media $(10 ~ \text{a} ~ 100)$                |
| Resistencia ON (conducción)                            | Media / Alta                                                                 | Baja                                         |
| Resistencia OFF (corte)                                | Alta                                                                         | Alta                                         |
| Voltaje $V_{CE}$/$V_{DS}$ máx. aplicable               | Alto $(1000 ~ V)$                                                            | Alto $(1200 ~ V)$                            |
| Máxima [[Temperatura\|temperatura]]                    | Alta $(200^\circ C)$                                                         | Media $(150^\circ C)$                        |
| [[Función senoidal#Frecuencia\|Frecuencia]] de trabajo | Alta $(100-500 ~ Khz)$                                                       | Baja $(10-80 ~ Khz)$                         |
| Costo                                                  | Alto                                                                         | Medio                                        |
