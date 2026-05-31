---
dia: 2023-03-28
tags:
  - carrera/ingeniería-electrónica/seguridad/Prevención-de-incendios
  - nota/facultad
vinculoFacultad:
  - tema: Prevención de incendios
    capitulo: 3
    materia: Seguridad ambiental y del trabajo
    carrera: Ingeniería electrónica
etapa: empezado
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la capacidad del conjunto matafuego-[[ingeniería electrónica/seguridad/Prevención de incendios/Agente extintor|agente extintor]] de extinguir un [[ingeniería electrónica/seguridad/Prevención de incendios/Fuego|fuego]] normalizado

Para determinar los requerimientos de poder extintor mínimo necesario de un [[Sector de incendio|sector]], se calcula la [[ingeniería electrónica/seguridad/Prevención de incendios/Carga de fuego|carga de fuego]] y con el [[ingeniería electrónica/seguridad/Prevención de incendios/Riesgo de incendio|riesgo de incendio]], de las siguientes tablas se determina el potencial extintor mínimo

### Fuegos clase A
| Carga de fuego                  | Riesgo explosivos | Riesgo inflamable | Riesgo muy combustibles | Riesgo combustibles | Riesgo poco combustibles |
| ---------------------- | --------------------- | --------------------- | --------------------------- | ----------------------- | ---------------------------- |
| Hasta $15 Kg/m^2$      | -                     | -                     | 1A                          | 1A                      | 1A                           |
| De $16$ a $30 Kg/m^2$  | -                     | -                     | 2A                          | 1A                      | 1A                           |
| De $31$ a $60 Kg/m^2$  | -                     | -                     | 3A                          | 2A                      | 1A                           |
| De $61$ a $100 Kg/m^2$ | -                     | -                     | 6A                          | 4A                      | 3A                           |
| Mayor a $100 Kg/m^2$   | Depende de cada caso  | Depende de cada caso  | Depende de cada caso        | Depende de cada caso    | Depende de cada caso                             |


### Fuegos clase B
| Carga de fuego                  | Riesgo explosivos | Riesgo inflamable | Riesgo muy combustibles | Riesgo combustibles | Riesgo poco combustibles |
| ---------------------- | --------------------- | --------------------- | --------------------------- | ----------------------- | ---------------------------- |
| Hasta $15 Kg/m^2$      | -                     | 6B                    | 4B                          | $\cdots$                | $\cdots$                     |
| De $16$ a $30 Kg/m^2$  | -                     | 8B                    | 6B                          | $\cdots$                | $\cdots$                     |
| De $31$ a $60 Kg/m^2$  | -                     | 19B                   | 8B                          | $\cdots$                | $\cdots$                     |
| De $61$ a $100 Kg/m^2$ | -                     | 20B                   | 10B                         | $\cdots$                | $\cdots$                           |
| Mayor a $100 Kg/m^2$   | Depende de cada caso  | Depende de cada caso  | Depende de cada caso        | Depende de cada caso    | Depende de cada caso         |

