package tipos

import (
	tea "charm.land/bubbletea/v2"
)

type Mod int 

const (
	M_NADA = Mod(0)
	M_SHIFT = Mod(tea.ModShift)
	M_ALT = Mod(tea.ModAlt)
	M_CTRL = Mod(tea.ModCtrl) 
	M_SUPER = Mod(tea.ModSuper)
)

func NewModFromTea(mod tea.KeyMod) Mod {
	// cambiamos el bit de tea.ModHyper a tea.ModSuper
	// cambiamos el bit de tea.ModMeta a tea.ModSuper
	if mod & tea.ModHyper != 0 || mod & tea.ModMeta != 0 {
		mod = mod | tea.ModSuper
	}
	return Mod(mod) 
}

func (m Mod) String() string {
	switch m {
	case M_SHIFT: return "shift+"
	case M_ALT: return "alt+"
	case M_CTRL: return "ctrl+"
	case M_SUPER: return "win+"
	default: return ""
	}
}
