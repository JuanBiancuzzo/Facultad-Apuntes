---
dia: 2024-08-22
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - CRC
  - Cyclic Redundancy Check codes
  - Polynomial codes
vinculoFacultad:
  - tema: Capa de Enlace
    capitulo: 5
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Esta técnica consisten en la utilización de cyclic redundancy check codes, conocidos como polynomial codes

En primer lugar, tanto el remitente como el receptor deben acordar en un patrón de $r+1$ bits, conocido como un generador, el cual denotaremos como $G$. Es necesario que el bit más significativo del patrón sea un uno

Por una cadena de datos $D$, el remitente agrega $r$ bits adicionales, de forma que el patrón resultante sea divisible por $G$. Utilizando aritmética en módulo dos. Si los bits recibidos por el receptor también son divisibles por $G$, entonces se concluye que no hay errores

Esta técnica puede detectar errores en ráfaga de menos de $r + 1$ bits, además una ráfaga de errores mayor a esta longitud, es detectada con [[Probabilidad|probabilidad]] $1 - 0.5r$