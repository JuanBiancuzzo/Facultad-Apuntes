package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
)

type bddReferenciaYoutube struct {
	nombreVideo string
	nombreCanal string
	fechaVideo int64
	url string
}

func (d *bddReferenciaYoutube) obtenerDatos() []any {
	return []any{ &d.nombreVideo, &d.nombreCanal, &d.fechaVideo, &d.url }
}
	
func (r *RepoReferencia) ObtenerReferenciaYoutube(numReferencia int) (*er.ReferenciaYoutube, error) {
	var datos bddReferenciaYoutube
	query := generarQuery(t.TR_YOUTUBE, []string{"nombre_video", "nombre_canal", "fecha_video", "url"})
	fila := r.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de youtube, con error: %v", err)
	}

	return er.NewReferenciaYoutube(
		datos.nombreVideo,
		datos.nombreCanal,
		time.Unix(datos.fechaVideo, 0),
		datos.url,
	), nil
} 
