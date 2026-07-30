package repositorio

import (
	r "editor-sqlite/estructuras/referencias"
)

// Usar el archivo de youtube como referencia, ya que ya tiene implementada
// las dos funciones

type RepositorioReferencias interface {
	ObtenerReferencia(numReferencia int)     (*r.Referencia, error)
	ObtenerReferencias(numReferencias []int) ([]*r.Referencia, error)

	ObtenerReferenciaYoutube(numReferencia int)     (*r.ReferenciaYoutube, error)
	ObtenerReferenciasYoutube(numReferencias []int) ([]*r.ReferenciaYoutube, error)

	ObtenerReferenciaWikipedia(numReferencia int)     (*r.ReferenciaWikipedi, error)
	ObtenerReferenciasWikipedia(numReferencias []int) ([]*r.ReferenciaWikipedi, error)

	ObtenerReferenciaWebsite(numReferencia int)     (*r.ReferenciaWebsite, error)
	ObtenerReferenciasWebsite(numReferencias []int) ([]*r.ReferenciaWebsite, error)

	ObtenerReferenciaLibro(numReferencia int)     (*r.ReferenciaLibro, error)
	ObtenerReferenciasLibro(numReferencias []int) ([]*r.ReferenciaLibro, error)

	ObtenerReferenciaCapitulo(numReferencia int)     (*r.ReferenciaCapitulo, error)
	ObtenerReferenciasCapitulo(numReferencias []int) ([]*r.ReferenciaCapitulo, error)

	ObtenerReferenciaDiccionario(numReferencia int)     (*r.ReferenciaDiccionario, error)
	ObtenerReferenciasDiccionario(numReferencias []int) ([]*r.ReferenciaDiccionario, error)

	ObtenerReferenciaPaper(numReferencia int)     (*r.ReferenciaPaper, error)
	ObtenerReferenciasPaper(numReferencias []int) ([]*r.ReferenciaPaper, error)

	ObtenerReferenciaCursoOnline(numReferencia int)     (*r.ReferenciaCursoOnline, error)
	ObtenerReferenciasCursoOnline(numReferencias []int) ([]*r.ReferenciaCursoOnline, error)

	ObtenerReferenciaTema(numReferencia int)     (*r.ReferenciaTema, error)
	ObtenerReferenciasTema(numReferencias []int) ([]*r.ReferenciaTema, error)
}
