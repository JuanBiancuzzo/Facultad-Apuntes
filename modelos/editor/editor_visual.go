package editor

import (
	a "editor-sqlite/acciones"
	t "editor-sqlite/tipos"
) 

func newArbolEstadoVisual() t.Arbol {
	return NewArbolAcciones(
		NewHoja(t.NewKey(t.C_ESC), a.NewAccionCambiarModo(t.NORMAL), a.DESC_CAMBIAR_NORMAL),

		NewHoja(t.NewShiftKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_LINE), a.DESC_CAMBIAR_VISUAL_LINE),
		NewHoja(t.NewCtrlKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_BLOCK), a.DESC_CAMBIAR_VISUAL_BLOCK),
	)
}

func newArbolEstadoVisualBlock() t.Arbol {
	return NewArbolAcciones(
		NewHoja(t.NewKey(t.C_ESC), a.NewAccionCambiarModo(t.NORMAL), a.DESC_CAMBIAR_NORMAL),

		NewHoja(t.NewKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL), a.DESC_CAMBIAR_VISUAL),
		NewHoja(t.NewShiftKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_LINE), a.DESC_CAMBIAR_VISUAL_LINE),
	)
}

func newArbolEstadoVisualLine() t.Arbol {
	return NewArbolAcciones(
		NewHoja(t.NewKey(t.C_ESC), a.NewAccionCambiarModo(t.NORMAL), a.DESC_CAMBIAR_NORMAL),

		NewHoja(t.NewKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL), a.DESC_CAMBIAR_VISUAL),
		NewHoja(t.NewCtrlKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_BLOCK), a.DESC_CAMBIAR_VISUAL_BLOCK),
	)
}
