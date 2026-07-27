package textos

import (
	lip "charm.land/lipgloss/v2"
)

type InfoBuffer struct {
	Ancho int
	Alto  int
}

func NewInfoBuffer(ancho, alto int) *InfoBuffer {
	return &InfoBuffer {
		Ancho: ancho,
		Alto: alto,
	}
}

func (ib *InfoBuffer) ActualizarTamanio(ancho, alto int) {
	ib.Ancho = ancho
	ib.Alto = alto
}

func (ib InfoBuffer) RestringirTamanio(texto string) string {
	return lip.NewStyle().
		MaxWidth(ib.Ancho).
		MaxHeight(ib.Alto).
		Render(texto)
} 
