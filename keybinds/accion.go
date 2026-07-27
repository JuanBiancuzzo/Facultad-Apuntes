package keybinds

const DESC_SALR string = "Salir del programa"
type AccionSalir struct {}

const DESC_COMMAND_PALLETE string = "Abrir el command pallete"
type CommandPallete struct {}

const DESC_HARPOON string = "Abrir eleccion de ventanas"
type Harpoon struct {}

const (
	DESC_CAMBIAR_NORMAL string = "Cambiar al modo Normal"
	DESC_CAMBIAR_INSERTAR string = "Cambiar al modo Insertar"
	DESC_CAMBIAR_VISUAL string = "Cambiar al modo Visual"
	DESC_CAMBIAR_VISUAL_BLOCK string = "Cambiar al modo Visual Block"
	DESC_CAMBIAR_VISUAL_LINE string = "Cambiar al modo Visual Line" 
)
type CambiarModo struct { Estado }
func NewCambiarModo(estado Estado) CambiarModo {
	return CambiarModo{ Estado: estado }
}

// No definida completamente
type MoverVentanta struct {}
