---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El objetivo de un ecualizador es compensar los efectos de la [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]] del [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] para una [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital|modulación]] dada

Se puede dividir entre ecualizadores lineales como 
* [[Ecualizador trasversal|Ecualizador trasversal]]
y ecualizadores no lineales
* [[Ecualizador de retroalimentación de decisiones|Ecualizador de retroalimentación de decisiones]]

Otra posible caracterización es si es prestablecido o adaptativo
* Prestablecido
    * Los parámetros utilizados en los ecualizadores se asignan previos a su utilización y no son modificador
    * Son útiles para canales con variaciones lentas, ya que el comportamiento promedio del canal es representativo del comportamiento general
* Adaptativo
    * En el caso que el caso promedio del canal no sea representativo, se necesita variar los parámetros durante la ejecución del mismo
    * El momento en el cual se ejecuta esta actualización define dos clasificaciones
        * Periódica
            * Cada $t$ segundos se calculan los parámetros con una secuencia corta y conocida
        * Continua
            * Se ajustan los parámetros con cada decisión tomada, intentando minimizar la diferencia entre el punto anterior y posterior al [[ingeniería electrónica/señales/Muestreo e Interpolación/Cuantificación|cuantificador]] 
            * Si existe una probabilidad de error alta al inicio, puede no llegar a converger, por lo que se suele calcular los parámetros con una secuencia corta y conocida, y luego continuamente actualizando esos parámetros

