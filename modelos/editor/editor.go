package editor

import (
	"fmt"

	t "editor-sqlite/tipos"
)

type Editor struct {
	estado  t.Estado
	arboles []t.Arbol
}

func NewEditor() t.MaquinaEstados {
	return NewEditorConEstadoInicial(t.NORMAL)
}

func NewEditorConEstadoInicial(estado t.Estado) t.MaquinaEstados {
	arboles := make([]t.Arbol, t.MAX_ESTADOS)
	for i := range t.MAX_ESTADOS {
		var arbol t.Arbol = nil

		switch i {
		case t.NORMAL: arbol = newArbolEstadoNormal()
		case t.INSERTAR: arbol = newArbolEstadoInsertar()
		case t.VISUAL: arbol = newArbolEstadoVisual()
		case t.VISUAL_BLOCK: arbol = newArbolEstadoVisualBlock()
		case t.VISUAL_LINE: arbol = newArbolEstadoVisualLine()
		}

		arboles[i] = arbol
	}

	return &Editor {
		estado: estado,
		arboles: arboles,
	}
}

func (e *Editor) Estado() t.Estado {
	return e.estado
}

func (e *Editor) CambiarEstado(estado t.Estado) error {
	if estado >= t.MAX_ESTADOS {
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

func (e *Editor) Actualizar(key t.KeyPress) (t.Accion, bool) {
	return e.arboles[e.estado].Actualizar(key)
}
