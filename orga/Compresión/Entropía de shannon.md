---
dia: 2023-04-03
materia: orga
capitulo: 4
---
### Definición
---
Se calcula como el promedio de [[Bit de información|bits]] que mande en cada mensaje. Por lo tanto se puede calcular esto de la siguiente forma
$$ H = -\sum_i \mathbb{P}(x_i) \cdot log_2(\mathbb{P}(x_i)) $$

Donde $x_i$ es el evento que se quiere mandar, y por lo tanto $\mathbb{P}(x_i)$ es la probabilidad que ocurra ese [[Evento]].

Esta entropía nos va a dar una idea de que tan impredecible es un fenomeno. Ya que se compensan la probabilidad de un evento y los bits de información de ese evento.

Veamos un ejemplo de una moneda, donde la probabilidad de cara es $x \in [0,1]$ y la probabilidad de ceca es $1-x$. Si calculamos $H(x)$ de este problema, nos queda
![[Entropía de shannon.png|600]]

Donde vemos que cuando $x = 0.5$ que es el momento donde es más dificil predecir si la moneda es cara o ceca, es donde la entropia es mayor. También en los extremos donde la probabilidad de que sea cara, o en otro extremos que sea ceca, es $1$ la entropía termina siendo $0$ ya que no es necesario mandar [[Información]].