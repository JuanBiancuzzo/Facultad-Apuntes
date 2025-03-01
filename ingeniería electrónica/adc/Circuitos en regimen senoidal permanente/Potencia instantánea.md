---
dia: 2023-11-16
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-senoidal-permanente
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
  - ingeniería-en-informática/adc/Circuitos-en-regimen-senoidal-permanente
referencias:
  - "222"
---
# Definición
---
Es la [[Potencia|potencia]] en cualquier instante $$ p(t) = v(t) ~ i(t) $$
## Para corriente alterna
---
Cuando se trata de [[Corriente alterna|corriente alterna]] sinusoidal, con $$ v(t) = U_0 ~ \sin(\omega t) ~~~~~ i(t) = I_0 ~ \sin(\omega t - \phi) $$
Esto resulta en la potencia instantánea $$ p(t) = U_0 ~ I_0 ~ \sin(\omega t) ~ \sin(\omega t - \phi) $$ que usando trigonometría podemos expresar como $$ \begin{align} 
    p(t) &= U_0 ~ I_0 ~ \frac{cos(\phi) - cos(2\omega t - \phi)}{2} \\
     &= \frac{1}{2} U_0 ~ I_0 ~ cos(\phi) - \frac{1}{2} U_0 ~ I_0 ~ cos(2\omega t - \phi)
\end{align} $$
Se obtiene así para la potencia un valor constante $\frac{1}{2} U_0 ~ I_0 ~ cos(\phi)$ y otro variable con el tiempo $\frac{1}{2} U_0 ~ I_0 ~ cos(2\omega t - \phi)$. Al primer valor se le denomina [[Potencia|potencia activa]], y la segunda [[Potencia reactiva|potencia reactiva]]


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```