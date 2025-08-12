---
dia: 2023-05-01
tags:
  - carrera/ingeniería-en-informática/orga/Spark
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Spark
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Spark
    capitulo: 6
    materia: Organización de datos
    carrera: Ingeniería en informática
---
# Definición
---
A un [[Resilent distributed dataset|RDD]] se le puede aplicar una acción, que devuelven un valor al driver luego de procesar los datos, y provocan que varias [[ingeniería en informática/orga/Spark/Transformación|transformaciones]] encadenadas sean ejecutadas. Algunas son:
* [[Reduce|Reduce]]
* [[Collect|Collect]]
* [[Count|Count]]
* [[Take|Take]]
* [[TakeOrdered|TakeOrdered]]
* [[First|First]]
* [[TakeSample|TakeSample]]
* [[CountByKey|CountByKey]]