const MATERIAS = [
    "adc", "algebra 2", "algo 1", "algo 2", "algo 3", "analisis 2", "analisis 3", "aninfo",
    "bdd", "circuitos", "discreta", "dispo", "estructura", "fisica 1", "fisica 2", "fisica 3",
    "intro", "legal", "numerico", "orga", "proba", "redes", "seguridad", "señales", "sisop", "taller"
];

function whiteListArchivoFacultad(archivo) {
    return MATERIAS.includes(archivo.file.folder.split("/")[0]);    
}

module.exports = () => {
    return {
        archivoFacultad: whiteListArchivoFacultad
    };
};