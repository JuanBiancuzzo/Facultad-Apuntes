package tipos

type Accion any

type Arbol interface {
	Actualizar(key KeyPress) (Accion, bool)

	Describir() string

	Reiniciar()
}
