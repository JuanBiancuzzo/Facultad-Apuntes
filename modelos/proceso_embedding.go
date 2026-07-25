package modelos

import (
	"fmt"
	"io"
	"os/exec"
	"context"
	"sync"
	"strings"
	"syscall"

	tea "charm.land/bubbletea/v2"
	ctxio "github.com/jbenet/go-context/io"

	g "editor-sqlite/estructuras/general"
)

type ProcesoEmbbeding struct {
	Comando *exec.Cmd
	InputPipe io.WriteCloser
	OutputPipe io.ReadCloser

	cancels map[uint32]context.CancelFunc
	cancelContador uint32
	cancelMutex *sync.Mutex
}

func NewProcesoEmbbeding() (*ProcesoEmbbeding, error) {
	argumentos := "run --directory proceso_embedding main.py" 
	comando := exec.Command("uv", strings.Split(argumentos, " ")...)
	
	if inputPipe, err := comando.StdinPipe(); err != nil {
		return nil, fmt.Errorf("Fallo en obtener stdinPipe con error: %v", err)

	} else if outputPipe, err := comando.StdoutPipe(); err != nil {
		return nil, fmt.Errorf("Fallo en obtener stdoutPipe con error: %v", err)

	} else if err = comando.Start(); err != nil {
		return nil, fmt.Errorf("Fallo al crear comando con error: %v", err)

	} else {
		var cancelMutex sync.Mutex
		return &ProcesoEmbbeding{
			Comando: comando,
			InputPipe: inputPipe,
			OutputPipe: outputPipe,
			
			cancels: make(map[uint32]context.CancelFunc),
			cancelContador: 0,
			cancelMutex: &cancelMutex,
		}, nil
	}
}

func (e *ProcesoEmbbeding) NewCmdConseguirEmbbeding(texto string) tea.Cmd {
	return func() tea.Msg {
		contador := e.cancelContador 
		e.cancelContador++

		ctx, cancel := context.WithCancel(context.Background())
		e.cancels[contador] = cancel
		defer e.EliminarCancel(contador)

		input := ctxio.NewWriter(ctx, e.InputPipe)
		texto = fmt.Sprintf("%s\n", strings.TrimSpace(texto))
		if _, err := io.WriteString(input, texto); err != nil {
			fmt.Printf("\nHubo un error al escribir del proceso, con error: %v\n", err)
			return nil
		}

		output := ctxio.NewReader(ctx, e.OutputPipe)
		bytes := make([]byte, g.TAM_EMBBEDINGS_BYTES) 
		if _, err := output.Read(bytes); err != nil {
			fmt.Printf("\nHubo un error al leer del proceso, con error: %v\n", err)
			return nil
		}

		return g.NewEmbbeding(bytes)
	}
}

func (e *ProcesoEmbbeding) EliminarCancel(contador uint32) {
	e.cancelMutex.Lock()
	if cancel, ok := e.cancels[contador]; ok {
		cancel()
		delete(e.cancels, contador)
	}
	e.cancelMutex.Unlock()
}

func (e *ProcesoEmbbeding) Close() {
	e.Comando.Process.Signal(syscall.SIGTERM)

	e.InputPipe.Close()
	e.OutputPipe.Close()

	e.cancelMutex.Lock()
	for _, cancel := range e.cancels {
		cancel()
	}
	clear(e.cancels)
	e.cancelMutex.Unlock()

}

