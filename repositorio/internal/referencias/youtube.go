package referencias

import (
	"time"

	er "editor-sqlite/estructuras/referencias"
	t "editor-sqlite/repositorio/internal/tablas"
)

var PARAMETROS_YOUTUBE = []string{"nombre_video", "nombre_canal", "fecha_video", "url"}

type bddReferenciaYoutube struct {
	nombreVideo string
	nombreCanal string
	fechaVideo  int64
	url         string
}

func (d *bddReferenciaYoutube) InfoTabla() (t.Tablas, []string) {
	return t.TR_YOUTUBE, PARAMETROS_YOUTUBE
}

func (d *bddReferenciaYoutube) ObtenerDatos() []any {
	return []any{&d.nombreVideo, &d.nombreCanal, &d.fechaVideo, &d.url}
}

func (d *bddReferenciaYoutube) CrearElemento() (*er.ReferenciaYoutube, error) {
	return er.NewReferenciaYoutube(
		d.nombreVideo,
		d.nombreCanal,
		time.Unix(d.fechaVideo, 0),
		d.url,
	), nil
}

func (r *RepoReferencia) ObtenerReferenciasYoutube(
	numReferencias []int,
) ([]*er.ReferenciaYoutube, error) {
	datos := bddReferenciaYoutube{}
	return crearReferencias(r.bdd, numReferencias, &datos)
}

func (r *RepoReferencia) ObtenerReferenciaYoutube(
	numReferencia int,
) (*er.ReferenciaYoutube, error) {
	datos := bddReferenciaYoutube{}
	return crearReferencia(r.bdd, numReferencia, &datos)
}
