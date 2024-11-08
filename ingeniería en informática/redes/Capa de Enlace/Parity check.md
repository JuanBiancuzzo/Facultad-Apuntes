---
dia: 2024-08-22
tags:
  - ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
  - ingeniería-en-informática/estructura/Sistemas-numéricos
  - ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - ingeniería-electrónica/estructura/Sistemas-numéricos
  - ingeniería-electrónica/redes/Capa-de-Enlace
aliases:
  - Paridad
  - Forward error correction
  - FEC
---
# Definición
---
El remitente incluye un bit adicional que indica que la cantidad de unos del [[Paquete|paquete]] completo es un par (o impar) (esto incluye el propio bit de paridad). Si ocurre una cantidad impar de errores, entonces este error es suficiente. Si este número es par, entonces no se detecta el error

Si la [[Probabilidad|probabilidad]] de error del [[Acceso a una red por cable|enlace]] es pequeña, esta técnica será suficiente, ya que la probabilidad de dos errores es baja. Sin embargo, se encontró que cuando ocurre un error de un bit, suele ocurrir más de uno. En condiciones de ráfaga, la probabilidad de detectar errores con esta técnica será de $50\%$, para eso es mejor el [[Cyclic Redundancy Check|método de CRC]]

En la generalización bidimensional del esquema de paridad, los datos se separan en $i$ filas, y $j$ columnas. Se calcula un valor por cada columna y por cada fila. Los resultantes $i + j + 1$ bits de paridad serán utilizados para la detección de errores

Sin errores tenemos lo siguiente $$ \begin{array}{ccccc|c} 
    1 & 0 & 1 & 0 & 1 & 1 \\
    1 & 1 & 1 & 1 & 0 & 0 \\
    0 & 1 & 1 & 1 & 0 & 1 \\\hline
    0 & 0 & 1 & 0 & 1 & 0 \\
\end{array} $$ y por ejemplo con un error $$ \begin{array}{ccccc|c} 
    1 & \colorbox{#6ecff6}{0} & 1 & 0 & 1 & 1 \\
    \colorbox{#6ecff6}{1} & \colorbox{#6ecff6}{0} & \colorbox{#6ecff6}{1} & \colorbox{#6ecff6}{1} & \colorbox{#6ecff6}{0} & \colorbox{#6ecff6}{0} \\
    0 & \colorbox{#6ecff6}{1} & 1 & 1 & 0 & 1 \\\hline
    0 & \colorbox{#6ecff6}{0} & 1 & 0 & 1 & 0 \\
\end{array} $$
Si ocurre un solo error, entonces podremos utilizar la combinación de filas y columnas para invertir el bit corrupto. Si ocurre más de un error, esto no podrá realizarse, pero esto permite capturar los errores cuando ocurrió una cantidad par de ellos

La habilidad del receptor de detectar los errores y poder corregirlos se conoce como forward error correction (FEC). Son usualmente utilizadas en dispositivos de almacenamiento y reproducción de audios
