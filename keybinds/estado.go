package keybinds

type Estado uint

const (
	NORMAL Estado = iota
	INSERTAR
	REEMPLAZAR
	VISUAL
	VISUAL_BLOCK
	VISUAL_LINE

	MAX_ESTADOS
)

func (e Estado) String() string {
	switch e {
	case NORMAL: return "Normal"
	case INSERTAR: return "Insertar"
	case REEMPLAZAR: return "Reemplazar"
	case VISUAL: return "Visual"
	case VISUAL_BLOCK: return "Visual Block"
	case VISUAL_LINE: return "Visual Line"
	default: return "[ERROR]"
	}
}
