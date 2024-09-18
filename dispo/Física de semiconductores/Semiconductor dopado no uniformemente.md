---
dia: 2023-09-02
tags:
  - dispo/Física-de-semiconductores
  - nota/facultad
---
# Definición
---
Si tenemos un [[Semiconductor]] [[Dopaje|dopado]] de forma no uniforme

![[Distribución no uniforme de dopante donores.webp|570]]

Si lo dejamos que llegue al [[Equilibrio térmico en un semiconductor|equilibrio térmico]], sabemos que la [[Corriente eléctrica#Densidad de corriente|corriente total]] debería ser nula  $$J_n^\text{arr} + J_n^\text{dif} = 0 $$
y sabemos que por esta distribución no uniforme, hay [[Corriente de difusión]], haciendo que [[Electrón|electrones]] (en este caso ya que hay una distribución no uniforme de [[Impureza donora|concentración donora]], pero si fuera una [[Impureza aceptora|concentración aceptora]] habría una corriente de difusión de [[Hueco|huecos]]), produciendo una zona de [[Carga eléctrica|cargas]] positivas y negativas, produciendo un [[Campo eléctrico]], dando una [[Corriente de arrastre]]

![[Distribución no uniforme de dopante con corrientes de difusión y arrastre.webp|570]]

Entonces dado $N_d(x)$ queremos encontrar $n_0(x)$, $\rho(x)$, $E(x)$, $\phi(x)$, teniendo $$ \begin{cases} 
	\displaystyle \frac{dE(x)}{dx} = \frac{\rho(x)}{\varepsilon_{SC}} \\
	\displaystyle \frac{d\phi(x)}{dx} = - E(x) \\
\end{cases} \implies \frac{d^2 ~ \phi(x)}{dx^2} = - \frac{\rho(x)}{\varepsilon_{SC}} $$ donde $\varepsilon_{SC}$ es la [[Permitividad eléctrica]] del semiconductor. 

Partiendo de la corriente nula, para el [[Impureza donora|semiconductores de tipo n]], nos queda que 
$$ J^\text{arr} + J^\text{dif} = q ~ n_0(x) \mu_n E + q ~ D_n \frac{n_0(x)}{dx} = 0 $$ donde $\mu_n$ es la [[Movilidad]] y $D_n$ es el [[Coeficiente de difusión]].
$$ \begin{matrix} 
	\displaystyle \frac{dn_0(x)}{dx} = - n_0(x) ~ \frac{\mu_n E}{D_n} \\
	\displaystyle n_0(x) = \exp{\left( -\frac{\mu_n E}{D_n} \cdot x \right)} = \exp{\left(\frac{\mu_n}{D_n} ~ \frac{d\phi(x)}{dx} \cdot x \right)}
\end{matrix} $$ por la [[Relación de Einstein]], $\frac{D_n}{\mu} = \frac{k ~ T}{q}$, y aplicando el $log$ nos queda 
$$ \frac{k ~ T}{q} \cdot  \ln\left(n_0(x) \right) = \frac{d\phi(x)}{dx} $$ finalmente derivando ambos lados
$$ \frac{k ~ T}{q} \cdot \frac{d}{dx} \bigg( \ln\left(n_0(x) \right) \bigg) = \frac{d^2\phi(x)}{dx^2} = - \frac{\rho(x)}{\varepsilon_{SC}} = \frac{q}{\varepsilon_{SC}} \left( n_0(x) - N_d(x) \right) $$
$$ \boxed{\frac{k ~ T}{q} \cdot \frac{d^2}{dx^2} \bigg( \ln\left(n_0(x) \right) \bigg) = \frac{q}{\varepsilon_{SC}} \left( n_0(x) - N_d(x) \right)}$$

## Densidad de carga
---
Por lo que en general $n_0(x) \ne N_d(x)$, por lo que la [[Densidad volumétrica de carga eléctrica]] no es nula punto a punto.

![[Densidad volumétrica de cargas en un semiconductor dopado no uniformemente.webp]]

## Campo eléctrico
---
Generando un [[Campo eléctrico]], usando la [[Ecuación de Gauss]] $$ \frac{dE}{dx} = \frac{\rho(x)}{\varepsilon_{SC}} $$
donde $\rho(x)$ es la [[Densidad volumétrica de carga eléctrica|densidad de carga]], y tenemos la condición que el campo eléctrico tiene que ser 0 afuera del semiconductor por [[Conservación de carga]] y la neutralidad del material, por lo que termina siendo

![[Campo eléctrico en un semiconductor dopado no uniformemente.webp]]

## Potencial 
---
Recordando que $$ \frac{d\phi(x)}{dx} = -E(x) $$ donde $E(x)$ es le [[Campo eléctrico]] y $\phi(x)$ es la función de potencial, en este caso no tenemos ninguna condición por lo que no nos queda que establecer una condición arbitraria dejándonos con 

![[Potencial eléctrico de un semiconductor dopado no uniformemente.webp]]

$$ \phi(x) - \phi(x_\text{ref}) = - \int^x_{x_\text{ref}} E(x) ~ dx $$

Podemos tener la condición arbitraria que $\phi(x_\text{ref}) = 0$, por lo que determinar la diferencia entre los extremos siendo esta el [[Potencial de built-in]]