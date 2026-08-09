package referencias

import (
	"fmt"
	"time"
)

type ReferenciaDiccionario struct {
	Palabra     string
	Diccionario string
	Editorial   string
	Fecha       time.Time
	URL         string
}

func NewReferenciaDiccionario(
	palabra, diccionario, editorial string,
	dia time.Time,
	url string,
) *ReferenciaDiccionario {
	return &ReferenciaDiccionario{
		Palabra:     palabra,
		Diccionario: diccionario,
		Editorial:   editorial,
		Fecha:       dia,
		URL:         url,
	}
}

func (rd *ReferenciaDiccionario) ToString() string {
	return fmt.Sprintf("%s en %s", rd.Palabra, rd.Diccionario)
}
