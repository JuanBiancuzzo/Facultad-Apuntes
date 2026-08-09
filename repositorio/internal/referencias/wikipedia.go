package referencias

import (
	"time"

	er "editor-sqlite/estructuras/referencias"
	t "editor-sqlite/repositorio/internal/tablas"
)

var PARAMETROS_WIKIPEDIA = []string{"nombre_articulo", "fecha", "url"}

type bddReferenciaWikipedia struct {
	nombreArticulo string
	fecha          int64
	url            string
}

func (d *bddReferenciaWikipedia) InfoTabla() (t.Tablas, []string) {
	return t.TR_WIKIPEDIA, PARAMETROS_WIKIPEDIA
}

func (d *bddReferenciaWikipedia) ObtenerDatos() []any {
	return []any{&d.nombreArticulo, &d.fecha, &d.url}
}

func (d *bddReferenciaWikipedia) CrearElemento() (*er.ReferenciaWikipedia, error) {
	return er.NewReferenciaWikipedia(
		d.nombreArticulo,
		time.Unix(d.fecha, 0),
		d.url,
	), nil
}

func (r *RepoReferencia) ObtenerReferenciasWikipedia(
	numReferencias []int,
) ([]*er.ReferenciaWikipedia, error) {
	datos := bddReferenciaWikipedia{}
	return crearReferencias(r.bdd, numReferencias, &datos)
}

func (r *RepoReferencia) ObtenerReferenciaWikipedia(
	numReferencia int,
) (*er.ReferenciaWikipedia, error) {
	datos := bddReferenciaWikipedia{}
	return crearReferencia(r.bdd, numReferencia, &datos)
}
