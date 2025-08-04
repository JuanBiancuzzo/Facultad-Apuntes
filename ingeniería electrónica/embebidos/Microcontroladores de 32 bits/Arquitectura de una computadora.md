---
dia: 2024-09-09
tags:
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - nota/facultad
aliases:
  - Bus de dirección#^bus-direccion
  - Bus de datos#^bus-datos
  - Bus de control#^bus-control
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Microcontroladores de 32 bits/Resumen.md]]"
---
# Definición
---
Se trata, a nivel de [[Hardware|hardware]], de un sistema compuesto por $3$ elementos básicos
* [[Microprocesadores|Procesador(es) o microprocesador(es)]] para gestión de datos y ejecución de [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programas]]
* [[Memoria|Memorias]] para almacenamiento de código, almacenamiento de datos y almacenamiento operacional, como el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] o el [[Heap|heap]]
* Dispositivos de [[General Purpose Input Output|E/S - I/O]], para la comunicación entra las partes internas y el mundo exterior a través de interfaces programables

Las conexiones entre estos elementos se realizan a través de $3$ [[Bus|buses]] principales
* El bus de dirección  ^bus-direccion
    * Deriva de la unidad solicitante, como procesador, y se utiliza para especificar a qué unidad se solicita acceder y a qué elementos dentro de esta unidad
* El bus de datos  ^bus-datos
    * Se utiliza para transferir [[Información|información]] entre una unidad solicitante y una unidad con que se completará la transferencia
* El bus de control  ^bus-control
    * Se utiliza para especificar qué hacer. La dirección de las transferencias de datos (lectura o escritura) desde el punto de vista de la unidad solicitante y cuánto hacerlo en términos de tiempo

El sistema de bus de hardware resultante también requiere otras funciones y señales obligatorias, incluido un reloj para sincronizar las transferencias de datos, un reset para inicializar el sistema, líneas de alimentación y líneas de [[Interrupción|interrupción]]

![[Arquitectura de una computadora con elementos básicos.png]] ^8d24aa

El procesador proporciona una dirección para seleccionar un dispositivo e indicar una posición de memoria o un [[Unidad de datos|registro interno]] de interfaz programable

El decodificador recibe la parte superior de la dirección y puede seleccionar una unidad de memoria específica o una interfaz programable para acceder, genera una señal (llamada Chip Select) para permitir el acceso exclusivo a un dispositivo a la vez

Estos elementos son muy específicos de los dispositivos reales involucrados. Físicamente, los buses constan de muchos cables. Transportan información en momentos concretos y, en general, de forma síncrona mediante señales de reloj. Están definidos por especificaciones y todos los elementos del bus deben respetar los [[Protocolo|protocolo]] definidos en términos de niveles lógicos([[Tensión|tensiones]]) y temporización utilizados en el bus