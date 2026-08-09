package referencias

import (
	"fmt"

	er "editor-sqlite/estructuras/referencias"
)

func (r *RepoReferencia) ObtenerReferenciaPaper(numReferencia int) (*er.ReferenciaPaper, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciaPaper")
}

func (r *RepoReferencia) ObtenerReferenciasPaper(
	numReferencias []int,
) ([]*er.ReferenciaPaper, error) {
	return nil, fmt.Errorf("TODO: ObtenerReferenciasPaper")
}
