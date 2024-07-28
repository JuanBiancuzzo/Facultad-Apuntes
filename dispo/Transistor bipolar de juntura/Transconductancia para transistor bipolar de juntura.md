---
dia: 2023-10-14
aliases:
  - Transconductancia para TBJ
tags:
  - dispo/Transistor-bipolar-de-juntura
  - nota
---
### Definición
---
Dada una [[Corriente eléctrica|señal]] pequeña, se define la transconductancia como $$ g_m \simeq \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q} $$ donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

Calculándolo en [[Modo activo directo del transistor bipolar de juntura|MAD]] y un [[Transistor bipolar de juntura|TBJ]] de tipo [[Transistor bipolar de juntura#NPN|NPN]], tenemos que $$ i_C = I_S \exp \left( \frac{v_{BE}}{V_{th}} \right) $$ entonces $$ g_m = \frac{\partial i_C (v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{I_S}{V_{th}} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como 

$$ g_m = \frac{I_C(V_{BE})}{V_{th}} $$ ^71b01c

Para [[Transistor bipolar de juntura#PNP|PNP]] $$ g_m = - \frac{I_C(V_{BE})}{V_{th}} $$