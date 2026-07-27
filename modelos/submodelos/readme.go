package submodelos

import (
	tea "charm.land/bubbletea/v2"

	log "editor-sqlite/logger"
	r "editor-sqlite/repositorio"
	c "editor-sqlite/compartido"

	t "editor-sqlite/modelos/textos"
)

type modeloReadme struct {
	request *c.Estado

	texto *t.Texto
	anchoMaximo int
}

func NewModeloReadme(estado *c.Estado, anchoMaximo int) Submodelo {
	texto := "Hola tanto tiempo\nComo va eso?"

	return &modeloReadme {
		request: estado,

		texto: t.NewTextoWrap(texto, anchoMaximo, t.TA_IZQUIERDA),
		anchoMaximo: anchoMaximo,
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
	switch valor := msg.(type) {
    case tea.WindowSizeMsg:
		ancho := min(valor.Width, m.anchoMaximo)
		alto := valor.Height

		if err := m.texto.CambiarTamanio(ancho, alto); err != nil {
			log.Warnf("El cambiar el tamanio del texto en el readme, tuvo el error: %w", err)
		}
	}

	return m, nil
}

func (m *modeloReadme) View(buffer t.Buffer) { 
	buffer.Escribir(m.texto, t.TA_CENTRO)
}

func (m *modeloReadme) Close() {}
