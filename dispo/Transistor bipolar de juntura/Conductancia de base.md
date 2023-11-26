---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
Dada una [[Corriente eléctrica|señal]] pequeña, se define la conductancia de base como $$ g_\pi \simeq \frac{i_B}{\partial v_{BE}} \biggm|_{Q} $$ donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

Calculándolo en [[Modo activo directo (MAD) del transistor bipolar de juntura (TBJ)|MAD]] y un [[Transistor bipolar de juntura (TBJ)|TBJ]] de tipo NPN, tenemos que $$ i_B = \frac{i_C}{\beta_F} \simeq \frac{I_S}{\beta_F} \exp \left( \frac{v_{BE}}{V_{th}} \right) $$ donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo (MAD)|ganacia en MAD]], y entonces $$ g_\pi = \frac{i_B(v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{1}{\beta_F} \frac{i_C(v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{1}{\beta_F} \frac{I_S}{V_{th}} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como $$ g_\pi = \frac{I_B(V_{BE})}{V_{th}} $$ o también en función de la [[Transconductancia para transistor bipolar de juntura (TBJ)|transconductancia]] $g_m$ como $$ g_\pi = \frac{g_m}{\beta_F} $$
Para PNP $$ g_\pi = - \frac{g_m}{\beta_F} $$