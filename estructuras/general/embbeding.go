package general

import (
	"fmt"
	"strings"
	"encoding/binary"
	"math"
)

const TAM_FLOAT uint32 = 8
const TAM_EMBEDDINGS uint32 = 384
const TAM_EMBEDDINGS_BYTES uint32 = TAM_FLOAT * TAM_EMBEDDINGS

type Embedding struct {
	embedding []float64
}

func NewEmbedding(embedding []byte) *Embedding {
	float_embedding := make([]float64, TAM_EMBEDDINGS)
	var i uint32
	for i = 0; i < TAM_EMBEDDINGS; i++ {
		bits := binary.LittleEndian.Uint64(embedding[i * TAM_FLOAT:(i + 1) * TAM_FLOAT])
		float_embedding[i] = math.Float64frombits(bits)
	}

	return &Embedding {
		embedding: float_embedding,
	}
}

func (e Embedding) ToString() string {
	valores := make([]string, len(e.embedding))
	for i, valor := range e.embedding {
		valores[i] = fmt.Sprintf("%.2f", valor) 
	}
	return fmt.Sprintf("Embedding: [%s]", strings.Join(valores, ", "))
}

func (e Embedding) Comparar(otro Embedding) float64 {
	var (
		resultado float64 = 0
		norma_cuadrada float64 = 0
		norma_cuadrada_otro float64 = 0
	)

	for i := range TAM_EMBEDDINGS {
		resultado += e.embedding[i] * otro.embedding[i]
		norma_cuadrada += e.embedding[i]
		norma_cuadrada_otro += otro.embedding[i]
	}

	return resultado / math.Sqrt(norma_cuadrada * norma_cuadrada_otro)
}
