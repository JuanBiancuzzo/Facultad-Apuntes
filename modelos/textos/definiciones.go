package textos

const RUNA_VACIA = rune(' ')
const RUNA_FINAL = rune(0)

type TipoWrap uint 

const (
	_TU_NULO = 0
	TU_WRAP TipoWrap = iota
	TU_DESCARTAR
)

type TipoAlinear uint 

const (
	_TA_NULO = 0
	TA_IZQUIERDA TipoAlinear = 1 << iota
	TA_CENTRO 
	TA_DERECHA
	_TA_MASCARA_DIRECCION = TA_IZQUIERDA | TA_CENTRO | TA_DERECHA

	TA_ARRIBA TipoAlinear = 1 << iota + 3
	TA_MITAD 
	TA_ABAJO
	_TA_MASCARA_ALTURA = TA_ARRIBA | TA_MITAD | TA_ABAJO
)

func crearMatrizVacia(alto, ancho int) [][]rune {
	resultado := make([][]rune, alto)
	for i := range alto {
		resultado[i] = crearArrayVacio(ancho)
	}
	return resultado
}

func crearArrayVacio(largo int) []rune {
	resultado := make([]rune, largo)
	for i := range largo {
		resultado[i] = RUNA_FINAL
	}
	return resultado
}
