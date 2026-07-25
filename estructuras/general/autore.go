package general

import (
	"fmt"
)

type Autore struct {
	Nombre string
	Apellido string
}

func NewAutore(nombre, apellido string) *Autore {
	return &Autore {
		Nombre: nombre,
		Apellido: apellido,
	}
}

func (a *Autore) ToString() string {
	return fmt.Sprintf("%s %s", a.Nombre, a.Apellido)
}
