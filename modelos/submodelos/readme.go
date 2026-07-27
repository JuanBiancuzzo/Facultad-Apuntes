package submodelos

import (
	"fmt"

	tea "charm.land/bubbletea/v2"
	lip "charm.land/lipgloss/v2"

	r "editor-sqlite/repositorio"
	c "editor-sqlite/compartido"

	t "editor-sqlite/modelos/textos"
)

type modeloReadme struct {
	request *c.Estado

	anchoMaximo int
}

func NewModeloReadme(estado *c.Estado, anchoMaximo int) Submodelo {
	return &modeloReadme {
		request: estado,

		anchoMaximo: anchoMaximo,
	}
}

func (m *modeloReadme) Init() tea.Cmd {
	return m.request.Repo(func(repo r.Repositorio) tea.Msg {
		// Aca podriamos hacer la request a la base de datos
		return nil
	})
}

func (m *modeloReadme) Nombre() string {
	return "Readme"
}

func (m *modeloReadme) Update(msg tea.Msg) (Submodelo, tea.Cmd) {
	switch /* valor := */ msg.(type) {}
	return m, nil
}

func (m *modeloReadme) View(info t.InfoBuffer) string { 
	ancho := min(info.Ancho, m.anchoMaximo)


	colorLink := lip.Color("#9457F7")
	estiloLink := lip.NewStyle().
		UnderlineStyle(lip.UnderlineCurly).
		UnderlineColor(colorLink).
		Foreground(colorLink)

	estiloLinkTemp := estiloLink
	obsidianLink := estiloLinkTemp.Hyperlink("https://obsidian.md").
		Render("Obsidian")

	estiloLinkTemp = estiloLink
	pullRequestLink := estiloLinkTemp.Hyperlink("https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request").
		Render("pull request")

	estiloLinkTemp = estiloLink
	issueLink := estiloLinkTemp.Hyperlink("https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue").
		Render("issue")

	texto := "\nVoy a ir poniendo mis apuntes acá, y estoy usando %s para escribir y crear los vínculos entre las páginas por lo que es recomendable para poder navegar los apuntes.\n\nCualquier corrección/ampliación de los contenidos en este proyecto, por favor hacer un %s para poder visualizar los cambios pedidos. En el caso de sugerir cualquier cosa, por favor crear un %s donde ahí lo podré ver."
	texto = fmt.Sprintf(texto, obsidianLink, pullRequestLink, issueLink)
	texto = lip.NewStyle().
		Width(ancho).
		Align(lip.Left).
		Render(texto)
	
	texto = lip.Wrap(texto, ancho, " ")
	texto = lip.PlaceHorizontal(info.Ancho, lip.Center, texto)
	return info.RestringirTamanio(texto)
}

func (m *modeloReadme) Close() {}
