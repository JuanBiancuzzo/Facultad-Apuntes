---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Podemos definir un sistema distribuido como una colección de computaras interconectadas por una [[Red|red]] intercambiando [[Paquete|mensajes]], independientes, que corresponden a un único sistema

### Ventajas
---
Tiene las ventajas de
* Disponibilidad
    * Aún frente a fallos aislados, el sistema general puede prestar servicios
* Escalabilidad
    * Mejores alternativas de adaptarse a nuevas escalas
* Reducción de latencia
    * Al favorecer principios de localidad de recursos
* Colaboración
    * Permite interacciones entre sistemas de forma orgánica y natural
* Movilidad
    * No están circunscriptos al alcance de un único [[Computadora|computador]]
* Costo
    * Componentes más simples
    * Subsistemas delegados en servicios de terceros

## Parámetros de diseño
---
Al diseñar un sistema distribuido se busca
* Transparencia, es decir, la capacidad de no distinguir la complejidad de fondo
* Tolerancia a fallos
    * Availability
    * Reliability
    * Safety
    * Maintainability
* Acceso a recursos compartidos
* Escalabilidad
