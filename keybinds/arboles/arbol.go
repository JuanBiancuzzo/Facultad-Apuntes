package arboles

import (
	k "editor-sqlite/keybinds/keys"
)

type Arbol interface {
	Actualizar(key k.KeyPress) (Accion, bool)

	Describir() string

	Reiniciar()
}
