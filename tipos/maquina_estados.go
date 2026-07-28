package tipos

type MaquinaEstados interface {
	Estado() Estado

	CambiarEstado(estado Estado) error

	Describir() string

	Actualizar(key KeyPress) (Accion, bool)
}
