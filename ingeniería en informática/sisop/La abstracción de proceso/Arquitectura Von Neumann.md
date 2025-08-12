---
dia: 2023-11-15
tags:
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-electrónica/estructura/Microarquitectura
  - carrera/ingeniería-en-informática/estructura/Microarquitectura
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
vinculoFacultad:
  - tema: Microcontroladores de 32 bits
    capitulo: 2
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
  - tema: Microarquitectura
    capitulo: 10
    materia: Estructura del computador
    carrera: Ingeniería en informática
  - tema: La abstracción de proceso
    capitulo: 2
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
Para transferir datos dentro y fuera del [[Microprocesadores|procesador]], dos [[Buffer|buffers]] específicos acceden al [[Arquitectura de una computadora#^bus-datos|bus de datos]] externo. A veces se utiliza un buffer bidireccional, con un [[Buffer tri-state|buffer tri-state]] que permite diferenciar la dirección de transferencia. Los datos pueden ser una instrucción, un acceso a una variable en memoria o un acceso a una interfaz programable; cualquier cosa que pueda proporcionar o recibir datos

Cuando tanto las instrucciones como los datos están disponibles a través del mismo par de [[Arquitectura de una computadora#^bus-direccion|bus de direcciones]] y bus de datos, la arquitectura se describe como von Neuman. Esta arquitectura utiliza un [[Dirección de memoria|espacio de memoria unificado]] que contiene instrucciones y datos. Se comparte el mismo [[Bus|bus]] para leer instrucciones y acceder a datos. El uso de un bus común reduce las líneas físicas y permite que el bus compartido sea amplio, pero las transferencias de instrucciones y datos deben ser secuenciales, lo que crea un cuello de botella y reduce el rendimiento

Físicamente, las memorias pueden ser diferentes pero los mismos buses físicos se utilizan de forma uniforme

![[Arquitectura Von Newman.png]]