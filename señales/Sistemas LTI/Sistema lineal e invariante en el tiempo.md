---
dia: 2024-03-11
materia: señales
capitulo: 2
aliases:
  - Sistema LTI
---
### Definición
---
El análisis de los [[Sistema|sistemas]] en tiempo discreto y continua depende fuertemente de la estructura intrínseca de los mismo, siendo el mismo en general complejo desde el punto de vista matemático y operacional

Sin embargo, en el caso de los sistemas [[Sistema lineal|lineales]] e [[Sistema invariante en el tiempo|invariantes en el tiempo]] permiten un análisis en extremo simple

La linealidad nos permite usar el [[Principio de superposición|principio de superposición]] y la invarianza en el tiempo permite los retardos temporales de la señal de entrada.

#### Conclusión
---
* Para determinar la salida de un sistema LTI a una entrada determinada es necesario realizar una [[Convolución|suma o integral de convolución]] entre la respuesta al impulso del sistema y la mencionada entrada
* Los sistemas LTI, tanto de tiempo continuo como de tiempo discreto, están caracterizados completamente por su [[Representación de una señal mediante impulsos|respuesta al impulso]] $h(t)$ o $h[n]$. Esto es privativo de dichos sistemas. Otros sistemas no lineales y/o variantes en el tiempo no puede ser caracterizados por una respuesta al impulso
* Muchas propiedades de interés de los sistemas LTI pueden determinarse mediante un análisis de la respuesta al impulso