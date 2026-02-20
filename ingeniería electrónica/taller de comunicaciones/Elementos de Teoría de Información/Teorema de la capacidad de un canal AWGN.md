---
dia: 2026-02-20
etapa: empezado
referencias: []
aliases:
  - Teorema de la capacidad de un canal Aditive, White, Gaussian Noise
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
> [!teorema]+ Teorema 8.2.2 (Capacidad de un canal AWGN) 
>  La [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria#Capacidad del canal|capacidad de un canal]] limitado en [[Ancho de banda|banda]] a $B ~ Hz$ con ruido aditivo, [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Ruido blanco|blanco gaussiano y gaussiano]] con [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|valor medio]] nulo y [[Valor cuadrático medio|valor cuadrático medio]] $\sigma^2 = N_0 ~ B$, y con una [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] de señal $P$ está dada por $$ \begin{align} 
>      c &= B ~ \log_2\left( 1 + \frac{P}{\sigma^2} \right) \\
>      &= B ~ \log_2\left( 1 + \frac{P}{N_0 ~ B} \right)
> \end{align} $$ donde $N_0$ es la [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Densidad espectral de potencia|densidad espectral de potencia]] del ruido, y en el caso de ser [[Ruido térmico|ruido térmico]] es representado por $kT$ donde $k$ es constante de Boltzmann y $T$ la temperatura
^teo-8-2-2

Notemos que la capacidad, al aumentar el ancho de banda $$ \lim_{B \to \infty} c = \lim_{B \to \infty} B ~ \log_2\left( 1 + \frac{P}{N_0 ~ B} \right) = \sqrt{2} ~ \frac{P}{N_0} $$ es decir, que aumentar el ancho de banda no aumenta la capacidad del canal de forma ilimitada

