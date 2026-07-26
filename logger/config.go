package logger

import (
	"encoding/json"
	"fmt"
	"time"
)

type Verbosidad string

const (
	MUTE    = "mute"
	NORMAL  = "normal"
	VERBOSE = "verbose"
)

const DEFAULT_CAPACIDAD = 25
const DEFAULT_FORMATO = time.UnixDate

type LoggerConfiguracion struct {
	LogPath           string    `json:"log_path,omitempty"`
	Verbosidad        Verbosidad `json:"verbosity"`
	CapacidadMensajes uint      `json:"message_capacity,omitempty"`
	FormatoDia        string    `json:"date_format,omitempty"`
}

func (lc *LoggerConfiguracion) UnmarshalJSON(data []byte) error {
	// We unmarshal it as default
	if err := json.Unmarshal(data, lc); err != nil {
		return err
	}

	// Now we check if the capacity is valid
	if lc.CapacidadMensajes == 0 {
		lc.CapacidadMensajes = DEFAULT_CAPACIDAD
	}

	// If no date format was set, then the default will be use
	if lc.FormatoDia == "" {
		lc.FormatoDia = DEFAULT_FORMATO
	}

	return nil
}

func (lc LoggerConfiguracion) String() string {
	return fmt.Sprintf("Logger path: %q, Verbosidad: %s y capacidad de mensajes de: %d", lc.LogPath, lc.Verbosidad, lc.CapacidadMensajes)
}
