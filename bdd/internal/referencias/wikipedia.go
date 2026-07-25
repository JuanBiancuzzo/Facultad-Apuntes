package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/bdd/tablas"
	r "editor-sqlite/estructuras/referencias"
)

type bddReferenciaWikipedia struct {
	nombreArticulo string
	fecha int64
	url string
}

func (d *bddReferenciaWikipedia) obtenerDatos() []any {
	return []any{ &d.nombreArticulo, &d.fecha, &d.url }
}
	
func (a *AlmReferencia) ObtenerReferenciaWikipedia(numReferencia int) (*r.ReferenciaWikipedia, error) {
	var datos bddReferenciaWikipedia
	query := generarQuery(t.TR_WIKIPEDIA, []string{ "nombre_articulo", "fecha", "url" })
	fila := a.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de wikipedia, con error: %v", err)
	}

	return r.NewReferenciaWikipedia(
		datos.nombreArticulo,
		time.Unix(datos.fecha, 0),
		datos.url,
	), nil
}
