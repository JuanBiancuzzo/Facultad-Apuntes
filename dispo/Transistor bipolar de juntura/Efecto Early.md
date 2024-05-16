---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
En el [[Modelo]] de [[Transistor bipolar de juntura|TBJ]], que planteamos, en [[Modo activo directo del TBJ|MAD]], la [[Corriente eléctrica|corriente]] $I_C$ no debería incrementarse frente a cambios de la [[Tensión|tensión]] $V_{CE}$ ya que la [[Juntura PN|juntura]] Base-Colector no influye en el perfil de [[Portador de carga|portadores]] minoritarios en la base, y por lo tanto no altera el [[Corriente de difusión|flujo de difusión]].

Pero la región de vaciamiento de la juntura BC se ve afectada frente a cambios de la tensión $V_{CE}$ aumentando o disminuyendo.

Si bien no se altera el valor de la densidad de minoritarios en la base, sí se ve afectado el ancho efectivo de la base, que influye en el perfil de minoritarios. Este fenómeno puede modelizarse considerando $$ i_C \propto \frac{1}{W_{B~(\text{efectivo})}} = \frac{1}{W_B - \Delta W_B} \simeq \frac{1}{W_B} ~ \left( 1 + \frac{\Delta W_B}{W_B} \right) $$
Entonces $$ i_C = \underbrace{\frac{q A_E D_N}{W_B} \frac{n_i^2}{N_{aB}} ~ \exp \left( \frac{v_{BE}}{V_{th}} \right)}_{\beta_F ~ i_B = I_{C~(MAD)}} \left( 1 + \frac{\Delta W_B}{W_B} \right) $$ donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo (MAD)|ganancia en MAD]], y podemos decir que $$ i_C = \beta_F ~ i_B \left( 1 + \frac{\Delta W_B}{W_B} \right) = \beta_F ~ i_B \left( 1 + \frac{v_{CE}}{V_A} \right) $$ donde $V_A$ se denomina Tensión de Early.

El Efecto Early también afecta al dispositivo en otros regímenes, como [[Saturación del transistor bipolar de juntura (TBJ)|saturación]], ya que siempre que la juntura BC esté polarizada y cambie su tensión de polarización, existirá un cambio en el ancho de la zona de vaciamiento de la juntura que afecta al ancho efectivo de la base.