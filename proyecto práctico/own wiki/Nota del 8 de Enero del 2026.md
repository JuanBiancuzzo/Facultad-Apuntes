---
dia: 2026-01-08
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Actualización de la forma las views. Se puede solucionar el [[proyecto práctico/own wiki/Nota del 3ro de Enero del 2026|problema planteado]] forzando al usuario a utilizar una función de la librería para cargar la información que necesite la view. Por lo tanto planteo lo siguiente

```go
type FnYield func() <-chan []Event

type View interface {
	View(world *World, yield FnYield) View
}
```

Con un mundo para crear las escenas

```go
type Renderable interface {
    Render() SceneDescription
}

type World struct { /* ... */ }

func NewWorld(worldConfig WorldConfiguration) *World { /* ... */ } 

func (w *World) AddToWorld(renderable Renderable) { /* ... */ } 
```

Finalmente la forma de forzar al usuario a crear las views dentro de un sistema que yo pueda manejar

```go
type Scene[V View] struct {
    InnerWorld *World
}

func NewScene[V View](view V, worldConfig WorldConfiguration) Scene[V] {
    // Inyectar información a la view por medio de pedir info al sistema
} 

func (s Scene[V]) StepView(events []Event) { /* ... */ } 

func (s Scene[V]) Render() SceneDescription { /* ... */ } 
```

Dentro de crear una nueva `Scene` podemos inyectar la funcionalidad de cargar información en la view definida

Con esta estructura podemos pedirle al usuario los componentes de una view, y las views que quiere usar. De los componentes se definen las tablas, y con las entidades descriptas en las views, se crear las querys necesarias para mandar a una view

Para mejorarlo podemos plantear lo siguiente, todos los objetos como lo son las escenas, pueden ser privadas, y creamos una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] de creación, y lo agregamos a las views de la siguiente forma 

```go
type ObjectCreator interface {
	NewScene(view View, worldConfig WorldConfiguration) *scene
	
	// ... otros objetos
}

type View interface {
	View(world *World, creator ObjectCreator, yield FnYield) View
}
```
