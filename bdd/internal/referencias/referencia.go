package referencias

import (  
	"fmt"
	"time"
	"strings"
	"database/sql"

	t "editor-sqlite/bdd/tablas"
	r "editor-sqlite/estructuras/referencias"
)

type AlmReferencia struct {
	bdd *sql.DB

	// Tal vez plantear un cache
}

func NewAlmacenamientoReferencia(bdd *sql.DB) *AlmReferencia {
	return &AlmReferencia { 
		bdd: bdd, 
	}
}

type bddReferencia struct {
	numReferencia int
	tipo string
	fechaRegistrada int64
}

func (d *bddReferencia) obtenerDatos() []any {
	return []any{ &d.numReferencia, &d.tipo, &d.fechaRegistrada }
}

func (a *AlmReferencia) ObtenerReferencia(numReferencia int) (*r.Referencia, error) {
	var datos bddReferencia
	query := fmt.Sprintf(
		"SELECT num_referencia, tipo, fecha_registrada FROM %s WHERE num_referencia = ?",
		t.TR_REFERENCIAS,
	)

	fila := a.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias, con error: %v", err)
	}

	tipo, err := r.ObtenerTipoReferencia(datos.tipo)
	if err != nil {
		return nil, fmt.Errorf("No se pudo tener el tipo de referencia, con error: %v", err)
	}

	fechaRegistrada := time.Unix(datos.fechaRegistrada, 0) 

	switch tipo {
	case r.TR_YOUTUBE:
		dato, err := a.ObtenerReferenciaYoutube(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de youtube: %v", err)
		}
		return r.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	case r.TR_WIKIPEDIA:
		dato, err := a.ObtenerReferenciaWikipedia(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de wikipedia: %v", err)
		}
		return r.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	case r.TR_WEB:
		dato, err := a.ObtenerReferenciaWeb(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de web: %v", err)
		}
		return r.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	default: 
		return nil, fmt.Errorf("No se maneja todavia el tipo: %s", tipo)
	}
}

func generarQuery(tabla t.Tablas, parametros []string) string {
	return fmt.Sprintf(
		"SELECT %s FROM %s WHERE num_referencia = ?",
		strings.Join(parametros, ", "), tabla,
	)
}
