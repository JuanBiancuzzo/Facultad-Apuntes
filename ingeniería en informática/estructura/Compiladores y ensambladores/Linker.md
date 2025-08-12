---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/estructura/Compiladores-y-ensambladores
  - carrera/ingeniería-en-informática/estructura/Compiladores-y-ensambladores
  - nota/facultad
aliases:
  - Link-editor#Link-Editor
vinculoFacultad:
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
  - tema: Compiladores y ensambladores
    capitulo: 9
    materia: Estructura del computador
    carrera: Ingeniería en informática
---
# Definición
---
El linker combina módulos que fueron ensamblados de forma separada
- Resuelve referencias de forma externa al módulo
- Relocaliza los módulos combinándolos y reasignando las direcciones internas a cada uno para reflejar su nueva localización
- Define en el módulo a cargar la dirección de la primera instrucción a ser ejecutada

## Link-Editor
---
Produce una versión linkeada del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]]