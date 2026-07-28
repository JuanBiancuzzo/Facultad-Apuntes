package componentes

import (
	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	cc "editor-sqlite/compartido"
	t "editor-sqlite/tipos"
)

/*
	Usar la estructura Trie como busqueda rapida de comandos posibles, o 
		algun algoritmo de fuzzy find
*/

type CommandPalette struct {
	id t.ComponenteId
	estado *cc.Estado

	keybindings t.MaquinaEstados
}

func newCommandPalette(id t.ComponenteId, estado *cc.Estado) *CommandPalette {
	return &CommandPalette{
		id: id,
		estado: estado,
		keybindings: nil,
	}
}

func (c *CommandPalette) Init() tea.Cmd {
	return nil
}

func (c *CommandPalette) Update(msg tea.Msg) tea.Cmd {
	return nil
}

func (c *CommandPalette) View (info t.InfoBuffer) (*lip.Layer, bool) {
	return nil, false
}

func (c *CommandPalette) Close() {}
