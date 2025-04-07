---
dia: 2024-03-14
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
referencias:
  - "873"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para cuando se puede definir la [[Transferencia del sistema|función de transferencia]], los [[Transferencia del sistema#Polos|polos]] definen las estabilidad del sistema, donde todos los polos del sistema se encuentran estrictamente en la izquierda del [[Número complejo|plano complejo]] es sistema es estable, en caso contrario es inestable

Por otro lado, se puede ver la estabilidad en el [[Dominio|dominio]] del tiempo, usando los siguientes criterios
* [[Bounded Input-Bounded Output|BIBO (Bounded Input-Bounded Output)]] 
* [[Criterio de estabilidad de Routh-Hurwitz|Criterio de estabilidad de Routh-Hurwitz]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```