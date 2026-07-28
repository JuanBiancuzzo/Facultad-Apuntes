package editor

import (
	"fmt"

	t "editor-sqlite/tipos"
)

/*
	Igual que un arbol accion, incluso incluyendo esos nodos, pero
	donde todas las teclsa que no se hayan especificado, entonces que 
	se devuelva como accion la Key en si
*/ 
type arbolTexto struct {
	nodos      []*NodoAccion
	nodoActual *NodoAccion

	procesarKey func(t.KeyPress) t.Accion
}

func NewArbolInsertar(nodos ...*NodoAccion) t.Arbol {
	return newArbolTexto(nodos, func(key t.KeyPress) t.Accion {
		return key 
	})
}

func NewArbolReplazar(nodos ...*NodoAccion) t.Arbol {
	return newArbolTexto(nodos, func(key t.KeyPress) t.Accion {
		return t.KeyRemplazar(key)
	})
}

func NewArbolReplazarAvanzar(nodos ...*NodoAccion) t.Arbol {
	return newArbolTexto(nodos, func(key t.KeyPress) t.Accion {
		return t.KeyRemplazarAvanzar(key)
	})
}

func newArbolTexto(nodos []*NodoAccion, procesarKey func(t.KeyPress) t.Accion) t.Arbol {
	return &arbolTexto {
		nodos: nodos,
		nodoActual: nil,
		procesarKey: procesarKey,
	}
}

func (a *arbolTexto) Describir() string {
	if a.nodoActual == nil {
		return "Nodo actual nil"
	}

	return fmt.Sprintf("Nodo actual con: %s", 
		a.nodoActual.String(),
	)
}

func (a *arbolTexto) Actualizar(key t.KeyPress) (t.Accion, bool) {
	if key.Codigo == t.C_BORRAR && a.nodoActual != nil {
		a.nodoActual = a.nodoActual.Volver()
		return nil, false
	}

	if a.nodoActual == nil {
		a.nodoActual = ObtenerNodo(a.nodos, key)

	} else  {
		a.nodoActual = a.nodoActual.Actualizar(key)
	}

	var accion t.Accion = a.procesarKey(key)
	ok := true

	if a.nodoActual != nil {
		if accion, ok = a.nodoActual.ObtenerAccion(); ok {
			a.Reiniciar()
		}
	}

	return accion, ok
}

func (a *arbolTexto) Reiniciar() {
	a.nodoActual = nil
}
