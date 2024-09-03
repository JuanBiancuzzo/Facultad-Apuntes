---
dia: 2023-08-25
tags:
  - dispo/Física-de-semiconductores
  - nota/facultad
---
### Definición
---
Es un [[Dopaje|dopante]] ya que introduce átomos con un [[Electrón]] más en su capa de valencia, introduciendo un $e^-$ en el [[Semiconductor]] pero sin agregar un [[Hueco]]. 

Esto permite tener un $e^-$ débilmente ligado, y el átomo donor queda ionizado positivamente, produciendo una carga fija.

Podemos definir la concentración de donores como $$ N_d = [cm^{-3}] $$
##### Cantidad de dopante
---
Si $N_d \ll n_i$, el dopaje es irrelevante (podemos aproximarlo a un [[Semiconductor intrínseco]]), esto implica que $n_0 = p_0 = n_i$ 

Si $N_d \gg n_i$, el dopaje controla la concentración de [[Carga eléctrica|portadores]] ([[Semiconductor extrínseco]]), esto implica que $$ \begin{matrix} n_0 = N_d && p_0 = \frac{n_i^2}{N_d}  \end{matrix} $$
En el caso que $n_0 \ll p_0$ se dirá que el semiconductor es de tipo $n$

##### Concentración
---
La concentración de portadores libres es independiente de la temperatura para un amplio rango.
* A temperatura medias (entre $100~K$ y $450~K$), $n_0$ y $p_0$ no cambian
* A temperaturas altas, $n_i$ crece considerablemente y el semiconductor "se vuelve" [[Semiconductor intrínseco|intrínseco]] 
* A temperaturas muy bajas, no todas las impurezas liberan el $e^-$ y $n_0 < N_d$

##### Concentración a temperatura ambiente
---
El material, prevalece la [[Neutralidad de carga]] por lo que $$ \rho = q \cdot \left( N_d + p_o - n_0 \right) = 0 $$
Por lo que considerando la [[Ley de acción de masas]], se puede despejar la concentración de $e^-$ $$ n_0 = \frac{N_d}{2} + \sqrt{\left( \frac{N_d}{2} \right)^2 + n_i^2} $$