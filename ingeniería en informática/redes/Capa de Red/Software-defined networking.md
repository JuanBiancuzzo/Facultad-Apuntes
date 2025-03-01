---
dia: 2024-06-07
aliases:
  - SDN
  - Redes definidas por software
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
---
# Definición
---
Los SDN son [[Controlador|controladores]] remotos, el cual calculará y distribuirá los [[Forwarding table|forwarding tables]] a todos los [[Router|routers]]. En este caso, los routers únicamente realizan la operación de [[Forwarding|forwarding]]

Estos controladores son implementados en un [[Data center|data center]] remoto con alta confiabilidad y redundancia, y puede ser administrado por un [[Internet Service Provider|ISP]] o alguna otra [[Organización|organización]]. Para la comunicación entre los elementos, utilizaremos mensajes conteniendo forwarding tables y otras piezas de [[Routing|Routing algorithms]] para comunicar los controladores con los routers

## Características
---
Existen cuatro características claves de la arquitectura SDN

### Flow-based forwarding
---
El reenvío de paquetes puede ser basado en numerosos valores de múltiples campos de cabecera, tanto en la [[Capa de transporte|capa de transporte]], como en la de red, como en la de enlace. Las reglas son específicas de una flow table, la cual es computada y administrada por el [[Plano de control|control plane]] del SDN

### Separación de datos en la capa de datos y la de control
---
El [[Plano de datos|plano de datos]] consiste en switches simples, pero veloces que ejecutan reglas [[OpenFlow|match plus action]] a partir de sus flow tables. El plano de control consiste en múltiples servidores y software que determine el manejo de estas tablas

### Network Control Functions
---
El plano de control consiste en dos componentes. Un controlador SDN y una serie de aplicaciones de network-control. El controlador mantiene información precisa de la red, provee esta información a las aplicaciones de control que ejecutan el control plane, y provee una forma mediante las cuales se pueden comunicar con los dispositivos de red subyacentes. El controlador es lógicamente centralizado, pero típicamente implementado en múltiples servidores

### Red es programable
---
La red es programable a través de las aplicaciones de control de red que se ejecutan en el plano de control. El controlador ofrece una interfaz que permite especificar y controlador los dispositivos del data plane. Las aplicaciones pueden hacer diversas cosas
* Determinar el [[Camino|camino]] de menor costo entre fuente y destino
* Realizar control de acceso para bloquear ciertos paquetes
* Ejecutar server [[Load balancing|load balancing]], entre otros