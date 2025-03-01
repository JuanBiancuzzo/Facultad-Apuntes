---
dia: 2024-08-29
tags:
  - carrera/ingeniería-en-informática/estructura/Compiladores-y-ensambladores
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/estructura/Compiladores-y-ensambladores
aliases:
  - Relocating loader#Realocating Loader
---
# Definición
---
En ambientes multitarea la [[Random Access Memory|RAM]] es compartida entre varios procesos

El loader debe relocalizar todos los símbolos relocalizables

Algunos loaders tienen la capacidad de combinar módulos en tiempos de carga (loader con capacidad de [[Linker|linkeo]])

## Realocating Loader
---
Linkea en tiempo de carga y carga el programa en memoria para su ejecución
