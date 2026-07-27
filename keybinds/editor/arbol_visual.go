package editor

import (
	a "editor-sqlite/keybinds/arboles"
	k "editor-sqlite/keybinds/keys"
	kb "editor-sqlite/keybinds"
) 

func newArbolEstadoVisual() a.Arbol {
	return a.NewArbolAcciones(
		a.NewHoja(k.NewKey(k.C_ESC), kb.NewCambiarModo(kb.NORMAL), kb.DESC_CAMBIAR_NORMAL),

		a.NewHoja(k.NewShiftKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_LINE), kb.DESC_CAMBIAR_VISUAL_LINE),
		a.NewHoja(k.NewCtrlKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_BLOCK), kb.DESC_CAMBIAR_VISUAL_BLOCK),
	)
}

func newArbolEstadoVisualBlock() a.Arbol {
	return a.NewArbolAcciones(
		a.NewHoja(k.NewKey(k.C_ESC), kb.NewCambiarModo(kb.NORMAL), kb.DESC_CAMBIAR_NORMAL),

		a.NewHoja(k.NewKey(k.C_V), kb.NewCambiarModo(kb.VISUAL), kb.DESC_CAMBIAR_VISUAL),
		a.NewHoja(k.NewShiftKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_LINE), kb.DESC_CAMBIAR_VISUAL_LINE),
	)
}

func newArbolEstadoVisualLine() a.Arbol {
	return a.NewArbolAcciones(
		a.NewHoja(k.NewKey(k.C_ESC), kb.NewCambiarModo(kb.NORMAL), kb.DESC_CAMBIAR_NORMAL),

		a.NewHoja(k.NewKey(k.C_V), kb.NewCambiarModo(kb.VISUAL), kb.DESC_CAMBIAR_VISUAL),
		a.NewHoja(k.NewCtrlKey(k.C_V), kb.NewCambiarModo(kb.VISUAL_BLOCK), kb.DESC_CAMBIAR_VISUAL_BLOCK),
	)
}
