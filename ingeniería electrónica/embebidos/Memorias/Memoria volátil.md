---
dia: 2024-09-09
tags:
  - carrera/ingeniería-electrónica/embebidos/Memorias
  - nota/facultad
aliases:
  - Memoria volátil de acceso asíncrono#Acceso asíncrono
  - Memoria volátil de acceso síncrono#Acceso síncrono
  - Memoria volátil de acceso en serie#Acceso en serie
  - Memoria volátil de acceso en paralelo#Acceso en paralelo
vinculoFacultad:
  - tema: Memorias
    capitulo: 3
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# Definición
---
Representada por la [[Random Access Memory|RAM]] tradicional (pero tenga en cuenta que las formas de [[Memoria no volátil|memoria no volátil]] ahora también ofrecen acceso aleatorio). Cuando se corta la [[Energía|energía]], el contenido de la memoria volátil se pierde. Puede ser [[Memoria estática|estático]] o [[Memoria dinámica|dinámico]]
* [[Static Random Access Memory|SRAM]]
* [[Synchronous Static Random Access Memory|SSRAM]]
* [[Dynamic Random Access Memory|DRAM]]
* [[Synchronous Dynamic Random Access Memory|SDRAM]]
* [[Double Date Rate Synchronous Dynamic Random Access Memory|DDR SDRAM]]
* [[Graphics Double Date Rate 2 Synchronous Dynamic Random Access Memory|GDDR (SDRAM)]]
* [[Low Power Double Date Rate Synchronous Dynamic Random Access Memory|LPDDR]]
* [[Quad Date Rate|QDR]]

## Acceso asíncrono
---
No se utiliza ningún reloj. La familia [[Random Access Memory|RAM]] tiene algunos dispositivos sin reloj. Realizan acceso asincrónicos

## Acceso síncrono
---
El acceso a la memoria se basa en el reloj. Las soluciones RAM más recientes utilizan un reloj para sincronizar las transferencias de datos

## Acceso en paralelo
---
En un [[Bus|bus]] [[Paralelo|paralelo]], todas las líneas de direcciones y datos están disponibles, lo que permite al [[Microprocesadores|procesador]] ejecutar código y acceder a datos directamente con una velocidad de transferencia muy rápida entre la memoria y el procesador; menos de diez nanosegundos para la transferencia de una [[Palabra|palabra completa]]. Tenga en cuenta que algunas dispositivos multiplexan estas líneas

## Acceso en serie
---
Cuando el número de línea utilizadas para transferir direcciones y datos debe ser limitado, el acceso en serie a la memoria (un bit a la vez) es una opción sensata. Las memorias utilizadas en [[Tarjeta Secure Digital (Tarjeta SD)|tarjetas SD]] y memorias [[Universal Serial Bus (USB)|USB]] utilizan este enfoque. La transferencia de [[Información|información]] se realiza con un bus serie en forma de controlador [[Interfaz periférica serie (SPI)|SPI]] o [[Interfaz periférica serie en cola (SPI en cola) (QSPI)|QSPI]]. Los [[Protocolo|protocolos]] alternativos incluyen USB e [[Protocolo de baja velocidad para múltiples periféricos (I2C)|I2C]]