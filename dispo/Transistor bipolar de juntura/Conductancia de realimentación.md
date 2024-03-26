---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
Dada una [[Corriente eléctrica|señal]] pequeña, se define la conductancia de realimentación como $$ g_\mu \simeq \frac{\partial i_B}{\partial v_{CE}} \biggm|_{Q} $$ donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

Los cambios en $v_{BE}$ también producen cambios en $i_B$ $$ I_B = I_{B1} + I_{B2} $$ donde: 
* $I_{B1}$: [[Corriente eléctrica|corriente]] debido a la inyección de [[Hueco|huecos]] de la base hacia el emisor
* $I_{B2}$: corriente de [[Recombinación]] de [[Portador de carga|portadores]] en la base

Para el cálculo de polarización, $I_{B2}$ se considera despreciable y $I_{B1}$ es predominante.

Los cambios en $v_{CE}$ alteran la extensión de la zona de vaciamiento de la [[Juntura PN|juntura]] Base-Colector, afectando la distribución de minoritarios en la base.

Entonces, considerando $V_{BE}$ constante $$ g_\mu = \frac{\partial i_B}{\partial v_{CE}} \biggm|_{Q} = \frac{\partial (i_{B1} + i_{B2})}{\partial v_{CE}} \biggm|_{Q} = \frac{\partial i_{B1}}{\partial v_{CE}} \biggm|_{Q} +~ \frac{\partial i_{B2}}{\partial v_{CE}} \biggm|_{Q} $$
Como la variación de la zona de vaciamiento de la juntura BC no afecta a la inyección de huecos en el emisor $$ \frac{\partial i_{B1}}{\partial v_{CE}} \biggm|_{Q} = 0 $$
Si consideramos que toda la corriente $i_B$ está determinada por $i_{B2}$ podemos decir que $$ \frac{\partial i_{B2}}{\partial i_C} = \frac{\partial i_B}{\partial i_C} = \frac{1}{\beta_0} $$ donde $\beta_0$ es la [[Ganancia de corriente de pequeña señal para el transistor bipolar de juntura (TBJ)|ganancia de corriente en pequeña señal]]  y entonces podemos reescribirla como $$ g_\mu = \frac{\partial i_{B2}}{\partial i_C} \biggm|_{Q} \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} = \frac{1}{\beta_0} g_o $$ donde $g_o$ es la [[Conductancia de colector]]

Como $i_{B2} < i_B$ la relación entre $g_\mu$ y $g_o$ resulta en una [[Cota superior]], es decir $$ g_\mu < \frac{1}{\beta_0} g_o $$ y esto hace que $g_\mu$ tenga un valor muy bajo y generalmente puede despreciarse.