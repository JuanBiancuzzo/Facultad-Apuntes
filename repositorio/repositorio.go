package repositorio

import (
	r "editor-sqlite/estructuras/referencias"
)

type Repositorio interface {
	ObtenerReferencia(numReferencia int) (*r.Referencia, error)

	Close()
}
