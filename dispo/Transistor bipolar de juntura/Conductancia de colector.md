---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
Dada una [[Corriente eléctrica|señal]] pequeña, se define la conductancia de colector como $$ g_o \simeq \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} $$ donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

Calculándolo en [[Modo activo directo del TBJ|MAD]] y un [[Transistor bipolar de juntura|TBJ]] de tipo NPN, tenemos que $$ i_C = I_S \exp \left( \frac{v_{BE}}{V_{th}} \right) \left( 1 + \frac{v_{CE}}{V_A} \right) $$ entonces $$ g_0 = \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} = \frac{I_S}{V_A} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como

$$ g_0 = \frac{\beta_F ~ I_B}{V_A} \simeq \frac{I_C(Q)}{V_A} $$ ^bc1d19

Para PNP $$ g_0 = - \frac{\beta_F ~ I_B}{V_A} \simeq - \frac{I_C(Q)}{V_A} $$