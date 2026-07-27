package componentes

import (
	"time"
	"slices"

	tea "charm.land/bubbletea/v2"

	m "editor-sqlite/modelos/componentes/mensajes"
	t "editor-sqlite/modelos/textos"
)

const MAX_NOTIFICACIONES = 100
const MIN_ANCHO = 20

type notificacion struct {
	id        uint64
	texto     string
	prioridad uint32
}

type Notificaciones struct {
	activas []notificacion

	ancho int
	idContador uint64
}

func newNotificaciones() *Notificaciones {
	return &Notificaciones {
		activas: []notificacion{},
	
		ancho: 1 << 16,
		idContador: 0,
	}
}

func (n *Notificaciones) Init() tea.Cmd {
	return m.NewNotificacionConDuracionCmd(
		"Oh hi", 1 << 10, 5 * time.Second,
	)
}

func (n *Notificaciones) Update(msg tea.Msg) tea.Cmd {
	cmds := []tea.Cmd{}

	switch valor := msg.(type) {
    case tea.WindowSizeMsg:
		// Utilizamos un cuarto de la pantalla
		n.ancho = valor.Width >> 2

	case m.NotificacionMsg:
		var idNotificacion uint64
		if valor.Duracion != nil {
			idNotificacion = n.idContador
			n.idContador++

			cmds = append(cmds, tea.Tick(*valor.Duracion, func(_ time.Time) tea.Msg {
				return m.EliminarNotificacionMsg { 
					Id: idNotificacion,
				}
			}))

		} else {
			idNotificacion = valor.Id
		}

		n.activas = append(n.activas, notificacion {
			id: idNotificacion,
			texto: valor.Texto,
			prioridad: valor.Prioridad,
		})
		
	case m.EliminarNotificacionMsg:
		cantidadActual := len(n.activas)
		for i := 0; i < cantidadActual; i++ {
			if n.activas[i].id == valor.Id {
				n.activas = slices.Delete(n.activas, i, i + 1)
				i--
			}
		}
	}

	return tea.Batch(cmds...)
}

func (n *Notificaciones) View(buffer t.Buffer) {
	if n.ancho < MIN_ANCHO || len(n.activas) == 0 {
		return
	}
}

func (n *Notificaciones) Close() {}
