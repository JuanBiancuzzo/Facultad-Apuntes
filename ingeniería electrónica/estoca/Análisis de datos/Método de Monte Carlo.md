---
dia: 2024-11-27
etapa: ampliar
referencias:
  - "653"
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - nota/facultad
  - investigación/matemática/Estadística
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Resolver un problema mediante un método Monte Carlo consiste en utilizar en la resolución un [[Algoritmo|algoritmo]] que se basa en la repetición de un [[Experimento aleatorio|experimento aleatorio]] un gran número de veces, es decir, usando la [[Ley de los grandes números|ley de los grandes números]]

El algoritmo consiste en
1. Generar algún gran número de [[Muestra|muestras]] aleatorias en determinado dominio
2. Realizar algún cómputo con dichas muestras
3. Combinar los resultados de dichos cómputos para obtener la respuesta el problema deseado

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```