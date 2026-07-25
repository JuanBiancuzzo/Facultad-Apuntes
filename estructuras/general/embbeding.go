package general

import (
	"fmt"
	"strings"
	"encoding/binary"
	"math"
)

const TAM_FLOAT uint32 = 8
const TAM_EMBBEDINGS uint32 = 384
const TAM_EMBBEDINGS_BYTES uint32 = TAM_FLOAT * TAM_EMBBEDINGS

type Embbeding struct {
	embbeding []float64
}

func NewEmbbeding(embbeding []byte) Embbeding {
	float_embbeding := make([]float64, TAM_EMBBEDINGS)
	var i uint32
	for i = 0; i < TAM_EMBBEDINGS; i++ {
		bits := binary.LittleEndian.Uint64(embbeding[i * TAM_FLOAT:(i + 1) * TAM_FLOAT])
		float_embbeding[i] = math.Float64frombits(bits)
	}

	return Embbeding {
		embbeding: float_embbeding,
	}
}

func (e Embbeding) ToString() string {
	valores := make([]string, len(e.embbeding))
	for i, valor := range e.embbeding {
		valores[i] = fmt.Sprintf("%.2f", valor) 
	}
	return fmt.Sprintf("Embbeding: [%s]", strings.Join(valores, ", "))
}

func (e Embbeding) Comparar(otro Embbeding) float64 {
	var (
		resultado float64 = 0
		norma_cuadrada float64 = 0
		norma_cuadrada_otro float64 = 0
	)

	for i := range TAM_EMBBEDINGS {
		resultado += e.embbeding[i] * otro.embbeding[i]
		norma_cuadrada += e.embbeding[i]
		norma_cuadrada_otro += otro.embbeding[i]
	}

	return resultado / math.Sqrt(norma_cuadrada * norma_cuadrada_otro)
}
