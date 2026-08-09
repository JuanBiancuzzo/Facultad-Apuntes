package repositorio

import (
	"database/sql"
	"fmt"

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
			bdd:            bdd,
			repoReferencia: r.NewRepositorioReferencia(bdd),
		}, nil
	}
}

func (b *repositorioBdd) ObtenerReferencia(numReferencia int) (*er.Referencia, error) {
	return b.repoReferencia.ObtenerReferencia(numReferencia)
}

func (b *repositorioBdd) ObtenerReferencias(numReferencias []int) ([]*er.Referencia, error) {
	return b.repoReferencia.ObtenerReferencias(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaYoutube(
	numReferencia int,
) (*er.ReferenciaYoutube, error) {
	return b.repoReferencia.ObtenerReferenciaYoutube(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasYoutube(
	numReferencias []int,
) ([]*er.ReferenciaYoutube, error) {
	return b.repoReferencia.ObtenerReferenciasYoutube(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaWikipedia(
	numReferencia int,
) (*er.ReferenciaWikipedia, error) {
	return b.repoReferencia.ObtenerReferenciaWikipedia(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasWikipedia(
	numReferencias []int,
) ([]*er.ReferenciaWikipedia, error) {
	return b.repoReferencia.ObtenerReferenciasWikipedia(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaWebsite(
	numReferencia int,
) (*er.ReferenciaWebsite, error) {
	return b.repoReferencia.ObtenerReferenciaWebsite(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasWebsite(
	numReferencias []int,
) ([]*er.ReferenciaWebsite, error) {
	return b.repoReferencia.ObtenerReferenciasWebsite(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaLibro(numReferencia int) (*er.ReferenciaLibro, error) {
	return b.repoReferencia.ObtenerReferenciaLibro(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasLibro(
	numReferencias []int,
) ([]*er.ReferenciaLibro, error) {
	return b.repoReferencia.ObtenerReferenciasLibro(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaCapitulo(
	numReferencia int,
) (*er.ReferenciaCapitulo, error) {
	return b.repoReferencia.ObtenerReferenciaCapitulo(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasCapitulo(
	numReferencias []int,
) ([]*er.ReferenciaCapitulo, error) {
	return b.repoReferencia.ObtenerReferenciasCapitulo(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaDiccionario(
	numReferencia int,
) (*er.ReferenciaDiccionario, error) {
	return b.repoReferencia.ObtenerReferenciaDiccionario(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasDiccionario(
	numReferencias []int,
) ([]*er.ReferenciaDiccionario, error) {
	return b.repoReferencia.ObtenerReferenciasDiccionario(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaPaper(numReferencia int) (*er.ReferenciaPaper, error) {
	return b.repoReferencia.ObtenerReferenciaPaper(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasPaper(
	numReferencias []int,
) ([]*er.ReferenciaPaper, error) {
	return b.repoReferencia.ObtenerReferenciasPaper(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaCursoOnline(
	numReferencia int,
) (*er.ReferenciaCursoOnline, error) {
	return b.repoReferencia.ObtenerReferenciaCursoOnline(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasCursoOnline(
	numReferencias []int,
) ([]*er.ReferenciaCursoOnline, error) {
	return b.repoReferencia.ObtenerReferenciasCursoOnline(numReferencias)
}

func (b *repositorioBdd) ObtenerReferenciaTema(numReferencia int) (*er.ReferenciaTema, error) {
	return b.repoReferencia.ObtenerReferenciaTema(numReferencia)
}

func (b *repositorioBdd) ObtenerReferenciasTema(
	numReferencias []int,
) ([]*er.ReferenciaTema, error) {
	return b.repoReferencia.ObtenerReferenciasTema(numReferencias)
}

func (b *repositorioBdd) Close() {
	b.bdd.Close()
}
