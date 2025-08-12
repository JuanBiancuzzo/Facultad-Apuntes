---
dia: 2025-02-26
etapa: ampliar
referencias:
  - "843"
  - "844"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - investigación/ciencias-de-la-computación
  - nota/facultad
  - nota/investigacion
aliases:
  - Virtual Machine Monitor
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
Un hypervisor permite manejar [[Máquina virtual|VMs]], emulando [[Hardware|hardware]], y administrando los recursos del Host [[Sistema operativo|OS]] hacia el Guest OS

![[Hypervisor.png]]

Tiene la desventaja de tener que simular todo un sistema operativo por encima del host 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```