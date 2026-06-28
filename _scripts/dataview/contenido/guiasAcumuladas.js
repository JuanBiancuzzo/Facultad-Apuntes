let { archivo } = input;

const numeroGuias = archivo.guias;
if (numeroGuias !== undefined) {
    const guias = dv.pages("#colección/ejercicios/guia")
        .filter(guia => numeroGuias.contains(guia.numero))
        .map((guia, index) => crearReferencia(guia.file.path, `Guia ${index + 1}: ${guia.nombre}`));
    dv.list(guias);

} else {
    dv.paragraph("No contiene guias");
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}
