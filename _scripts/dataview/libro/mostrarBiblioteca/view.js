const coverPath = "biblioteca/libros/covers";
const tag = "libro";

const covers = dv.array(app.vault.getFolderByPath(coverPath).children).values;

let libros = dv.pages(`#biblioteca/${tag}`)
    .map(libro => {
        let titulo = libro.tituloObra;
        let autores = libro.nombreAutores.map(({ nombre, apellido }) => `${nombre} ${apellido}`);
        let cover = covers.find(cover => cover.name == libro.cover);

        return {
            path: libro.file.path,
            titulo: `${titulo} de ${autores.join(", ")}`,
            cover: app.vault.getResourcePath(cover)
        };
    });


dv.el("div", `<h2> Libros </h2> <hr> <br> <div class="mural"> 
    ${libros.map(libro => mostrarLibro(libro)).join("")}    
</div>`);

function mostrarLibro(libro) {
    let { path, titulo, cover } = libro;

    return `<div class="carta">
        <img src="${cover}">
        ${ crearReferencia(path, `<span> ${titulo} </span>`) }
    </div>`;
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link nombre" target="_blank" rel="noopener"> ${texto} </a>`;
}