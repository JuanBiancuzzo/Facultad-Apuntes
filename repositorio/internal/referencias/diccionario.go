package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaDiccionario(
	numReferencia int,
) (*er.ReferenciaDiccionario, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaDiccionario")
}

func (r *RepoReferencia) ObtenerReferenciasDiccionario(
	numReferencias []int,
) ([]*er.ReferenciaDiccionario, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasDiccionario")
}
