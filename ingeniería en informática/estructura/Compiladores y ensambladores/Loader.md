---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/estructura/Compiladores-y-ensambladores
  - carrera/ingeniería-en-informática/estructura/Compiladores-y-ensambladores
  - nota/facultad
aliases:
  - Relocating loader#Realocating Loader
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Diseño, desarrollo y depuración/Resumen.md]]"
  - "[[ingeniería en informática/estructura/Compiladores y ensambladores/Resumen.md]]"
---
# Definición
---
En ambientes multitarea la [[Random Access Memory|RAM]] es compartida entre varios procesos

El loader debe relocalizar todos los símbolos relocalizables

Algunos loaders tienen la capacidad de combinar módulos en tiempos de carga (loader con capacidad de [[Linker|linkeo]])

## Realocating Loader
---
Linkea en tiempo de carga y carga el programa en memoria para su ejecución
