package modelos

import (
	"fmt"

	tea "charm.land/bubbletea/v2"

	r "editor-sqlite/repositorio"
)

type modelo struct {
	repo r.Repositorio	
	procesoEmbeddings *ProcesoEmbbeding
	ancho int
	alto int
}

func NewModelo(repositorio r.Repositorio) (tea.Model, error) {
	embeddings, err := NewProcesoEmbbeding()
	if err != nil {
		return nil, fmt.Errorf("Ocurrio un error al obtener proceso de embbeddings: %v\n", err)
	}

	return &modelo{ 
		repo: repositorio,
		procesoEmbeddings: embeddings,
		ancho: -1,
		alto: -1,
	}, nil
}

func (m *modelo) Init() tea.Cmd {
	return nil
}

func (m *modelo) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	cmds := []tea.Cmd{}

	switch msg := msg.(type) {
    case tea.WindowSizeMsg:
		m.ancho = msg.Width
		m.alto = msg.Height

    case tea.KeyPressMsg:
        switch msg.String() {
        case "ctrl+c", "q":
			m.Close()
            return m, tea.Batch(append(cmds, tea.Quit)...)
		}
	}

	return m, tea.Batch(cmds...)
}

func (m *modelo) View() (view tea.View) {
	view.AltScreen = true
	view.WindowTitle = "Mind Side Quest"


	view.SetContent("")
	return view
}

func (m *modelo) Close() {
	m.repo.Close()
	m.procesoEmbeddings.Close()
}
