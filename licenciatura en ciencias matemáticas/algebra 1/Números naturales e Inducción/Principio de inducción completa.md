---
dia: 2024-11-05
etapa: ampliar
referencias:
  - "412"
tags:
  - carrera/ingeniería-en-informática/discreta/Inducción
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
aliases:
  - Inducción fuerte
  - PIC
vinculoFacultad:
  - tema: Inducción
    capitulo: 6
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Números naturales e Inducción
    capitulo: 2
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $p(n)$, $n \in \mathbb{N}$, una afirmación sobre los [[Números Naturales|números naturales]]. Si $p$ satisface 
* (Caso base) $p(1)$ es Verdadera
* (Paso inductivo) $\forall h \in \mathbb{N}$, $p(k)$ Verdadera para $1 \le k \le h$ $\implies p(h + 1)$ es Verdadera
entonces $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```