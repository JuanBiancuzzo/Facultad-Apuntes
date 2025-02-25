async function eliminarArchivo(tp, tArchivo, mensaje = undefined) {
    if (mensaje) {
        new Notice(`Hubo un error\n${mensaje}`);
        console.log(`Hubo un error\n${mensaje}`);
    }

    const RESPUESTA_AFIRMATIVA = 1;
    const respuestaEliminar = await tp.system.suggester(
        ["Si, quiero eliminar este archivo", "No, no quiero eliminar este archivo"],
        [RESPUESTA_AFIRMATIVA, undefined],
        false, "Quiere eliminar este archivo?"
    );

    if (respuestaEliminar == RESPUESTA_AFIRMATIVA) {       
        await app.vault.trash(tArchivo, true);
    }
}

async function eliminarArchivoDirectamente(tArchivo, mensaje = undefined) {
    if (mensaje) {
        new Notice(`Hubo un error\n${mensaje}`);
        console.log(`Hubo un error\n${mensaje}`);
    }

    await app.vault.trash(tArchivo, true);
}

module.exports = () => {
    return {
        preguntar: eliminarArchivo,
        directo: eliminarArchivoDirectamente
    };
};