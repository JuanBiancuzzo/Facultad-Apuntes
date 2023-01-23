### **Definicion:**
---
"Es un tipo de [[multimetro]] que utiliza la medida True RMS (**Verdadero Valor Eficaz**) que consta de fórmulas matemáticas más complejas que permiten obtener un valor más aproximado a la realidad que otros multimetros."

#### **Modos:**
---
- Modo DC: 
Utiliza la funcion definida en el apartado de [[Tension promedio]]:
$$
\begin{align}
V_\text{DC} = \frac{1}{T} \cdot \int_{0}^{T} v(t) \cdot dt
\end{align}
$$
- Modo AC: 
Utiliza la funcion definida en el apartado de [[Tension eficaz]] para alterna:
$$
\begin{align}
V_{AC}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} (v(t) - V_{DC})^2 \cdot dt}
\end{align}
$$
