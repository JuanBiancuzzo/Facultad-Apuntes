---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - MIMD
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se divide en dos modelos
* Multiples [[Procesador|procesadores]]
    * Con memoria y/o clock compartido
* Multiples [[Computadora|computadoras]]
    * Sin memoria ni clock compartido

![[Multiple Instruction Multiple Data.png]]

## Multiples procesadores
---
Para el caso de la [[Memoria|memoria]] compartida, podemos verlo de dos formas

### Simetría o Asimetría
---
Podemos determina la memoria compartida de un sistema en simétrica o asimétrica

![[Memoria compartida para multiples procesadores.png]]

Para el caso simétrico tiene la ventaja que todos los procesadores tienen la misma velocidad de acceso a cualquier parte de la memoria. Tiene la desventaja de que todos los procesadores tienen que compartir la velocidad máxima de búsqueda de memoria 

Para el caso asimétrico tiene la ventaja de aumentar la velocidad de acceso en promedio, ya que multiples procesadores (si están en secciones distintas) pueden acceder al mismo tiempo a la memoria. Como desventaja, no toda la memoria esta disponible a la misma velocidad 

### UMA o NUMA
---
Otra forma de ver la memoria compartida es con [[Uniform Memory Access|Uniform Memory Access (UMA)]] y [[Non Uniform Memory Access|Non Uniform Memory Access (NUMA)]]

Para UMA tenemos la siguiente representación ![[Uniform Memory Access#^representacion]]

Para NUMA tenemos la siguiente representación ![[Non Uniform Memory Access#^representacion]]
## Multiples computadoras
---
Como no tienen memoria compartida, tiene que buscar comunicarse por medio de una [[Red|red]], ya sea [[Local Area Network|LAN]], [[Metropolitan Area Network (MAN)|MAN]], [[Wide Area Network (WAN)|WAN]], etc