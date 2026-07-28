package tipos

type Codigo rune

const (
	// Letras
	C_A = Codigo('a')
	C_B = Codigo('b')
	C_C = Codigo('c')
	C_D = Codigo('d')
	C_E = Codigo('e')
	C_F = Codigo('f')
	C_G = Codigo('g')
	C_H = Codigo('h')
	C_I = Codigo('i')
	C_J = Codigo('j')
	C_K = Codigo('k')
	C_L = Codigo('l')
	C_M = Codigo('m')
	C_N = Codigo('n')
	C_N_TILDE = Codigo('ñ')
	C_O = Codigo('o')
	C_P = Codigo('p')
	C_Q = Codigo('q')
	C_R = Codigo('r')
	C_S = Codigo('s')
	C_T = Codigo('t')
	C_U = Codigo('u')
	C_V = Codigo('v')
	C_W = Codigo('w')
	C_X = Codigo('x')
	C_Y = Codigo('y')
	C_Z = Codigo('z')

	// Numeros
	C_0 = Codigo('0')
	C_1 = Codigo('1')
	C_2 = Codigo('2')
	C_3 = Codigo('3')
	C_4 = Codigo('4')
	C_5 = Codigo('5')
	C_6 = Codigo('6')
	C_7 = Codigo('7')
	C_8 = Codigo('8')
	C_9 = Codigo('9')

	// Simbolos
	C_ESC         = Codigo('\x1b')
	C_ESPACIO     = Codigo(' ')
	C_BORRAR      = Codigo('\x7f')
	C_TAB         = Codigo('\x09')
	C_NUEVA_LINEA = Codigo('\x0d')
	C_BARRA       = Codigo('/')
	C_BARRA_INV   = Codigo('\\')
	C_PIPE        = Codigo('|')

	C_PUNTO       = Codigo('.')
	C_COMA        = Codigo(',')
	C_DOBLE_PUNTO = Codigo(':')
	C_PUNTO_COMA  = Codigo(';')

	C_IGUAL    = Codigo('=')
	C_MAS      = Codigo('+')
	C_MENOS    = Codigo('-')
	C_MULTI    = Codigo('*')
	C_DIVISION = Codigo('/')
	C_MENOR    = Codigo('<')
	C_MAYOR    = Codigo('>')

)

func (c Codigo) String() string {
	switch c {
	case C_ESPACIO: return "space"	
	case C_TAB: return "tab"
	case C_NUEVA_LINEA: return "enter"
	case C_ESC: return "esc"

	default: return string(c)
	}
}
