package bdd

import (  
	"fmt"
	"database/sql"
	_ "modernc.org/sqlite"

	a "editor-sqlite/almacenamiento"
	r "editor-sqlite/estructuras/referencias"

	ar "editor-sqlite/bdd/internal/referencias"
)

type almacenamientoBdd struct {
	bdd *sql.DB

	almReferencia *ar.AlmReferencia
}

func NewAlmacenamiento(path string) (a.Almacenamiento, error) {
	args := fmt.Sprintf("%s?_pragma=foreign_keys(1)", path)
	if bdd, err := sql.Open("sqlite", args); err != nil {
		return nil, err

	} else {
		return &almacenamientoBdd{ 
			bdd: bdd,
			almReferencia: ar.NewAlmacenamientoReferencia(bdd),
		}, nil
	}
}

func (a *almacenamientoBdd) ObtenerReferencia(numReferencia int) (*r.Referencia, error) {
	return a.almReferencia.ObtenerReferencia(numReferencia)
}

func (a *almacenamientoBdd) Close() {
	a.bdd.Close()
}
