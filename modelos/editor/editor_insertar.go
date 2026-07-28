package editor

import (
	a "editor-sqlite/acciones"
	t "editor-sqlite/tipos"
) 

func newArbolEstadoInsertar() t.Arbol {
	return NewArbolInsertar(
		NewHoja(
			t.NewKey(t.C_ESC), 
			a.NewAccionCambiarModo(t.NORMAL), 
			a.DESC_CAMBIAR_NORMAL,
		),
	)
}
