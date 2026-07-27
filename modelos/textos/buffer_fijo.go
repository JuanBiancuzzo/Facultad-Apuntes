package textos

import (
	"fmt"
	"strings"
)

type bufferFijo struct {
	ancho int
	alto  int
	wrap TipoWrap

	// Convencion: Primer elemento son filas, y el segundo columnas,
	// 		tambien vamos a tener el cuidado de usar la RUNA_FINAL para
	// 		delimitar el final de la linea, y en una fila, desde la primera
	//  	hasta el final de la fila deben ser RUNA_FINAL
	pantalla [][]rune
}

func NewBuffer(ancho, alto int) (Buffer, error) {
	return newBuffer(ancho, alto, TU_DESCARTAR)
}

func NewBufferWrap(ancho, alto int) (Buffer, error) {
	return newBuffer(ancho, alto, TU_WRAP)
}

func newBuffer(ancho, alto int, wrap TipoWrap) (Buffer, error) {
	if ancho <= 0 || alto <= 0 {
		return nil, fmt.Errorf("El tamaño del buffer es invalido, con %d y %d", ancho, alto)
	}
	return &bufferFijo {
		ancho: ancho,
		alto: alto,
		pantalla: crearMatrizVacia(alto, ancho),
		wrap: wrap,
	}, nil
}

func (b *bufferFijo) Imprimir() string {
	lineas := make([]string, b.alto)
	for i := range b.alto {
		lineas[i] = string(b.pantalla[i])
	}
	return strings.Join(lineas, "\n")
}

func (b *bufferFijo) Ancho() int {
	return b.ancho
}

func (b *bufferFijo) Alto() int {
	return b.alto
}

func (b *bufferFijo) CambiarTamanio(ancho, alto int) error {
	if ancho <= 0 || alto <= 0 {
		return fmt.Errorf("El tamaño del buffer es invalido, con %d y %d", ancho, alto)
	}

	if b.ancho == ancho && b.alto == alto {
		return nil
	}

	switch b.wrap {
	case TU_WRAP: 
		nuevaPantalla := crearMatrizVacia(alto, ancho)
		// recorrer la nueva pantalla y obtenerlo de la pantalla vieja

		b.pantalla = nuevaPantalla

	case TU_DESCARTAR: 
		if b.alto < alto {
			anchoMenor := min(b.ancho, ancho)
			agregado := crearMatrizVacia(alto - b.ancho, anchoMenor)
			b.pantalla = append(b.pantalla, agregado...)

		} else if b.alto > alto {
			b.pantalla = b.pantalla[:alto]
		}


		// usamos alto menor para hacer el menor trabajo posible
		altoMenor := min(b.alto, alto)
		if b.ancho < ancho {
			agregado := crearArrayVacio(ancho - b.ancho)
			for i := range altoMenor {
				b.pantalla[i] = append(b.pantalla[i], agregado...)
			}

		} else if b.ancho > altoMenor {
			for i := range b.alto {
				b.pantalla[i] = b.pantalla[i][:ancho]
			}
		}
	}

	b.ancho = ancho
	b.alto = alto
	return nil
}

func (b* bufferFijo) Escribir(buffer Buffer, tipo TipoAlinear) error {
	return nil
}

func (b* bufferFijo) EscribirFixAlto(buffer Buffer, alto int, tipo TipoAlinear) error  {
	return nil
}

func (b* bufferFijo) EscribirFixAncho(buffer Buffer, ancho int, tipo TipoAlinear) error  {
	return nil
}

func (b* bufferFijo) EscribirFixPosicion(buffer Buffer, ancho, alto int) error {
	return nil
}

func (b *bufferFijo) Clonar() Buffer {
	return &bufferFijo {
		ancho: b.ancho,
		alto: b.alto,
		pantalla: b.pantalla,
		wrap: b.wrap,
	}
}

func (b *bufferFijo) Reiniciar() {
	b.pantalla = crearMatrizVacia(b.alto, b.ancho)
}
