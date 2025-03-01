---
dia: 2024-08-22
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
aliases:
  - Error detection and correction
  - EDC
---
# Definición
---
Es un mecanismo para que el receptor de [[Paquete|paquetes]] pueda determinar si este fue recibido correctamente

Si bien los protocolos de [[Capa de Enlace|capa de link]] implementan verificación de errores, no tenemos garantías de que todos los links lo hicieron. Además, el error puede haber ocurrido cuando el segmento se almacenó en la memoria del [[Router|router]]

Esta es un grupo que encapsula las siguientes técnicas
* [[Parity check|Parity Checks]]
* [[Checksumming method|Checksumming method]]
* [[Cyclic Redundancy Check|Cyclic Redundancy Check (CRC)]]

