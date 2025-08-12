---
dia: 2024-06-03
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
vinculoFacultad:
  - tema: Capa de Transporte
    capitulo: 3
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
El control de flujo se el control de cuantos [[Paquete|paquetes]] enviar dependiendo de cuanto espacio tiene, el receptos, para aceptar. Esto permite no congestionar la [[Red|red]] evitando enviar paquetes que el receptor no podría aceptar

## Problemática
---
A medida que la tasa de arribo de paquetes se acerca a la capacidad del medio, entonces se experimentan grandes [[Delay in packet switches#Tiempo de encolado|tiempos de encolado]]

Un remitente deberá realizar retransmisiones para compensar por los datos perdidos debido a buffer [[Overflow|overflow]]

Las retransmisiones innecesarias ante los grandes [[Delay in packet switches|delays]] pueden causar que el router gaste recursos en enviar copias innecesarias de un paquete

Cuando un paquete es perdido a lo largo de un [[Camino|camino]], la capacidad de transmisión utilizada en cada uno de los links que había enviado el paquete hasta ese punto termina siendo desperdiciada

Controlar cuantos paquetes enviar dependiendo de cuanto espacio tiene, el receptos, para aceptar