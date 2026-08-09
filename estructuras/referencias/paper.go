package referencias

import (
	g "editor-sqlite/estructuras/general"
)

type TipoLink uint

const (
	TL_DOI TipoLink = iota
	TL_URL
)

type ReferenciaPaper struct {
	Titulo   string
	Anio     int
	TipoLink TipoLink
	Link     string

	Autores  []g.Autore
	Editores []g.Autore
}

func NewReferenciaPaper(
	titulo string,
	anio int,
	doi, url *string,
	autores, editores []g.Autore,
) (*ReferenciaPaper, error) {
	paper := ReferenciaPaper{
		Titulo:   titulo,
		Anio:     anio,
		Autores:  autores,
		Editores: editores,
	}

	if doi != nil && url == nil {
		paper.TipoLink = TL_DOI
		paper.Link = *doi

	} else if doi == nil && url != nil {
		paper.TipoLink = TL_URL
		paper.Link = *url

	} else {
		return nil, ErrPaperInvalidLink
	}

	return &paper, nil
}
