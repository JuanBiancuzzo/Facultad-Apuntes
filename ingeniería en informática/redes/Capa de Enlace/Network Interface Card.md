---
dia: 2024-08-22
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - Adaptador de red
  - NIC
vinculoFacultad:
  - tema: Capa de Enlace
    capitulo: 5
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Esta es un controlador de [[Capa de Enlace|capa de enlace]] que implementa múltiples servicios, usualmente por [[Hardware|hardware]]

Desde el remitente, el controlador toma el [[Paquete|datagrama]], lo encapsula en un [[Frame|frame]] y lo transmite a través de uno de sus enlaces de comunicación, siguiendo un [[Protocolo|protocolo]] de acceso de enlace. Desde el receptor, esta recibe un frame completo de un enlace, extrae el datagrama