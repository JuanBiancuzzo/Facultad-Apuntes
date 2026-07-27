package textos

import (
	"unicode/utf8"
	"strings"

	lip "charm.land/lipgloss/v2"
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
}

func NewTexto(texto string) *Texto {
	return &Texto {
		lineas: strings.Split(texto, "\n"),
	}
}

func (t *Texto) Imprimir(estilo lip.Style) string {
	return estilo.Render(strings.Join(t.lineas, "\n"))
}

func (t *Texto) Reiniciar() {
	t.lineas = []string{}
}

func LargoRunas(texto string) int {
	return utf8.RuneCountInString(texto)
}
