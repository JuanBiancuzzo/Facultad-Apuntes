---
dia: 2025-03-10
etapa: empezado
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
tipoCita: Libro
tituloObra: Feedback Control of Dynamic Systems
numReferencia: 870
nombreAutores:
  - nombre: Gene F.
    apellido: Franklin
  - nombre: Powell
    apellido: Ryan J.
  - nombre: Abbas
    apellido: Emami-Naeini
anio: 2018
editorial: Pearson Education, Inc.
edicion: 8
capitulos:
  - numeroCapitulo: "1"
    nombreCapitulo: An Overview and Brief History of Feedback Control
    numReferencia: 871
    editores: []
    paginas:
      inicio: "1"
      final: "23"
  - numeroCapitulo: "2"
    nombreCapitulo: Dynamic Models
    numReferencia: 872
    editores: []
    paginas:
      inicio: "24"
      final: "88"
  - numeroCapitulo: "3"
    nombreCapitulo: Dynamic Response
    numReferencia: 873
    editores: []
    paginas:
      inicio: "89"
      final: "185"
  - numeroCapitulo: "4"
    nombreCapitulo: A First Analysis of Feedback
    numReferencia: 874
    editores: []
    paginas:
      inicio: "186"
      final: "247"
  - numeroCapitulo: "5"
    nombreCapitulo: The Root-Locus Design Method
    numReferencia: 875
    editores: []
    paginas:
      inicio: "248"
      final: "330"
  - numeroCapitulo: "6"
    nombreCapitulo: The Frequency-Response Design Method
    numReferencia: 876
    editores: []
    paginas:
      inicio: "331"
      final: "456"
  - numeroCapitulo: "7"
    nombreCapitulo: State-Space Design
    numReferencia: 877
    editores: []
    paginas:
      inicio: "457"
      final: "613"
  - numeroCapitulo: "8"
    nombreCapitulo: Digital Control
    numReferencia: 878
    editores: []
    paginas:
      inicio: "614"
      final: "660"
  - numeroCapitulo: "9"
    nombreCapitulo: Nonlinear Systems
    numReferencia: 879
    editores: []
    paginas:
      inicio: "661"
      final: "728"
  - numeroCapitulo: "10"
    nombreCapitulo: "Control System Design: Principles and Case Studies"
    numReferencia: 880
    editores: []
    paginas:
      inicio: "729"
      final: "842"
aliases:
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 1: An Overview and Brief History of Feedback Control#Capítulo 1: An Overview and Brief History of Feedback Control"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 2: Dynamic Models#Capítulo 2: Dynamic Models"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 3: Dynamic Response#Capítulo 3: Dynamic Response"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 4: A First Analysis of Feedback#Capítulo 4: A First Analysis of Feedback"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 5: The Root-Locus Design Method#Capítulo 5: The Root-Locus Design Method"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 6: The Frequency-Response Design Method#Capítulo 6: The Frequency-Response Design Method"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 7: State-Space Design#Capítulo 7: State-Space Design"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 8: Digital Control#Capítulo 8: Digital Control"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 9: Nonlinear Systems#Capítulo 9: Nonlinear Systems"
  - "Feedback Control of Dynamic Systems de Gene F. Franklin, Powell Ryan J., Abbas Emami-Naeini, Capítulo 10: Control System Design: Principles and Case Studies#Capítulo 10: Control System Design: Principles and Case Studies"
volumen: 2018
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```

## Capítulo 1: An Overview and Brief History of Feedback Control
---
Inicialmente describimos una clasificación para los [[Sistema|sistemas]] de control
* [[Controlador open-loop|Open-loop control]]
* [[Controlador closed-loop|Closed-loop control]]

Como mencionar algunos sistemas como
* [[Sistema regulador|Regulador]]
* [[Tracking system|Tracking system]]

## Capítulo 2: Dynamic Models
---
Se ve el modelado de sistemas

Para sistemas mecánicos
* [[Modelo de un sistema de translación|Modelo de un sistema de translación]]
* [[Modelo de un sistema rotacional|Modelo de un sistema rotacional]]
* [[Modelo de un sistema de translación y rotacional|Modelo de un sistema de translación y rotacional]]

Para sistemas electrónicos
* [[Ley de nodos de Kirchhoff|Ley de nodos de Kirchhoff]]
* [[Ley de mallas de Kirchhoff|Ley de mallas de Kirchhoff]]
* Viendo los componentes lineales
    * [[Resistor|Resistor]]
    * [[Capacitor|Capacitor]]
    * [[Inductor|Inductor]]
    * [[Fuente de tensión|Fuente de tensión]]
    * [[Fuente de corriente|Fuente de corriente]]
* Componentes no lineales
    * [[Amplificador operacional|Amplificador operacional]]

Para sistemas electromecánicos
* [[Modelo de un parlante|Modelo de un parlante]]
* [[Modelo de un motor|Modelo de un motor]]
* [[Engranaje|Modelo de engranajes]]

Para sistemas de fluidos
* [[Conducción de calor|Modelo del flujo de calor]]
* [[Convección de calor|Modelo de intercambio de calor]]
* [[Modelo de fluidos incompresibles|Modelo de fluidos incompresibles]]
* [[Modelo hidráulico de pistones|Modelo hidráulico de pistones]]

## Capítulo 3: Dynamic Response
---
Inicialmente se hace una repaso de concepto de 
* Un [[Sistema lineal e invariante en el tiempo|sistema LTI]]
* El [[Principio de superposición|principio de superposición]]
* La [[Sistema invariante en el tiempo|invarianza en el tiempo]]
* La [[Respuesta en frecuencia|respuesta al impulso]]
* La [[Convolución|convolución]]
* Los [[Sistema causal|sistemas causales]]
* La [[Transferencia del sistema|función de transferencia]] 
    * Los polos y los ceros
* La [[Transformada de Laplace|transformada de Laplace]] y su inversa

Después de eso, vamos la forma de modelar sistemas, usando 
* [[Diagrama de bloques|Diagramas de bloques]] y sus operaciones

Vemos un mayor análisis del efecto que tienen los polos y los ceros de una transferencia, entre esas
* Su [[Sistema estable|estabilidad]]
* Los efectos de los ceros y los polos adicionales
* Los efectos en el [[Dominio|dominio]] del tiempo 

## Capítulo 4: A First Analysis of Feedback
---
Vemos los $4$ criterios para el diseño de un controlador
* [[Sistema estable|Estabilidad]]
* [[Tracking system|Tracking]]
* [[Sensibilidad de un sistema|Sensibilidad]] y la [[Sensibilidad complementaria de un sistema|sensibilidad complementaria]]
* [[Regulación de un sistema|Regulación]]

Después vemos como se van pueden ir creando los [[Controlador automático|controladores]] viendo los distintos aspectos de los siguientes controladores
* [[Controlador proporcional|Controlador proporcional]]
* [[Controlador integral|Controlador integral]]
* [[Controlador derivativo|Controlador derivativo]]
* [[Controlador proporcional-integral|Controlador proporcional-integral (PI)]]
* [[Controlador proporcional-integral-derivativo|Controlador proporcional-integral-derivativo (PID)]]

Por último agrega un método para reducir el error del input a la planta

## Capítulo 5: The Root-Locus Design Method
---



## Capítulo 6: The Frequency-Response Design Method
---



## Capítulo 7: State-Space Design
---



## Capítulo 8: Digital Control
---



## Capítulo 9: Nonlinear Systems
---



## Capítulo 10: Control System Design: Principles and Case Studies
---



