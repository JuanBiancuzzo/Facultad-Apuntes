---
dia: 2023-10-22
tags:
  - carrera/ingeniería-en-informática/ingenieria-software-1/Diseño-de-software
  - nota/facultad
aliases:
  - Single Responsability Principal#Single-Responsability
  - Open Closed Principal#Open-closed
  - Liskov Substitution Principal#Liskov sustitution
  - Interace Segregation Principal#Interface segregation
  - Dependency Inversion Principal#Dependency inversion
vinculoFacultad:
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Estos principios de diseño de código, busca plantear $5$ reglas para intentar obtener código legible, extensible y más fácilmente testeable 

## Single-Responsibility
---
Este principio plantea que un bloque de código debería tener una única responsabilidad. Generalmente se puede decir, que solo debería haber un motivo por el cual se debe modificar este bloque de código

Esto viene con la desventaja de separar el código en multiples secciones, lo cual puede perjudicar en algunos casos la eficiencia, y en otro la legibilidad ya que es necesario moverse grandes distancias para llegar a todas las partes del mismo

## Open-closed
---
Este principio propone que un [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] debería ser capaz de extender el sistema pero no modificarlo. Esto quiere decir, que el sistema debe estar preparado para poder incluir nueva funcionalidad, sin la necesidad de modificar el código del sistema. Generalmente se declara una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] de la funcionalidad, y el sistema puede incorporar estas funcionalidades

Esto trae la desventaja de complejizar el código, para sistemas simples. En el caso donde el sistema tiene una cantidad determinada de funcionalidades, y se sabe que esto no va a cambiar, es recomendable no utilizar este principio. También, no es buena idea empezar con este principio, si la cantidad de funcionalidad es chica y no se tiene la necesidad de agregar más 

## Liskov substitution
---
Este principio refiere a la idea de [[Herencia|herencia]], donde las subclases deben ser capaces de ser utilizadas en el lugar de la superclase. Esto es porque si la subclase, por definición, debería ser un funcionamiento especifico de la superclase, y por lo tanto si funciona en la superclase, el caso particular también


## Interface segregation
---
Este principio refiere a que las interfaces deben ser lo más chicas posible, donde deben buscar referirse a una cantidad limitada de funcionalidad. Esto permite una mayor reutilización de las interfaces, simplificando el código

Siempre se puede optar por la composición de interfaces para definir toda la funcionalidad original (antes de separarla)

## Dependency inversion
---
Este principio propone no depender de una [[Clase concreta|clase concreta]], sino recibir como parámetro de la [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] una interfaz. Esto permite que el código sea más testeable, ya que se puede simplemente implementar la interfaz e inyectarla en la función para poder testear su funcionalidad

Esto viene muy de la mano con los [[Mock|mocks]], donde simulan la funcionalidad de la interfaz para obtener la información útil para la prueba

Hay que tener cuidado igual, donde este principio puede hacer que todo sean interfaces, y volvemos a tener el problema donde el código queda separado de donde se esta usando, y por lo tanto vuelve difícil al lectura
