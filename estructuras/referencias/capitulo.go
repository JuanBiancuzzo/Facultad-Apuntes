package referencias

import (
	g "editor-sqlite/estructuras/general"
)

type paginas struct {
	Inicio int
	Final  int
}

func newPaginas(inicio, final int) *paginas {
	return &paginas{
		Inicio: inicio,
		Final:  final,
	}
}

type ReferenciaCapitulo struct {
	Numero   int
	Titulo   *string
	Paginas  *paginas
	Editores []g.Autore
	Libro    *ReferenciaLibro
}

func NewReferenciaCapitulo(
	numero int,
	titulo *string,
	paginaInicio, paginaFinal *int,
	editores []g.Autore,
	libro *ReferenciaLibro,
) (*ReferenciaCapitulo, error) {
	if libro == nil {
		return nil, ErrCapituloSinLibro
	}

	if (paginaInicio == nil && paginaFinal != nil) || (paginaInicio != nil && paginaFinal == nil) {
		return nil, ErrCapituloPaginasInvalidas
	}

	var paginas *paginas = nil
	if paginaInicio != nil && paginaFinal != nil {
		paginas = newPaginas(*paginaInicio, *paginaFinal)
	}

	return &ReferenciaCapitulo{
		Numero:   numero,
		Titulo:   titulo,
		Paginas:  paginas,
		Editores: editores,
		Libro:    libro,
	}, nil
}
