package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
)

const PARAMETROS_YOUTUBE = []string{"nombre_video", "nombre_canal", "fecha_video", "url"}

type bddReferenciaYoutube struct {
	nombreVideo string
	nombreCanal string
	fechaVideo int64
	url string
}

func (d *bddReferenciaYoutube) InfoTabla() (t.Tablas, []string) {
	return t.TR_YOUTUBE, PARAMETROS_YOUTUBE
}

func (d *bddReferenciaYoutube) ObtenerDatos() []any {
	return []any{ &d.nombreVideo, &d.nombreCanal, &d.fechaVideo, &d.url }
}

func (d *bddReferenciaYoutube) CrearElemento() (*er.ReferenciaWikipedia, error) {
	return er.NewReferenciaYoutube(
		d.nombreVideo,
		d.nombreCanal,
		time.Unix(d.fechaVideo, 0),
		d.url,
	), nil
}

func (r *RepoReferencia) ObtenerReferenciasYoutube(numReferencias []int) ([]*er.ReferenciaYoutube, error) {
	return crearReferencias(numReferencias, bddReferenciaYoutube{})
}
	
func (r *RepoReferencia) ObtenerReferenciaYoutube(numReferencia int) (*er.ReferenciaYoutube, error) {
	return crearReferencia(numReferencia, bddReferenciaYoutube{})
} 
