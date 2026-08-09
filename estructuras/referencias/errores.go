package referencias

import (
	"errors"
)

var (
	ErrPaperInvalidLink = errors.New("Un paper puede tener un url o un doi, pero no ambas")
	ErrCapituloSinLibro = errors.New(
		"Al crear referencia no se encontró el libro del capiutlo",
	)
	ErrCapituloPaginasInvalidas = errors.New(
		"La página inicial como final tiene que estar o no estar",
	)
)
