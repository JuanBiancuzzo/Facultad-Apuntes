package tipos

import (
	tea "charm.land/bubbletea/v2"
)

type Submodelo interface {
	Init() tea.Cmd

	Nombre() string

	Update(msg tea.Msg) (Submodelo, tea.Cmd)

	View(info InfoBuffer) string

	Close()
}
