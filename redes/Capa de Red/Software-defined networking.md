---
dia: 2024-06-07
aliases:
  - SDN
  - Redes definidas por software
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
### Definición
---
Los SDN son controladores remotos, el cual calculará y distribuirá los [[Forwarding table|forwarding tables]] a todos los [[Router|routers]]. En este caso, los routers únicamente realizan la operación de [[Forwarding|forwarding]]

Estos controladores son implementados en un [[Data center|data center]] remoto con alta confiabilidad y redundancia, y puede ser administrado por un [[Internet Service Provider|ISP]] o alguna otra [[aninfo/Desarrollo de software y modelos de proceso/Organización.md|organización]]. Para la comunicación entre los elementos, utilizaremos mensajes conteniendo forwarding tables y otras piezas de [[Routing|Routing algorithms]] para comunicar los controladores con los routers