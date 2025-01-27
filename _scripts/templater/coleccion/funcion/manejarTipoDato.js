const LARGO_ID = 50;
const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/*
 * Crear un archivo o guardar en ese archivo los tipos de datos según el lenguaje usado 
 *  En el caso de tipos de datos primitivos, agregarlos a los archivos de la libreria del lenguaje
 *  Todos otro tipos de datos depende en donde se los este usando, para saber de donde sacarlos
 *      Caso de la forma de guardar funciones, ahí debería agregarselos a los archivos del modulo o libreria
 *      En el caso de las estructuras de datos, debería guardarlas la misma estructura 
 */

class Contador {
    constructor(tp, datosPrevios = []) {
        this.datos = tp.user.constantes().DATOS.FUNCIONES.tipoDeDato;
        this.tipos = this.datos.tipo;

        this.tiposDeDatos = {
            [this.tipos.primitivo]: {},
            [this.tipos.struct]: {},
            [this.tipos.generico]: {},
        };

        for (let { [this.datos.id]: id, [this.tipos.self]: tipo, [this.datos.valor]: valor } of datosPrevios) {
            this.tiposDeDatos[tipo][id] = valor;
        }
    }

    /**
     * Agregar un dato que no existe
     * @param {string} tipo El tipo de valor que se esta agregando, puede ser Primitivo, Struct, Generico
     * @param {Object} valor El valor a ingresar
     * @returns {string | null} El id del valor aguardado, o null en el caso que no pueda agregarlo
     */
    agregar(tipo, valor) {
        if (!(tipo in this.tiposDeDatos[tipo])) 
            return null;

        let nuevoId = this.generarId();
        this.tiposDeDatos[tipo][nuevoId] = valor;
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

        this.tiposDeDatos[tipo][id] = valor;
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

        return this.tiposDeDatos[tipo][id];
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

        return delete this.tiposDeDatos[tipo][id];
    }

    /**
     * Devuelve un array con todos los tipos de datos guardados, 
     * @param {string} tipo La clasificación de los tipos
     * @returns {[{ id: string, valor: Object }]} Se devuelve una lista de todos los elementos, con sus ids, tipos y valores
     */
    obtenerInformacion(tipo) {
        if (!(tipo in this.tiposDeDatos)) 
            return [];

        return Object.entries(this.tiposDeDatos[tipo]).map(([id, valor]) => ({
            [this.datos.id]: id,
            [this.datos.valor]: valor,
        }));
    }

    /**
     * Devuelve un array con todos los tipos de datos guardados, 
     * @returns {[{ id: string, tipo: string, valor: Object }]} Se devuelve una lista de todos los elementos, con sus ids, tipos y valores
     */
    obtenerInformacion() {
        return Object.entries(this.tiposDeDatos).flatMap(([tipo, tiposDeDato]) => {
            return Object.entries(tiposDeDato).map(([id, valor]) => ({
                [this.datos.id]: id,
                [this.tipos.self]: tipo,
                [this.datos.valor]: valor,
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

module.exports = (tp) => Contador(tp);