package editor

import (
	a "editor-sqlite/keybinds/arboles"
	k "editor-sqlite/keybinds/keys"
	kb "editor-sqlite/keybinds"
) 

func newArbolEstadoNormal() a.Arbol {
	return a.NewArbolAcciones(
		a.NewHoja(k.NewKey(k.C_I), kb.NewCambiarModo(kb.INSERTAR), kb.DESC_CAMBIAR_INSERTAR),
		a.NewHoja(k.NewKey(k.C_V), kb.NewCambiarModo(kb.VISUAL), kb.DESC_CAMBIAR_VISUAL),
		a.NewHoja(k.NewShiftKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_LINE), kb.DESC_CAMBIAR_VISUAL_LINE),
		a.NewHoja(k.NewCtrlKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_BLOCK), kb.DESC_CAMBIAR_VISUAL_BLOCK),

		a.NewHoja(k.NewCtrlKey(k.C_C), kb.AccionSalir{}, kb.DESC_SALR),
		a.NewNodo(k.NewKey(k.C_ESPACIO), 
			a.NewNodo(k.NewKey(k.C_W), 
				a.NewHoja(k.NewKey(k.C_Q), kb.AccionSalir{}, kb.DESC_SALR),
			),
		),
	)
}
