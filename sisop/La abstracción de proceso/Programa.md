---
dia: 2023-11-12
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
  - algo-1/Introducción-a-la-programación
  - embebidos/Diseño-desarrollo-y-depuración
---
### Definición
---
Es un [[Archivo|archivo]] que posee toda la información de como construir un [[Proceso]] en [[Memoria]]. Un programa contiene
* Formato de identificación binaria
	* Cada archivo ejecutable posee meta información describiendo el formato ejecutable. Esto permite al [[Kernel]] interpretar la información contenida en el mismo archivo
* Common Object File Format
* Executable and [[Compilador#Fase de linkeo|linking]] format
* Instrucciones de [[Código de máquina|lenguaje de máquina]]
	* Almacena el código del algoritmo del programa
* Dirección del punto de entrada del programa
	* Identifica la [[Dirección de memoria|dirección]] la de instrucción con la cual la ejecución del programa debe iniciar
* Datos
	* El programa contiene valores de los datos con los cuales se deben inicializar variables, valores de constantes y de literales utilizadas en el programa
* Símbolos y tablas de Realocación
	* Describe la ubicación y los nombres de las funciones y variables de todo el programa, así como otra información
* Bibliotecas compartidas
	* Describe los nombres de las bibliotecas compartidas que son utilizadas por el programa en tiempo de ejecución  así como también la ruta del linker dinámico que debe ser usado para cargar dicha biblioteca
* Otra información
	* El programa contiene además otra información necesaria para terminar de construir el [[Proceso]] en [[Memoria]]

#### Transformación a un [[Proceso]]
---
1. El [[Sistema operativo|SO]] debe carga el programa, su código y cualquier dato estático en la [[Memoria]]. Los programas residen en disco en algún formato ejecutable, en [[Linux]] este formato es elf
	* En los SO antiguos esto se realizaba de forma abrupta (eagerly) instrucciones y datos
	* En los SO modernos se realiza de forma perezosa (lazily), cargando lo que se necesite según se necesite.

2. Se crea la [[Stack|pila]] de ejecución en base a reservar cierta cantidad de memoria, la misma se inicializa por ejemplo si usamos `C` con `argv` y `argc` del `main()`

3. Se crea el [[Heap]] en base a reservar otra cierta cantidad de memoria, el heap sirve para reserva de memoria dinámica, en `C` se crea y se destruyen estructuras de memoria dinámica con `malloc()` y `free()`

4. El SO realizará otras operaciones, varias de ellas relacionadas con operaciones de entrada y salida de datos
	* Por ejemplo, en los SO [[Unix|Unix-like]] cada [[Proceso]] posee por defecto 3 [[File descriptor|descriptores de archivos abiertos]]
		* Standard Input
		* Standard Output
		* Standard Error

5. Una vez que todo lo anterior sucedió, una última cosa sucede, se setea el punto de entrada de ejecución (entry point) de ejecución de las instrucciones del programa en el `main()`

