---
dia: 2024-08-01
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
aliases:
  - Agregación de entradas
---
# Definición
---
La habilidad de utilizar una única [[Classless Interdomain Routing|mascara]] para anunciar múltiples [[Subnetting|red]] se conoce como address aggregation

Se puede usar como herramienta de optimización, que se da cuando dos redes vecinas tienen como destino el mismo puerto, por lo que pueden ser simplificadas en una sola entrada. Se debe cumplir que
* Las entradas tiene una máscara de igual longitud
* Las entradas únicamente varían en el último bit manteniendo por la máscara
* Las entradas tienen el mismo puerto de salida

En ese caso podremos unificar esas entradas en una sola tabla, disminuyendo en uno la longitud de la [[Classless Interdomain Routing|mascara]]