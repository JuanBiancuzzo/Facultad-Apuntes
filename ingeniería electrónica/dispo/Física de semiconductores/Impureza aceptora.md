---
dia: 2023-08-25
tags:
  - carrera/ingeniería-electrónica/dispo/Física-de-semiconductores
  - nota/facultad
vinculoFacultad:
  - tema: Física de semiconductores
    capitulo: 1
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
Es un [[Dopaje|dopante]] ya que introduce átomos con un [[Electrón]] menos en su capa de valencia, introduciendo un [[Hueco]] $h^+$ en el [[Semiconductor]] pero sin agregar un [[Electrón]]. 

Esto permite tener un sitio de ligadura "vacante", y el átomo donor queda ionizado negativamente, produciendo una carga fija.

Podemos definir la concentración de aceptores como $$ N_a = [cm^{-3}] $$
### Cantidad de dopante
---
Si $N_a \ll n_i$, el dopaje es irrelevante (podemos aproximarlo a un [[Semiconductor intrínseco]]), esto implica que $n_0 = p_0 = n_i$ 

Si $N_a \gg n_i$, el dopaje controla la concentración de [[Carga eléctrica|portadores]] ([[Semiconductor extrínseco]]), esto implica que $$ \begin{matrix} p_0 = N_a && n_0 = \frac{n_i^2}{N_a}  \end{matrix} $$
En el caso que $p_0 \ll n_0$ se dirá que el semiconductor es de tipo $p$

### Concentración
---
La concentración de portadores libres es independiente de la temperatura para un amplio rango.
* A temperatura medias (entre $100~K$ y $450~K$), $n_0$ y $p_0$ no cambian
* A temperaturas altas, $n_i$ crece considerablemente y el semiconductor "se vuelve" [[Semiconductor intrínseco|intrínseco]] 
* A temperaturas muy bajas, no todas las impurezas liberan el $e^-$ y $n_0 < N_d$

### Concentración a temperatura ambiente
---
El material, prevalece la [[Neutralidad de carga]] por lo que $$ \rho = q \cdot \left( p_0 - N_a - n_0 \right) = 0 $$
Por lo que considerando la [[Ley de acción de masas]], se puede despejar la concentración de $h^-$ $$ p_0 = \frac{N_a}{2} + \sqrt{\left( \frac{N_a}{2} \right)^2 + n_i^2} $$