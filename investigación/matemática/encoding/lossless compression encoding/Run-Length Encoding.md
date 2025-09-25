---
dia: 2024-10-30
etapa: empezado
referencias:
  - "407"
tags:
  - investigación/matemática/encoding/lossless-compression-encoding
  - nota/investigacion
  - nota/facultad
aliases:
  - Código de longitud de corrida
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En muchas aplicaciones una secuencia de [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolos]] a ser transmitida ó cuadrada se caracteriza por larga corridas de símbolos específicos en lugar de transmitir cada símbolo de la corrida es más eficiente usar un código de longitud de corridas

Por ejemplo, si se tiene la secuencia de caracteres "AAAABBCCCAAAAA" se puede transformar a "4A2B3C5A"

Notemos que este método solo es mejor si realmente hay repetidos de forma consecutiva, ya sea caracteres únicos, o conjunto de caracteres. En el caso que esto no se cumpla, se tiene dos consecuencias donde estamos usando [[ingeniería en informática/sisop/Virtualización de memoria/Memoria|memoria]] para guardar esas cantidades, y por lo tanto si no hay repetidos la estamos desperdiciando, y además este método impone aumentar la cantidad de símbolos ya que se necesita los símbolos por ejemplo del "1A", "2A", "3A", etc. por lo que complejiza el proceso de [[investigación/matemática/encoding/Encoding|encoding]] al aumentar la cantidad de símbolos



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```