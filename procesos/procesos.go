package procesos

import (
	"fmt"

	g "editor-sqlite/estructuras/general"
)

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

func (p *Procesos) Close() {
	if p.embeddings != nil {
		p.embeddings.Close()
	}
}
