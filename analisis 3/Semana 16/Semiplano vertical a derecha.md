---
dia: 2022-12-05
materia: analisis 3
capitulo: 16
---
### Definción
---
Los semiplanos de la forma $\mathbb{H}_\alpha = \Set{\sigma + i \omega \in \mathbb{C} : \sigma > \alpha}$. Donde representan la región de convergencia ([[Convergencia de la tranformación de Laplace]]) sabiendo que la [[Función objeto]] $f : \mathbb{R} \to \mathbb{C}$ donde $f$ es de [[Orden exponencial]], entonces $$ \lim_{b \to \infty} \int\limits_{0}^b | f(t) e^{-st} | dt = \lim_{b \to \infty} \int\limits_{0}^b |f(t)| e^{-\sigma t} dt \le \lim_{b \to \infty} M \int\limits_0^b e^{(\alpha - \sigma)t} dt = \lim_{b \to \infty} M \frac{1 - e^{-(\sigma - \alpha)b}}{\sigma - \alpha} $$ donde converge para $\sigma > \alpha$.