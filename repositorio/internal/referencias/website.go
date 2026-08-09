package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaWebsite(
	numReferencia int,
) (*er.ReferenciaWebsite, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaWebsite")
}

func (r *RepoReferencia) ObtenerReferenciasWebsite(
	numReferencias []int,
) ([]*er.ReferenciaWebsite, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasWebsite")
}
