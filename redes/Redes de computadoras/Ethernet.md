---
dia: 2024-04-22
tags:
  - redes/Redes-de-computadoras
  - nota/facultad
  - redes/Capa-de-Enlace
---
# Definición
---
En entornos tanto corporativos como domésticos, se utiliza una [[Local Area Network|red de área local (LAN)]] para conectar un sistema de [[Host|hosts]] al [[Router|router]]. Los usuarios de ethernet utilizan una conexión por [[Acceso a una red por cable|cable]] para conectarse a dicho router

## Estructura
---
Los Ethernet [[Frame|frames]] tienen 6 campos

* Data Field (46 to 1500 bytes)
    * El [[Maximum transmission unit|MTU]] de Ethernet es de 1500, por lo cualquier [[Paquete|paquete]] de mayor tamaño deberá ser [[Fragmentación de Internet Protocol|fragmentado]]
    * El mínimo tamaño de un frame es de 46 bytes, por lo que en caso de ser menor debe ser rellenado antes de ser enviado, para eliminarse utilizando el campo de length
* Destination Address (6 bytes)
    * Este campo contiene la [[Media Access Control Address|dirección MAC]] del adaptador de destino
* Source Address (6 bytes)
    * Este campo contiene la dirección MAC del adaptador de envío
* Type Field (2 bytes)
    * Debido a que la [[Capa de Enlace|capa de enlace]] debe poder manejar múltiples protocolos de red, se utiliza este campo para indicar a qué [[Protocolo|protocolo]] debe ser entregado en el adaptador de destino
* [[Cyclic Redundancy Check|Cyclic Redundancy Check (CRC)]] (4 bytes)
    * Es utilizado para detectar errores
* Preamble (8 bytes)
    * Son utilizados para despertar y sincronizar los relojes de los adaptadores
    * Tienen un valor fijo y utilizado durante todo el protocolo