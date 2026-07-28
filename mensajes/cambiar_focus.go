package mensajes

import (
	tea "charm.land/bubbletea/v2"
)

type CambiarFocoMsg struct {
	FocusVentana bool
}

func NewFocusBackgroundCmd() tea.Cmd {
	return func() tea.Msg {
		return CambiarFocoMsg {
			FocusVentana: true,
		}
	}
}

func NewUnfocusBackgroundCmd() tea.Cmd {
	return func() tea.Msg {
		return CambiarFocoMsg {
			FocusVentana: false,
		}
	}
}
