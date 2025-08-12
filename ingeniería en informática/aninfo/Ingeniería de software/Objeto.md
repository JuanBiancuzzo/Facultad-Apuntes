---
dia: 2023-08-31
tags:
  - carrera/ingeniería-en-informática/aninfo/Ingeniería-de-software
  - curso/introduction-to-algorithms/Introduction
  - nota/curso
  - nota/facultad
referencias:
  - "700"
etapa: ampliar
vinculoFacultad:
  - tema: Ingeniería de software
    capitulo: 1
    materia: Análisis de la información
    carrera: Ingeniería en informática
vinculoCurso:
  - tema: Introduction
    capitulo: 1
    tipo: Online
    curso: Introduction to Algorithms
    anio: "2011"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un objeto puede tener multiples definiciones según el lugar donde se use

## En computación
---
Los objetos tiene una cantidad constante de campos, donde cada campo es una [[Palabra#En computación|palabra]], un [[Puntero|puntero]] a otro objeto, o la abstracción de la falta de valor que llamamos [[NULL|null]]

## En el análisis de requisitos
---
Es una abstracción de una entidad del mundo real importante para la discusión de los [[Requisito|requisitos]], con límites claramente establecidos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```