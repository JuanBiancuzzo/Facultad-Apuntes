---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
  - carrera/ingeniería-electrónica/intro/Potencia
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
aliases:
  - Balance de potencia#Balance de potencia
  - Potencia activa
referencias:
  - "222"
etapa: ampliar
vinculoFacultad:
  - tema: Circuitos en regimen senoidal permanente
    capitulo: 3
    materia: Análisis de circuitos
    carrera: Ingeniería electrónica
  - tema: Potencia
    capitulo: 5
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
  - tema: Circuitos de corrientes no dependientes del tiempo
    capitulo: 4
    materia: Física 2 A
    carrera: Ingeniería en informática
  - tema: Circuitos en régimen alterno permanente
    capitulo: 8
    materia: Física 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es la potencia capaz de transformar la [[Energía|energía]] en [[Trabajo|trabajo]]. Este potencial es, la que realmente es consumida por los [[Circuito eléctrico|circuitos]]. Se designa con la letra $P$ $$ P = \frac{dW}{dt} $$
### Unidad
---
$$ [P] = \frac{J}{s} = \text{Watt} \space (W) $$

## Balance de potencia
---
En un [[Circuito eléctrico|circuito]] cerrado, la potencia total del circuito deberá ser nula $$ P_\text{entrada} = P_{absorbida} + P_{disipada} $$


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```

