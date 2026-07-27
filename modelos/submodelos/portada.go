package submodelos

import (
	"fmt"
	"time"
	"strings"

	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	t "editor-sqlite/modelos/textos"
)

const TITULO string = `
███╗   ███╗██╗███╗   ██╗██████╗     ███████╗██╗██████╗ ███████╗     ██████╗ ██╗   ██╗███████╗███████╗████████╗
████╗ ████║██║████╗  ██║██╔══██╗    ██╔════╝██║██╔══██╗██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔════╝╚══██╔══╝
██╔████╔██║██║██╔██╗ ██║██║  ██║    ███████╗██║██║  ██║█████╗      ██║   ██║██║   ██║█████╗  ███████╗   ██║   
██║╚██╔╝██║██║██║╚██╗██║██║  ██║    ╚════██║██║██║  ██║██╔══╝      ██║▄▄ ██║██║   ██║██╔══╝  ╚════██║   ██║   
██║ ╚═╝ ██║██║██║ ╚████║██████╔╝    ███████║██║██████╔╝███████╗    ╚██████╔╝╚██████╔╝███████╗███████║   ██║   
╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝     ╚══════╝╚═╝╚═════╝ ╚══════╝     ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝   ╚═╝   
`

type modeloPortada struct {
	modeloInicio Submodelo

	titulo     string
	altoTitulo int
	skipear    int
}

func NewModeloPortada(modelo Submodelo) Submodelo {
	titulo := fmt.Sprintf("\n\n%s\n\n", TITULO)
	alto := lip.Height(lip.NewStyle().Render(titulo))

	return &modeloPortada {
		modeloInicio: modelo,

		titulo: titulo,
		altoTitulo: alto,
		skipear: 0,
	}
}

type AvanzarPortadaMsg struct {}

func NewAvanzarPortadaCmd(tiempo time.Duration) tea.Cmd {
	return func() tea.Msg {
		<- time.After(tiempo)
		return AvanzarPortadaMsg{}
	}
}

func (m *modeloPortada) Init() tea.Cmd {
	cmds := []tea.Cmd{  
		NewAvanzarPortadaCmd(2 * time.Second),
	}
	if (m.modeloInicio != nil) {
		cmds = append(cmds, m.modeloInicio.Init())
	}
	return tea.Batch(cmds...)
}

func (m *modeloPortada) Nombre() string {
	if m.modeloInicio == nil {
		return "Portada"
	}
	return m.modeloInicio.Nombre()
}

func (m *modeloPortada) Update(msg tea.Msg) (Submodelo, tea.Cmd) {
	cmds := []tea.Cmd{}

	switch /* valor := */ msg.(type) {
	case AvanzarPortadaMsg:
		m.skipear++
		cmds = append(cmds, NewAvanzarPortadaCmd(100 * time.Millisecond))
		msg = nil
	}

	if m.modeloInicio != nil {
		var cmd tea.Cmd
		m.modeloInicio, cmd = m.modeloInicio.Update(msg)
		cmds = append(cmds, cmd)
	}

	var submodelo Submodelo = m
	if m.skipear > m.altoTitulo {
		submodelo = m.modeloInicio
	}

	return submodelo, tea.Batch(cmds...)
}

func (m *modeloPortada) View(info t.InfoBuffer) string { 
	estilo := lip.NewStyle().
		Width(info.Ancho).
		Align(lip.Center)
	titulo := estilo.Render(m.titulo)
	titulo = strings.Join(strings.Split(titulo, "\n")[m.skipear:], "\n")

	submodeloBuffer := ""
	if m.modeloInicio != nil {
		submodeloInfo := t.NewInfoBuffer(info.Ancho, info.Alto - m.altoTitulo + m.skipear)
		submodeloBuffer = m.modeloInicio.View(*submodeloInfo)
	}

	return info.RestringirTamanio( 
		lip.JoinVertical(lip.Left, titulo, submodeloBuffer),
	)
}

func (m *modeloPortada) Close() {
	m.modeloInicio.Close()
	m.modeloInicio = nil
}
