---
dia: 2023-09-06
materia: dispo
capitulo: 3
---
### Definición
---
La [[Juntura PN]] es un [[Diodo]] 

![[Diodo de Juntura PN gráfico.png|300]]

Al aplicar una [[Tensión]] ($V_D = V_{PN}$) al [[Diodo]] se modifica la condición de equilibrio y se observan dos consecuencias principales 
* La [[Aproximación de vaciamiento#Polarización aplicada|región de vaiamiento aumenta o se reduce]]
* Circula [[Corriente eléctrica|corriente]]

Podemos el porque en la [[Juntura PN con polarización]].
#### Aplicando una tensión de polarización
---
Al aplicar una [[Tensión]] de polarización, la [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración de portadores]] se modifica

##### Para $V_D > 0$ (en [[Convención de signos para la tensión de polarización#Polarización directa|directa]])
$$ \Delta V_{SCR} \downarrow = \phi_B - V_D < \phi_B \implies |E_{SCR}| \downarrow ~ \implies |J_{arr}| \downarrow $$
Donde $\phi_B$ es el [[Potencial de built-in]], $E$ es el [[Campo eléctrico]] y $J_{arr}$ es la [[Corriente de arrastre|densidad de corriente de arrastre]]

![[Concentración de portadores en escala logarítmica en directa.png|450]]

Se altera el balance de [[Corriente eléctrica|corrientes]] $$ |J_{dif}| > |J_{arr}| $$ donde $J_{dif}$ es la [[Corriente de difusión|densidad de corriente de difusión]]

Debido a este desbalance, aparece una [[Corriente eléctrica]] neta (de difusión) en la SCR
* Inyección de [[Hueco|huecos]] $h^+$ en n-QNR y de [[Electrón|electrones]] $e^-$ en p-QNR
* Exceso de minoritarios en regiones QNR
* Prevalece la [[Recombinación]]

Hay una gran difusión de $h^+$ en n-QNR y de $e^-$ en p-QNR entonces la corriente puede ser grande

##### Para $V_D < 0$ (en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]])
$$ \Delta V_{SCR} \uparrow = \phi_B - V_D > \phi_B \implies |E_{SCR}| \uparrow ~ \implies |J_{arr}| \uparrow $$
Donde $\phi_B$ es el [[Potencial de built-in]], $E$ es el [[Campo eléctrico]] y $J_{arr}$ es la [[Corriente de arrastre|densidad de corriente de arrastre]]

![[Concentración de portadores en escala logarítmica en inversa.png|450]]

Se altera el balance de [[Corriente eléctrica|corrientes]] $$ |J_{arr}| > |J_{dif}| $$ donde $J_{dif}$ es la [[Corriente de difusión|densidad de corriente de difusión]]

Debido a este desbalance, aparece una [[Corriente eléctrica]] neta (de arrastre) en la SCR
* Extracción de [[Hueco|huecos]] $h^+$ en n-QNR y de [[Electrón|electrones]] $e^-$ en p-QNR
* Déficit de minoritarios en regiones QNR
* Prevalece la [[Generación]]

Hace falta compensar pocos $h^+$ en n-QNR y $e^-$ en p-QNR por lo tanto la corriente es pequeña y negativa