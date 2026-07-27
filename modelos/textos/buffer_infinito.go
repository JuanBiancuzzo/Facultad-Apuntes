package textos

import (
	"fmt"
	"strings"
)

type bufferInfinito struct {
	ancho int
	alto  int
	wrap  TipoWrap

	// Convencion: Primer elemento son filas, y el segundo columnas
	pantalla [][]rune
}

func NewBufferScrollInfinito(ancho int) (Buffer, error) {
	return newBufferScrollInfinito(ancho, TU_DESCARTAR)
}

func NewBufferScrollInfinitoWrap(ancho int) (Buffer, error) {
	return newBufferScrollInfinito(ancho, TU_WRAP)
}

func newBufferScrollInfinito(ancho int, wrap TipoWrap) (Buffer, error) {
	if ancho <= 0 {
		return nil, fmt.Errorf("El tamaño del buffer es invalido, con %d", ancho)
	}

	return &bufferInfinito {
		ancho: ancho,
		alto: 0,
		pantalla: [][]rune{},
		wrap: wrap,
	}, nil
}

func (b *bufferInfinito) Imprimir() string {
	lineas := make([]string, b.alto)
	for i := range b.alto {
		lineas[i] = string(b.pantalla[i])
	}
	return strings.Join(lineas, "\n")
}

func (b *bufferInfinito) Ancho() int {
	return b.ancho
}

func (b *bufferInfinito) Alto() int {
	return b.alto
}

func (b *bufferInfinito) CambiarTamanio(ancho, _ int) error {
	if ancho <= 0 {
		return fmt.Errorf("El tamaño del buffer es invalido, con %d", ancho)
	}

	switch b.wrap {
	case TU_WRAP: 
	case TU_DESCARTAR: 
	}

	b.ancho = ancho
	b.alto = len(b.pantalla)
	return nil
}

func (b* bufferInfinito) Escribir(buffer Buffer, tipo TipoAlinear) error {
	return nil
}

func (b* bufferInfinito) EscribirFixAlto(buffer Buffer, alto int, tipo TipoAlinear) error  {
	return nil
}

func (b* bufferInfinito) EscribirFixAncho(buffer Buffer, ancho int, tipo TipoAlinear) error  {
	return nil
}

func (b* bufferInfinito) EscribirFixPosicion(buffer Buffer, ancho, alto int) error {
	return nil
}

func (b *bufferInfinito) Clonar() Buffer {
	return &bufferInfinito {
		ancho: b.ancho,
		alto: b.alto,
		pantalla: b.pantalla,
	} 
}

func (b *bufferInfinito) Reiniciar() {
	// ver si conviene borrar todo, o tener una forma de reutilizarla
	b.pantalla = [][]rune{} 
	b.alto = 0
}
