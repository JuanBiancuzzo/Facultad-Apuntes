package componentes

import (
	tea "charm.land/bubbletea/v2"

	c "editor-sqlite/compartido"
	t "editor-sqlite/modelos/textos"
)

type ComponenteId uint

const (
	CI_NOTIFICACIONES ComponenteId = iota
	CI_COMMAND_PALLETE 
	CI_BUSQUEDA 
	CI_HARPOON
)

type Componente interface {
	Init() tea.Cmd

	Update(msg tea.Msg) tea.Cmd

	View(info t.InfoBuffer) (string, bool)

	Close()
}

func DefaultComponentes(_ *c.Estado) map[ComponenteId]Componente {
	return map[ComponenteId]Componente{
		CI_NOTIFICACIONES: newNotificaciones(),
	}
}
