package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaCapitulo(
	numReferencia int,
) (*er.ReferenciaCapitulo, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaCapitulo")
}

func (r *RepoReferencia) ObtenerReferenciasCapitulo(
	numReferencias []int,
) ([]*er.ReferenciaCapitulo, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasCapitulo")
}
