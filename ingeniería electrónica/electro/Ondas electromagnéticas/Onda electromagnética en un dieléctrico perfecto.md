---
dia: 2024-09-12
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Onda electromagnética en un dieléctrico sin pérdidas
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Ondas electromagnéticas/Resumen.md]]"
---
# Definición
---
Para resolver el caso del [[Campo eléctrico|campo eléctrico]] y [[Campo de inducción magnética|campo magnético]] en un medio sin pérdidas comúnmente denominado [[Dieléctrico|dieléctrico]] perfecto en ausencia de fuentes

Consideremos un recinto del espacio donde existe un medio material de propiedades definidas por sus parámetros $\epsilon$ ([[Permitividad eléctrica|permitividad eléctrica]]), $\sigma$ ([[Conductividad eléctrica|conductividad eléctrico]]) y $\mu$ ([[Permeabilidad magnética|permeabilidad magnética]]), en un medio sin pérdidas se toma $$ \epsilon \in \mathbb{R}, ~~~~ \mu = \mu_0, ~~~~ \sigma = 0 $$
Entonces $$ \gamma = \beta - i\alpha = \sqrt{ \omega^2 \mu \epsilon - i \omega \mu \sigma } = \omega \sqrt{ \mu_0 \epsilon } = \omega \sqrt{ \mu_0 \epsilon_0 \epsilon_r } = \frac{\omega \sqrt{\epsilon_r}}{c} = k \sqrt{\epsilon_r} $$ donde $k$ es el número de onda en el vacío. Como $\gamma$ es real, no hay [[Onda electromagnética en medios materiales#^factor|atenuación]] y la [[Profundidad de penetración|profundidad de penetración]] es infinita

La [[Onda electromagnética en medios materiales#^velocidad-fase|velocidad de propagación]] de las ondas en el material es $$ v = \frac{\omega}{\beta} = \frac{c}{\sqrt{\epsilon_r}} < c $$

Tenemos las magnitudes 
* [[Índice de refracción|Índice de refracción]] $$ n = \sqrt{\mu_r \epsilon_r} \approx \sqrt{\epsilon_r} $$
* Longitud de onda $$ \lambda = \frac{2\pi}{\beta} = \frac{2\pi}{k \sqrt{\epsilon_r}} = \frac{\lambda_0}{\sqrt{\epsilon_r}} < \lambda_0 $$
* [[Impedancia intrínseca|Impedancia intrínseca]] $$ \eta = \frac{\omega \mu}{\gamma} = \frac{\omega \mu}{\beta} = \frac{\omega \mu}{k \sqrt{\epsilon_r}} = \frac{\eta_0}{\sqrt{\epsilon_r}} < \eta_0 $$
* [[Teorema de Poynting#En medios materiales|Vector de Poynting medio]] $$ \langle \vec{N} \rangle = \pm \frac{\mathcal{Re}\Set{\eta} |\tilde{E}_{0\pm}|^2 ~ e^{\mp 2 \alpha z}}{2 |\eta|^2} ~ \hat{z} = \pm \frac{\mathcal{Re}\Set{\eta} |\tilde{E}_{0\pm}|^2}{2\eta} ~ \hat{z} $$ no hay atenuación ($\alpha = 0$), de manera que $\langle N \rangle$ no cambia con $z$ y la potencia de pérdidas $$ \frac{d}{d\nu} \langle P \rangle = 2 \alpha \langle N \rangle = 0 $$ es nula
* [[Densidad de energía de una onda electromagnética#En medios materiales|Densidad de energía media de la onda]] $$ \langle u \rangle = \frac{1}{4} \left( \mathcal{Re}\Set{\epsilon} + \frac{\mu}{|\eta|^2} \right) \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha} = \frac{1}{4} \left( \epsilon + \frac{\mu_0}{\frac{\mu_0}{\epsilon}} \right) \left| \tilde{E}_{0\pm} \right|^2 = \frac{\epsilon}{2} \left| \tilde{E}_{0\pm} \right|^2 $$
* [[Densidad de energía de una onda electromagnética#^velocidad-energia|Velocidad de la energía]] $$ V_E = \pm \frac{2 |\eta| ~ \cos(\varphi)}{\mathcal{Re}\Set{\epsilon} |\eta|^2 + \mu} ~ \hat{z} = \pm \frac{ 2\sqrt{ \frac{ \mu_0 }{ \epsilon } } }{2\mu_0} ~ \hat{z} = \pm \frac{c}{\sqrt{\epsilon_r}} ~ \hat{z} $$ que coincide con la velocidad de las ondas en el material
