---
dia: 2025-03-01
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
Tenemos varias definiciones para middleware, y se lo puede definir como
 * [[Software|Software]] de conectividad que ofrece un [[Conjunto|conjunto]] de servicios que hacen posible el funcionamiento de [[Aplicación distribuida|aplicaciones distribuidas]] sobre plataformas heterogéneas
 * Módulo intermedio que actúa como conductor entre [[Sistema|sistemas]] permitiendo a cualquier usuario del sistema de [[Información|información]] comunicarse con varias fuentes de información que se encuentran conectadas por una [[Red|red]]
 * Capa de software que se encuentra o sitúa entre el [[Sistema operativo|sistema operativo]] y las aplicaciones del sistema
 * Software que permite conectar componentes, softwares o aplicaciones. El mismo consiste en un conjunto de [[Servicio|servicios]] que permiten que múltiples [[Proceso|procesos]] corriendo en una o varias máquinas interactúen de un lado a otro de la red

## Clasificaciones
---
Veamos métodos en como un middleware puede funcionar
* [[Transactional Procedure Middleware|Transactional Procedure]]
* [[Procedure Oriented Middleware|Procedure Oriented]]
* [[Object Oriented Middleware|Object Oriented]]
* [[Message Oriented Middleware|Message Oriented]]
* [[Reflective Middleware|Reflective Middleware]] (de configuración dinámica)

## Vista lógica
---
La capa de software entre el sistema operativo y la [[Capa de aplicación|capa de aplicación]]/usuario, para proveer una vista única del sistema

![[Vista lógica del middleware.png]]

## Vista física (centralizado)
---
Tenemos distintos clientes, que en vez de ser una capa, termina siendo un conjunto de servicios, y este middleware expone una [[Aplicación Programming Interface|API]] o [[Biblioteca|librería]] la cual los usuarios usan para utilizar los servicios que ofrece

![[Vista física centralizada de middleware.png]]

## Vista física (distribuido)
---
Cada cliente conoce todos los servicios, y usando la [[Interfaz|interfaz]] acceder al servicio ofrecido por el middleware. Esta es mucho más compleja que la centralizada por su dificultad para mantenerlo, pero al mismo mucho más flexible ya que es fácil incluir servicios como clientes

![[Vista física distribuida del middleware.png]]

## Objetivos
---
Veamos los objetivos que tiene un middleware

### Transparencia
---
* Se oculta la distribución y el sistema responde como si fuera una única [[Computadora|computador]]
* Esta transparencia es respecto a
    * Acceso
    * Ubicación
    * Migración
    * Replicación
    * [[Concurrencia|Concurrencia]]
    * Fallos
    * [[Persistencia de datos|Persistencia]]

### Tolerancia a Fallos
---
* Sistema confiables, que se ejecuten y comporten de manera predecible incluso frente a la aparición de fallos
* Abarcando
    * Availability
    * Reliability
    * [[Seguridad (Safety)|Safety]]
    * Maintainability

### Acceso a recursos compartidos
---
* Eficiente
* Transparente
* Controlado

### Sistemas distribuidos abiertos (interfaces)
---
* Estándares claros sobre sintaxis y semántica de los servicios ofrecidos
* Interoperabilidad y portabilidad

### Comunicación de grupos
---
* Permite [[Internet Protocol Versión 4|broadcasting]], [[Multicasting|multicasting]] y [[Internet Protocolo Anycast|anycasting]]
* Facilita localización de elementos y coordinación de tareas
