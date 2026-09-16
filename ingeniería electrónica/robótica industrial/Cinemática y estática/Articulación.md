---
dia: 2026-09-16
etapa: empezado
referencias:
  - "1206"
aliases: 
  - Articulación simple#^articulacion-simple
  - Articulación de revolución#^articulacion-simple-revolucion
  - Articulación prismatica#^articulacion-simple-prismatica
  - Articulación compuesta#^articulacion-compuesta
  - Rótula fija#^rotula-fija
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
  - referencia/diccionarioonline
  - colección/diccionario/palabra
  - nota/colección
ejercicios: []
tipoCita: DiccionarioOnline
numReferencia: 1205
editorial: REAL ACADEMIA ESPAÑOLA
palabraBuscada: Articulación
fecha: 2026-09-16
nombreDiccionario: Diccionario de la lengua española, 23.ª ed
url: https://dle.rae.es/articulaci%C3%B3n
vinculoFacultad:
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
En un contexto general se lo puede entender como la unión entre dos piezas que permite el movimiento relativo entre ellas

## Mecánica
---
En el uso de articulaciones en [[investigación/robótica/robótica industrial/Robótica industrial|robótica industrial]] esto se lo extiende al concepto a la unión entre dos [[Cuerpo rígido|sólidos]] que permite que ambos se muevan porque convergen en el mismo eje o punto de apoyo, esto permite el movimiento de ambos en un mismo tiempo con [[investigación/animation/Grado de libertad|grados de libertad]] según el diseño específico de cada tipo de articulación

Se pueden agrupar en $2$ grupos
* Articulación simple, la cual representa un único movimiento, y por lo tanto un único grado de libertad ^articulacion-simple
	* Articulación de revolución, permite la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]] alrededor del eje ^articulacion-simple-revolucion
	* Articulación prismatica, permite la [[Translación|translación]] a lo largo del eje ^articulacion-simple-prismatica
* Articulación compuesta, la cual une $2$ o varias artiulaciones simples, por lo tanto agregando más de un grado de libertad ^articulacion-compuesta
	* Rótula fija, limita todo tipo de translación pero otorga completa libertad sobre la rotación ^rotula-fija

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```