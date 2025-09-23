---
dia: 2025-09-05
etapa: empezado
referencias: []
aliases: 
  - Fuente extendida
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una fuente extendida, denotada $\mathcal{S}^n$, donde cada símbolo de esta fuente extendida es una [[ingeniería electrónica/analisis 3/Series/Sucesión|sucesión]] de $n$ símbolos de la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] $\mathcal{S}$ 

Se puede pensar como que el [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] de la fuente extendida se define como el [[ingeniería en informática/analisis 2/Nomenclatura/Producto cartesiano|producto cartesiano]] entre el alfabeto $\mathcal{S}$ con el mismo $n$ veces $$ \mathcal{S}^n = \underbrace{\mathcal{S} \times \mathcal{S} \times \cdots \times \mathcal{S}}_{n ~ \text{veces}} $$  
Las propiedades de una fuente extendida, en relación de la fuente son 
* Cantidad de símbolos se calcula como $$ |\mathcal{S}^n| = |\mathcal{S}|^n $$
* Su [[ingeniería en informática/orga/Compresión/Entropía de shannon|entropía]] se calcula de la siguiente forma $$ H\left(\mathcal{S}^n \right) = n ~ H(\mathcal{S}) $$
* Su [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] se calcula como $$ \bar{L}_{\mathcal{S}^n} = n ~ \bar{L}_{\mathcal{S}} $$

