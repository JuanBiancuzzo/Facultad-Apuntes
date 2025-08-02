---
dia: 2023-11-14
tags:
  - carrera/ingeniería-electrónica/embebidos/Memorias
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
aliases:
  - MPU
  - Memory Protection Unit
---
# Definición
---
Para que un [[Proceso|proceso]] se ejecute tiene que estar residente en [[Memoria|memoria]], pero a su vez el [[Sistema operativo|sistema operativo]] tiene que estar residente en memoria

El proceso tiene que estar en memoria para poder ejecutarse, mientras que el sistema operativo tiene que estar ahí para iniciar la ejecución del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], manejar las instrucciones y/o atender las [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|systems call]]

Otros procesos podrían estar simultáneamente en memoria para poder compartir la memoria de forma segura, para ello el sistema operativo tiene que poder configurar el [[Hardware|hardware]] de forma tal que cada proceso pueda [[Read system call|leer]] y [[Write system call|escribir]] solo su propia memoria.

Para ello el hardware debe proveer un mecanismo de protección de memoria y uno de estos puede ser la [[Virtualización de memoria|memoria virtual]]

Una versión más sofisticada de la MPU es la [[Memory Management Unit|MMU]]. Su función principal es recibir una [[Dirección de memoria virtual|dirección virtual]] del [[Microprocesadores|procesador]] y generar una [[Dirección de memoria|dirección física]]