package componentes

import (
	"time"
	"slices"

	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	m "editor-sqlite/mensajes"
	t "editor-sqlite/tipos"
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
	return tea.Batch (
		m.NewNotificacionConDuracionCmd("Oh hi", 1, 5 * time.Second),
		m.NewNotificacionConDuracionCmd("Tanto tiempo", 2, 7 * time.Second),
		m.NewNotificacionConDuracionCmd("Chau?", 2, 9 * time.Second),
	)
}

func (n *Notificaciones) Update(msg tea.Msg) tea.Cmd {
	cmds := []tea.Cmd{}

	switch valor := msg.(type) {
	case m.NotificacionMsg:
		var idNotificacion uint64 = valor.Id
		if valor.Duracion != nil {
			idNotificacion = n.idContador
			n.idContador++

			cmd := m.NewEliminarNotificacionConDuracionCmd(
				idNotificacion, *valor.Duracion,
			)
			cmds = append(cmds, cmd)
		}

		n.activas = append(n.activas, notificacion {
			id: idNotificacion,
			texto: valor.Texto,
			prioridad: valor.Prioridad,
		})

	case m.ActualizarNotificacionMsg:
		for i, notificacion := range n.activas {
			if notificacion.id == valor.Id {
				n.activas[i].texto = valor.Texto
			}
		}
		
	case m.EliminarNotificacionMsg:
		n.activas = slices.DeleteFunc(n.activas, func(notificacion notificacion) bool {
			return notificacion.id == valor.Id
		})
	}

	return tea.Batch(cmds...)
}

func (n *Notificaciones) View(info t.InfoBuffer) (*lip.Layer, bool) {
	if info.Ancho < MIN_ANCHO || len(n.activas) == 0 {
		return nil, false
	}

	ancho := info.Ancho / 5
	estiloNotificacion := lip.NewStyle().
		BorderForeground(lip.Color("#438496")).
		BorderStyle(lip.RoundedBorder()).
		Padding(0, 1).
		Width(ancho)

	bloques := make([]string, len(n.activas))
	for i, notificacion := range n.activas {
		bloques[i] = estiloNotificacion.Render(notificacion.texto)
	}

	buffer := info.RestringirTamanio(lip.JoinVertical(lip.Top, bloques...))
	capa := lip.NewLayer(buffer).X(info.Ancho - lip.Width(buffer))
	return capa, true
}

func (n *Notificaciones) Close() {}
