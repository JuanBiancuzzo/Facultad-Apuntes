package main

import (
	"os"

	log "editor-sqlite/logger"
	m "editor-sqlite/modelos"
	r "editor-sqlite/repositorio"
	p "editor-sqlite/procesos"
	c "editor-sqlite/compartido"

	tea "charm.land/bubbletea/v2"
)

func main() {
	baseDeDato, err := r.NewRepositorioBdd("repositorio/datos.db")
	if err != nil {
		log.Errorf("Ocurrio un error al obtener contendio: %v\n", err)
		os.Exit(1)
	}
	defer baseDeDato.Close()

	procesos, err := p.NewProcesos()
	if err != nil {
		log.Errorf("Ocurrio un error al obtener procesos: %v\n", err)
		os.Exit(1)
	}
	defer procesos.Close()

	estado := c.NewEstadoCompartido(baseDeDato, procesos)

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
