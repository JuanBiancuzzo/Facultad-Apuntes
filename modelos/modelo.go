package modelos

import (
	"slices"

	tea "charm.land/bubbletea/v2"

	log "editor-sqlite/logger"
	k "editor-sqlite/keybinds/keys"
	cc "editor-sqlite/compartido"

	t "editor-sqlite/modelos/textos"
	v "editor-sqlite/modelos/ventanas"
	s "editor-sqlite/modelos/submodelos"
	c "editor-sqlite/modelos/componentes"
	mm "editor-sqlite/modelos/mensajes"
)

type modelo struct {
	// Manejo genearl del sistema
	// - undo-tree
	componentes map[c.ComponenteId]c.Componente
	ventanas []*v.Ventana
	ventanaActiva uint

	// Visualizacion 
	background t.Buffer
	foreground t.Buffer

	// Datos particulares para modificar el estado
	focusVentana bool
	contadorVentanas uint32
}

func NewModelo(estado *cc.Estado) (tea.Model, error) {
	var contadorVentanas uint32 = 0
	ventana := v.NewVentanaDefault(contadorVentanas, s.NewModeloPortada(
		s.NewModeloReadme(estado),
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

		var err error
		if m.background != nil {
			err = m.background.CambiarTamanio(ancho, alto, t.TU_DESCARTAR)

		} else {
			m.background, err = t.NewBufferScrollInfinito(ancho)
		}
		if err != nil {
			log.Errorf("Al cambiar tamaño de background, ocurrio el error: %w", err)
		}

		if m.foreground != nil {
			err = m.foreground.CambiarTamanio(ancho, alto, t.TU_DESCARTAR)

		} else {
			m.foreground, err = t.NewBuffer(ancho, alto)
		}
		if err != nil {
			log.Errorf("Al cambiar tamaño de foreground, ocurrio el error: %w", err)
		}

    case tea.KeyPressMsg:
		msg = k.NewKeyFromTea(valor.Key())

	case mm.CambiarFocoMsg:
		m.focusVentana = valor.FocusVentana
		msg = nil

	case v.CerrandoVentanaMsg:
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

	m.foreground.Reiniciar()
	for _, componente := range m.componentes {
		componente.View(m.foreground)
	}

	if m.focusVentana && len(m.ventanas) > 0 {
		m.background.Reiniciar()
		m.ventanas[m.ventanaActiva].View(m.background)
	}

	pantallaCompleta := m.background.Clonar()
	pantallaCompleta.Escribir(m.foreground, t.TA_ARRIBA | t.TA_IZQUIERDA)
	view.SetContent(pantallaCompleta.Imprimir())
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
