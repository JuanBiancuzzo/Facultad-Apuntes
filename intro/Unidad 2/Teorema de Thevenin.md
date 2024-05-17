---
dia: 2023-01-23
materia: intro
capitulo: 2
---
### Definición
---
Se establece que un [[Circuito lineal]] de dos terminales puede reemplazarse por un circuito equivalente que consta de una [[Fuente de tensión]] $V_{th}$ en [[Elementos en serie|serie]] con un [[Resistor]] $R_{th}$, donde $V_{th}$ es la [[Tensión]] de [[Circuito eléctrico|circuito]] abierto en las terminales y $R_{th}$ es la entrada o resistencia equivalente en las terminales cuando las fuentes independientes se apagan

#### Aplicación
---
1. Se elige un [[Resistor]] "de carga" (puede ser también una [[Fuente de tensión]] o una [[Fuente de corriente]]), que es en el que nos interesa saber que sucede.
2. Todo el circuito, salvo el resistor de carga, se podrá simplificar en un circuito equivalente con $V_{th}$ y $R_{th}$.
3. Para sacar $R_{th}$, se pasivan las fuentes del circuito y solo se tienen en cuenta los resistores.
4. Para sacar $V_{th}$, observo cuál es la diferencia de potencial entre los terminales donde se conectó la carga. Para ello, tengo en cuenta todo el circuito y lo resuelvo con el método que considere optimo.
5. Ahora tengo un circuito equivalente con $V_{th}$, $R_{th}$ y el resistor de carga. Por lo que, sera mas fácil calcular lo que me pidan en el resistor de carga.

#### Esquematizando
---
![[Equivalente de thevenin.webp]]

