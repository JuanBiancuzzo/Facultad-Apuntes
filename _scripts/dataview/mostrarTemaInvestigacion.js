const { indice } = input;

const PAPER = "Paper";
const LIBRO = "Libro";

if (!indice) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let equivalente;
if (indice.equivalente) equivalente = dv.page(indice.equivalente.path);

let carpeta = indice.file.folder;
if (equivalente) carpeta += `/${indice.file.name}`;

let tagRepresentante = obtenerTag(carpeta);
let tagEquivalente;
if (equivalente) tagEquivalente = obtenerTag(equivalente.file.folder);

let nivelActual = tagRepresentante.split("/").length;

let subTemas = dv.pages(`#${tagRepresentante} and #índice`)
    .filter(ind => {
        let tagsInd = ind.tags?.filter(tag => tag.startsWith(tagRepresentante));
        if (!tagsInd) return false; 

        let tagIndLargo = tagsInd.map(tag => [tag, tag.split("/").length])
            .sort(([_, largo]) => largo)[0][1];

        return tagIndLargo == nivelActual + 1;
    });

let archivos = dv.pages(`#${tagRepresentante} and #nota`)
    .flatMap(archivo => {
        let resultado = [];
        let aliasesActual = archivo.aliases ? archivo.aliases : [];
        let referenciasActuales = [];
        if (archivo.referencias) {
            referenciasActuales = dv.array(archivo.referencias).distinct()
                .sort(ref => parseInt(ref, 10))
        }

        let esIndice = archivo.tags?.some(tag => tag.startsWith("índice"));
        let tags = archivo.tags?.filter(tag => tag.startsWith(tagRepresentante));
        if (!tags) tags = [];

        for (let tag of tags) {
            let etapa = esIndice ? conseguirEtapa(archivo) : archivo.etapa;

            let nombre = archivo.file.name;
            if (archivo.tipoCita == PAPER) {
                nombre = archivo.tituloInforme;
            } else if (archivo.tipoCita == LIBRO) {
                nombre = archivo.tituloObra;
                if (archivo.subtituloObra) {
                    nombre += `: ${archivo.subtituloObra}`;
                }
            }

            resultado.push({
                path: esIndice ? `${archivo.file.path}#Resumen` : archivo.file.path,
                nombre: nombre,
                tag: tag,
                etapa: etapa,
                aliases: aliasesActual
                    .filter(alias => !alias.includes("#")),
                referencias: referenciasActuales
            });
            
            dv.array(aliasesActual.filter(alias => alias.includes("#")))
                .groupBy(alias => alias.split("#")[1])
                .forEach(({ key, rows }) => {
                    let elementos = rows.values.slice();
    
                    resultado.push({
                        path: `${archivo.file.path}#${key}`,
                        nombre: (elementos.shift()).split("#")[0],
                        tag: tag,
                        etapa: etapa,
                        aliases: elementos
                            .map(alias => alias.split("#")[0]),
                        referencias: referenciasActuales
                    });
                });
        }

        return resultado;
    })
    .sort(({ referencias, ..._ }) => referencias ? dv.array(referencias).min() : 0)
    .groupBy(({ tag, ..._ }) => subTemas.findIndex(subTema => {
        let tagsInd = subTema.tags?.filter(tag => tag.startsWith(tagRepresentante));
        if (!tagsInd) return false; 

        let tagSubTema = tagsInd.map(tag => [tag, tag.split("/").length])
            .sort(([_, largo]) => largo)[0][0];

        return tag.startsWith(tagSubTema);
    }))
    .values
    .sort(({ key, rows }) => key)
    .map(({ key, rows }) => ({
        elementos: rows.map(({ path, nombre, etapa, aliases, referencias, ..._ }) => ({
            path: path,
            nombre: nombre,
            subnombre: referencias
                .map(referencia => `[${referencia}]`)
                .join(" "),
            largo: (aliases.length >= 2),
            etapa: etapa,
            descripcionSimple: false,
            descripcion: aliases.filter(alias => !alias.includes("#"))
        })),
        mostrarTitulo: async () => {
            if (key < 0) return;

            let subTema = subTemas[key];
            let tema = subTema.file.name;
            if (tema == "Índice") {
                let carpetaSubTema = subTema.file.folder.split("/").pop();
                tema = `${carpetaSubTema.charAt(0).toUpperCase()}${carpetaSubTema.slice(1)}`;
            }
            dv.el("div", `<h3 class="mostrarTitulo"> ${crearReferencia(subTema.file.path, "?")} ${tema} </h3> <hr>`);

            let tSubTema = app.vault.getAbstractFileByPath(subTema.file.path);
            let subTemaContenido = await app.vault.read(tSubTema);

            const indicadorResumen = "## Resumen\n---\n";
            const indicadorFinal = "## Archivos";

            let indiceResumen = subTemaContenido.indexOf(indicadorResumen) + indicadorResumen.length;
            let indiceFinal = subTemaContenido.indexOf(indicadorFinal);
            if (indiceFinal < 0) subTemaContenido.length;

            let contenidoMostrar = subTemaContenido.slice(indiceResumen, indiceFinal)
                .split("\n")
                .map(linea => `> ${linea}`)
                .join("\n");

            dv.paragraph(`> [!summary]- Resumen\n> # \n> ---\n${contenidoMostrar}`);
        },
        mostrarFinal: () => {

        }
    }));


await dv.view("_scripts/dataview/mostrarElementos", { lista: archivos });

function obtenerTag(carpeta) {
    return carpeta.trim()
        .replaceAll("-", "")
        .replaceAll(",", "")
        .replaceAll(" ", "-");
}

function conseguirEtapa(indice) {
    let etapasConsideradas = [];

    let tagRepresentanteActual = obtenerTag(indice.file.folder);    
    dv.pages(`#${tagRepresentanteActual} and -#índice`)
        .filter(archivo => archivo.etapa)
        .forEach(archivo => etapasConsideradas.push(archivo.etapa));
    
    let etapaFinal = "sin-empezar";
    if (etapasConsideradas.length > 0) {
        if (etapasConsideradas.some(etapa => etapa != "sin-empezar")) {
            etapaFinal = "empezado";
        } else if (etapasConsideradas.every(etapa => etapa == "ampliar")) {
            etapaFinal = "ampliar";
        } else if (etapasConsideradas.every(etapa => etapa == "terminado")) {
            etapaFinal = "terminado";
        }
    }

    return etapaFinal;
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}