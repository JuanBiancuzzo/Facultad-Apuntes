---
dia: 2024-02-28
tags:
  - carrera/ingeniería-electrónica/dispo/Dispositivos-de-potencia
  - nota/facultad
vinculoFacultad:
  - tema: Dispositivos de potencia
    capitulo: 8
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
El tiristor o SCR (Silicon Controlled Rectifier) es uno de los principales dispositivos de [[Potencia|potencia]]. Consiste en un sandwich PNPN:

![[Tiristor.webp]]

Donde se puede analizar como dos [[Transistor bipolar de juntura|TBJ]]s

![[Relación entre un Tiristor y la dos TBJs.webp]]

* Cuando $V_K > V_A$ siempre hay 2 [[Juntura PN|junturas]] en [[Diodo de Juntura PN#Para $V_D < 0$ (en Convención de signos para la tensión de polarización Polarización inversa inversa )|en inversa]] por lo que no hay conducción
* Cuando $V_A > V_K$ hay una juntura en inversa, entonces no hay conducción
* Al forzar $I_G$ $(I_{B2})$ se genera una realimentación positiva que mantiene al dispositivo en conducción
* Para cesar la conducción se requiere quitar la [[Corriente eléctrica|corriente]] de ánodo a cátodo.

## Curva característica
---
Veamos la [[Curva característica de un componente|curva característica]] del tiristor

![[Curva característica del tiristor.webp]]

$V_{B0}$ ([[Tensión|tensión]] de ruptura): mínima tensión de $V_{AK}$ que dispara al tiristor
* $I_L$ Corriente de latch (enganche): es la [[Mínimo|mínima]] corriente de encendido del tiristor
* $I_H$ Corriente de hold (retención): mínimo corriente que lo mantiene encendido
* $I_R$ Corriente reversa: corriente que circula para $V_K > V_A$

Para forzar el estado de conducción
* Un pulso $I_G > 0$ y $0 < V_{AK} < V_{B0}$
* Tensión: $V_{AK} > V_{B0}$
* [[Temperatura|Temperatura]]: Aumenta la corriente de fuga
* Luz: Aumenta la corriente de fuga
* $\frac{dV}{dt}$: Por efecto [[Capacitancia|capacitivo]], aumenta la corriente a través del dispositivo

## Zona segura de operación
---
![[Zona segura de operación del Tiristor.webp]]

* $I_{MAX}$: Corriente máxima limitada por los contactos
* $V_{MAX}$: Tensión limitada por alguna juntura en inversa que entra en proceso de ruptura $(E_{crítico})$
* $P_{TOT}$: Limitación de la [[Potencia|potencia]] que puede disipar el dispositivo
* Avalancha secundaria: Fenómeno de ruptura dado por "hot spots" (regiones de mayor energía, defectos del material)