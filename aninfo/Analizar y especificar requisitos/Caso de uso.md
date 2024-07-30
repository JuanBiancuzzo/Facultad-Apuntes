---
dia: 2023-10-19
tags:
  - aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
---
### Definición
---
Una secuencia de acciones realizadas por un [[Sistema]] que generan un resultado observable de valor para un [[Actor]] en particular. También lo podemos pensar como, Una historia acerca de cómo un actor utiliza un [[Sistema]] para alcanzar sus objetivos. 

Un caso de uso incluye siempre un [[Escenario]] principal (o camino feliz) y uno o varios escenarios alternativos o secundarios.

Estos son tecnológicamente neutros, es decir, no son sobre una implementación. Por lo que no deben incluir aspectos de implementación, inclusive aquellos relacionados con la [[Interfaz de usuario|interfaz de usuario]].

La representación de [[Modelo]] visual, puede estar dada por un [[Unified modelling language#Diagrama de casos de uso|diagrama de casos de uso en UML]] 

#### Formatos
---
Hay diferentes formatos que pueden encontrarse los casos de uso, como

##### Formato breve
---
![[Formato de caso de uso breve#Definición]]

##### Formato secuencia de acciones
---
![[Formato de caso de uso secuencia de acciones#Definición]]

##### Formato de dos columnas o diálogo
---
![[Formato de caso de uso de dos columnas#Definición]]

##### Formato más completo
---
![[Formato de caso de uso completo#Definición]]

#### Cómo encontrarlos
---
1. Establecer los límites del [[Sistema]]
2. Identificar [[Actor|actores]] primarios y sus objetivos
3. Definir los casos de uso (en general, uno para cada objetivo)
4. Identificar pre y post condiciones
5. Describir [[Escenario|escenarios]] principales
6. Describir [[Escenario|escenarios]] alternativos
7. Refinar y ajustar: inclusiones, extensiones, especializaciones
	* Inclusión: Es cuando más de un caso de uso tiene comportamiento que se repite, por lo que podemos llamarlo caso de uso base a este comportamiento repetido
	* Extensión: En el caso que un comportamiento sea opcional, podemos extraer el caso de uso particular
	* Generalización: Es cuando se tiene que especificar un caso de uso, por lo que se generaliza tomando un caso de uso padre, y a los específicos como hijo 