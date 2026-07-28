package compartido

import (
	tea "charm.land/bubbletea/v2"

	log "editor-sqlite/logger"
	r "editor-sqlite/repositorio"
	p "editor-sqlite/procesos"

	g "editor-sqlite/estructuras/general"
)

type Estado struct {
	repo     r.Repositorio
	procesos *p.Procesos
}

func NewEstadoCompartido(repo r.Repositorio, procesos *p.Procesos) *Estado {
	return &Estado {
		repo,
		procesos,
	}
}

func (e *Estado) Repo(request func(r.Repositorio) tea.Msg) tea.Cmd {
	return func() tea.Msg {
		return request(e.repo)
	}
}

func (e *Estado) Embedding(texto string, request func(g.Embedding, r.Repositorio) tea.Msg) tea.Cmd {
	return func() tea.Msg {
		embedding, err := e.procesos.ConseguirEmbedding(texto)
		if err != nil {
			log.Fatalf("Error al pedir embedding del texto %q, con error: %w", texto, err)
			return nil
		}
		return request(*embedding, e.repo)
	}
}
