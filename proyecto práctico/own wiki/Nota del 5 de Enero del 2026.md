---
dia: 2026-01-05
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Como contra el [[proyecto práctico/own wiki/Nota del 3ro de Enero del 2026|problema planteado]], la solución que propongo es definir las siguientes [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaces]]

```go
type FnYield func() []Event

type View[Data any] interface {
	Preload(Data)

	View(*World, Data, FnYield) View
}
```

Para nuestra situación, ya que la view es [[ingeniería en informática/taller/Sintaxis/Generic|genérica]], usaríamos las `View[OWData]`

```go
type OWData interface {
    QueryEntity(QueryRequest) Entity
    
    QueryAll(QueryRequest) []Entity
    
    SendEvent(Event)
    
    // ... Permite la expansión
}
```

De esta forma el usuario no necesita definir en la view la entidad que quiere pedir, sino que generará una query y devuelve la entidad o un conjunto de entidades que cumplan la query. Por otro lado, si se quiere precargar una view, crear, modificar o eliminar un componente, entonces se debe hacer por medio de los eventos

Es importante separar la modificación del sistema, por medio de los eventos, ya que este sistema nos permitiría fácilmente crear un "undo tree" y/o un sistema de versionado