package referencias

import (
	"fmt"
	"time"
)

type ReferenciaYoutube struct {
	NombreVideo string
	NombreCanal string
	FechaVideo time.Time
	Url string
}

func NewReferenciaYoutube(nombreVideo, nombreCanal string, dia time.Time, url string) *ReferenciaYoutube {
	return &ReferenciaYoutube {
		NombreVideo: nombreVideo,
		NombreCanal: nombreCanal,
		FechaVideo: dia,
		Url: url,
	}
}

func (ry *ReferenciaYoutube) ToString() string { 
	return fmt.Sprintf("%s de %s", ry.NombreVideo, ry.NombreCanal)
}
