// Package referencias: Se guarda todos las referencias posibles en mi obsidian
package referencias

import (
	"fmt"
	"strings"
	"time"
)

type TipoReferencia string

const (
	TR_REFERENCIAS         = "Referencias"
	TR_AUTORES_REFERENCIAS = "AutoresParaReferencias"

	TR_WEB         = "ReferenciasWebsite"
	TR_WIKIPEDIA   = "ReferenciasWikipedia"
	TR_YOUTUBE     = "ReferenciasYoutube"
	TR_DICCIONARIO = "ReferenciasDiccionarioOnline"

	TR_LIBRO     = "ReferenciasLibro"
	TR_CAPITULOS = "ReferenciasCapituloLibro"
	TR_PAPER     = "ReferenciasPaper"

	TR_CURSO_ONLINE = "ReferenciasCursoOnline"
	TR_TEMA         = "ReferenciasTemaCurso"

	TR_ERROR = "Error"
)

func ObtenerTipoReferencia(posibleTipo string) (TipoReferencia, error) {
	switch strings.ToLower(posibleTipo) {
	case "youtube":
		return TR_YOUTUBE, nil
	case "wikipedia", "wiki":
		return TR_WIKIPEDIA, nil
	case "website", "web":
		return TR_WEB, nil

	default:
		return TR_ERROR, fmt.Errorf("Todo: no esta registrado %s", posibleTipo)
	}
}

type DatoReferencia interface {
	ReferenciaYoutube | ReferenciaWikipedia | ReferenciaWebsite | ReferenciaDiccionario | ReferenciaLibro | ReferenciaCapitulo | ReferenciaPaper | ReferenciaCursoOnline | ReferenciaTema
}

func DefaultDato[DR DatoReferencia]() DR {
	var dr DR
	return dr
}

type Referencia struct {
	NumReferencia   int
	Tipo            TipoReferencia
	FechaRegistrada time.Time
	Dato            any
}

func NewReferencia[DR DatoReferencia](
	numReferencia int,
	tipo TipoReferencia,
	fecha time.Time,
	dato DR,
) *Referencia {
	return &Referencia{
		NumReferencia:   numReferencia,
		Tipo:            tipo,
		FechaRegistrada: fecha,
		Dato:            dato,
	}
}

func (r *Referencia) ToString() string {
	representacion := "No data"
	switch dato := r.Dato.(type) {
	case ReferenciaYoutube:
		representacion = dato.ToString()
	case ReferenciaWikipedia:
		representacion = dato.ToString()
	case ReferenciaWebsite:
		representacion = dato.ToString()
	}

	return fmt.Sprintf("[%d] %s - %s", r.NumReferencia, r.Tipo, representacion)
}
