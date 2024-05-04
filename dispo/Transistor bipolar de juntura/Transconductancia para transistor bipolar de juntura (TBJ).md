---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
Dada una [[Corriente eléctrica|señal]] pequeña, se define la transconductancia como $$ g_m \simeq \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q} $$ donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

Calculándolo en [[Modo activo directo (MAD) del transistor bipolar de juntura (TBJ)|MAD]] y un [[Transistor bipolar de juntura (TBJ)|TBJ]] de tipo [[Transistor bipolar de juntura (TBJ)#NPN|NPN]], tenemos que $$ i_C = I_S \exp \left( \frac{v_{BE}}{V_{th}} \right) $$ entonces $$ g_m = \frac{\partial i_C (v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{I_S}{V_{th}} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como 

$$ g_m = \frac{I_C(V_{BE})}{V_{th}} $$ ^71b01c

Para [[Transistor bipolar de juntura (TBJ)#PNP|PNP]] $$ g_m = - \frac{I_C(V_{BE})}{V_{th}} $$