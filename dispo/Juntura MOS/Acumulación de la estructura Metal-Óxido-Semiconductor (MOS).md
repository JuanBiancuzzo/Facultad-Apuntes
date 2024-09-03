---
dia: 2023-11-03
tags:
  - dispo/Juntura-MOS
  - nota/facultad
---
### Definición
---
Dada una [[Estructura Metal-Óxido-Semiconductor|estructura MOS]] [[Estructura Metal-Óxido-Semiconductor con polarización|polarizada]], sabemos que en [[Tensión de Flatband|Flatband]] al distribución de portadores mayoritarios en el [[Semiconductor|SC]] es uniforme e igual al [[Dopaje|dopaje]]

A un lado de Flatband ($V_{GB} > V_{FB}$) "se quitan" mayoritarios generando la SCR ([[Vaciamiento de la estructura Metal-Óxido-Semiconductor|régimen de vaciamiento]]).

Al otro lado de Flatband ($V_{GB} < V_{FB}$) "se inyectan" mayoritarios generando un exceso (acumulación) en la interfaz $Si$/$SiO_2$

La [[Carga eléctrica#Cargas libres|carga]] acumulada es del mismo tipo que el dopaje (positivo para [[Impureza aceptora|aceptores]], negativa para [[Impureza donora|donores]])

La estructura se comporta como un [[Capacitor de placas planas paralelas|capacitor de placas planas paralelas]]. Por lo que 
* Carga de acumulación $$ Q'_{acum} = - C'_{ox} ~ (V_{GB} - V_{FB}) $$
* Carga en el gate $$ Q'_{gate} = -Q'_{acum} = C'_{ox} ~ (V_{GB} - V_{FB}) $$
* Extensión de la SCR $$ x_d = 0 $$
* Caída de [[Tensión|tensión]] en el bulk $$ V_B = 0 $$
* Caída de tensión en el óxido $$ V_{ox} = V_{GB} - V_{FB} $$

#### Concentraciones de los portadores
---
![[Concentración de portadores en la estructura MOS en regimen de acumulación.webp]]

#### Densidad de carga espacial
---
![[Densidad de carga en una estructura MOS en regimen de acumulación.webp]]

#### [[Campo eléctrico]]
---
![[Campo eléctrico en una estructura MOS en regimen de acumulación.webp]]

#### [[Función potencial|Función potencial]]
---
![[Potencial eléctrico en una estructura MOS en regimen de acumulación.webp]]
