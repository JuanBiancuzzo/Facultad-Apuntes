---
dia: 2023-09-05
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
  - ingeniería-en-informática/adc/Circuitos-en-regimen-de-corriente-continua
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-diferenciales
aliases:
  - Par diferencial
  - Rango de modo común de un amplificador diferencial#Rango de modo común
  - Rango de como común de un par diferencial#Rango de modo común
referencias:
  - "435"
etapa: empezado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un [[Amplificador operacional|amplificador]], que utilizando las condiciones de [[Amplificador operacional ideal|amplificador ideal]] podemos encontrar que 

$$ v_o = \frac{R_2 ~ (1 + R_1/R_2)}{R_1 ~ (1 + R_3/R_4)} ~ v_2 - \frac{R_2}{R_1} ~ v_1 = \frac{R_2}{R_1} ~ (v_2 - v_1)$$ ^b70835

vemos que el [[Circuito eléctrico|circuito]] amplifica la diferencia entre dos entradas pero rechaza toda señal común a las dos entradas

![[Amplificador diferencial.webp]] ^f57679

## Implementación
---

### Rango de modo común
---
Se lo define como el rango de valores de [[Tensión|tensión]] de entrada de modo común comprendidos entre un [[Mínimo|mínimo]] y un [[Máximo|máximo]] tal que todos los [[Transistor|transistores]] del circuito permanezcan en [[Modo activo directo del transistor bipolar de juntura|MAD (en el caso de un TBJ)]] o [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturación (en el caso de un MOSFET)]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```