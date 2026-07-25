package referencias

import (  
	"fmt"
	"time"
	"strings"
	"database/sql"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
)

type RepoReferencia struct {
	bdd *sql.DB

	// Tal vez plantear un cache
}

func NewRepositorioReferencia(bdd *sql.DB) *RepoReferencia {
	return &RepoReferencia { 
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

func (r *RepoReferencia) ObtenerReferencia(numReferencia int) (*er.Referencia, error) {
	var datos bddReferencia
	query := fmt.Sprintf(
		"SELECT num_referencia, tipo, fecha_registrada FROM %s WHERE num_referencia = ?",
		t.TR_REFERENCIAS,
	)

	fila := r.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias, con error: %v", err)
	}

	tipo, err := er.ObtenerTipoReferencia(datos.tipo)
	if err != nil {
		return nil, fmt.Errorf("No se pudo tener el tipo de referencia, con error: %v", err)
	}

	fechaRegistrada := time.Unix(datos.fechaRegistrada, 0) 

	switch tipo {
	case er.TR_YOUTUBE:
		dato, err := r.ObtenerReferenciaYoutube(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de youtube: %v", err)
		}
		return er.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	case er.TR_WIKIPEDIA:
		dato, err := r.ObtenerReferenciaWikipedia(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de wikipedia: %v", err)
		}
		return er.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	case er.TR_WEB:
		dato, err := r.ObtenerReferenciaWeb(numReferencia);
		if err != nil {
			return nil, fmt.Errorf("Al obtener ref de web: %v", err)
		}
		return er.NewReferencia(numReferencia, tipo, fechaRegistrada, *dato), nil

	default: 
		return nil, fmt.Errorf("No se maneja todavia el tipo: %s", tipo)
	}
}

func (r *RepoReferencia) Close() {}

func generarQuery(tabla t.Tablas, parametros []string) string {
	return fmt.Sprintf(
		"SELECT %s FROM %s WHERE num_referencia = ?",
		strings.Join(parametros, ", "), tabla,
	)
}
