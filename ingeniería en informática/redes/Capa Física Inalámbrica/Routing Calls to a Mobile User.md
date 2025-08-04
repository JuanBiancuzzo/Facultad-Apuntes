---
dia: 2024-08-31
tags:
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/redes/Capa Física Inalámbrica/Resumen.md]]"
---
# Definición
---
Consideremos un escenario simple para el caso de un usuario móvil residiendo en una [[Red|red]] extranjera

1. El correspondiente llama al usuario móvil. Los dígitos son suficientes para hallar la red local de forma global. La llamada es dirigida a través del PSTN al [[Gateway Mobile Services Switching Center|home MSC]]
2. El home MSC recibe el llamado e interroga al [[Home Location Register|HLR]] para determinar la ubicación del usuario móvil. En el caso más simple, devuelve el mobile station roaming number (MSRN), al cual llamaremos roaming number. Si no conoce este número, devolverá la dirección del VLR de la red visitada. Luego, consultará a la [[Visitor Location Register|VLR]] para solicitar un roaming number para el usuario
3. Una vez obtenido el roaming number, el home MSC configura la segunda parte de la llamada a través de la red con el MSC en la red visitada

Cuando un dispositivo móvil entra a una red cubierta por un nuevo VLR, este debe registrarse con la red visitada. El visited VLR envía una actualización de localización al HLR del móvil. Este informará la dirección de roaming del móvil, o la dirección del VLR. Además, el VLR obtiene información de subscripciones del HLR sobre el móvil para determinar que servicios deben ser acordados con el usuario