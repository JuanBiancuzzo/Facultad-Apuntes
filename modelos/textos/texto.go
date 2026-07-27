package textos

// !!!! HACER QUE CUMPLA LA INTERFAZ DE BUFFER !!!!

// Esto podria mejorarse usando la estructura Rope y con hojas de GapBuffers, para
//   mejorar la edificiencia de la edicion de textos 
// Por ahora solo sera un string, pero vere la funcionalidad generica para que no
//   dependa de ser un string sino cualquier cosa debajo
// Tal vez hacer un LOD dependiendo de cuanto texto se necesite, utilizando un 
//   GapBuffer si es poco texto pero si ya es mucho, ver si puede ser una estructura
//   Rope con hojas de GapBuffers
type Texto struct {
	texto string

	// Contando runas
	alto  int
	ancho int
}

// Aca puede ser que tengamos la idea de text-align, y text-justify, en relacion
//   a un ancho particular
func NewTexto(texto string) *Texto {
	return &Texto{
		texto: texto,
	}
}

func (t *Texto) Imprimir() string {
	return ""
}

func (t *Texto) Ancho() int {
	return t.ancho
}

func (t *Texto) Alto() int {
	return t.alto
}

func (t *Texto) CambiarTamanio(ancho, alto int, tipo TipoWrap) error {
	return nil
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
		texto: t.texto,
		ancho: t.ancho,
		alto: t.alto,
	}
}

func (t *Texto) Reiniciar() {}

