package componentes

import (
	"time"
	"slices"

	tea "charm.land/bubbletea/v2"
	// lip "charm.land/lipgloss/v2"

	m "editor-sqlite/modelos/componentes/mensajes"
	t "editor-sqlite/modelos/textos"
)

const MAX_NOTIFICACIONES = 100
const MIN_ANCHO = 20

type notificacion struct {
	id        uint64
	texto     *t.Texto
	prioridad uint32
}

type Notificaciones struct {
	activas []notificacion

	idContador uint64
	// hacer contexto y cancel para cerrar todas las notificaciones
	//  que se tengan pendientes
}

func newNotificaciones() *Notificaciones {
	return &Notificaciones {
		activas: []notificacion{},
	
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
			texto: t.NewTexto(valor.Texto),
			prioridad: valor.Prioridad,
		})
		
	case m.EliminarNotificacionMsg:
		eliminar := make([]int, 0, len(n.activas))
		for i, notificacion := range n.activas {
			if notificacion.id == valor.Id {
				eliminar = append(eliminar, i)
			}
		}
		for i := len(eliminar) - 1; i >= 0; i-- {
			n.activas = slices.Delete(n.activas, i, i + 1)
		}
	}

	return tea.Batch(cmds...)
}

func (n *Notificaciones) View(info t.InfoBuffer) (string, bool) {
	if info.Ancho < MIN_ANCHO || len(n.activas) == 0 {
		return "", false
	}

	return "", false
}

func (n *Notificaciones) Close() {}
