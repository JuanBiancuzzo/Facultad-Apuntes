---
dia: 2023-10-26
tags:
  - carrera/ingeniería-en-informática/aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
vinculoFacultad:
  - tema: Analizar y especificar requisitos
    capitulo: 4
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Una asociación es una relación entre instancias de una [[Clase conceptual|clase conceptual]] que debe ser recordada por el [[Sistema]]. Cada asociación tiene nombre (fase con verbo y multiplicidad).

## Tipos de asociaciones
---
### Binarias
Puede haber más de una asociación entre dos clases. 

### Unarias
Asociaciones unarias, donde la relación es con la misma clase.

### Ternarias
Las relaciones donde se asocian más de dos clases a la vez como ternarias.

### Clases asociativas
Las clases asociativas, que se comportan simultáneamente como una clase conceptual y como una asociación. En general, se descubren ante la necesidad de relacionar un atributo a una asociación.

### Composición y agregación
Son asociaciones que permiten modelar relaciones del tipo todo y parte. 
* Cuando los elementos de la colección no dependen del ciclo de vida del contenedor estamos ante una agregación. 
* Cuando los elementos dependen del contenedor, estamos ante una composición

### Calificada
Una asociación calificada permite distinguir un grupo de instancias en uno de los extremos mediante un valor calificador

### Generalización y especialización
En algunos casos, puede ser necesario identificar aspectos comunes (superclases) y aspectos particulares (subclases)
Es necesario hacerlo cuando la subclase tiene atributos o asociaciones adicionales a los de la superclase

## Multiplicidad
---
Indica una [[Análisis de reglas de negocio|regla de negocio]], por ejemplo, un alumno puede cursar varias o ninguna materia, una materia puede no tener alumnos