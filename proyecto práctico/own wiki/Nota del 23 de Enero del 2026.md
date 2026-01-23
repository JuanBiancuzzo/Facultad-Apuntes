---
dia: 2026-01-23
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Siguiendo con la discusión sobre que modelo tomar sobre Immediate mode o Retain mode. Los puntos donde Retain mode le gana a Immediate mode son
* Secuencias de eventos
* [[Tweening|Tweening]]

Donde tweening como también el concepto de realizar una simulación se prestan muy bien a Immediate mode solo que guardando un poco de estado, por lo que creando funcionalidad especifica que guarde ese estado y por lo tanto se pueda avanzar iterativamente

Con la secuencia de eventos, teniendo en cuenta que no todo tiene que ser una secuencia, generado estructuras como secuenciadores, o [[ingeniería electrónica/embebidos/Diseño, desarrollo y depuración/Máquina de estado|máquinas de estado]] (donde un secuenciador es un cado particular de una máquina de estado), por ejemplo si quisiéramos animar un algoritmo 

```go
type TestView struct {
    SelectedBlock      int
    AnimationAlgorithm *s.Sequence
}

func InitTestView() *TestView {
    return &TestView {
        SelectedBlock:      0,
        AnimationAlgorithm: s.NewSequence(),
    }
}

func (tv *TestView) View(sCtx *s.SceneCtx) View {
    amountElements := 20
    tv.AnimationAlgorithm.Run(sCtx,
        func (sCtx *s.SceneCtx) bool { // First step
            // ...
            return false
        },
        func (sCtx *s.SceneCtx) bool { // Second step
            // ...
            for i := range amountElements {
                sCtx.Box({ X: i * 20, Y: 0, W: 20, H: 20 })
            }
            // ...
            
            if condition {
                // if the condition is meet, then the next set is change
                tv.SelectedBlock = 3 
                return true
            }
        
            return false
        }, 
        // ...
        func (sCtx *s.SceneCtx) bool { // Last step
            // ...
            return false
        }, 
    )
    
    // Render de code with a selected block of code
    sCtx.CodeText({
        HighlightBlock: tv.SelectedBlock,
        Code: " ... ",
    })

    return tv
}
```

Donde notemos que esta implementación es necesaria porque necesitamos mantener el estado entre loops. Hay que notar que si no fuera necesario mantener el estado, se podría hacer la view que se devuelve, ya que también funciona como una máquina de estados

También algo que deberíamos notar es que si queremos hacer una transición entre dos estados, se podría crear una función como la siguiente

```go
type FnSequenceView func(*s.SceneCtx) bool

type TransitionSequence struct {
    Prev       FnSequenceView
    Next       FnSequenceView
    Transition FnSequenceView
    EndedTrans bool
}

func NewTransitionSequence(prev FnSequenceView, next FnSequenceView, transition FnSequenceView) *TransitionSequence {
    return &TransitionSequence {
        Prev:       prev,
        Next:       next,
        Transition: transition,
        EndedTrans: false,
    }
}

func (ts *TransitionSequence) View(sCtx *s.SceneCtx) bool {
    if ts.EndedTrans {
        return ts.Next(sCtx)
    }
    
    if !ts.Prev(sCtx) {
        return false
    }
    
    ts.EndeTrans = ts.Transition(sCtx)
    return ts.Next(sCtx)  
} 
```

Donde notemos que con esta implementación, se sigue llamando a la view anterior hasta que se termine la transición por lo que es algo que debería tener en cuenta, pero eso depende completamente de la transición que se quiera hacer, y el usuario lo puede implementar ya que todas las herramientas necesarias están disponibles para el usuario