---
dia: 2026-02-28
etapa: empezado
referencias:
  - "1105"
aliases:
  - Código binario reflejado
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un método para reordenar un conjunto de números tal que dos cualquiera de ellos, en su [[Número binario|representación binaria]] difieran en un solo [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bit]] 

En el contexto de comunicaciones digitales, se utiliza para minimizar la probabilidad de error, ya que cada [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolo]] se le puede dar un número que cumple el código de Gray para sus vecinos, haciendo que existe la relación $$ P_e = \log_2(M) ~ P_b $$ donde 
* $P_e$ es la probabilidad de error de un símbolo
* $P_b$ es la probabilidad de error de un bit
* $M$ es la cantidad de símbolos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```