---
dia: 2023-03-17
tags:
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - nota/facultad
  - nota/investigacion
aliases:
  - En Rust#Trait
etapa: ampliar
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Sintaxis
    capitulo: 1
    materia: Taller de programación 1
    carrera: Ingeniería en informática
---
# Definición
---
Permite la comunicación entre dos o más [[Componente|componentes]], [[Servicio|servicios]] y/o [[Sistema|sistemas]], esto lo hace proponiendo un contrato que expone una parte del sistema, escondiendo la implementación. Esto último permite modificar el código sin modificar el contrato

En general si se tiene que cambiar el contrato, si lo pensamos como el [[Versionado semántico|versionado semántico]], implicaría una nueva versión de la interfaz 

## Inter-Aplicaciones
---
Estas son las [[Aplicación Programming Interface|Application Program Interface (API)]], que ofrecen un servicio a traves de esta interfaz la cual le permite obtener el servicio

## Intra-Aplicaciones
---
Estas son interfaces con el objetivo de comunicar dos partes del mismo sistema, y por lo tanto su implementación varia dependiendo de varios factores

Estos pueden ser 
* [[Patrón de diseño facade|Facades]]
* Las interfaces de [[Lenguaje c++|C++]], o los traits de [[Lenguaje Rust|Rust]] 

## Orientación del contrato
---
Existen dos modalidades para escribir esas dos instancias de interfaces

### Orientados a entidades
---
Esta forma de modelar la interfaz permite desacoplar los sistemas, una flexibilidad como objeto y admite extensiones a una funcionalidad no definida en su totalidad

### Orientados a procesos
---
Esta forma de modelar la interfaz permite componentes altamente acoplados, con mucho eficiencia como objeto y muchas funcionalidades

## Clasificaciones
---
Tenemos varias formas de clasificar estas interfaces

* Web APIs
    * Web services based APIs ([[Hypertext Transfer Protocol|HTTP]] + [[Simple Object Access Protocol (SOAP)|SOAP]])
    * [[Representational state transfer|REST]] based APIs

* Library-based / [[Framework|Frameworks]]
    * [[Lenguaje Java|Java]] API
    * [[Android|Android]] API

* Remote APIs
    * Servicios con custom [[Transmission Control Protocol|TCP]]/[[User Datagram Protocol|UDP]] 
    * Orientadas a Objetos
    * Procedure oriented como [[Remote Procedure Call|RPC]]

* [[Sistema operativo|SO]] related
    * [[POSIX|POSIX]]
    * WinAPI


## En Rust
---
`trait` permite definir comportamiento común a las estructuras, similar a las interfaces en otros lenguajes. Representa una capacidad, algo que un [[Tipo de dato|tipo de dato]], [[Estrucutura|estructura]] o [[Enum|enum]] puede hacer.

``` rust
trait NombreCompleto {
	fn nombre_completo(&self) -> String;
}

struct Persona {
	nombre: String,
	apellido: String,
}

impl NombreCompleto for Persona {
	fn nombre_completo(&self) -> String {
		format!("{} {}", self.nombre, self.apellido);
	}
}
```

También se puede implementar un trait de la siguiente forma
``` rust
#[derive(Debug)]
struct Persona {
	nombre: String,
	apellido: String,
}
```

Siempre que todos los elementos del [[Estrucutura|struct]] ya tengan la implementación del trait correspondiente.