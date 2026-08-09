package referencias

import (
	"fmt"
	"strings"
	"time"

	g "editor-sqlite/estructuras/general"
)

type ReferenciaWebsite struct {
	NombreArticulo string
	NombrePagina   string
	Fecha          time.Time
	URL            string
	Autores        []g.Autore
}

func NewReferenciaWeb(
	nombreArticulo, nombrePagina string,
	dia time.Time,
	url string,
	autores []g.Autore,
) *ReferenciaWebsite {
	return &ReferenciaWebsite{
		NombreArticulo: nombreArticulo,
		NombrePagina:   nombrePagina,
		Fecha:          dia,
		URL:            url,
		Autores:        autores,
	}
}

func (rw *ReferenciaWebsite) ToString() string {
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
