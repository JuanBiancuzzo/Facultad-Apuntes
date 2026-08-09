package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaLibro(numReferencia int) (*er.ReferenciaLibro, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaLibro")
}

func (r *RepoReferencia) ObtenerReferenciasLibro(
	numReferencias []int,
) ([]*er.ReferenciaLibro, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasLibro")
}
