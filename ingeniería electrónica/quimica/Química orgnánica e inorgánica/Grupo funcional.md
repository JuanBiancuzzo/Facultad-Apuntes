---
dia: 2026-04-18
etapa: empezado
referencias:
  - "1149"
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Química-orgnánica-e-inorgánica
  - nota/facultad
vinculoFacultad:
  - tema: Química orgnánica e inorgánica
    capitulo: 5
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es una cadena o conjunto unido a una cadena [[Carbono|carbonada]], y son responsables de la reactividad y propiedades químicas de los [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto orgánico|compuestos orgánicos]]. Siempre se asocian con [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|enlaces covalentes]] al resto de la molécula

Vamos a denotar con una R la representación de la fórmula general de la cadena carbonada

## Funciones oxigenadas rulo
---
Presencia de algún enlace carbono-[[Oxígeno|oxígeno]], [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^simple|sencillo]] (C-O) o [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|doble]] (C=O)

| Grupo funcional        | Serie homólogo | Formula | Prefijo | Sufijo |
| ---------------------- | -------------- | ------- | ------- | ------ |
| Grupo hidroxilo        |                |         |         |        |
| Grupo alcoxi o ariloxi |                |         |         |        |
| Grupo carbonilo        |                |         |         |        |
| Grupo carboxilo        |                |         |         |        |
| Grupo acilo            |                |         |         |        |

## Funciones nitrogenadas
---
Presencia de enlaces carbono-[[Nitrógeno|nitrógeno]], C-N, C=N o C≡N

| Grupo funcional         | Serie homólogo | Formula | Prefijo | Sufijo |
| ----------------------- | -------------- | ------- | ------- | ------ |
| Grupo amino             |                |         |         |        |
| Grupo amino y carbonilo |                |         |         |        |
| Grupo nitro             |                |         |         |        |
| Grupo nitrilo           |                |         |         |        |
| Grupo azo               |                |         |         |        |

## Funciones halogenadas
---
Compuestos por carbono, [[Hidrógeno|hidrógeno]] y [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^halogenos|halógenos]]

| Grupo funcional | Serie homólogo | Formula | Prefijo | Sufijo |
| --------------- | -------------- | ------- | ------- | ------ |
| Grupo haluro    |                |         |         |        |
| Grupo acilo     |                |         |         |        |

## Grupos que contienen azufre
---

| Grupo funcional | Serie homólogo | Formula | Prefijo | Sufijo |
| --------------- | -------------- | ------- | ------- | ------ |
| Grupo sulfuro   |                |         |         |        |

## Grupos que contienen metales
---

| Grupo funcional        | Serie homólogo | Formula | Prefijo | Sufijo |
| ---------------------- | -------------- | ------- | ------- | ------ |
|   |                |         |         |        |


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```