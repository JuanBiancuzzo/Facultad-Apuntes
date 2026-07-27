package keybinds

import (
	a "editor-sqlite/keybinds/arboles"
	k "editor-sqlite/keybinds/keys"
)

type MaquinaEstados interface {
	CambiarEstado(estado Estado) error

	Describir() string

	Actualizar(key k.KeyPress) (a.Accion, bool)
}
