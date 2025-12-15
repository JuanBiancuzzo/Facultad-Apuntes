---
dia: 2025-12-14
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Tomando el desarrollo anterior como un prototipo, ya que entendemos como debería funcionar conceptualmente.

La aplicación busca una forma de organizar, mostrar y modificar información guardada en una [[ingeniería en informática/bdd/General/Base de datos|base de datos]]. Para lograr esto, tenemos un proceso de
1. importar información para crear la base de datos
2. crear views para la información
    * una view define un conjunto de entidades (de la base de datos) que se necesitan para crear la visión
3. exportar las views para crear representaciones 

Para la base de datos, usaríamos [[SQLite|SQLite]], la justificación del mismo es que este nos permite utilizarlo tanto en una aplicación tradicional y en páginas estáticas como github pages, como también las extensiones que tiene permite guardar datos con distintas estructuras.

Para las views, debería comportarse similar a [[Entity component system (ECS)|ECS]], donde las entities son las páginas generadas, los components es la información, y los systems la view. Por lo que al intentar mostrar una página, este tiene un conjunto de componentes (información necesaria para hacerla) y el sistema utiliza esta información para crearla.

Por otro lado, necesitamos un sistema que nos permita describir UI, es decir, utilizando código, como crear UI integrando de forma dinámica la información que haya sido pasado.

En resumen, el usuario describe los grupos de información más chicos posibles con una [[ingeniería en informática/algo 1/Lenguaje C/Struct|struct]] de la siguiente forma

``` go
type EjemploEnum string
const (
    Primero = "Primero"
    Segundo = "Segundo"
)

type Otro struct {}
type Algo struct {}

type Informacion struct {
    Numero      int           `clave:"representativo"`
    Texto       string        `clave:"representativo"`
    Enumeracion EjemploEnum   
    Referencia  *Otro         `clave:"representativo"`
    ElementoOpt Optional[int] 
    Lista       []Algo        `array:"1..*"`
}
```

Luego se registrará estas estructuras, asegurando que la estructura descripta sea posible de generar, es decir, sin [[ingeniería en informática/discreta/Grafos/Camino#Ciclo (Cicle)|ciclos]]. Posiblemente de la siguiente forma 

``` go
func Inicializar(registro *Registro) {
    registro.registrar[Informacion]()
    
    registro.registrar[Otro]()
    registro.registrar[Algo]()
    
    // ...
}
```

Debería ser capaz de manejar el registro fuera de orden.

En los últimos pasos, deberíamos ser capaces de crear y registrar una view, donde se lograría de esta forma

``` go
func ViewInformacion(informacion Informacion, otro Otro) EstructuraView {
}

func Inicializar(registro *Registro) {
    // ...
    
    registro.AgregarView(ViewInformacion)
}

```

Esta `EstructuraView` es la forma en la cual podemos representar una UI, este debería ser una estructura dado por un motor de GUI como se puede ver en este [video](https://youtu.be/by9lQvpvMIc?si=yXX0nNXjOGWe0CFX). Esta estructura puede ser animada, o estática.