package ventanas

import (
	tea "charm.land/bubbletea/v2"
)

type CerrandoVentanaMsg struct {
	Id uint32 
}

func NewCerrarVentanaCmd(id uint32) tea.Cmd {
	return func() tea.Msg {
		return CerrandoVentanaMsg{
			Id: id,
		}
	}
}
