---
dia: 2025-02-26
etapa: ampliar
referencias:
  - "843"
  - "844"
tags:
  - investigación/ciencias-de-la-computación
  - nota/investigacion
  - carrera/ingeniería-en-informática/distribuidos/Introducción
aliases:
  - Virtual Machine Monitor
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