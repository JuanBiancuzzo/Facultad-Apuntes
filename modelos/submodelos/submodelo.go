package submodelos

import (
	tea "charm.land/bubbletea/v2"

	t "editor-sqlite/modelos/textos"
)

type Submodelo interface {
	Init() tea.Cmd

	Nombre() string

	Update(msg tea.Msg) (Submodelo, tea.Cmd)

	View(info t.InfoBuffer) string

	Close()
}
