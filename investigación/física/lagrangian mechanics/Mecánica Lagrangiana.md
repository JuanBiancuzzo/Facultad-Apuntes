---
dia: 2024-07-08
tags:
  - investigación/física/lagrangian-mechanics
  - investigación/índice
  - nota/investigacion
estado: Falta resumir
aliases:
  - Lagrangian Mechanics
vinculoFacultad:
  - tema: Dinámica
    capitulo: 5
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Se va intentar investigar como es este nuevo paradigma para encontrar las ecuaciones de movimiento, y la resolución de colisiones.

Basándonos en la serie
* [Clases IB en línea: Mecánica clásica](https://youtube.com/playlist?list=PLv0-vSkgrxj_Uv65oZV9ilrWZ2xUNbaw8&si=E4qJ3Kusx4E8GTyL)

## Resumen
---
Se tiene la ecuación de Lagrange $$ \frac{d}{dt} \frac{\partial L}{\partial \dot{q}} - \frac{\partial L}{\partial q} = \psi $$ donde se tiene 
* $L$ es el Lagrangeano dado por $$ L = K - U $$ con $K$ siendo la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía cinética|energía cinética]] y $U$ la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía potencial|energía potencial]]
* $q$ son las coordenadas generalizadas
* $\psi$ es la [[Fuerza|fuerza]] generalizada, que incluye fuerzas no conservativas externas o disipativas que realizan [[ingeniería en informática/fisica 2/Electrostática en el vacío/Trabajo|trabajo]]


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```