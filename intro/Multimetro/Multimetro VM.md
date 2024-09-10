---
dia: 2023-01-23
materia: intro
---
### Definición
---
El [[Multímetro|multímetro]] de valor medio es un tipo de multímetro que “sólo sabe” calcular valor medio

#### Modos
---
- Modo DC:
Se utiliza la formula de la [[Tensión promedio|tensión promedio]]
$$ V_\text{DC} = \frac{1}{T} \cdot \int_{0}^{T} v(t) \cdot dt $$

- Modo AC:
Como solo puede hacer cálculos de valor medio, se debe hacer lo siguiente:
1. Se quita la tension continua $$ v(t) - V_\text{DC} $$

2. Se rectifica $$ |v(t) - V_\text{DC}| $$

3. Se computa el valor medio rectificado ($V_{mr}$) como $$ V_{mr} =\frac{1}{T} \cdot \int_{0}^{T} |v(t) - V_\text{DC}| \cdot dt $$

4. Ahora, sabiendo que el [[Factor de forma|factor de forma]] senoidal es $$ \alpha_{senoidal} = \frac{V_{AC_{senoidal}}}{V_{mr_{senoidal}}} = \frac{A/\sqrt{2}}{2A/\pi} = \frac{\pi}{2\sqrt{2}} \approx 1.11 $$

5. Lo multiplico por el $V_{mr}$, para así $$ V_{AC} = 1.11 \cdot V_{mr} $$

Notar que esto es unicamente valido para señales senoidales