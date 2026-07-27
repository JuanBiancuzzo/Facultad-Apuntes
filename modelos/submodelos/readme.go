package submodelos

import (
	tea "charm.land/bubbletea/v2"

	r "editor-sqlite/repositorio"
	c "editor-sqlite/compartido"

	t "editor-sqlite/modelos/textos"
)

type modeloReadme struct {
	request *c.Estado

	texto *t.Texto
}

func NewModeloReadme(estado *c.Estado) Submodelo {
	return &modeloReadme {
		request: estado,
		texto: t.NewTexto("Hola tanto tiempo\nComo va eso?"),
	}
}

func (m *modeloReadme) Init() tea.Cmd {
	return m.request.Repo(func(repo r.Repositorio) tea.Msg {
		// Aca podriamos hacer la request a la base de datos
		return nil
	})
}

func (m *modeloReadme) Nombre() string {
	return "Readme"
}

func (m *modeloReadme) Update(msg tea.Msg) (Submodelo, tea.Cmd) {
	switch /* valor := */ msg.(type) {}
	return m, nil
}

func (m *modeloReadme) View(buffer t.Buffer) { 
	buffer.Escribir(m.texto, t.TA_CENTRO)
}

func (m *modeloReadme) Close() {}
