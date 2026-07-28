package procesos

import (
	"fmt"

	g "editor-sqlite/estructuras/general"
)

/*
	Agregar un procesos: 
	 * Para las formulas de latex (ketex/el otro)
	 * Para tikz si quiero generar esos svgs
*/
type Procesos struct {
	embeddings *procesoEmbedding
}

func NewProcesos() (*Procesos, error) {
	if embeddings, err := newProcesoEmbedding(); err != nil {
		return nil, fmt.Errorf("En el proceso de Embeddings: %w", err)

	} else {
		return &Procesos{
			embeddings: embeddings,
		}, nil
	}
}

func (p *Procesos) ConseguirEmbedding(texto string) (*g.Embedding, error) {
	if p.embeddings == nil {
		return nil, fmt.Errorf("No existe el proceso de embeddings")
	}
	return p.embeddings.ConseguirEmbedding(texto)
}


func (p *Procesos) ConseguirMultiplesEmbedding(textos []string) ([]*g.Embedding, error) {
	return []*g.Embedding{}, fmt.Errorf("TODO")
}

func (p *Procesos) Close() {
	if p.embeddings != nil {
		p.embeddings.Close()
	}
}
