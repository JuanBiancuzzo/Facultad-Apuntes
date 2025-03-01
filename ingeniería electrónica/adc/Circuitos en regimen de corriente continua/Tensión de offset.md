---
dia: 2024-11-30
etapa: ampliar
referencias:
  - "435"
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-de-corriente-continua
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define $V_{offset}$ como la [[Tensión|tensión]] de entrada diferencia necesaria a aplicar en reposo al [[Amplificador operacional|amplificador]], con el fin de minimizar los efectos de desapareamiento, de modo tal que afectan lo menos posible a la señal diferencial útil amplificada

En el caso de una salida diferencia, se suele definir el $V_{offset}$ como la tensión de entrada diferencial necesaria para que el [[Amplificador diferencial|amplificador diferencial]] logre una salida diferencial nula ($V_{od} = 0$)

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```