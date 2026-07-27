package submodelos

import (
	"fmt"
	"time"

	tea "charm.land/bubbletea/v2"

	log "editor-sqlite/logger"
	t "editor-sqlite/modelos/textos"
)

const TAM_TITULO int = 110
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

	titulo *t.Texto
	skipear int
}

func NewModeloPortada(modelo Submodelo) Submodelo {
	titulo := t.NewTexto(fmt.Sprintf("\n\n%s", TITULO)/* , buffer.Ancho */) 

	return &modeloPortada {
		modeloInicio: modelo,

		titulo: titulo,
		skipear: 0,
	}
}

type AvanzarPortadaMsg struct {}

func NewAvanzarPortadaCmd(tiempo time.Duration) tea.Cmd {
	return tea.Tick(tiempo, func(_ time.Time) tea.Msg {
		return AvanzarPortadaMsg{}
	})
}

func (m *modeloPortada) Init() tea.Cmd {
	cmds := []tea.Cmd{  
		NewAvanzarPortadaCmd(3 * time.Second),
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

	switch msg := msg.(type) {
	case AvanzarPortadaMsg:
		m.skipear++
		cmds = append(cmds, NewAvanzarPortadaCmd(20 * time.Millisecond))

	default: 
		if m.modeloInicio != nil {
			var cmd tea.Cmd
			m.modeloInicio, cmd = m.modeloInicio.Update(msg)
			cmds = append(cmds, cmd)
		}
	}

	var submodelo Submodelo = m
	if m.skipear > m.titulo.Alto() {
		submodelo = m.modeloInicio
	}

	return submodelo, tea.Batch(cmds...)
}

func (m *modeloPortada) View(buffer t.Buffer) { 
	buffer.EscribirFixAlto(m.titulo, m.skipear, t.TA_IZQUIERDA)
	if m.modeloInicio == nil {
		return 
	}

	
	if subbuffer, err := t.NewBufferScrollInfinito(buffer.Ancho()); err != nil {
		log.Errorf("Error al crear subbufer en portada, con error: %w", err)

	} else {
		m.modeloInicio.View(subbuffer)
		buffer.EscribirFixAlto(
			subbuffer, 
			m.titulo.Alto() - m.skipear,
			t.TA_IZQUIERDA,
		)
	}
}

func (m *modeloPortada) Close() {
	m.modeloInicio.Close()
	m.modeloInicio = nil
}
