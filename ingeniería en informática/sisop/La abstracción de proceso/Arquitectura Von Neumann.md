---
dia: 2023-11-15
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-en-informática/estructura/Microarquitectura
  - carrera/ingeniería-electrónica/estructura/Microarquitectura
---
# Definición
---
Para transferir datos dentro y fuera del [[Procesador|procesador]], dos [[Buffer|buffers]] específicos acceden al [[Arquitectura de una computadora#^bus-datos|bus de datos]] externo. A veces se utiliza un buffer bidireccional, con un [[Buffer tri-state|buffer tri-state]] que permite diferenciar la dirección de transferencia. Los datos pueden ser una instrucción, un acceso a una variable en memoria o un acceso a una interfaz programable; cualquier cosa que pueda proporcionar o recibir datos

Cuando tanto las instrucciones como los datos están disponibles a través del mismo par de [[Arquitectura de una computadora#^bus-direccion|bus de direcciones]] y bus de datos, la arquitectura se describe como von Neuman. Esta arquitectura utiliza un [[Dirección de memoria|espacio de memoria unificado]] que contiene instrucciones y datos. Se comparte el mismo [[Bus|bus]] para leer instrucciones y acceder a datos. El uso de un bus común reduce las líneas físicas y permite que el bus compartido sea amplio, pero las transferencias de instrucciones y datos deben ser secuenciales, lo que crea un cuello de botella y reduce el rendimiento

Físicamente, las memorias pueden ser diferentes pero los mismos buses físicos se utilizan de forma uniforme

![[Arquitectura Von Newman.png]]