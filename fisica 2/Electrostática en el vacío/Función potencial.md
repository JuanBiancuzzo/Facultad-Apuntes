---
dia: 2024-09-01
tags:
  - fisica-2/Electrostática-en-el-vacío
  - nota/facultad
referencias:
  - "232"
aliases:
  - Función potencial escalar#Potencial escalar
  - Función potencial vectorial#Potencial vectorial
etapa: ampliar
orden: 262
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En física se define el potencial como una magnitud que puede ser escalar o vectorial, que sirve para describir la evolución o variación probable de otra magnitud. Generalmente los potenciales aparecen para describir a un campo físico y también aparece para medir otro potencial en termodinámica<sup><a href="#ref-232" style="color: inherit; text-decoration: none;">[232]</a></sup> 

## Potencial escalar
---
Se denomina potencial escalar a una propiedad de cada punto de un [[Rotor|campo conservativo]], que representa la energía potencial  que tendría una unidad de fuente ([[Carga eléctrica|carga eléctrica]], [[Masa efectiva|masa]], etc., dependiendo de la naturaleza de la materia bajo estudio) situada en determinado punto de la región donde esté definido el respectivo campo. Al ser una magnitud definida para cada punto del campo, en sí mismo forma un [[Campo escalar|campos escalares]] 

También se usa potencial como adjetivo: se dice que un campo es potencial, si el campo puede ser definido como el [[Gradiente|gradiente]] de un campo escalar. En ese caso se dirá que el [[Campo vectorial|campo vectorial]] tendrá su potencial en ese campo escalar $$ F = - \nabla U $$
En este caso $U$ es el campo escalar potencial de la fuerza $F$

## Potencial vectorial
---
Algunos [[Divergencia|campos solenoidales]] no pueden ser derivados de un potencial escalar, sin embargo bajo condiciones matemáticas razonables pueden expresarse en términos de un potencial vectorial. Las ventajas de esto es con frecuencia la [[Ecuación diferencial en derivadas parciales|ecuación diferencial]] que satisface el potencial vectorial es algo más simple que la ecuación que satisface el propio campo vectorial

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```