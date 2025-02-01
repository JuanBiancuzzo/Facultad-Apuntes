const LARGO_ID = 50;
const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

class Contador {
    constructor(tp, datosPrevios = []) {
        const { 
            DATOS: { FUNCIONES: { tipoDeDato: { tipo: DATOS_TIPO }, manejador: DATOS_MANEJADOR } } 
        } = tp.user.constantes();

        this.config = DATOS_MANEJADOR;
        this.tiposDeDatos = {
            [DATOS_TIPO.primitivo]: {},
            [DATOS_TIPO.struct]: {},
            [DATOS_TIPO.generico]: {},
        };

        for (let { [this.config.id]: id, [this.config.tipo]: tipo, [this.config.valor]: valor } of datosPrevios) {
            if (!(tipo in this.tiposDeDatos)) 
                continue

            this.tiposDeDatos[tipo][id] = {
                [this.config.valor]: valor,
                [this.config.apariciones]: 0,
                [this.config.previo]: true,
            };
        }
    }

    /**
     * Agregar un dato que no existe
     * @param {string} tipo El tipo de valor que se esta agregando, puede ser Primitivo, Struct, Generico
     * @param {Object} valor El valor a ingresar
     * @returns {string | null} El id del valor aguardado, o null en el caso que no pueda agregarlo
     */
    agregar(tipo, valor) {
        if (!(tipo in this.tiposDeDatos)) 
            return null;

        let nuevoId = this.generarId();
        this.tiposDeDatos[tipo][nuevoId] = {
            [this.config.valor]: valor,
            [this.config.apariciones]: 1,
            [this.config.previo]: false,
        };

        return nuevoId;
    }

    /**
     * Actualizar el valor dado utilizando el id
     * @param {Object} valor El valor a actualizar
     * @param {string} tipo El tipo del valor a actualizar
     * @param {string} id El identificador del valor a actualizar
     * @returns {boolean} Se devuelve true si se pudo actualizar
     */
    actualizar(tipo, id, valor) {
        if (!(tipo in this.tiposDeDatos) || !(id in this.tiposDeDatos[tipo])) 
            return false;

        this.tiposDeDatos[tipo][id][this.config.valor] = valor;
        return true;
    }

    /**
     * Dado el id devuelve el valor guardado
     * @param {string} tipo El tipo del valor a actualizar
     * @param {string} id El id del elemento a eliminar
     * @returns {Objecto | null} Devuelve el objeto con ese id, o null en el caso de no pueda encontrarlo
     */
    obtener(tipo, id) {
        if (!(tipo in this.tiposDeDatos) || !(id in this.tiposDeDatos[tipo])) 
            return null;

        return this.tiposDeDatos[tipo][id][this.config.valor];
    }

    /**
     * Se usa para indicar que se utiliza un tipo de dato en algún otro lugar
     * @param {string} tipo El tipo del valor a indicar
     * @param {string} id El id del elemento a indicar
     * @returns {boolean} Se devuelve true si se pudo indicar 
     */
    aparicion(tipo, id) {
        if (!(tipo in this.tiposDeDatos) || !(id in this.tiposDeDatos[tipo])) 
            return false;

        this.tiposDeDatos[tipo][id][this.config.apariciones]++;
        return true;
    }

    /**
     * Dado el id y el tipo devuelve si existe 
     * @param {string} tipo El tipo del valor a actualizar
     * @param {string} id El id del elemento a eliminar
     * @returns {boolean} Devuelve el true si existe el id con ese tipo
     */
    existe(tipo, id) {
        if (!(tipo in this.tiposDeDatos)) 
            return false;

        return id in this.tiposDeDatos[tipo];
    }

    /**
     * Eliminar un elemento usando su id
     * @param {string} tipo El tipo del valor a actualizar
     * @param {string} id El id del elemento a eliminar
     * @returns {boolean} Se devuelve true si se pudo eliminar 
     */
    eliminar(tipo, id) {
        if (!(tipo in this.tiposDeDatos)) return false;

        this.tiposDeDatos[tipo][id][this.config.apariciones]--;

        if (this.tiposDeDatos[tipo][id][this.config.apariciones] <= 0 && !this.tiposDeDatos[tipo][id][this.config.previo]) {
            return delete this.tiposDeDatos[tipo][id];
        }

        return true;
    }

    /**
     * Devuelve un array con todos los tipos de datos guardados, 
     * @param {string} tipo La clasificación de los tipos
     * @returns {[{ id: string, valor: Object }]} Se devuelve una lista de todos los elementos, con sus ids, tipos y valores
     */
    obtenerInformacion(tipo) {
        if (!(tipo in this.tiposDeDatos)) 
            return [];

        return Object.entries(this.tiposDeDatos[tipo])
            .map(([id, objeto]) => ({
                [this.config.id]: id,
                [this.config.valor]: objeto[this.config.valor],
                [this.config.apariciones]: objeto[this.config.apariciones],
            }));
    }

    /**
     * Devuelve un array con todos los tipos de datos guardados, 
     * @returns {[{ id: string, tipo: string, valor: Object }]} Se devuelve una lista de todos los elementos, con sus ids, tipos y valores
     */
    obtenerTotal() {
        return Object.entries(this.tiposDeDatos).flatMap(([tipo, tiposDeDato]) => {
            return Object.entries(tiposDeDato)
                .map(([id, objeto]) => ({
                    [this.config.id]: id,
                    [this.config.tipo]: tipo,
                    [this.config.valor]: objeto[this.config.valor],
                    [this.config.apariciones]: objeto[this.config.apariciones],
                }));
        });
    }

    generarId() {
        let resultado = [...Array(LARGO_ID)].map(_ => "");

        do {
            for (let i = 0; i < LARGO_ID; i++) {
                resultado[i] = CARACTERES.charAt(Math.floor(Math.random() * CARACTERES.length));
            }

        } while(Object.values(this.tiposDeDatos).some(tiposDeDatos => resultado.join("") in tiposDeDatos));

        return resultado.join("");
    }
}

module.exports = (tp, datosPrevios = []) => new Contador(tp, datosPrevios);