---
dia: 2023-10-22
aliases:
  - MVC
tags:
  - carrera/ingeniería-en-informática/aninfo/Diseño-de-software
  - nota/facultad
vinculoFacultad:
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Es un estilo [[Arquitectura de aplicaciones|arquitectónico]] que propone una separación del problema en 3 grupos

## Model
---
Encapsula el estado de la aplicación, notificando el view de cualquier cambio en el estado

## View
---
Muestra o renderiza el [[Modelo]], y actualizándose con las correspondientes notificaciones

## Controller
---
Mapea las acciones del usuario a actualizaciones del modelo, modificando su estado