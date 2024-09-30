---
dia: 2024-09-14
tags:
  - electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Buen conductor#Buen conductor
  - Buen dieléctrico#Buen dieléctrico
---
# Definición
---
Recordando que la intensidad del [[Campo eléctrico|campo eléctrico]] en la [[Ecuación de Helmholtz|ecuación de Helmholtz]], esta dada por $$ \tilde{E}(\vec{r}) = \tilde{E}_0 e^{\mp i \gamma z} $$ donde la profundidad de penetración se va a definir de acuerdo al [[Onda electromagnética en medios materiales#^factor|factor de atenuación]], por lo que sería a partir de $\mathcal{Im}\big\{ \gamma \big\}$, esta se define como $$ \delta = \frac{1}{\mathcal{Im}\Set{\gamma}} $$
## Tangente de pérdida
----
Los medios se pueden clasificar en medios como, buenos [[Dieléctrico|dieléctricos]] o buenos [[Conductor|conductores]], para ello hay que hacer el cociente entre la [[Ley de Ampère#^corriente-conduccion|corriente de conducción]] y la [[Ley de Ampère#^corriente-desplazamiento|corriente de desplazamiento]] $$ \frac{J_c}{J_d} = \frac{\sigma E}{j\omega\epsilon E} = \frac{\sigma}{j\omega\epsilon} $$
Tomando el [[Norma|módulo]] del complejo se define la tangente de pérdidas $$ \tan \delta = \frac{J_c}{J_d} = \frac{\sigma}{\omega \epsilon} $$

### Buen conductor
---
En los buenos conductores los efectos conductivos son de mucha mayor relevancia que los efectos de las variaciones del [[Campo eléctrico|campo eléctrico]] en el tiempo, lo que puede medirse diciendo que la corriente de conducción es mucho mayor que la corriente de desplazamiento $$ |\vec{J}| \gg \left| \frac{\partial\vec{D}}{\partial t} \right| \implies \sigma E \gg \omega \epsilon_0 E \implies \sigma \gg \omega \epsilon_0 $$
Que también podemos ver como $$ \tan \delta = \frac{\sigma}{\omega \epsilon} \gg 1 $$

### Buen dieléctrico
---
Se puede ver como $$ \tan \delta = \frac{\sigma}{\omega \epsilon} \ll 1 $$