---
dia: 2025-01-08
etapa: sin-empezar
referencias:
  - "787"
tags:
  - investigación/ciencias-de-la-computación/sistemas-operativos
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La persistencia de datos permite la utilización de datos a largo plazo y sin la preocupación de perder datos en el momento de un crash del sistema o la perdida de [[Energía eléctrica|energía]], como pasa si se almacena datos en un dispositivo con [[Memoria volátil|memoria volátil]] como sería las que usan la tecnología [[Dynamic Random Access Memory|DRAM]]

En los [[Sistema operativo|sistemas operativos]] se implementan [[File system|file systems]] para el manejo de esta [[Información|información]] que necesita persistir, y provee una [[Aplicación Programming Interface|API]] para usarla, a traves de [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|System calls]]. De fondo el OS maneja los disipativos de [[General Purpose Input Output|I/O]] por medio de [[Device Driver|Drivers]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```