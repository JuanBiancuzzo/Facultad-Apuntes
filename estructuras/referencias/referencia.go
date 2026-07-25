package referencias

import (
	"fmt"
	"time"
	"strings"
)

type TipoReferencia string

const (
    TR_YOUTUBE = "Youtube"
    TR_WIKIPEDIA = "Wikipedia"
    TR_WEB = "Web"
    TR_LIBRO = "Libro"
    TR_CAPITULO = "Capitulo"
    TR_DICCIONARIO = "DiccionarioOnline"

	TR_ERROR = "Error"
)

func ObtenerTipoReferencia(posibleTipo string) (TipoReferencia, error) {
	switch strings.ToLower(posibleTipo) {
	case "youtube": 			return TR_YOUTUBE, nil
	case "wikipedia", "wiki": 	return TR_WIKIPEDIA, nil
	case "website", "web": 		return TR_WEB, nil

	default:
		return TR_ERROR, fmt.Errorf("Todo: no esta registrado %s", posibleTipo)
	}
}

type DatoReferencia interface {
	ReferenciaYoutube | ReferenciaWikipedia | ReferenciaWeb
}

func DefaultDato[DR DatoReferencia]() DR {
	var dr DR
	return dr
} 

type Referencia struct {
	NumReferencia int
	Tipo TipoReferencia
	FechaRegistrada time.Time
	Dato any
}

func NewReferencia[DR DatoReferencia](numReferencia int, tipo TipoReferencia, fecha time.Time, dato DR) *Referencia {
	return &Referencia {
		NumReferencia: numReferencia,
		Tipo: tipo,
		FechaRegistrada: fecha,
		Dato: dato,
	}
}

func (r *Referencia) ToString() string {
	representacion := "No data"
	switch dato := r.Dato.(type) {
	case ReferenciaYoutube:     representacion = dato.ToString()
	case ReferenciaWikipedia:   representacion = dato.ToString()
	case ReferenciaWeb:       	representacion = dato.ToString()
	} 

	return fmt.Sprintf("[%d] %s - %s", r.NumReferencia, r.Tipo, representacion)
}
