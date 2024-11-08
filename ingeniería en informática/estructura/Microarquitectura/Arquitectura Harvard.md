---
dia: 2024-08-29
tags:
  - ingeniería-en-informática/estructura/Microarquitectura
  - nota/facultad
  - ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
---
# Definición
---
Este modelo corresponde a la arquitectura, como alternativa a la [[Arquitectura Von Neumann|arquitectura Von Neumann]], de las primeras [[Computadora|computadoras]], sin embargo, tiene un problema. Estas computadoras no son fácilmente programables, por lo que no pueden resolver todos los problemas. Hoy en día son de uso común

Es más potente en términos de eficiencia informática

![[Arquitectura Harvard.png]]

Aquí, los [[Arquitectura de una computadora#^bus-direccion|buses de direcciones]] y [[Arquitectura de una computadora#^bus-datos|datos]] se duplican para separar el acceso a instrucciones y datos, lo que tiene un costo en términos de complejidad y líneas físicas

Sin embargo, permite realizar la lectura de una nueva instrucción al mismo tiempo que una transferencia de datos

En funcionamiento, el bus de instrucciones es unidireccional, desde la [[Memoria|memoria]] al [[Procesador|procesador]]. Esto significa que es necesario encontrar una manera de cargar el código en la memoria si es memoria no volátil, pero esto es un detalle de implementación
