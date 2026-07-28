package tipos

type MaquinaEstados interface {
	CambiarEstado(estado Estado) error

	Describir() string

	Actualizar(key KeyPress) (Accion, bool)
}
