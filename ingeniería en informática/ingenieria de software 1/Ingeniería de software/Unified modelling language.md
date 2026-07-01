---
dia: 2023-08-27
aliases:
  - UML
  - Diagrama UML
  - Diagrama de objetos UML#Diagrama de objetos
  - Diagrama de objetos UML#Diagrama de objetos
  - Diagrama de clases UML#Diagrama de clases
  - Diagrama de paquetes UML#Diagrama de paquetes
  - Diagrama de componente UML#Diagrama de paquetes
  - Diagrama de despliegue UML#Diagrama de despliegue
  - Diagrama de perfil UML#Diagrama de perfil
  - Diagrama de actividad UML#Diagrama de actividad
  - Diagrama de casos de uso UML#Diagrama de casos de uso
  - Diagrama de máquina de estados UML#Diagrama de máquina de estados
  - Diagrama de secuencia UML#Diagrama de secuencia
  - Diagrama de comunicación UML#Diagrama de comunicación
  - Diagrama de tiempos UML#Diagrama de tiempos
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-en-informática/ingenieria-software-1/Ingeniería-de-software
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
vinculoFacultad:
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
  - tema: Ingeniería de software
    capitulo: 1
    materia: Análisis de la información
    carrera: Ingeniería en informática
  - tema: Introduccion
    capitulo: "0"
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
etapa: empezado
referencias:
  - "1158"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]], que tiene un lenguaje gráfico utilizado para especificar, visualizar, construir y documentar [[Sistema|sistemas]] basados en [[Software|software]]

Su objetivo es definir una forma estándar de visualizar la forma en que se ha diseñado un sistema

Se pueden separar los diagramas en
* Estructura
	* Clases
	* Objetos
	* Paquetes
	* Componentes
	* Despliegue
	* Perfil
* Comportamiento
	* Actividad
	* Casos de uso
	* Máquina de estado
	* Interacción
		* Secuencia
		* Comunicación
		* Tiempos

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagramas de uml estructura.png|500]]

## Diagrama de clases
---
Describe la estructura de un sistema con clases, asociaciones entre las clases e interfaces. Muestra la estructura interna y estática del sistema

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de clases.png|600]]


## Diagrama de objetos
---
Se puede entender al diagrama de objetos, como un caso particular del diagrama de clases pero con [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Objeto|objetos]] instanciados 

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de objetos.png|400]]

## Diagrama de paquetes
---
El diagrama muestra las dependencias entre paquetes, donde se entiende como paquete al conjunto de objetos

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de paquetes.png|450]]

## Diagrama de componentes
---
El diagrama muestra la interconexión entre componentes, que son funcionalidades con una única responsabilidad, y donde la conexión entre estos componentes representa el flujo de datos para crear un resultado

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de componentes.png|600]]

## Diagrama de despliegue
---
El diagrama de despliegue representa la comunicación entre [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]], y los [[investigación/networking/Protocolos|protocolos]] entre ellos

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de despliegue.png|600]]

## Diagrama de perfil
---
Este diagrama formaliza un conjunto de estereotipos, tags y restricciones que se pueden aplicar en otros diagramas

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de perfil.png|180]]

## Diagrama de actividad
---
Mostrar el flujo de actividades a lo largo de un ciclo de trabajo, también permite ver el flujo de procesos concurrentes a lo largo del programa

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de actividad.png|500]]

## Diagrama de casos de uso
---
Mostrar la funcionalidad provista por el sistema y su interacción con los [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Actor|usuarios]], a alto nivel

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de casos de uso.png|400]]

## Diagrama de máquina de estado
---
Las máquinas de estaos se basan en la notación de [[Diagrama de estado Harel|diagrama de estados introducidas por David Harel]]. El [[Diagrama de estado|diagrama de estado]] amplía la notación de los diagramas de estado de Harel mediante principios [[Programación oientada a objetos (OOP) (POO)|orientados a objetos]] 

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de máquina de estados.png|450]]

## Diagrama de secuencia
---
Mostrar la interacción entre una serie de clases para completar una acción

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de secuencia.png]]

## Diagrama de comunicación
---
Este diagrama muestra la secuencia de eventos y funciones que ocurren a partir de la interacción con un usuario

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de comunicación.png|600]]

## Diagrama de tiempos
---
Este diagrama muestra el transcurso del tiempo, bastante utilizado en comunicaciones con otras entidades o cuando se tiene multiples procesos o [[ingeniería en informática/sisop/Concurrencia/Thread|thread]] comunicándose entre ellos

![[ingeniería en informática/ingenieria de software 1/Ingeniería de software/img/Diagrama de tiempos.png|600]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```