package editor

import (
	"fmt"

	t "editor-sqlite/tipos"
)

type arbolAcciones struct {
	nodos []*NodoAccion
	nodoActual *NodoAccion
}

func NewArbolAcciones(nodos ...*NodoAccion) t.Arbol {
	return &arbolAcciones {
		nodos: nodos,
		nodoActual: nil,
	}
}
func (a *arbolAcciones) Describir() string {
	if a.nodoActual == nil {
		return "Nodo actual nil"
	}

	return fmt.Sprintf("Nodo actual con: %s", 
		a.nodoActual.String(),
	)
}

func (a *arbolAcciones) Actualizar(key t.KeyPress) (t.Accion, bool) {
	if key.Codigo == t.C_BORRAR && a.nodoActual != nil {
		a.nodoActual = a.nodoActual.Volver()
		return nil, false
	}

	if a.nodoActual == nil {
		a.nodoActual = ObtenerNodo(a.nodos, key)

	} else  {
		a.nodoActual = a.nodoActual.Actualizar(key)
	}

	if a.nodoActual != nil {
		if accion, ok := a.nodoActual.ObtenerAccion(); ok {
			a.Reiniciar()
			return accion, true
		}
	}
	return nil, false
}

func (a *arbolAcciones) Reiniciar() {
	a.nodoActual = nil
}
