package textos

type Buffer interface {

	Imprimir() string

	Ancho() int
	Alto() int

	CambiarTamanio(ancho, alto int) error

	Escribir(buffer Buffer, tipo TipoAlinear) error 
	EscribirFixAlto(buffer Buffer, alto int, tipo TipoAlinear) error 
	EscribirFixAncho(buffer Buffer, ancho int, tipo TipoAlinear) error 
	EscribirFixPosicion(buffer Buffer, ancho, alto int) error 

	Clonar() Buffer

	Reiniciar()
}
