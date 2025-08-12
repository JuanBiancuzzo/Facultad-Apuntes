---
dia: 2025-03-20
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los modelos matemáticos pueden adoptar muchas formas distintas. Dependiendo del sistema del que se trata y de las circunstancias específicas, un modelo matemático puede ser más conveniente que otros

En cambio, para los análisis de la [[Respuesta transitoria|respuesta transitoria]] o de la [[Respuesta en frecuencia|respuesta en frecuencia]] de [[Sistema lineal e invariante en el tiempo|sistemas lineales con una entrada y una salida invariante en el tiempo]], la representación mediante la [[Transferencia del sistema|función de transferencia]] puede ser más conveniente que cualquier otra

Una vez obtenido un modelo matemático de un sistema, se usan diversos recursos analíticos, así como [[Computadora|computadoras]] para estudiarlo y sintetizarlo

## Simplicidad contra precisión
---
Al obtener un modelo matemático se debe establecer un compromiso entra la simplicidad del mismo y la precisión de los resultados del análisis. Al obtener un modelo razonablemente simplificado, a menudo resulta necesario ignorar ciertas propiedades físicas inherentes al sistema, como ignorar ciertas no linealidades y parámetros distribuidos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```