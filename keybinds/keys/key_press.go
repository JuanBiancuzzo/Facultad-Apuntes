package keys

import (
	"fmt"

	tea "charm.land/bubbletea/v2"
)

type KeyPress struct {
	Codigo
	Mod
}

type KeyRemplazar KeyPress
type KeyRemplazarAvanzar KeyPress

func NewKey(key Codigo)      KeyPress { return newModKey(M_NADA, key) }
func NewShiftKey(key Codigo) KeyPress { return newModKey(M_SHIFT, key) }
func NewCtrlKey(key Codigo)  KeyPress { return newModKey(M_CTRL, key) }
func NewAltKey(key Codigo)   KeyPress { return newModKey(M_ALT, key) }
func NewSuperKey(key Codigo) KeyPress { return newModKey(M_SUPER, key) }

func newModKey(mod Mod, key Codigo) KeyPress {
	return KeyPress {
		Codigo: key,
		Mod: mod,
	}
}

func NewKeyFromTea(key tea.Key) KeyPress {
	return newModKey(NewModFromTea(key.Mod), Codigo(key.Code))
}

func (k KeyPress) String() string {
	return fmt.Sprintf("%s%s", k.Mod.String(), k.Codigo.String())
}

func (k KeyPress) Comparar(key KeyPress) bool {
	return k.Codigo == key.Codigo && k.Mod == key.Mod
}
