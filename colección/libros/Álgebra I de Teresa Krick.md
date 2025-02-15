---
dia: 2024-10-30
etapa: sin-empezar
tipoCita: Libro
numReferencia: 410
tituloObra: Álgebra I
subtituloObra: 
nombreAutores:
  - apellido: Krick
    nombre: Teresa
anio: "2017"
editorial: Departamento de Matemática, Facultad de Ciencias Exactas y Naturales
edicion: 
volumen: 
url: 
capitulos:
  - numReferencia: 411
    numeroCapitulo: "1"
    nombreCapitulo: Conjuntos, Relaciones y Funciones
    editores: []
    paginas:
      inicio: "9"
      final: "46"
  - numReferencia: 412
    numeroCapitulo: "2"
    nombreCapitulo: Números Naturales e Inducción
    editores: []
    paginas:
      inicio: "47"
      final: "86"
  - numReferencia: 413
    numeroCapitulo: "3"
    nombreCapitulo: Combinatoria
    editores: []
    paginas:
      inicio: "87"
      final: "106"
  - numReferencia: 414
    numeroCapitulo: "4"
    nombreCapitulo: Enteros - Primera parte
    editores: []
    paginas:
      inicio: "107"
      final: "168"
  - numReferencia: 415
    numeroCapitulo: "5"
    nombreCapitulo: Enteros - Segunda Parte
    editores: []
    paginas:
      inicio: "169"
      final: "214"
  - numReferencia: 416
    numeroCapitulo: "6"
    nombreCapitulo: Números Complejos
    editores: []
    paginas:
      inicio: "215"
      final: "238"
  - numReferencia: 417
    numeroCapitulo: "7"
    nombreCapitulo: Polinomios
    editores: []
    paginas:
      inicio: "239"
      final: "279"
cover: Álgebra I de Teresa Krick.png
aliases:
  - "Álgebra I de Teresa Krick, Capítulo 1: Conjuntos, Relaciones y Funciones#Capítulo 1: Conjuntos, Relaciones y Funciones"
  - "Álgebra I de Teresa Krick, Capítulo 2: Números Naturales e Inducción#Capítulo 2: Números Naturales e Inducción"
  - "Álgebra I de Teresa Krick, Capítulo 3: Combinatoria#Capítulo 3: Combinatoria"
  - "Álgebra I de Teresa Krick, Capítulo 4: Enteros - Primera parte#Capítulo 4: Enteros - Primera parte"
  - "Álgebra I de Teresa Krick, Capítulo 5: Enteros - Segunda Parte#Capítulo 5: Enteros - Segunda Parte"
  - "Álgebra I de Teresa Krick, Capítulo 6: Números Complejos#Capítulo 6: Números Complejos"
  - "Álgebra I de Teresa Krick, Capítulo 7: Polinomios#Capítulo 7: Polinomios"
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```

## Capítulo 1: Conjuntos, Relaciones y Funciones
---
### Conjuntos
---
Vamos a ver la definición de [[Conjunto|conjunto]], y [[Subconjunto|subconjunto]], con las operaciones de
* [[Demostración de equivalencia|Igualdad]]
* [[Operador condicional#Álgebra de conjuntos|Inclusión]]
* [[Operador OR#Álgebra de conjunto|Unión]]
* [[Operador AND#Álgebra de conjunto|Intersección]]
* [[Operador NOT#Álgebra de conjunto|Complemento]]
* [[Ley de De Morgan#Álgebra de conjunto|Ley de Morgan]]
* [[Distributividad#Álgebra de conjuntos|Ley distributiva]]
* [[Diferencia entre conjuntos|Diferencia]]
* [[Operador XOR#Álgebra de conjuntos|Diferencia simétrica]]

### Relaciones
---
Podemos empezar a ver el concepto de [[Relación|relación]] con los casos particulares
* [[Relación de equivalencia|Relación de equivalencia]]
* [[Relación de orden|Relación de orden]]

Esto nos hace ver las propiedades ![[Relación#Propiedades]]
### Funciones
---
Podemos ver como definir una [[Función|función]] usando relaciones. También vemos una de las posibles clasificaciones
* [[Función inyectiva|Función inyectiva]]
* [[Función sobreyectiva|Función sobreyectiva]]
* [[Función biyectiva|Función biyectiva]]

Además vemos la definición de [[Función inversa|función inversa]]

## Capítulo 2: Números Naturales e Inducción
---
Vamos a ver la definición de los [[Números Naturales|números naturales]], como las propiedades
* [[Conmutatividad|Conmutatividad]]
* [[Asociatividad|Asociatividad]]
* [[Distributividad|Distributividad del producto sobre la suma]]

También vemos el [[Principio de inducción|Principio de inducción P.I.]] y su versión [[Principio de inducción#Inducción "corrida"|corrida]], el [[Principio de inducción completa|Principio de inducción completa P.I.C.]] y el [[Principio de Buen Ordenación|Principio de Buen Ordenación P.B.O.]]

## Capítulo 3: Combinatoria
---
Vemos el concepto de [[Cardinalidad|cardinalidad]] 
* [[Cardinalidad|Conjunto]]
    * [[Cardinalidad#Cardinal de un subconjunto|Subconjunto]]
    * [[Cardinalidad#Cardinal de la unión de conjuntos|Unión de conjuntos]]
    * [[Cardinalidad#Cardinal del complemento de un conjunto|Complemento de un conjunto]]
* [[Cardinalidad#Cardinal de un producto cartesiano|Producto cartesiano]]
* [[Cardinalidad#Cardinal del conjunto de partes|Conjunto de partes]]
* [[Cardinalidad#Cardinal de relaciones|Relaciones]]
* [[Cardinalidad#Cardinal de funciones|Funciones]]
    * [[Cardinalidad#Cantidad de funciones inyectivas|Funciones inyectivas]]
    * [[Cardinalidad#Cantidad de funciones biyectivas|Funciones biyectivas]]

En estas últimas dos exploramos los números
* [[Factorial|Factorial]]
* [[Número combinatorio|Combinatorio]]

Por último vemos el [[Binomio de Newton|binomio de Newton]] 

## Capítulo 4: Enteros - Primera parte
---
Empezamos viendo los [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|números enteros]] y sus propiedades. Seguido del concepto de [[Divisibilidad|divisibilidad]] y [[Congruencia|congruencia]]

Vemos la definición de los [[Número primo|primos]] y de los [[Número coprimo|coprimos]], y la forma en la que [[Teorema fundamental de la aritmética|factorizan a los enteros]]

Por último vemos el [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Máximo común divisor|Mcd]] y el [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Mínimo común múltiplo|Mcm]], y las propiedades que tienen en relación a los primos

## Capítulo 5: Enteros - Segunda Parte
---
Empezamos viendo las [[Ecuación lineal diofántica|ecuaciones lineales diofánticas]] y [[Ecuación lineal de congruencia|ecuaciones lineales de congruencia]]

## Capítulo 6: Números Complejos
---


## Capítulo 7: Polinomios
---


