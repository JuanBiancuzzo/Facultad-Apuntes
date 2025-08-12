---
dia: 2023-09-24
tags:
  - carrera/ingeniería-en-informática/aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
vinculoFacultad:
  - tema: Analizar y especificar requisitos
    capitulo: 4
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Un [[Modelo|modelo]] de dominio es una representación visual de los objetos (clases conceptuales) del dominio del problema. Lo construimos para entender y analizar mejor el contexto en el que operará el [[Sistema]] a desarrollar.

Las clases de diseño están inspiradas en conceptos del dominio del problema. Pero no confundirse con los objetos que plantea los [[Unified modelling language|diagramas UML]]. En generar, los objetos de dominio pertenecen a alguna de las siguientes grandes familias

#### Cosas
Manipuladas en una organización, por ejemplo contratos, facturas, pedidos

#### Objetos y conceptos
Son objetos y conceptos del mundo real que el sistema necesita conocer y/o monitorear, por ejemplo, un avión, misil, trayectoria.

Estos objetos tienen propiedades que caracterizan a estos objetos, y esto forma la base del diseño.

#### Eventos
Eventos pasados o futuros, por ejemplo arribos, partidas o pagos

#### Personas
Personas, roles u organizaciones, como clientes, socios o alumnos.

## Construcción
---
Podemos pensarlo en pasos
* [[Identificar clases conceptuales en el modelo de diseño|Identificar clases conceptuales]]
* Dibujarlas en un [[Unified modelling language#Diagrama de clases|diagrama de clases]]
* Agregar [[Asociación entre objetos]] y [[Clase conceptual|atributos]]
* Agregar generalizaciones, especializaciones, composiciones y agregaciones

Es un proceso iterativo e incremental