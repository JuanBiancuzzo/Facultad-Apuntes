package referencias

import (
	"database/sql"
	"fmt"
	"strings"

	t "editor-sqlite/repositorio/internal/tablas"
)

type mapeoBdd[T any] interface {
	InfoTabla() (t.Tablas, []string)

	ObtenerDatos() []any

	CrearElemento() (T, error)
}

func crearReferencias[T any](bdd *sql.DB, numReferencias []int, dato mapeoBdd[T]) ([]T, error) {
	tabla, parametros := dato.InfoTabla()

	query := generarQueryMultiples(tabla, parametros, len(numReferencias))
	filas, err := bdd.Query(query, numReferencias)
	if err != nil {
		return []T{}, fmt.Errorf(
			"No se pudo obtener las referencias de %s, con error: %v",
			tabla,
			err,
		)
	}
	defer filas.Close()

	referencias := make([]T, 0, len(numReferencias))

	for filas.Next() {
		if err := filas.Scan(dato.ObtenerDatos()...); err != nil {
			return nil, fmt.Errorf(
				"Error al hacer un select en la tabla de referencias de %s, con error: %v",
				tabla,
				err,
			)
		}

		referencia, err := dato.CrearElemento()
		if err != nil {
			return nil, fmt.Errorf(
				"Error al crear elemento para tabla %s, con error: %v",
				tabla,
				err,
			)
		}
		referencias = append(referencias, referencia)
	}

	if err = filas.Err(); err != nil {
		return nil, fmt.Errorf(
			"Error al hacer un select en la tabla de referencias de %s, al terminar, con error: %v",
			tabla,
			err,
		)
	}
	return referencias, nil
}

func crearReferencia[T any](bdd *sql.DB, numReferencia int, dato mapeoBdd[T]) (T, error) {
	tabla, parametros := dato.InfoTabla()

	query := generarQuery(tabla, parametros)
	fila := bdd.QueryRow(query, numReferencia)

	if err := fila.Scan(dato.ObtenerDatos()...); err != nil {
		var valor T
		return valor, fmt.Errorf(
			"Error al hacer un select en la tabla %s, con error: %v",
			tabla,
			err,
		)
	}

	return dato.CrearElemento()
}

func generarQuery(tabla t.Tablas, parametros []string) string {
	return fmt.Sprintf(
		"SELECT %s FROM %s WHERE num_referencia = ?",
		strings.Join(parametros, ", "), tabla,
	)
}

func generarQueryMultiples(tabla t.Tablas, parametros []string, cantidadReferencias int) string {
	placeholder := make([]string, cantidadReferencias)
	for i := range cantidadReferencias {
		placeholder[i] = "?"
	}

	return fmt.Sprintf(
		"SELECT %s FROM %s WHERE num_referencia IN (%s)",
		strings.Join(parametros, ", "), tabla,
		strings.Join(placeholder, ", "),
	)
}
