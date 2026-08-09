package referencias

import (
	"database/sql"
	"fmt"
	"time"

	er "editor-sqlite/estructuras/referencias"
	t "editor-sqlite/repositorio/internal/tablas"
)

var PARAMETROS_REFERENCIAS = []string{"num_referencia", "tipo", "fecha_registrada"}

type RepoReferencia struct {
	bdd *sql.DB

	// Tal vez plantear un cache
}

func NewRepositorioReferencia(bdd *sql.DB) *RepoReferencia {
	return &RepoReferencia{
		bdd: bdd,
	}
}

type bddReferencia struct {
	numReferencia   int
	tipo            string
	fechaRegistrada int64
}

func (d *bddReferencia) obtenerDatos() []any {
	return []any{&d.numReferencia, &d.tipo, &d.fechaRegistrada}
}

func (r *RepoReferencia) ObtenerReferencias(numReferencias []int) ([]*er.Referencia, error) {
	agrepaciones := make(map[er.TipoReferencia]infoObtenerMultiples)

	err := func() error {
		query := generarQueryMultiples(t.TR_YOUTUBE, PARAMETROS_YOUTUBE, len(numReferencias))
		filas, err := r.bdd.Query(query, numReferencias)
		if err != nil {
			return fmt.Errorf("No se pudo obtener las referencias de youtube, con error: %v", err)
		}
		defer filas.Close()

		for filas.Next() {
			var dato bddReferencia
			if err := filas.Scan(dato.obtenerDatos()...); err != nil {
				return fmt.Errorf(
					"Error al hacer un select en la tabla de referencias, con error: %v",
					err,
				)
			}

			tipo, err := er.ObtenerTipoReferencia(dato.tipo)
			if err != nil {
				return fmt.Errorf("No se pudo tener el tipo de referencia, con error: %v", err)
			}

			fecha := time.Unix(dato.fechaRegistrada, 0)

			if agrupacion, ok := agrepaciones[tipo]; ok {
				agrupacion.numReferencias = append(agrupacion.numReferencias, dato.numReferencia)
				agrupacion.fechaRegistradas = append(agrupacion.fechaRegistradas, fecha)

			} else {
				agrepaciones[tipo] = infoObtenerMultiples{
					numReferencias:   []int{dato.numReferencia},
					tipo:             tipo,
					fechaRegistradas: []time.Time{fecha},
				}
			}
		}

		if err = filas.Err(); err != nil {
			return fmt.Errorf(
				"Error al hacer un select en la tabla de referencias de youtube, al terminar, con error: %v",
				err,
			)
		}
		return nil
	}()
	if err != nil {
		return nil, err
	}

	referencias := make([]*er.Referencia, 0, len(numReferencias))
	for tipo, info := range agrepaciones {
		var parcial []*er.Referencia
		switch tipo {
		case er.TR_YOUTUBE:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasYoutube)
		case er.TR_WIKIPEDIA:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasWikipedia)
		case er.TR_WEB:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasWebsite)
		case er.TR_DICCIONARIO:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasDiccionario)

		case er.TR_LIBRO:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasLibro)
		case er.TR_CAPITULOS:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasCapitulo)
		case er.TR_PAPER:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasPaper)

		case er.TR_CURSO_ONLINE:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasCursoOnline)
		case er.TR_TEMA:
			parcial, err = obtenerReferencias(info, r.ObtenerReferenciasTema)

		default:
			err = fmt.Errorf("No se maneja todavia el tipo: %s", tipo)
		}

		if err != nil {
			return nil, err
		}

		referencias = append(referencias, parcial...)
	}

	return referencias, nil
}

func (r *RepoReferencia) ObtenerReferencia(numReferencia int) (*er.Referencia, error) {
	var dato bddReferencia
	query := generarQuery(t.TR_REFERENCIAS, PARAMETROS_REFERENCIAS)
	fila := r.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(dato.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf(
			"Error al hacer un select en la tabla de referencias, con error: %v",
			err,
		)
	}

	tipo, err := er.ObtenerTipoReferencia(dato.tipo)
	if err != nil {
		return nil, fmt.Errorf("No se pudo tener el tipo de referencia, con error: %v", err)
	}

	info := infoObtener{
		numReferencia:   numReferencia,
		tipo:            tipo,
		fechaRegistrada: time.Unix(dato.fechaRegistrada, 0),
	}

	switch tipo {
	case er.TR_YOUTUBE:
		return obtenerReferencia(info, r.ObtenerReferenciaYoutube)
	case er.TR_WIKIPEDIA:
		return obtenerReferencia(info, r.ObtenerReferenciaWikipedia)
	case er.TR_WEB:
		return obtenerReferencia(info, r.ObtenerReferenciaWebsite)
	case er.TR_DICCIONARIO:
		return obtenerReferencia(info, r.ObtenerReferenciaDiccionario)

	case er.TR_LIBRO:
		return obtenerReferencia(info, r.ObtenerReferenciaLibro)
	case er.TR_CAPITULOS:
		return obtenerReferencia(info, r.ObtenerReferenciaCapitulo)
	case er.TR_PAPER:
		return obtenerReferencia(info, r.ObtenerReferenciaPaper)

	case er.TR_CURSO_ONLINE:
		return obtenerReferencia(info, r.ObtenerReferenciaCursoOnline)
	case er.TR_TEMA:
		return obtenerReferencia(info, r.ObtenerReferenciaTema)

	default:
		return nil, fmt.Errorf("No se maneja todavia el tipo: %s", tipo)
	}
}

type infoObtenerMultiples struct {
	numReferencias   []int
	tipo             er.TipoReferencia
	fechaRegistradas []time.Time
}

func obtenerReferencias[DR er.DatoReferencia](
	info infoObtenerMultiples,
	obtener func([]int) ([]*DR, error),
) ([]*er.Referencia, error) {
	refs, err := obtener(info.numReferencias)
	if err != nil {
		return nil, fmt.Errorf("Al obtener ref de %s: %v", info.tipo, err)
	}

	referencias := make([]*er.Referencia, len(refs))
	for i, ref := range refs {
		referencias[i] = er.NewReferencia(
			info.numReferencias[i],
			info.tipo,
			info.fechaRegistradas[i],
			*ref,
		)
	}
	return referencias, nil
}

type infoObtener struct {
	numReferencia   int
	tipo            er.TipoReferencia
	fechaRegistrada time.Time
}

func obtenerReferencia[DR er.DatoReferencia](
	info infoObtener,
	obtener func(int) (*DR, error),
) (*er.Referencia, error) {
	ref, err := obtener(info.numReferencia)
	if err != nil {
		return nil, fmt.Errorf("Al obtener ref de %s: %v", info.tipo, err)
	}
	return er.NewReferencia(info.numReferencia, info.tipo, info.fechaRegistrada, *ref), nil
}
