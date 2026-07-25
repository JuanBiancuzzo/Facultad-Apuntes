package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/bdd/tablas"
	r "editor-sqlite/estructuras/referencias"
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
	
func (a *AlmReferencia) ObtenerReferenciaYoutube(numReferencia int) (*r.ReferenciaYoutube, error) {
	var datos bddReferenciaYoutube
	query := generarQuery(t.TR_YOUTUBE, []string{"nombre_video", "nombre_canal", "fecha_video", "url"})
	fila := a.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de youtube, con error: %v", err)
	}

	return r.NewReferenciaYoutube(
		datos.nombreVideo,
		datos.nombreCanal,
		time.Unix(datos.fechaVideo, 0),
		datos.url,
	), nil
} 
