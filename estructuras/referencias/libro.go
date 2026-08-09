package referencias

import (
	g "editor-sqlite/estructuras/general"
)

type ReferenciaLibro struct {
	Titulo    string
	Subtitulo *string
	Anio      int
	Edicion   *string
	Volumen   *int
	Doi       *string
	Editorial string
	Autores   []g.Autore
}

func NewReferenciaLibro(
	titulo string,
	anio int,
	subtitulo, edicion, doi *string,
	volumen *int,
	editorial string,
	autores []g.Autore,
) *ReferenciaLibro {
	return &ReferenciaLibro{
		Titulo:    titulo,
		Subtitulo: subtitulo,
		Anio:      anio,
		Edicion:   edicion,
		Volumen:   volumen,
		Doi:       doi,
		Editorial: editorial,
		Autores:   autores,
	}
}
