---
dia: 2023-09-02
tags:
  - dispo/Física-de-semiconductores
  - nota/facultad
---
### Definición
---
Dada la ecuación que llegamos en [[Semiconductor dopado no uniformemente]], obtenida con la [[Ecuación de Gauss]], el [[Función potencial]] y las condición del semiconductor de estar en [[Equilibrio térmico en un semiconductor|equilibrio térmico]] tenemos $$ \frac{d^2}{dx^2} \bigg( \ln\left(n_0(x) \right) \bigg) = \frac{q^2}{\varepsilon_{SC} ~ k ~ T} \left( n_0(x) - N_d(x) \right) $$ donde $n_0(x)$ es la [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración]] de los [[Electrón|electrones]], $\varepsilon_{SC}$ es la [[Permitividad eléctrica]] del semiconductor, $k$ es la constante de Boltzmann, $T$ es la temperatura en kelvin y  $N_d(x)$ es la [[Impureza donora|concentración donora]].

Si $N_d(x)$ cambia lentamente con $x$:
* $n_0(x)$ también cambia lentamente con $x$
* $\frac{d^2}{dx^2} \ln(n_0(x))$ es pequeño

Entonces podemos decir que $n_0(x) \simeq N_d(x)$, por lo que el [[Semiconductor]] es cuasi-neutral, y esto es valido si
$$ \left| \frac{n_0 - N_d}{n_0} \right| \ll 1 ~ \text{ó} ~ \left| \frac{n_0 - N_d}{N_d} \right| \ll 1 $$