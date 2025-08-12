---
dia: 2024-02-20
tags:
  - carrera/ingeniería-electrónica/dispo/Amplificador-emisor-y-source-común
  - nota/facultad
vinculoFacultad:
  - tema: Amplificador emisor y source común
    capitulo: 7
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
Generalmente, en cualquier [[Circuito eléctrico|circuito]] se necesitan múltiples [[Fuente de corriente|fuentes]] que absorban y entreguen [[Corriente eléctrica|corriente]]. Éstas se puede construir a partir de una única [[Fuente de corriente|fuente de corriente]]

![[Fuentes y sumideros de corriente.webp]]

$$ I_{out ~ 1} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_1}{\left( \frac{W}{L} \right)_R} $$ $$ I_{out ~ 2} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_2}{\left( \frac{W}{L} \right)_R} $$
$$ I_{out ~ 4} = I_{out ~ 1} ~ \frac{\left( \frac{W}{L} \right)_4}{\left( \frac{W}{L} \right)_3} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_4 ~ \left( \frac{W}{L} \right)_1}{\left( \frac{W}{L} \right)_3 ~ \left( \frac{W}{L} \right)_R} $$

## Efecto de modulación del largo del canal
---
Veamos un ejemplo con una [[Copia de corriente espejo simple#Fuente espejo con P-MOSFET|copia de corriente espejo implementado con MOSFET de canal P]]

![[Efecto de modulación del largo del canal en una copia de corriente espejo P-MOSFET.webp]]

La corriente normalizada ya no es igual para $M_1$ y $M_2$ por el [[Efecto de modulación del largo del canal|efecto de modulación del largo del canal]]. Entonces, la copia de corriente no es exacta.

## Cómo se implementa $I_{REF}$
---
La forma más sensilla es reemplazar la fuente ideal por una [[Resistencia|resistencia]] ($R_{REF}$)

![[Copia de corriente espejo implementada con una resistencia de referencia.webp]]

Conociendo $I_{REF}$, se despeja $V_{REF}$ y el cálculo de $R_{REF}$ es muy sencillo $$ V_R = V_{REF} = R_{REF} ~ I_{REF} \implies R_{REF} = \frac{V_{REF}}{I_{REF}} $$
Si a partir de un [[Circuito eléctrico|circuito]] con $R_{REF}$ conocido debemos calcular $I_{REF}$, debemos resolver la malla de referencia $$ \begin{matrix} 
	V_{DD} + V_{GS} - V_{REF} = 0 \\
	V_{REF} = I_{REF} ~ R_{REF} = - I_{D1} ~ R_{REF} \\
	I_{D1} = - \frac{1}{2} \mu_p ~ C'_{ox} \left( \frac{W}{L} \right)_1 ~ (V_{GS} - V_T)^2 \\
	V_{DD} + V_{GS} - \frac{1}{2} \mu_p ~ C'_{ox} \left( \frac{W}{L} \right)_1 (V_{GS} - V_T)^2 ~ R_{REF} = 0
\end{matrix} $$
Se resuelve la ecuación cuadrática para obtener $V_{GS}$, nos quedamos con la única solución coherente y luego calculamos $I_{REF} = -I_{D1}$