package main

import (
	"fmt"
	"os"

	m "editor-sqlite/modelos"
	r "editor-sqlite/repositorio"

	tea "charm.land/bubbletea/v2"
)

func main() {
	baseDeDato, err := r.NewRepositorioBdd("assets/datos.db")
	if err != nil {
        fmt.Printf("Ocurrio un error al obtener contendio: %v\n", err)
		os.Exit(1)
	}

	modelo, err := m.NewModelo(baseDeDato)
	if err != nil {
        fmt.Printf("Error al crear el modelo con: %v\n", err)
        os.Exit(1)

	} 

	programa := tea.NewProgram(modelo)
	if _, err = programa.Run(); err != nil {
        fmt.Printf("Error al crear el programa: %v\n", err)
        os.Exit(1)

	} else {
        fmt.Println("Termino correctamente el programa")
        os.Exit(0)
	}
}
