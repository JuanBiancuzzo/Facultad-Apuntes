---
dia: 2026-01-03
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
La estructura propuesta esta bien, pero tengo que definir mejor las views. Actualmente se tiene la [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] que tiene que cumplir una view
```go
type FnYield func() []Event

type View interface {
	Preload(EventHandler)

	View(*World, EventHandler, RequestView, FnYield) View
}
```

Donde se tienen las interfaces
```go
type EventHandler interface {
    Push(Event) error
}

type RequestView interface {
    Request(requestedView View) (uid ViewId, dataView View)
}
```

Se tiene un evento particular de pedir precargar una view dada, similar a `eventHandler.Push(NewPreloadEvent(view))`

Se necesita una forma de poder llamar a las views del usuario, desde la view del ejecutable. También se necesita ver una forma en la cual se pueda ejecutar una o varias views dentro de una view

Lo que intenté implementar fue un "Walker", que tiene como interfaz 
```go
type ViewWalker interface {
	InitializeView(View)

	Preload(ViewId, View)

	WalkScene([]Event)

	Render() SceneRepresentation
}
```

Este Walker tiene la funcionalidad de separar los frame en eventos discretos, a diferencia del continuo de la view. También permite la opción de renderizar.

Todo este sistema tiene el problema que cuando uno quiere crear una view, tiene que rellenarla con la información que el sistema tiene, por lo que crear una view no es tan simple como instanciar la [[ingeniería en informática/algo 1/Lenguaje C/Struct|estructura]], por lo que puede generar confusiones para el usuario y complicaciones para el Walker, ya que necesita una función para pedirle al sistema que se llene la información. 

Por lo tanto el sistema tiene el problema que hay una separación entre la creación de una view y llenarla de información que se encuentra en el sistema