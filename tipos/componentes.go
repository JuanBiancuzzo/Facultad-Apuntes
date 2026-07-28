package tipos

import (
	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"
)

type ComponenteId uint

const (
	CI_NOTIFICACIONES ComponenteId = iota
	CI_COMMAND_PALETTE 
	CI_BUSQUEDA 
	CI_HARPOON
)

type Componente interface {
	Init() tea.Cmd

	Update(msg tea.Msg) tea.Cmd

	View(info InfoBuffer) (*lip.Layer, bool)

	Close()
}
