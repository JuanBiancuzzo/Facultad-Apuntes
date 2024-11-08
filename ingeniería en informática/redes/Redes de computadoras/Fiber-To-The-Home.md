---
dia: 2024-04-22
aliases:
  - FTTH
tags:
  - ingeniería-en-informática/redes/Redes-de-computadoras
  - nota/facultad
  - ingeniería-electrónica/redes/Redes-de-computadoras
---
# Definición
---
La red de distribución [[Acceso a una red por cable#Fibra óptica|óptica]] más simple se denomina fibra directa, en la que existe una fibra que sale de la central hasta cada domicilio. Sin embargo, lo más habitual es que cada fibra saliente de la central sea compartida por muchas viviendas y esta no se divida en fibras individuales específicas del cliente hasta llegar a un punto muy próximo a las viviendas

Hay disponibles dos arquitecturas de distribución de fibra óptica que llevan a cabo esta separación
* Las [[Red|redes]] ópticas activas (AON, Active Optical Network)
* Las redes ópticas pasivas (PON, Passive Optical Network)

Cada vivienda dispone de una terminación de red óptica (ONT, Optical Network Terminator) que se conecta a un distribuidor del vecindario mediante un cable de fibra óptica dedicado

El distribuidor combina una cierta cantidad de viviendas (normalmente menos de 100) en un único cable de fibra óptica compartido, que se conecta a una terminación de línea óptica (OLT, Optical Line Terminator) en el central de la compañía telefónica. La OLT, que realiza la conversión de señales ópticas en eléctricas, se conecta a [[Internet|internet]] a través de un [[Router|router]] de la compañía telefónica