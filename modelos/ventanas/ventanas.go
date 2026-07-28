package ventanas

import (
	tea "charm.land/bubbletea/v2"

	t "editor-sqlite/tipos"
	a "editor-sqlite/acciones"
	m "editor-sqlite/mensajes"

	e "editor-sqlite/modelos/editor"
)

type Ventana struct {
	Id uint32

	submodelo t.Submodelo
	keybindings t.MaquinaEstados
}

func NewVentanaDefault(id uint32, submodelo t.Submodelo) *Ventana {
	return &Ventana {
		Id: id,

		submodelo: submodelo,
		keybindings: e.NewEditor(),
	}
}

func (v *Ventana) Init() tea.Cmd {
	if v.submodelo == nil {
		return nil
	}
	return v.submodelo.Init()
}

func (v *Ventana) Update(msg tea.Msg) tea.Cmd {
	cmds := []tea.Cmd{}

	switch valor := msg.(type) {

    case tea.WindowSizeMsg:
		// En el caso de tener multiples ventanas aca ajustariamos eso
		//   creando el mensaje para que sea un mensaje distinto para cada panel	
	
    case t.KeyPress:
		var ok bool
		if msg, ok = v.keybindings.Actualizar(valor); !ok {
			break
		}

		// Nos guardamos el mensaje hecho
		mensajeRecivido := msg

		switch keybind := msg.(type) {
		case a.AccionCambiarModo:
			v.keybindings.CambiarEstado(keybind.Estado)

		case a.AccionSalir:
			return tea.Batch(append(cmds, m.NewCerrarVentanaCmd(v.Id))...)

		case a.AccionMoverVentanta:
			// Los elementos de la ventana no tiene porque saber como se mueven
			msg = nil

		default:
			// Como no fue procesado el mensaje
			msg = mensajeRecivido
		}
	}

	if msg != nil && v.submodelo != nil {
		var cmd tea.Cmd
		v.submodelo, cmd = v.submodelo.Update(msg)
		cmds = append(cmds, cmd)
	}

	return tea.Batch(cmds...)
}

func (v *Ventana) View(info t.InfoBuffer) string { 
	if v.submodelo != nil {
		return v.submodelo.View(info)
	}
	return ""
}

func (v *Ventana) Close() {
	if v.submodelo != nil {
		v.submodelo.Close()
	}
}
