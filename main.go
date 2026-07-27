package main

import (
	"os"

	log "editor-sqlite/logger"
	m "editor-sqlite/modelos"
	r "editor-sqlite/repositorio"
	p "editor-sqlite/proceso_embedding"
	c "editor-sqlite/compartido"

	tea "charm.land/bubbletea/v2"
)

func main() {
	baseDeDato, err := r.NewRepositorioBdd("assets/datos.db")
	if err != nil {
		log.Errorf("Ocurrio un error al obtener contendio: %v\n", err)
		os.Exit(1)
	}
	defer baseDeDato.Close()

	embeddings, err := p.NewProcesoEmbedding()
	if err != nil {
		log.Errorf("Ocurrio un error al obtener proceso de embeddings: %v\n", err)
		os.Exit(1)
	}
	defer embeddings.Close()

	estado := c.NewEstadoCompartido(baseDeDato, embeddings)

	modelo, err := m.NewModelo(estado)
	if err != nil {
        log.Errorf("Error al crear el modelo con: %v\n", err)
        os.Exit(1)
	} 

	programa := tea.NewProgram(modelo)
	if _, err = programa.Run(); err != nil {
        log.Errorf("Error al crear el programa: %v\n", err)
        os.Exit(1)
	}
}
