---
dia: 2023-08-24
tags:
  - ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
  - ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
aliases:
  - Circuito resistivo puro#Circuito resistivo puro
  - Circuito capacitivo puro#Circuito capacitivo puro
  - Circuito inductivo puro#Circuito inductivo puro
  - CA
---
# Definición
---
Definimos corriente alterna como aquella [[Corriente eléctrica|corriente]] que varíe en la dirección o signo de la [[Señal|señal]] 

De forma ilustrativa, podemos pensarla como un [[Función coseno|coseno]] $$ v_q(t) = v_0 ~ \cos( \omega t + \phi_v ) $$ siendo $v_0$ la amplitud (o valor pico), $\omega$ la [[Función senoidal#^parametros|frecuencia angular]] y $\phi_v$ la [[Función senoidal#^parametros|fase inicial]] de la corriente

De forma similar, será para un [[Función seno|seno]] de esta forma, usando la [[Transformada de Fourier|transformada de Fourier]] podemos generalizarlo a cualquier señal

## Circuito resistivo puro
---
Planteamos, como con corriente estacionaria, la [[Ley de Ohm|ley de Ohm]]. Llegamos al valor de la corriente en el [[Circuito eléctrico|circuito]], que varía en función del tiempo, según la [[Tensión|tensión]] el [[Fuente de tensión|generador]] $$ \begin{align} 
    v_q(t) &= i(t) ~ R \\
    i(t) &= \frac{v_0}{R} ~ \cos( \omega t + \phi_v )
\end{align} $$
La corriente del circuito va a estar en fase con la tensión del generador, lo que varía (en función de la [[Resistor|resistencia]]) será la amplitud

## Circuito capacitivo puro
---
Planteamos, como con corriente estacionaria, la relación entre la [[Tensión|diferencia de potencial]] y las propiedades del [[Capacitor|capacitor]]. Como obtenemos la carga del capacitor, podemos derivar la expresión para encontrar la corriente que circula ![[Capacitor#^relacion-tension-corriente]]
$$ i(t) = C ~ \omega ~ v_0 ~ \cos\left(\omega t + \phi_v + \frac{\pi}{2} \right) $$
La corriente del circuito va a estar desfasada $\frac{\pi}{2}$ con la tensión del generador. Va a variar la amplitud (en función de la [[Capacitancia|capacidad]])

## Circuito inductivo puro
---
Si recordamos la [[Ley de Faraday#^tension-inducida|tensión inducida]] $\mathcal{E}$ de un [[Inductor|inductor]], y luego integramos en función del tiempo, podemos encontrar la corriente que circula por el mismo ![[Inductor#^relacion-tension-corriente]]
$$ i(t) = C ~ \omega ~ v_0 ~ \cos\left(\omega t + \phi_v + \frac{\pi}{2} \right) $$
La corriente del circuito va a estar desfasada $\frac{\pi}{2}$ con al tensión del generador. Va a variar la amplitud (en función del [[Autoinductancia|coeficiente de autoinductancia]] del material)