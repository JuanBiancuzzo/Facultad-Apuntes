package referencias

import (
	"fmt"
	"time"
)

type ReferenciaWikipedia struct {
	NombreArticulo string
	Fecha time.Time
	Url string
}

func NewReferenciaWikipedia(nombreArticulo string, dia time.Time, url string) *ReferenciaWikipedia {
	return &ReferenciaWikipedia {
		NombreArticulo: nombreArticulo,
		Fecha: dia,
		Url: url,
	}
}

func (rw *ReferenciaWikipedia) ToString() string { 
	return fmt.Sprintf("%s", rw.NombreArticulo)
}
