async function crearEstructura(tp) {
    const {
        ETAPAS, FORMATO_DIA, SECCIONES,
        TEMPLATE: { etapa: TEMPLATE_ETAPA, coleccion: { estructuraDatos: TEMPLATE_ESTRUCTURA } }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION }, 
        DATOS: { 
            ARCHIVO: DATOS_ARCHIVO, ESTRUCTURA_DATOS: DATOS_ESTRUCTURA,
            FUNCIONES: { 
                lenguaje: DATOS_LENGUAJES, clase: DATOS_CLASE,
                tipoDeDato: { tipo: DATOS_TIPO }, manejador: DATOS_MANEJADOR
            },
            LENGUAJE: { lenguajes: LENGUAJES },
        },
        TAGS: { 
            coleccion: { 
                self: TAG_COLECCION, representante: TAG_REPRESENTANTE, 
                estructuraDatos: TAGS_ESTRUCTURAS, funciones: { lenguajes: TAGS_LENGUAJES, ...TAGS_FUNCIONES },
            },
            nota: TAGS_NOTA,
        },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const dv = app.plugins.plugins.dataview.api;

    let notaPseudocodigo = dv.pages(`#${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES[LENGUAJES.default]} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES.self}`)
        .first();
    let datosPrimitivos = notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
        ? notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
            .map(datos => ({ [DATOS_MANEJADOR.tipo]: DATOS_TIPO.primitivo, ...datos }))
        : [];

    let manejoTipoDeDatos = tp.user.manejarTipoDato(tp, datosPrimitivos);

    let titulo = tp.file.title.startsWith("Untitle") ? null : tp.file.title;

    let clase = tp.user.clase(tp, manejoTipoDeDatos, LENGUAJES.default, { [DATOS_CLASE.nombre]: titulo });
    let claseSelf = clase.generarSelf();

    let idClase = manejoTipoDeDatos.agregar(DATOS_TIPO.clase, claseSelf);
    await preguntar.formulario(tp, clase, "Ingresar datos de la estructura de datos");
    manejoTipoDeDatos.actualizar(DATOS_TIPO.clase, idClase, clase);

    let representante = dv.pages(`#${TAG_COLECCION}/${TAG_REPRESENTANTE} and #${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}`)
        .first();

    let texto = await tp.file.include(`[[${TEMPLATE_ETAPA}]]`);
    texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.infoGeneral}]]`);
    texto += `\n\n${"#".repeat(SECCIONES.operaciones.nivel)} ${SECCIONES.operaciones.texto}\n---\n`;
    texto += "Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura\n\n";
    // for (let funcion of estructuraDeDatos.metodos) {
        // texto += `${"#".repeat(SECCIONES.metodo.nivel)} ${funcion[DATOS_FUNCIONES.nombreFuncion]}\n---\n`;
        // texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.representarMetodoDv}]]`);
        // texto += "\n\n";
    // }

    let tNotaPseudocodigo = tp.file.find_tfile(notaPseudocodigo.file.path);
    if (!tNotaPseudocodigo) tNotaPseudocodigo = await tp.user.libreriaFunciones().crear.lenguaje(tp, LENGUAJES.default);

    await app.fileManager.processFrontMatter(tNotaPseudocodigo, (frontmatter) => {
        let primitivosNuevos = manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO.primitivo);
        let primitivosViejos = frontmatter[DATOS_LENGUAJES.tiposPrimitivos]
            ? frontmatter[DATOS_LENGUAJES.tiposPrimitivos]
            : [];

        for (let primitivoViejo of primitivosViejos) {
            let primitivoNuevo = primitivosNuevos
                .find(({ [DATOS_MANEJADOR.id]: id }) => primitivoViejo[DATOS_MANEJADOR.id] == id);

            if (primitivoNuevo) {
                primitivoNuevo[DATOS_MANEJADOR.valor] = primitivoViejo[DATOS_MANEJADOR.valor];
                primitivoNuevo[DATOS_MANEJADOR.apariciones] += primitivoViejo[DATOS_MANEJADOR.apariciones];

            } else if (primitivoViejo[DATOS_MANEJADOR.apariciones] > 0) {
                primitivosNuevos.push(primitivoViejo);

            }
        }

        frontmatter[DATOS_LENGUAJES.tiposPrimitivos] = primitivosNuevos;
    });

    let representacionClase = clase.generarRepresentacion();
    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
            [DATOS_ARCHIVO.tags]: [
                ...tp.user.obtenerTag(tp, representante[DATOS_ARCHIVO.tags]),
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
                `${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}/${TAGS_ESTRUCTURAS.estructura}`,
            ],
            [DATOS_ESTRUCTURA.nombre]: representacionClase[DATOS_CLASE.nombre],
            [DATOS_ESTRUCTURA.idEstructura]: idClase,
            [DATOS_ESTRUCTURA.datosTiposDeDatos]: manejoTipoDeDatos.obtenerTotal()
                .filter(({ [DATOS_MANEJADOR.tipo]: tipo }) => tipo != DATOS_TIPO.primitivo)
                .map(({ [DATOS_MANEJADOR.valor]: valor, ...datos }) => {
                    return {
                        [DATOS_MANEJADOR.valor]: valor.generarRepresentacion(),
                        ...datos,
                    };
                }),
        },
        carpeta: representante
            ? representante.file.folder
            : `${DIR_COLECCION.self}/${DIR_COLECCION.estructuraDatos}`,
        titulo: representacionClase[DATOS_CLASE.nombre],
        texto: texto,
    }
}

function editar() {

}

module.exports = () => ({
    crear: crearEstructura,
    editar: editar,
});