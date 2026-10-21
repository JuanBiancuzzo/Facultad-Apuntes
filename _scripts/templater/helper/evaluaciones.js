/* Cosas que hacer: 
 *  1. Chequear que el archivo sea una evaluacion, sino mensaje y salir
 *  2. Buscar con Regex (new RegExp("# Ejercicio[ ]*[\n]-{3,}[ ]*[\n]", "s")) el titulo de "# Ejercicio" y reemplazarlo con `${descripcion} del ${fecha}`
 *      * Guardar la posición del titulo y la longitud del titulo modificado para después revertilo
 *  3. Usar "app.commands.executeCommandById("better-export-pdf:export-current-file-to-pdf")" para generar el archivo
 *      * Ver como hacer para ejecutarlo y poder modificar el archivo mientras se ejecuta
 *      * Parece que en el momento de ejecutar el comando, se genera un archivo temporal por lo que ya se puede revertir los cambios, tal vez esperar un poco
 */
