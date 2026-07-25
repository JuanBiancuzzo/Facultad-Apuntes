package almacenamiento

import (
	r "editor-sqlite/estructuras/referencias"
)

type Almacenamiento interface {
	ObtenerReferencia(numReferencia int) (*r.Referencia, error)

	Close()
}
