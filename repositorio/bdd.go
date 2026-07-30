package repositorio

import (  
	"fmt"
	"database/sql"
	_ "modernc.org/sqlite"

	er "editor-sqlite/estructuras/referencias"

	r "editor-sqlite/repositorio/internal/referencias"
)

type repositorioBdd struct {
	bdd *sql.DB

	repoReferencia *r.RepoReferencia
}

func NewRepositorioBdd(path string) (Repositorio, error) {
	args := fmt.Sprintf("%s?_pragma=foreign_keys(1)", path)
	if bdd, err := sql.Open("sqlite", args); err != nil {
		return nil, err

	} else {
		return &repositorioBdd{ 
			bdd: bdd,
			repoReferencia: r.NewRepositorioReferencia(bdd),
		}, nil
	}
}

func (b *repositorioBdd) ObtenerReferencia(numReferencia int) (*er.Referencia, error) {
	return b.repoReferencia.ObtenerReferencia(numReferencia)
}

func (b *repositorioBdd) Close() {
	b.bdd.Close()
}
