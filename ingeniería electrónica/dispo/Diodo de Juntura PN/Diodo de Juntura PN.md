---
dia: 2023-09-06
tags:
  - ingeniería-electrónica/dispo/Diodo-de-Juntura-PN
  - nota/facultad
---
# Definición
---
La [[Juntura PN|juntura PN]] es un [[Diodo|diodo]] 

![[Diodo de Juntura PN gráfico.webp|300]]

Al aplicar una [[Tensión|tensión]] ($V_D = V_{PN}$) al [[Diodo|diodo]] se modifica la condición de equilibrio y se observan dos consecuencias principales 
* La [[Aproximación de vaciamiento#Polarización aplicada|región de vaciamiento aumenta o se reduce]]
* Circula [[Corriente eléctrica|corriente]]

Podemos el porque en la [[Juntura PN con polarización|juntura PN con polarización]].
## Aplicando una tensión de polarización
---
Al aplicar una [[Tensión|tensión]] de polarización, la [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración de portadores]] se modifica

### Para $V_D > 0$ (en [[Convención de signos para la tensión de polarización#Polarización directa|directa]])
$$ \Delta V_{SCR} \downarrow = \phi_B - V_D < \phi_B \implies |E_{SCR}| \downarrow ~ \implies |J_{arr}| \downarrow $$
Donde $\phi_B$ es el [[Potencial de built-in|potencial de built-in]], $E$ es el [[Campo eléctrico|campo eléctrico]] y $J_{arr}$ es la [[Corriente de arrastre|densidad de corriente de arrastre]]

![[Concentración de portadores en escala logarítmica en directa.webp|450]]

Se altera el balance de [[Corriente eléctrica|corrientes]] $$ |J_{dif}| > |J_{arr}| $$ donde $J_{dif}$ es la [[Corriente de difusión|densidad de corriente de difusión]]

Debido a este desbalance, aparece una [[Corriente eléctrica|corriente]] neta (de difusión) en la SCR
* Inyección de [[Hueco|huecos]] $h^+$ en n-QNR y de [[Electrón|electrones]] $e^-$ en p-QNR
* Exceso de minoritarios en regiones QNR
* Prevalece la [[Recombinación|recombinación]]

Hay una gran difusión de $h^+$ en n-QNR y de $e^-$ en p-QNR entonces la corriente puede ser grande

### Para $V_D < 0$ (en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]])
---
$$ \Delta V_{SCR} \uparrow = \phi_B - V_D > \phi_B \implies |E_{SCR}| \uparrow ~ \implies |J_{arr}| \uparrow $$
Donde $\phi_B$ es el [[Potencial de built-in|potencial de built-in]], $E$ es el [[Campo eléctrico|campo eléctrico]] y $J_{arr}$ es la [[Corriente de arrastre|densidad de corriente de arrastre]]

![[Concentración de portadores en escala logarítmica en inversa.webp|450]]

Se altera el balance de [[Corriente eléctrica|corrientes]] $$ |J_{arr}| > |J_{dif}| $$ donde $J_{dif}$ es la [[Corriente de difusión|densidad de corriente de difusión]]

Debido a este desbalance, aparece una [[Corriente eléctrica|corriente]] neta (de arrastre) en la SCR
* Extracción de [[Hueco|huecos]] $h^+$ en n-QNR y de [[Electrón|electrones]] $e^-$ en p-QNR
* Déficit de minoritarios en regiones QNR
* Prevalece la [[Generación|generación]]

Hace falta compensar pocos $h^+$ en n-QNR y $e^-$ en p-QNR por lo tanto la corriente es pequeña y negativa