---
dia: 2024-05-12
tags:
  - carrera/ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - lenguajes-de-programación/lenguaje-SQL
---
# Definición
---
Conjunto de instrucciones [[Structured Query Language|SQL]] que se guardan en la [[Base de datos|base de datos]] y se puede ejecutar de manera repetida cuando sea necesario. Utilizados para realizar tareas repetitivas o complejas en una base de datos de una manera más eficiente y segura

Usos comunes
* Procesamiento  de base de datos
* Validación y seguridad
* Transacciones
* Mejora el rendimiento
* Reutilización de código

Si tengo todo en stored procedure, se verifican 3 pasos al guardarlo
1. SQL interpreta el análisis lexicográfico
2. Analizo los permisos
3. Ejecuta la consulta
Ahora, al ejecutar la store procedure solo se fija en el análisis de permisos y ejecuta la [[Sentencia de SQL|sentencia]]. Esto permite abstraer el trabajo a los programadores, lo único que programamos son los stored procedures y desde el programa accedemos a ellos