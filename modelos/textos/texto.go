package textos

import (
	"fmt"
	"unicode/utf8"
	"strings"

	"editor-sqlite/assert"
)

// Esto podria mejorarse usando la estructura Rope y con hojas de GapBuffers, para
//   mejorar la edificiencia de la edicion de textos 
// Por ahora solo sera un string, pero vere la funcionalidad generica para que no
//   dependa de ser un string sino cualquier cosa debajo
// Tal vez hacer un LOD dependiendo de cuanto texto se necesite, utilizando un 
//   GapBuffer si es poco texto pero si ya es mucho, ver si puede ser una estructura
//   Rope con hojas de GapBuffers
type Texto struct {
	lineas []string

	alineamiento TipoAlinear
	wrap TipoWrap

	// Contando runas
	ancho int

	// contenido para TU_DESCARTAR
	anchoTexto int
}

func NewTexto(texto string, anchoTexto, anchoDisponible int, alineamiento TipoAlinear) *Texto {
	return &Texto {
		lineas: strings.Split(texto, "\n"),

		alineamiento: alineamiento & _TA_MASCARA_DIRECCION,
		wrap: TU_DESCARTAR,

		ancho: anchoDisponible,
		anchoTexto: anchoTexto,
	}
}

func NewTextoWrap(texto string, ancho int, alineamiento TipoAlinear) *Texto {
	return &Texto {
		lineas: strings.Split(texto, "\n"),

		alineamiento: alineamiento & _TA_MASCARA_DIRECCION,
		wrap: TU_WRAP,

		ancho: ancho,
	}
}

func (t *Texto) Imprimir() string {
	var lineas []string
	switch t.wrap {
	case TU_DESCARTAR:
		lineas := make([]string, t.Alto())
		for i, linea := range t.lineas {
			largoLinea := LargoRunas(linea)
			if largoLinea > t.ancho {
				lineas[i] = linea[:t.ancho]
				continue
			}

			cantidadRestante := t.ancho - largoLinea
			lineas[i] = fmt.Sprintf("%s%s",
				extraLinea(t.alineamiento, cantidadRestante),
				linea,
			)
		}

	case TU_WRAP:
		lineas := make([]string, 0, t.Alto())
		for _, linea := range t.lineas {
			largoLinea := LargoRunas(linea)
			var i int

			for i = 0; i + t.ancho < largoLinea; i += t.ancho {
				lineas = append(lineas, linea[i:i+t.ancho])
			}

			cantidadRestante := t.ancho - largoLinea % t.ancho
			lineas = append(lineas, fmt.Sprintf("%s%s",
				extraLinea(t.alineamiento, cantidadRestante),
				linea[i],
			))

		}
	}
	
	return strings.Join(lineas, "\n")
}

func (t *Texto) Ancho() int {
	return t.ancho
}

func (t *Texto) Alto() int {
	if t.wrap == TU_DESCARTAR {
		return len(t.lineas)
	}

	// aka TU_WRAP
	alto := 0
	for _, linea := range t.lineas {
		largoLinea := LargoRunas(linea)
		alto += largoLinea / t.ancho
		if largoLinea % t.ancho > 0 {
			alto++
		}
	}
	return alto
}

func (t *Texto) CambiarAncho(ancho int) error {
	t.ancho = ancho
	return nil
}

func (t *Texto) CambiarTamanio(ancho, _ int) error {
	return t.CambiarAncho(ancho)
}

func (t *Texto) Escribir(buffer Buffer, tipo TipoAlinear) error  {
	return nil
}

func (t *Texto) EscribirFixAlto(buffer Buffer, alto int, tipo TipoAlinear) error  {
	return nil
}

func (t *Texto) EscribirFixAncho(buffer Buffer, ancho int, tipo TipoAlinear) error  {
	return nil
}

func (t *Texto) EscribirFixPosicion(buffer Buffer, ancho, alto int) error  {
	return nil
}

func (t *Texto) Clonar() Buffer {
	return &Texto {
		lineas: t.lineas,

		alineamiento: t.alineamiento, 
		wrap: t.wrap,

		ancho: t.ancho,
		anchoTexto: t.ancho,
	}
}

func (t *Texto) Reiniciar() {
	t.lineas = []string{}
	t.anchoTexto = 0
}

func LargoRunas(texto string) int {
	return utf8.RuneCountInString(texto)
}

func extraLinea(alineamiento TipoAlinear, extraLinea int) string {
	switch alineamiento {
	case TA_IZQUIERDA:
		return ""

	case TA_CENTRO:
		return strings.Repeat(string(RUNA_VACIA), extraLinea / 2)

	case TA_DERECHA:
		return strings.Repeat(string(RUNA_VACIA), extraLinea)

	default:
		assert.Unreachable("El tipo de alineamiento es ")
		return ""
	}
}
