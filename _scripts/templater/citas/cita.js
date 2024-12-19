const TIPO_LIBRO = "Libro";
const TIPO_PAPER = "Paper";
const TIPO_CURSO = "Curso";

const CITAS = [
    {
        tipo: TIPO_LIBRO, texto: "Citar Libro",
        citar: (tp) => {
            let cita = tp.user.libro();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.libro().describir(archivo),
    },
    {
        tipo: "Youtube", texto: "Citar Youtube",
        citar: (tp) => {
            let cita = tp.user.youtube();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.youtube().describir(archivo),
    },
    {
        tipo: "Web", texto: "Citar Página web",
        citar: (tp) => {
            let cita = tp.user.web();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.web().describir(archivo),
    },
    {
        tipo: "Wikipedia", texto: "Citar Wikipedia",
        citar: (tp) => {
            let cita = tp.user.wiki();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.wiki().describir(archivo),
    },
    {
        tipo: TIPO_PAPER, texto: "Citar Paper",
        citar: (tp) => {
            let cita = tp.user.paper();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.paper().describir(archivo),
    },
    {
        tipo: TIPO_CURSO, texto: "Citar curso online",
        citar: (tp) => {
            let cita = tp.user.curso();
            return [ cita.obtenerDefault, cita.actualizarDatos, cita.generarPreguntas ];
        },
        describir: (tp, archivo) => tp.user.curso().describir(archivo),
    },
]

async function generarCita(tp, numReferencia) {
    let tipoCita = await tp.system.suggester(
        CITAS.map(cita => cita.texto),
        CITAS.map(cita => cita.tipo),
        true, "Qué tipo de cita es?"
    );

    let template = tp.file.find_tfile("Cita - Template");
    let carpeta = app.vault.getAbstractFileByPath("_referencias");

    if (tipoCita == TIPO_LIBRO) {
        template = tp.file.find_tfile("Libro - Template");
        carpeta = app.vault.getAbstractFileByPath("biblioteca/libros");

    } else if (tipoCita == TIPO_PAPER) {
        template = tp.file.find_tfile("Paper - Template");
        carpeta = app.vault.getAbstractFileByPath("biblioteca/papers");

    } else if (tipoCita == TIPO_CURSO) {
        template = tp.file.find_tfile("Curso - Template");
        carpeta = app.vault.getAbstractFileByPath("cursos");
    }

    return await tp.file.create_new(
        template, `${numReferencia} - ${tipoCita}`, false, carpeta
    )
}

// editar esto
function describirCita(tp, archivo) {
    let tipoCita = archivo.tipoCita;
    let textos = CITAS.find(cita => cita.tipo === tipoCita)?.describir(tp, archivo);

    return (!textos) ? [] : textos.map(({ numReferencia, texto }) => ({
        archivo: archivo,
        tipoCita: tipoCita,
        numReferencia: numReferencia,
        texto: texto,
    }));
}

function descripcionTexto(desc) {
    return `[${desc.numReferencia}] ${desc.texto}`;
}

async function citarCita(tp, tipoCita, seguidorRef) {    
    const error = tp.user.error();

    let cita = CITAS.find(cita => cita.tipo === tipoCita);
    if (!cita) throw error.Prompt(`El tipo de cita "${tipoCita}" no existe todavia`);

    let [ obtenerDefault, actualizarDatos, generarPreguntas ] = cita.citar(tp);

    return await tp.user.crearPreguntas(
        tp, obtenerDefault,
        (tp, datos, respuesta) => actualizarDatos(tp, datos, respuesta, seguidorRef),
        generarPreguntas,
        "Completar para poder citar",
    );
}

async function editarCita(tp, tipoCita, seguidorRef, datosActuales) {
    const error = tp.user.error();

    let cita = CITAS.find(cita => cita.tipo === tipoCita);
    if (!cita) throw error.Prompt(`El tipo de cita "${tipoCita}" no existe todavia`);

    let [ obtenerDefault, actualizarDatos, generarPreguntas ] = cita.citar(tp);

    return await tp.user.crearPreguntas(
        tp, obtenerDefault,
        (tp, datos, respuesta) => actualizarDatos(tp, datos, respuesta, seguidorRef),
        generarPreguntas,
        "Completar para poder citar",
        datosActuales,
    );
}

module.exports = () => ({
    generar: generarCita,
    metadata: describirCita,
    describir: descripcionTexto,
    citar: citarCita,
    editar: editarCita,
})