---
dia: 2023-07-17
tags:
  - carrera/ingeniería-electrónica/seguridad/Contaminación-del-aire
  - nota/facultad
vinculoFacultad:
  - tema: Contaminación del aire
    capitulo: 13
    materia: Seguridad ambiental y del trabajo
    carrera: Ingeniería electrónica
---
# Definición
---
Este [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo]] asume que:
* El caudal másico $[g \cdot s^{-1}]$ es continuo y constante durante el período de tiempo seleccionado
* El [[Contaminación atmosférica|contaminante]] gaseoso o particulado con un diámetro menor a $10~\mu m$
* El viento es uniforme en toda la capa donde se produce la dispersión
* La distribución de la concentración en lo ancho y vertical de la columna es gaussiana
* Los [[Contaminación atmosférica|contaminantes]] tienen la misma densidad que la masa gaseosa que los contiene

El modelo produce $$ C(x, y, z, H) = \frac{Q}{2 u \pi \sigma_y \sigma_z} \exp{\left( -\frac{1}{2}\left( \frac{y}{\sigma_y} \right)^2 \right)} \left[ \exp{\left( -\frac{1}{2}\left( \frac{z - H}{\sigma_z} \right)^2 \right)} + \exp{\left( -\frac{1}{2}\left( \frac{z  + H}{\sigma_z} \right)^2 \right)}  \right] $$

Donde la concentración a nivel del suelo esta dada por $$ C(x, 0, 0, H) = \frac{10^6 \cdot Q}{u \pi \sigma_y \sigma_z} \cdot \exp{\left( -\frac{1}{2} \left( \frac{H}{\sigma_z}  \right)^2 \right)} $$
### Datos necesarios
---
* Caudal másico de emisión
* $h~[m]$ la altura real de la chimenea
* $Ds~[m]$ el diámetro interno en la boca de salida de la chimenea
* $Vs~[m \cdot s^{-1}]$ es la velocidad de salida de los gases en el tope de la chimenea
* $u~[m]$ la velocidad media del viento
* $Ts~[K]$ y $Ta~[K]$ la temperatura de los gases y del aire a la salida de la chimenea

Los coeficientes de dispersión $\sigma_y$ y $\sigma_z$ los podemos expresar como $$\begin{matrix}
\sigma_y = a \cdot x^n && \sigma_z = b \cdot x^n 
\end{matrix}$$
La altura efectiva de la chimenea $H$ se puede calcular como la suma de la altura de la chimenea $h$ y un $\Delta h$ que esta en función de:
* La diferencia de temperatura entre los gases y el aire [[ingeniería electrónica/seguridad/Contaminación del aire/Atmósfera|atmosférico]] 
* La velocidad de salida de los gases de escape
* La velocidad del viento

La velocidad del viento, la podemos medir a una altura menor y corregir usando $$ u_z = u_{z0} \cdot \left( \frac{h_z}{h_0} \right)^p $$ donde:
* $u_z$ es la velocidad a la altura $h_z$
* $u_{z0}$ es la velocidad del viento a la altura del anemómetro
* $h_z$ es la altura que se desea tener la velocidad
* $h_0$ es la altura del anemómetro (por defecto se asume 10 metros)
* $p$ depende de la [[Perfil térmico de la atmósfera|estabilidad del viento]], y si se esta en una zona urbana o rural 