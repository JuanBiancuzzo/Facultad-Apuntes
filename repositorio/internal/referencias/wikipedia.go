package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
)

type bddReferenciaWikipedia struct {
	nombreArticulo string
	fecha int64
	url string
}

func (d *bddReferenciaWikipedia) obtenerDatos() []any {
	return []any{ &d.nombreArticulo, &d.fecha, &d.url }
}
	
func (r *RepoReferencia) ObtenerReferenciaWikipedia(numReferencia int) (*er.ReferenciaWikipedia, error) {
	var datos bddReferenciaWikipedia
	query := generarQuery(t.TR_WIKIPEDIA, []string{ "nombre_articulo", "fecha", "url" })
	fila := r.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de wikipedia, con error: %v", err)
	}

	return er.NewReferenciaWikipedia(
		datos.nombreArticulo,
		time.Unix(datos.fecha, 0),
		datos.url,
	), nil
}
