---
dia: 2025-03-10
etapa: empezado
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Ingeniería de control moderna
numReferencia: 897
nombreAutores:
  - nombre: Katsuhiko
    apellido: Ogata
anio: "2010"
editorial: Pearson Education, Inc.
edicion: "5"
capitulos:
  - numeroCapitulo: "1"
    nombreCapitulo: Introducción a los sistemas de control
    numReferencia: 898
    editores: []
    paginas:
      inicio: "1"
      final: "12"
  - numeroCapitulo: "2"
    nombreCapitulo: Modelado matemático de sistemas de control
    numReferencia: 899
    editores: []
    paginas:
      inicio: "13"
      final: "62"
  - numeroCapitulo: "3"
    nombreCapitulo: Modelado matemático de sistemas mecánicos y sistemas electrónicos
    numReferencia: 900
    editores: []
    paginas:
      inicio: "63"
      final: "99"
  - numeroCapitulo: "4"
    nombreCapitulo: Modelado matemático de sistemas de fluidos y sistemas térmicos
    numReferencia: 901
    editores: []
    paginas:
      inicio: "100"
      final: "158"
  - numeroCapitulo: "5"
    nombreCapitulo: Análisis de la respuesta transitoria y estacionaria
    numReferencia: 902
    editores: []
    paginas:
      inicio: "159"
      final: "268"
  - numeroCapitulo: "6"
    nombreCapitulo: Análisis y diseño de sistemas de control por el método del lugar de las raíces
    numReferencia: 903
    editores: []
    paginas:
      inicio: "269"
      final: "397"
  - numeroCapitulo: "7"
    nombreCapitulo: Análisis y diseño de sistemas de control por el método de la respuesta en frecuencia
    numReferencia: 904
    editores: []
    paginas:
      inicio: "398"
      final: "566"
  - numeroCapitulo: "8"
    nombreCapitulo: Controladores PID y controladores PID modificados
    numReferencia: 905
    editores: []
    paginas:
      inicio: "567"
      final: "647"
  - numeroCapitulo: "9"
    nombreCapitulo: Análisis de sistemas de control en el espacio de estados
    numReferencia: 906
    editores: []
    paginas:
      inicio: "648"
      final: "721"
  - numeroCapitulo: "10"
    nombreCapitulo: Diseño de sistemas de control en el espacio de estados
    numReferencia: 907
    editores: []
    paginas:
      inicio: "722"
      final: "858"
aliases:
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 1: Introducción a los sistemas de control#Capítulo 1: Introducción a los sistemas de control"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 2: Modelado matemático de sistemas de control#Capítulo 2: Modelado matemático de sistemas de control"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 3: Modelado matemático de sistemas mecánicos y sistemas electrónicos#Capítulo 3: Modelado matemático de sistemas mecánicos y sistemas electrónicos"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 4: Modelado matemático de sistemas de fluidos y sistemas térmicos#Capítulo 4: Modelado matemático de sistemas de fluidos y sistemas térmicos"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 5: Análisis de la respuesta transitoria y estacionaria#Capítulo 5: Análisis de la respuesta transitoria y estacionaria"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 6: Análisis y diseño de sistemas de control por el método del lugar de las raíces#Capítulo 6: Análisis y diseño de sistemas de control por el método del lugar de las raíces"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 7: Análisis y diseño de sistemas de control por el método de la respuesta en frecuencia#Capítulo 7: Análisis y diseño de sistemas de control por el método de la respuesta en frecuencia"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 8: Controladores PID y controladores PID modificados#Capítulo 8: Controladores PID y controladores PID modificados"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 9: Análisis de sistemas de control en el espacio de estados#Capítulo 9: Análisis de sistemas de control en el espacio de estados"
  - "Ingeniería de control moderna de Katsuhiko Ogata, Capítulo 10: Diseño de sistemas de control en el espacio de estados#Capítulo 10: Diseño de sistemas de control en el espacio de estados"
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

## Capítulo 1: Introducción a los sistemas de control
---
Se ve las siguientes definiciones
* [[Variable controlada|Variable controlada]]
* [[Planta|Planta]]
* [[Proceso#En teoría de control|Proceso]]
* [[Sistema|Sistema]]
    * [[Sistema de control robusto|Sistema de control robusto]]
    * [[Controlador open-loop|Sistema de control a lazo abierto]]
    * [[Controlador closed-loop|Sistema de control a lazo cerrado]]
* [[Perturbación|Perturbación]]

## Capítulo 2: Modelado matemático de sistemas de control
---
Se da los fundamentos del análisis de [[Sistema|sistemas]] usando la [[Transferencia del sistema|función transferencia]] y la [[Respuesta en frecuencia|respuesta al impulso]]

Después se ve los [[Controlador automático|sistema de control automático]] dado una lista de [[Controlador|controladores]]
* [[Controlador de dos posiciones|Controladores de dos posiciones o on-off]]
* [[Controlador proporcional|Controladores proporcionales]]
* [[Controlador integral|Controladores integrales]]
* [[Controlador proporcional-integral|Controladores proporcionales-integrales]]
* [[Controlador proporcional-derivativo|Controladores proporcionales-derivativos]]
* [[Controlador proporcional-integral-derivativo|Controladores proporcionales-integrales-derivativos]]

Se sigue con el modelado en el espacio de estados, viendo conceptos como
* [[Teoría de control moderna|Teoría de control moderna]]
* Algunas definiciones de conceptos claves
    * [[Estado#En teoría de control|Estado]]
    * [[Variable de estado|Variable y vector de estado]]
    * [[Espacio de estados|Espacio de estados y sus ecuaciones]]

Por último resolución usando la [[Transformada de Laplace|transformada de Laplace]] o [[Linealización Jacobiana|linealizando el problema]] alrededor de un [[Punto de equilibrio|punto de equilibrio]], para obtener la transferencia del sistema

## Capítulo 3: Modelado matemático de sistemas mecánicos y sistemas electrónicos
---


## Capítulo 4: Modelado matemático de sistemas de fluidos y sistemas térmicos
---



## Capítulo 5: Análisis de la respuesta transitoria y estacionaria
---



## Capítulo 6: Análisis y diseño de sistemas de control por el método del lugar de las raíces
---



## Capítulo 7: Análisis y diseño de sistemas de control por el método de la respuesta en frecuencia
---



## Capítulo 8: Controladores PID y controladores PID modificados
---



## Capítulo 9: Análisis de sistemas de control en el espacio de estados
---



## Capítulo 10: Diseño de sistemas de control en el espacio de estados
---



