package componentes

import (
	tea "charm.land/bubbletea/v2"

	// log "editor-sqlite/logger"
	k "editor-sqlite/keybinds"
	kk "editor-sqlite/keybinds/keys"
	ke "editor-sqlite/keybinds/editor"

	t "editor-sqlite/modelos/textos"
	s "editor-sqlite/modelos/submodelos"
)

/*
	Usar la estructura Trie como busqueda rapida de comandos posibles 
*/

type CommandPalette struct {
	id ComponenteId

	keybindings k.MaquinaEstados
}

func (c *CommandPalette)Init() tea.Cmd {
	return nil
}

func (c *CommandPalette) Update()(msg tea.Msg) tea.Cmd {
	return nil
}

func (c *CommandPalette) Info t.InfoBuffer) (*lip.Layer, bool) {
	return nil, false
}

func (c *CommandPalette) Close() {}
