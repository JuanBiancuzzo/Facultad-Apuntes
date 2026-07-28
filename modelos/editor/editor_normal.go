package editor

import (
	a "editor-sqlite/acciones"
	t "editor-sqlite/tipos"
) 

func newArbolEstadoNormal() t.Arbol {
	return NewArbolAcciones(
		NewHoja(t.NewKey(t.C_I), a.NewAccionCambiarModo(t.INSERTAR), a.DESC_CAMBIAR_INSERTAR),
		NewHoja(t.NewKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL), a.DESC_CAMBIAR_VISUAL),
		NewHoja(t.NewShiftKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_LINE), a.DESC_CAMBIAR_VISUAL_LINE),
		NewHoja(t.NewCtrlKey(t.C_V), a.NewAccionCambiarModo(t.VISUAL_BLOCK), a.DESC_CAMBIAR_VISUAL_BLOCK),

		NewNodo(t.NewKey(t.C_ESPACIO), 
			NewNodo(t.NewKey(t.C_W), 
				NewHoja(t.NewKey(t.C_Q), a.NewAccionSalir(), a.DESC_SALR),
			),
		),
	)
}
