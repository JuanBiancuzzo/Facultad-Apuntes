package mensajes

import (
	"time"
	
	tea "charm.land/bubbletea/v2"
)

type NotificacionMsg struct {
	Id        uint64
	Texto     string
	Prioridad uint32
	Duracion  *time.Duration
}

// Los primeros 2**16 son para el usuario, el resto son utilizados por el sistema
func NewNotificacionCmd(id uint16, texto string, prioridad uint32) tea.Cmd {
	return func() tea.Msg {
		return NotificacionMsg {
			Id: uint64(id),
			Texto: texto,
			Prioridad: prioridad,
			Duracion: nil,
		}
	}
}

func NewNotificacionConDuracionCmd(texto string, prioridad uint32, duracion time.Duration) tea.Cmd {
	return func() tea.Msg {
		return NotificacionMsg {
			Id: 0,
			Texto: texto,
			Prioridad: prioridad,
			Duracion: &duracion,
		}
	}
}

type EliminarNotificacionMsg struct {
	Id uint64
}

func NewEliminarNotificacionCmd(id uint16) tea.Cmd {
	return func() tea.Msg {
		return EliminarNotificacionMsg { 
			Id: uint64(id),
		}
	}
}

func NewEliminarNotificacionConDuracionCmd(id uint64, duracion time.Duration) tea.Cmd {
	return func() tea.Msg {
		<- time.After(duracion)
		return EliminarNotificacionMsg { 
			Id: uint64(id),
		}
	}
}

type ActualizarNotificacionMsg struct {
	Id    uint64
	Texto string
}

func NewActualizarNotificacionCmd(id uint16, texto string) tea.Cmd {
	return func() tea.Msg {
		return ActualizarNotificacionMsg {
			Id: uint64(id),
			Texto: texto,
		}
	}
}
