package editor

import (
	"fmt"

	a "editor-sqlite/keybinds/arboles"
	k "editor-sqlite/keybinds/keys"
	kb "editor-sqlite/keybinds"
)

type Editor struct {
	estado  kb.Estado
	arboles []a.Arbol
}

func NewEditor() kb.MaquinaEstados {
	return NewEditorConEstadoInicial(kb.NORMAL)
}

func NewEditorConEstadoInicial(estado kb.Estado) kb.MaquinaEstados {
	arboles := make([]a.Arbol, kb.MAX_ESTADOS)
	for i := range kb.MAX_ESTADOS {
		var arbol a.Arbol = nil

		switch i {
		case kb.NORMAL: arbol = newArbolEstadoNormal()
		case kb.INSERTAR: arbol = newArbolEstadoInsertar()
		case kb.VISUAL: arbol = newArbolEstadoVisual()
		case kb.VISUAL_BLOCK: arbol = newArbolEstadoVisualBlock()
		case kb.VISUAL_LINE: arbol = newArbolEstadoVisualLine()
		}

		arboles[i] = arbol
	}

	return &Editor {
		estado: estado,
		arboles: arboles,
	}
}

func (e *Editor) CambiarEstado(estado kb.Estado) error {
	if estado >= kb.MAX_ESTADOS {
		return fmt.Errorf("El estado %d es invalido", estado)
	}

	e.arboles[e.estado].Reiniciar()
	e.estado = estado
	return nil
}

func (e *Editor) Describir() string {
	return fmt.Sprintf("[%s] %s", 
		e.estado.String(),
		e.arboles[e.estado].Describir(),
	)	
}

func (e *Editor) Actualizar(key k.KeyPress) (a.Accion, bool) {
	return e.arboles[e.estado].Actualizar(key)
}
