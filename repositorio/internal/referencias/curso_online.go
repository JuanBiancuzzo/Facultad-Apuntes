package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaCursoOnline(
	numReferencia int,
) (*er.ReferenciaCursoOnline, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaCursoOnline")
}

func (r *RepoReferencia) ObtenerReferenciasCursoOnline(
	numReferencias []int,
) ([]*er.ReferenciaCursoOnline, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasCursoOnline")
}
