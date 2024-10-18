const coverPath = "biblioteca/libros/covers";
const defaultCoverName = "coverDefault.jpg";
const tag = "libro";

const covers = dv.array(app.vault.getFolderByPath(coverPath).children).values;
const defaultCover = covers.find(cover => cover.name == defaultCoverName);

let libros = dv.pages(`#biblioteca/${tag}`)
    .sort(libro => libro.file.name)
    .flatMap(libro => {
        let cover = covers.find(cover => cover.name == libro.cover);
        if (!cover) cover = defaultCover;
        if (!cover) return [];

        return [{
            path: libro.file.path,
            titulo: libro.tituloObra,
            subtitulo: libro.subtituloObra,
            autores: libro.nombreAutores,
            cover: app.vault.getResourcePath(cover)
        }];
    });


dv.el("div", `<h2> Libros (${libros.length}) </h2> <hr> <br> <div class="mural"> 
    ${libros.map(libro => mostrarLibro(libro)).join("")}    
</div>`);

function mostrarLibro(libro) {
    let { path, titulo, subtitulo, autores, cover } = libro;

    // ${ subtitulo ? `<span class="subtitulo"> ${subtitulo} </span>` : "" }
    return `<div class="carta">
        <img src="${cover}">
        ${ crearReferencia(path, `<span> ${titulo} </span>`) }
        <span class="autores"> ${ autores.map(({ nombre, apellido }) => apellido).join(" • ") } </span>
    </div>`;
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}