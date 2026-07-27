package arboles

import (
	"fmt"
	"strings"

	k "editor-sqlite/keybinds/keys"
)

type NodoAccion struct {
	padre  *NodoAccion
	key    k.KeyPress
	esNodo bool

	hijos []*NodoAccion

	accion      Accion
	descripcion string
}

func NewNodo(key k.KeyPress, nodos ...*NodoAccion) *NodoAccion {
	nodo := &NodoAccion {
		padre: nil,
		accion: nil,
		esNodo: true,

		key: key,
		hijos: nodos,
	}

	for _, nodoHijo := range nodos {
		nodoHijo.padre = nodo
	}

	return nodo
}

func NewHoja(key k.KeyPress, accion Accion, descripcion string) *NodoAccion {
	return &NodoAccion {
		padre: nil,
		hijos: []*NodoAccion{},
		esNodo: false,

		key: key,
		accion: accion,
		descripcion: descripcion,
	}
}

func ObtenerNodo(nodos []*NodoAccion, key k.KeyPress) *NodoAccion {
	for _, nodo := range nodos {
		if nodo.key.Comparar(key) {
			return nodo
		}
	}
	return nil
}

func (n *NodoAccion) String() string {
	if n.esNodo {
		opciones := make([]string, len(n.hijos))
		for i, hijo := range n.hijos {
			if hijo.esNodo {
				opciones[i] = fmt.Sprintf("%s %d+", hijo.key.String(), len(hijo.hijos))
			} else {
				opciones[i] = fmt.Sprintf("%s (%s)", hijo.key.String(), hijo.descripcion)
			}
		}

		return fmt.Sprintf("Nodo con key %s, y siguientes:\n\t%s", 
			n.key.String(),
			strings.Join(opciones, "\n\t"),
		)
	}

	return fmt.Sprintf("Hoja con key %s (%s)", n.key.String(), n.descripcion)
}

func (n *NodoAccion) ObtenerAccion() (Accion, bool) {
	return n.accion, !n.esNodo
}

func (n *NodoAccion) Actualizar(key k.KeyPress) *NodoAccion {
	if n.esNodo {
		return ObtenerNodo(n.hijos, key)
	}
	return nil
}

func (n *NodoAccion) Volver() *NodoAccion {
	return n.padre
}

