---
dia: 2023-01-23
materia: intro
---
### Definición
---
El multimetro de valor medio es un tipo de [[multímetro]] que “sólo sabe” calcular valor medio

#### Modos
---
- Modo DC:
Se utiliza la formula de la [[Tension promedio]]:
$$
\begin{align}
V_\text{DC} = \frac{1}{T} \cdot \int_{0}^{T} v(t) \cdot dt
\end{align}
$$
- Modo AC:
Como solo puede hacer calculos de valor medio, se debe hacer lo siguiente:
1. Se quita la tension continua:
$$
\begin{align}
v(t) - V_\text{DC}
\end{align}
$$
2. Se rectifica:
$$
\begin{align}
|v(t) - V_\text{DC}|
\end{align}
$$
3. Se computa el valor medio rectificado ($V_{mr}$) como:
$$
\begin{align}
V_{mr} =\frac{1}{T} \cdot \int_{0}^{T} |v(t) - V_\text{DC}| \cdot dt
\end{align}
$$
4. Ahora, sabiendo que el [[Factor de forma]] senoidal es:
$$
\begin{align}
\alpha_{senoidal} = \frac{V_{AC_{senoidal}}}{V_{mr_{senoidal}}} = \frac{A/\sqrt{2}}{2A/\pi} = \frac{\pi}{2\sqrt{2}} \approx 1.11
\end{align}
$$
5. Lo multiplico por el $V_{mr}$, para asi:
$$
\begin{align}
V_{AC} = 1.11 \cdot V_{mr}
\end{align}
$$
Notar que esto es unicamente valido para señales senoidales.