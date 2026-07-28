package componentes

import (
	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	t "editor-sqlite/tipos"
)

/*
	Usar la estructura Trie como busqueda rapida de comandos posibles 
*/

type CommandPalette struct {
	id t.ComponenteId

	keybindings t.MaquinaEstados
}

func (c *CommandPalette) Init() tea.Cmd {
	return nil
}

func (c *CommandPalette) Update(msg tea.Msg) tea.Cmd {
	return nil
}

func (c *CommandPalette) Info (info t.InfoBuffer) (*lip.Layer, bool) {
	return nil, false
}

func (c *CommandPalette) Close() {}
