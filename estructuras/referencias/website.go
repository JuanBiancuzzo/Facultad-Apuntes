package referencias

import (
	"fmt"
	"time"
	"strings"

	g "editor-sqlite/estructuras/general"
)

type ReferenciaWeb struct {
	NombreArticulo string
	NombrePagina string
	Fecha time.Time
	Url string
	Autores []g.Autore
}

func NewReferenciaWeb(nombreArticulo, nombrePagina string, dia time.Time, url string, autores []g.Autore) *ReferenciaWeb {
	return &ReferenciaWeb {
		NombreArticulo: nombreArticulo,
		NombrePagina: nombrePagina,
		Fecha: dia,
		Url: url,
		Autores: autores,
	}
}

func (rw *ReferenciaWeb) ToString() string { 
	nombres := make([]string, len(rw.Autores))
	for i, autore := range rw.Autores {
		nombres[i] = autore.ToString()
	}

	return fmt.Sprintf(
		"%s en %s, de %s", 
		rw.NombreArticulo, 
		rw.NombrePagina,
		strings.Join(nombres, ", "),
	)
}
