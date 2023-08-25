---
dia: 2023-01-23
materia: intro
capitulo: 2
---
### Postulado
---
Un [[Circuito lineal]] de dos o mas terminales puede sustituirse por un circuito equivalente formado por una [[Fuente de tension]] ($V_\text{Th}$) en serie con un [[Resistor]] ($R_\text{Th}$). Es decir, el teorema de Thevenin proporciona una técnica para sustituir la parte fija por un circuito equivalente sencillo.

#### Condición:
---
- Circuitos lineales.

#### Aplicación:
---
1. Se elige un resistor "de carga" (puede ser también una fuente), que es en el que nos interesa saber que sucede.
2. Todo el circuito, salvo el resistor de carga, se podrá simplificar en un circuito equivalente con $V_\text{Th}$ y $R_\text{Th}$.
3. Para sacar $R_\text{Th}$, se pasivan las fuentes del circuito y solo se tienen en cuenta los resistores.
4. Para sacar $V_\text{Th}$, observo cuál es la diferencia de potencial entre los terminales donde se conectó la carga. Para ello, tengo en cuenta todo el circuito y lo resuelvo con el metodo que considere optimo.
5. Ahora tengo un circuito equivalente con $V_\text{Th}$, $R_\text{Th}$ y el resistor de carga. Por lo que, sera mas facil calcular lo que me pidan en el resistor de carga.

#### **Esquematizando:**
---
![[Equivalente de thevenin.png]]

