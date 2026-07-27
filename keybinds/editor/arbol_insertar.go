package editor

import (
	a "editor-sqlite/keybinds/arboles"
	k "editor-sqlite/keybinds/keys"
	kb "editor-sqlite/keybinds"
) 

func newArbolEstadoInsertar() a.Arbol {
	return a.NewArbolInsertar(
		a.NewHoja(
			k.NewKey(k.C_ESC), 
			kb.NewCambiarModo(kb.NORMAL), 
			kb.DESC_CAMBIAR_NORMAL,
		),
	)
}
