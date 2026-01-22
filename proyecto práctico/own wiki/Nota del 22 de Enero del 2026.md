---
dia: 2026-01-22
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Siguiendo del problema planteado [[proyecto práctico/own wiki/Nota del 21 de Enero del 2026|ayer]] sobre Immediate mode vs Retain mode, estoy pensando (dado la estructura del proyecto y la forma en la que estamos renderizando) que podemos tener una mezcla de ambos

La combinación se puede hacer de varias formas, donde por ejemplo se puede crear layouts únicamente usando Immediate mode, pero el plano donde se renderiza el layout vive en Retain mode

```go
type ExampleView struct {}

func InitExampleView() *ExampleView {
	return &ExampleView{}
}

func (ev *ExampleView) View(scene *s.Scene, yield FnYield) View {
    layout := s.Layout({ X: 0, Y: 2, Z: 0, Gen: func() View {
        s.NewBox({ X: 0, Y: 0, H: 10, W: 20 })
    
        // Reset animation button
        if s.AddBotton("Reset", { X: 4, Y: 2, H: 1, W: 2 }) {
            return InitExampleView()
        }
   
        return nil
    }})
    
    for range yield() {
        if nextView, leave := layout.Leave(); leave {
            return nextView
        }
        
        layout.Z += 1
    }

    return nil
}
```


