package acciones

import (
	t "editor-sqlite/tipos"
)

const DESC_SALR string = "Salir del programa"
type AccionSalir struct {}
func NewAccionSalir() t.Accion {
	return AccionSalir{}
}

const DESC_COMMAND_PALLETE string = "Abrir el command pallete"
type AccionCommandPallete struct {}
func NewAccionCommandPallete() t.Accion {
	return AccionCommandPallete{}
}

const DESC_HARPOON string = "Abrir eleccion de ventanas"
type AccionHarpoon struct {}
func NewAccionHarpoon() t.Accion {
	return AccionHarpoon{}
}

const (
	DESC_CAMBIAR_NORMAL string = "Cambiar al modo Normal"
	DESC_CAMBIAR_INSERTAR string = "Cambiar al modo Insertar"
	DESC_CAMBIAR_VISUAL string = "Cambiar al modo Visual"
	DESC_CAMBIAR_VISUAL_BLOCK string = "Cambiar al modo Visual Block"
	DESC_CAMBIAR_VISUAL_LINE string = "Cambiar al modo Visual Line" 
)
type AccionCambiarModo struct { 
	Estado t.Estado
}
func NewAccionCambiarModo(estado t.Estado) t.Accion {
	return AccionCambiarModo{ 
		Estado: estado,
	}
}

// No definida completamente
type AccionMoverVentanta struct {}
