---
dia: 2024-05-15
materia: señales
capitulo: 6
aliases:
  - Convolución cíclica
---
### Definición
---
Dadas dos funciones $f, ~g \in L_{2\pi}^1(\mathbb{R})$, denotamos por $f \ast g$ su convolución periódica $$ (f \ast g)(x) = \frac{1}{2\pi} \int_{0}^{2\pi} f(x - \eta) g(\eta) ~ d\eta $$
La convolución $f \ast g$ se puede definir también para otras clases de funciones. Solamente se pide que la integral exista en el sentido de Lebesgue para casi todo $x$ en $\mathbb{R}$

#### Propiedades
---
Sean $f, ~g : \mathbb{R} \to \mathbb{C}$ dos funciones $2\pi$-periódicas Lebesgue-medibles y tales que su convolución $f \ast g$ está definida casi en todas partes. Entonces $f \ast g$ también es $2\pi$-periódica

##### Propiedad asociativa de la convolución periódica
---
$$ (f \ast g) \ast h = f \ast (g \ast h) $$

##### Propiedad conmutativa de la convolución periódica
---
$$ f \ast g = g \ast f $$
