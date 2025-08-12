---
dia: 2024-08-02
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
aliases:
  - Classful addressing
vinculoFacultad:
  - tema: Capa de Red
    capitulo: 4
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Originalmente, se planteó dividir las [[Red|redes]] en clases. Esto se llamó classful subnetting, como contraparte de [[Classless Interdomain Routing|classless interdomain]]. Existían tres grupos principales
* Class A: Desde `0.0.0.0/8` a `127.255.255.255/8`
* Class B: Desde `128.0.0.0/16` a `191.255.255.255/16`
* Class C: desde `192.0.0.0/24` a `223.255.255.255/24`

También existían las clases: D (multicast) y E ([[Red privada|reservadas]])

El problema con estas redes, era que había mucho desperdicio. Si no te alcanzaban las redes de C ($256$) debías reservar una red de clase B ($25536$)