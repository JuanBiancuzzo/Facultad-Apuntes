---
dia: 2023-11-08
materia: dispo
capitulo: 5
---
### Definición
---
Dada una [[Estructura Metal-Óxido-Semiconductor (MOS)|Estructura MOS]] [[Estructura Metal-Óxido-Semiconductor (MOS) con polarización|polarizada]], para $V_{GB} > V_T$, donde $V_T$ es la [[Tensión umbral]]. La concentración de [[Electrón|electrones]] en la interfaz $Si$/$SiO_2$ supera a la concentración de [[Impureza aceptora|átomos aceptores]] por lo que se produce la inversión del material

![[Concentración de portadores en una estructura metal óxido semiconductor en inversión.png]]

La concentración de [[Electrón|electrones]] en la interfaz $Si$/$SiO_2$ está modulada por $V_{GB} \implies V_{GB} \uparrow \implies n(0) \uparrow \implies |Q'_n| \uparrow$ . El [[Campo eléctrico]] controla la densidad de la [[Carga eléctrica|carga]] móvil. Esta es la esencia del [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]].

#### Relación carga ($Q'_n$) vs. Tensión de control ($V_{GB}$)
---
Para calcular $Q'_n$ vs. $V_{GB}$ utilizaremos la [[Aproximación de carga superficial]]: la capa de electrones de la superficie del [[Semiconductor]] es mucho más delgada que cualquier otra dimensión del problema ($t_{ox}$, $x_d$)

![[Inversión de la estructura Metal-Óxido-Semiconductor (MOS)#Densidad de Carga eléctrica carga espacial]]

Tenemos que la carga en la capa de inversión es $$ |Q'_n| \propto n(0) \propto \exp \left( \frac{\phi(0)}{V_{th}} \right) $$ y la carga en la región de vaciamiento es $$ |Q'_B| \propto \sqrt{\phi(0)} $$
Entonces, a medida que $V_{GB} \uparrow$ y $\phi(0) \uparrow$, $|Q'_n|$ cambiará mucho, pero $|Q'_B|$ cambiará muy poco. 

Varias consecuencias
* $x_d$ no aumenta demasiado después de superado el umbral $$ x_d(int.) \simeq x_d(V_T) = \sqrt{\frac{2 \varepsilon_s (-2 \phi_p)}{q ~ N_a}} = x_{d ~ max}$$
* $V_B$ no aumenta demasiado después de superado el umbral $$ V_B(inv.) \simeq V_B(V_T) = -2 \phi_p $$
* Todo la diferencia de [[Potencial eléctrico|potencial]] adicional una vez superado $V_T$ es utilizado para aumentar la inversión de carga $Q'_n$. 


##### Concentraciones de los [[Portador de carga|portadores]]
---
![[Concentración de portadores en la estructura MOS en regimen de inversión.png]]

##### Densidad de [[Carga eléctrica|carga]] espacial
---
![[Densidad de carga en una estructura MOS en regimen de inversión.png]]

##### [[Campo eléctrico]]
---
![[Campo eléctrico en una estructura MOS en regimen de inversión.png]]

##### [[Potencial eléctrico|Función potencial]]
---
![[Potencial eléctrico en una estructura MOS en regimen de inversión.png]]
