---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
vinculoFacultad:
  - tema: Introduccion
    capitulo: "0"
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un contenedor, a diferencia de una [[Máquina virtual|máquina virtual]], utiliza el [[Kernel|kernel]] del host [[Sistema operativo|OS]], reduciendo significativamente la complejidad y los recursos utilizados, permitiendo así poder usar una mayor cantidad de contenedores que de VMs

![[Containers.png]]