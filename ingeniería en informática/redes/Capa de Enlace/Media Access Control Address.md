---
dia: 2024-08-23
tags:
  - ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
aliases:
  - MAC Address
  - LAN address
  - Physical Address
  - Dirección MAC
  - Dirección LAN
  - Dirección física
---
# Definición
---
Todos los adaptadores de hosts ([[Interfaz de red|interfaces de red]]) contienen una dirección propia de [[Capa de Enlace|capa de enlace]], esto no es así para los [[Router|routers]], los cuales no contienen direcciones de capa de enlace

Estas direcciones son conocidas por varios nombre, como LAN address, physical address, o MAC address

Típicamente, las direcciones MAC son anotadas en notación hexadecimal

Debido a que las direcciones MAC son manejadas por el [[Institute of Electrical and Electronics Engineers (IEEE)|IEEE]], no existen dos direcciones MAC iguales en todo el mundo (en teoría). Además, estas direcciones son física e independientes de la localización (no tienen una jerarquía como las [[Internet Protocol Address||direcciones IP]])

Cuando un adaptador quiere enviar un [[Paquete|paquete]] a otro dispositivo, ocasionalmente el switch realizará un broadcast a todos los hosts de la [[Red|red]]. Los hosts entonces inspeccionarán el paquete y lo descartarán si no fue dirigido para ellos

A veces un adaptador quiere enviar un paquete a toda la red, en tal caso se utiliza la MAC broadcast address