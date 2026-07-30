package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
)

const PARAMETROS_WIKIPEDIA = []string{ "nombre_articulo", "fecha", "url" }

type bddReferenciaWikipedia struct {
	nombreArticulo string
	fecha int64
	url string
}

func (d *bddReferenciaWikipedia) InfoTabla() (t.Tablas, []string) {
	return t.TR_WIKIPEDIA, PARAMETROS_WIKIPEDIA
}

func (d *bddReferenciaWikipedia) ObtenerDatos() []any {
	return []any{ &d.nombreArticulo, &d.fecha, &d.url }
}

func (d *bddReferenciaWikipedia) CrearElemento() (*er.ReferenciaWikipedia, error) {
	return er.NewReferenciaWikipedia(
		d.nombreArticulo,
		time.Unix(d.fecha, 0),
		d.url,
	), nil
}

func (r *RepoReferencia) ObtenerReferenciasWikipedia(numReferencias []int) ([]*er.ReferenciaWikipedia, error) {
	return crearReferencias(numReferencias, bddReferenciaWikipedia{})
}
	
func (r *RepoReferencia) ObtenerReferenciaWikipedia(numReferencia int) (*er.ReferenciaWikipedia, error) {
	return crearReferencia(numReferencia, bddReferenciaWikipedia{})
}

