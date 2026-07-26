package logger

import (
	"encoding/json"
	"fmt"
	"os"
	"runtime"
	"strings"
	"sync"
	"time"
)

type Nivel string

const (
	LV_DEBUG = "Debug"
	LV_INFO  = "Info"
	LV_WARN  = "Warn"
	LV_ERROR = "Error"
	LV_FATAL = "Fatal"
)

type infoMensaje struct {
	Tiempo  string `json:"time"`
	Mensaje string `json:"message"`
	Nivel   Nivel  `json:"level"`
	Traza   string `json:"trace"`
}

func (im infoMensaje) String() string {
	return fmt.Sprintf("\t{\n\tMessage: %s\n\tTime: %s\n\tLevel: %s\n\tTrace: %s\n}", im.Mensaje, im.Tiempo, string(im.Nivel), im.Traza)
}

type FnCrearInfoMensaje func(nivel Nivel, mensaje, nombreArchivo string, numeroLinea int) infoMensaje

type infoLogger struct {
	MsgCanal     chan infoMensaje
	Verbosidad   Verbosidad
	Archivo      *os.File
	WaitEscribir *sync.WaitGroup

	CrearMensaje FnCrearInfoMensaje
}

var logger *infoLogger = nil

func CreateLogger(config LoggerConfiguracion) (err error) {
	if config.Verbosidad == MUTE {
		// Como esta muteado podemos directamente no crear el logger
		return nil
	}

	splitPath := strings.Split(config.LogPath, "/")
	carpeta := strings.Join(splitPath[:len(splitPath)-1], "/")

	if err = os.MkdirAll(carpeta, os.ModePerm); err != nil {
		return fmt.Errorf("Error al crear o abrir carpeta %s, con error: %w", carpeta, err)
	}

	var archivo *os.File = nil
	if archivo, err = os.Create(config.LogPath); err != nil {
		return fmt.Errorf("Error al abrir el archivo de log %q, con error: %w", config.LogPath, err)
	}
	archivo.Write([]byte("[\n"))

	canal := make(chan infoMensaje, int(config.CapacidadMensajes))
	var waitEscribir sync.WaitGroup
	waitEscribir.Add(1)

	go func(canalMensajes chan infoMensaje, archivo *os.File, wg *sync.WaitGroup) {
		esPrimero := true
		inicioMensaje := []byte{}

		for mensaje := range canalMensajes {
			if byteMensajes, err := json.Marshal(mensaje); err != nil {
				fmt.Fprintf(os.Stderr, "Error al marshal el mensaje %q, con error: %v", mensaje.String(), err)

			} else if _, err = archivo.Write(append(inicioMensaje, byteMensajes...)); err != nil {
				fmt.Fprintf(os.Stderr, "Error al escribir al archivo de log %q, con mensaje %q, y error: %v", config.LogPath, string(byteMensajes), err)
			}

			if esPrimero {
				inicioMensaje = []byte(", \n")
				esPrimero = false
			}
		}
		wg.Done()
	}(canal, archivo, &waitEscribir)

	logger = &infoLogger{
		MsgCanal:     canal,
		Verbosidad:   config.Verbosidad,
		Archivo:      archivo,
		WaitEscribir: &waitEscribir,

		CrearMensaje: func(nivel Nivel, mensaje, nombreArchivo string, numeroLinea int) infoMensaje {
			return infoMensaje {
				Mensaje: mensaje,
				Tiempo:  time.Now().Format(config.FormatoDia),
				Nivel:   nivel,
				Traza:   fmt.Sprintf("En %q, en %d", nombreArchivo, numeroLinea),
			}
		},
	}

	return err
}

func Infof(formato string, args ...any) {
	enviarMensaje(LV_INFO, formato, args...)
}

func Debugf(formato string, args ...any) {
	enviarMensaje(LV_DEBUG, formato, args...)
}

func Warnf(formato string, args ...any) {
	enviarMensaje(LV_WARN, formato, args...)
}

func Errorf(formato string, args ...any) {
	enviarMensaje(LV_ERROR, formato, args...)
}

func Fatalf(formato string, args ...any) {
	enviarMensaje(LV_FATAL, formato, args...)
}

func enviarMensaje(nivel Nivel, formato string, args ...any) {
	if logger == nil || (logger.Verbosidad == NORMAL && nivel == LV_DEBUG) {
		return
	}

	if _, nombreArchivo, numeroLinea, ok := runtime.Caller(2); ok {
		logger.MsgCanal <- logger.CrearMensaje(
			nivel, fmt.Sprintf(formato, args...), nombreArchivo, numeroLinea,
		)
	}
}

func Close() {
	if logger == nil {
		return
	}

	close(logger.MsgCanal)
	logger.WaitEscribir.Wait()

	logger.Archivo.Write([]byte("]\n"))
}
