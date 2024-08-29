---
dia: 2024-08-29
tags: 
 - estructura/Microarquitectura
 - nota/facultad
---
### Definición
---
Para ejecutar un [[Programa|programa]], el [[Procesador|microprocesador]] realiza el llamado ciclo fetch, o ciclo de búsqueda-ejecución
1. Buscar en memoria la próxima instrucción a ser ejecutada ^fetch
2. Decodificar el código de operación de esa instrucción ^decode
3. Ejecutar la instrucción ^execute
4. Repetir

Hay distintas formas de implementar este ciclo de búsqueda, y estas varían en la velocidad o el consumo del mismo