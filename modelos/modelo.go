package modelos

import (
	"slices"

	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	t "editor-sqlite/tipos"
	mm "editor-sqlite/mensajes"
	cc "editor-sqlite/compartido"

	v "editor-sqlite/modelos/ventanas"
	s "editor-sqlite/modelos/submodelos"
	c "editor-sqlite/modelos/componentes"
)

const MAX_ANCHO_SUBMODULO int = 90

type modelo struct {
	// Manejo genearl del sistema
	// - undo-tree
	// Hacer un sistema de request del componente para mandar mensajes
	//   esto se puede hacer con un stack para ir pidiendo ese request 
	//   y mantener ese requisito hasta que digan que ya estan
	componentes map[t.ComponenteId]t.Componente
	ventanas []*v.Ventana
	ventanaActiva uint

	// Visualizacion 
	background *t.InfoBuffer
	foreground *t.InfoBuffer

	// Datos particulares para modificar el estado
	focusVentana bool
	contadorVentanas uint32
	bufferVentana string
	renderTemporal bool
}

func NewModelo(estado *cc.Estado) (tea.Model, error) {
	var contadorVentanas uint32 = 0
	ventana := v.NewVentanaDefault(contadorVentanas, s.NewModeloPortada(
		s.NewModeloReadme(estado, MAX_ANCHO_SUBMODULO),
	))
	contadorVentanas++

	return &modelo{ 
		componentes: c.DefaultComponentes(estado),
		ventanas: []*v.Ventana{ ventana },
		ventanaActiva: 0,

		background: nil,
		foreground: nil,

		focusVentana: true,
		contadorVentanas: contadorVentanas,
		bufferVentana: "",
		renderTemporal: false,
	}, nil
}

func (m *modelo) Init() tea.Cmd {
	cmds := []tea.Cmd{}

	for _, ventana := range m.ventanas {
		cmds = append(cmds, ventana.Init())
	}

	for _, componente := range m.componentes {
		cmds = append(cmds, componente.Init())
	}

	return tea.Batch(cmds...)
}

func (m *modelo) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	cmds := []tea.Cmd{}

	switch valor := msg.(type) {
    case tea.WindowSizeMsg:
		ancho := valor.Width
		alto := valor.Height

		if m.background == nil {
			m.background = t.NewInfoBuffer(ancho, alto)
		}
		m.background.ActualizarTamanio(ancho, alto)

		if m.foreground == nil {
			m.foreground = t.NewInfoBuffer(ancho, alto)
		}
		m.foreground.ActualizarTamanio(ancho, alto)

		m.renderTemporal = true

    case tea.KeyPressMsg:
		msg = t.NewKeyFromTea(valor.Key())

	case mm.CambiarFocoMsg:
		m.focusVentana = valor.FocusVentana
		msg = nil

	case mm.CerrandoVentanaMsg:
		// eliminar ventana con id
		for i, ventana := range m.ventanas {
			if ventana.Id == valor.Id {
				ventana.Close()
				m.ventanas = slices.Delete(m.ventanas, i, i + 1)
				break
			}
		}

		// si no hay mas vetanas, se cierra el programa
		if len(m.ventanas) == 0 {
			m.Close()
			return m, tea.Batch(append(cmds, tea.Quit)...)
		}
	}

	if msg == nil {
		return m, tea.Batch(cmds...)
	}

	var cmd tea.Cmd
	for _, componente := range m.componentes {
		cmd = componente.Update(msg)
		cmds = append(cmds, cmd)
	}

	if m.focusVentana {
		cmd = m.ventanas[m.ventanaActiva].Update(msg)
		cmds = append(cmds, cmd)
	}

	return m, tea.Batch(cmds...)
}

func (m *modelo) View() (view tea.View) {
	view.AltScreen = true
	view.WindowTitle = "Mind Side Quest"

	if m.background == nil || m.foreground == nil {
		view.SetContent("")
		return view
	}

	capas := make([]*lip.Layer, 0, len(m.componentes) + 1)

	zIndex := 1
	for _, componente := range m.componentes {
		if capa, ok := componente.View(*m.foreground); ok {
			capas = append(capas, capa.Z(zIndex))
		}
	}

	if (m.renderTemporal || m.focusVentana) && len(m.ventanas) > 0 {
		m.bufferVentana = m.ventanas[m.ventanaActiva].View(*m.background)
		m.renderTemporal = false
	}

	capa := lip.NewLayer(m.bufferVentana).Z(0)
	capas = append(capas, capa)

	compositor := lip.NewCompositor(capas...)
	view.SetContent(compositor.Render())
	return view
}

func (m *modelo) Close() {
	for _, ventana := range m.ventanas {
		ventana.Close()
	}

	for _, componente := range m.componentes {
		componente.Close()
	}
}
