---
dia: 2026-03-05
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-en-informática/estructura/Álgebra-de-Boole
  - carrera/ingeniería-electrónica/estructura/Álgebra-de-Boole
  - nota/facultad
vinculoFacultad:
  - tema: Álgebra de Boole
    capitulo: 3
    materia: Estructura del computador
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]] define al átomo como un núcleo con carga positiva donde está concentrada toda la masa del átomo, con electrones que giran alrededor del núcleo constantemente sin ganar o perder [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] excepto cuando saltan de una órbita a otra

Tiene los siguientes postulados
1. El [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrón]] sólo puede moverse en algunas órbitas permitidas en las que no emite ni absorbe energía
    * Cada órbita
        * Esta caracterizada por un [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Números Naturales|número natural]] $n$ 
        * Es circular y tiene un radio determinado $r_n$
        * Tiene asociada una energía del electrón, $E_n$ constante y puede calcularse según $$ E_n = -\frac{K}{n^2} $$
2. El electrón sólo gana o pierde energía, cuando cambia de una órbita permitida a otra, absorbiendo o emitiendo un [[Fotón|fotón]], con energía correspondiente a la diferencia de energías entre las órbitas que cambie
    * El electrón se encuentra normalmente en el nivel de menor energía, $n = 1$ que se lo llama nivel fundamental
    * Cuando recibe algún estímulo externo puede ocupar niveles de energía mayores, llamados niveles excitados
    * Cuando pierde energía, cae espontáneamente a una órbita más cercana al núcleo, emitiendo un fotón