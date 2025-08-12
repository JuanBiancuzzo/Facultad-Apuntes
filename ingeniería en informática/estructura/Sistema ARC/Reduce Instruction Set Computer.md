---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/estructura/Sistema-ARC
  - carrera/ingeniería-en-informática/estructura/Sistema-ARC
  - nota/facultad
aliases:
  - RISC
vinculoFacultad:
  - tema: Sistema ARC
    capitulo: 8
    materia: Estructura del computador
    carrera: Ingeniería en informática
---
# Definición
---
Todas las instrucciones ocupan el mismo espacio y es más rápido. Tiene más registros disponibles, ya que todo debe estar en ellos para operar. Para utilizar el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]], se debe hacer de forma manual. Su set de instrucciones es más reducido, no contiene instrucciones redundantes

Las operaciones aritméticas son únicamente entre registros. Para acceder a [[Memoria|memoria]], solo se puede guardar y recuperar. Los dispositivos de entrada y salida están mapeados en memoria

Esta arquitectura es mucho más rápida y simple que la de una arquitectura [[Complex Instruction Set Computer|CISC]]. Por el otro lado, se requiere un poco más de trabajo por parte del programador