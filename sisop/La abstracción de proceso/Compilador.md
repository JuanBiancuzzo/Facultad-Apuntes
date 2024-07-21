---
dia: 2023-11-12
capitulo: 2
tags:
  - sisop/La-abstracción-de-proceso
---
### Definición
---
El compilador se encarga del proceso de compilación que se divide en diferentes faces

#### Fase de procesamiento
---
El preprocesador modifica el código de fuente original de un [[Programa]], de acuerdo a las directivas. El resultado de este [[Proceso]] es otro programa.

#### Fase de compilación
---
El compilador traduce el programa final de la [[Compilador#Fase de procesamiento|fase de procesamiento]] a un archivo de texto `.s` que contiene un programa en lenguaje [[Lenguaje assembly]]

#### Fase de ensamblaje
---
El ensamblador traduce el archivo `.s` en instrucciones de [[Lenguaje de máquina]] empaquetándolos en un formato conocido como programa objeto realocable. Este es almacenado en un archivo con extensión `.o`

#### Fase de linkeo
---
Generalmente los programas hacen uso de funciones que forman parte de la biblioteca estándar que es provista por cualquier compilador de su correspondiente lenguaje. Para ello el linker realiza el linkeo produciendo como resultado un archivo objeto ejecutable
