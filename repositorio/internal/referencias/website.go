package referencias

import (  
	"fmt"
	"time"

	t "editor-sqlite/repositorio/internal/tablas"

	er "editor-sqlite/estructuras/referencias"
	eg "editor-sqlite/estructuras/general"
)

type bddReferenciaWeb struct {
	id int
	nombreArticulo string
	nombrePagina string
	fecha int64
	url string
}

func (d *bddReferenciaWeb) obtenerDatos() []any {
	return []any{ &d.id, &d.nombreArticulo, &d.nombrePagina, &d.fecha, &d.url }
}
	
func (r *RepoReferencia) ObtenerReferenciaWeb(numReferencia int) (*er.ReferenciaWeb, error) {
	var datos bddReferenciaWeb
	query := generarQuery(t.TR_WEB, []string{ "id", "nombre_articulo", "nombre_pagina", "fecha", "url" })
	fila := r.bdd.QueryRow(query, numReferencia)
	if err := fila.Scan(datos.obtenerDatos()...); err != nil {
		return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de web, con error: %v", err)
	}

	datosAutores, err := r.obtenerAutoresReferencia(er.TR_WEB, datos.id)
	if err != nil {
		return nil, fmt.Errorf("Al obtener autores para la web, se tuvo el error: %v", err)
	}

	autores := make([]eg.Autore, len(datosAutores))
	for i, datoAutore := range datosAutores {
		autores[i] = *eg.NewAutore(datoAutore.nombre, datoAutore.apellido)
	}

	return er.NewReferenciaWeb(
		datos.nombreArticulo,
		datos.nombrePagina,
		time.Unix(datos.fecha, 0),
		datos.url,
		autores,
	), nil
}

type bddReferenciaAutore struct {
	nombre string
	apellido string
}

func (d *bddReferenciaAutore) obtenerDatos() []any {
	return []any{ &d.nombre, &d.apellido }
}

func (r *RepoReferencia) obtenerAutoresReferencia(tipo er.TipoReferencia, id_referencia int) ([]bddReferenciaAutore, error) {
	var datos []bddReferenciaAutore
	query := fmt.Sprintf(`
		SELECT %s.nombre, %s.apellido FROM %s 
		JOIN %s ON id_autore = id
		WHERE tipo = ? AND id_referencia = ?`,
		t.TG_AUTORES, t.TG_AUTORES, t.TR_AUTORES_REFERENCIAS, t.TG_AUTORES,
	)

	filas, err := r.bdd.Query(query, tipo, id_referencia)
	if err != nil {
		return datos, fmt.Errorf("No se pudo obtener autores para la referencia de tipo %s, con error: %v", tipo, err)
	}
	defer filas.Close()

	for filas.Next() {
		var dato bddReferenciaAutore
		if err := filas.Scan(dato.obtenerDatos()...); err != nil {
			return nil, fmt.Errorf("Error al hacer un select en la tabla de referencias de autore referencia, con error: %v", err)
		}

		datos = append(datos, dato)
	}

	if err = filas.Err(); err != nil {
		fmt.Errorf("Error al hacer un select en la tabla de referencias de autore referencia, al terminar, con error: %v", err)
	}
	return datos, nil
}
