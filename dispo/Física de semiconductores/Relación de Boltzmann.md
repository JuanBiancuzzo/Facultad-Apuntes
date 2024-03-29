---
dia: 2023-09-02
materia: dispo
capitulo: 1
---
### Definición
---
Los [[Electrón|electrones]] de un [[Semiconductor]] en [[Equilibrio térmico en un semiconductor|equilibrio térmico]] cumplen $$ J_n(x) = J_n^\text{dif}(x) + J_n^\text{arr}(x) = 0 $$ por lo que 
$$ q ~ n_0(x) \mu_n E + q ~ D_n \frac{n_0(x)}{dx} = 0 $$ donde $\mu_n$ es la [[Movilidad]], $D_n$ es el [[Coeficiente de difusión]], $E$ es el [[Campo eléctrico]] y $n_0(x)$ es la [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración]] de electrones. 

Despejando, usando el [[Potencial eléctrico]] y la [[Relación de Einstein]], nos queda $$ \frac{q}{k ~ T} \frac{d\phi(x)}{dx} = \frac{d}{dx} \ln (n_0(x)) $$ donde $k$ es la constante de Boltzmann y $K$ es la temperatura en Kelvin

Integrando se obtiene $$ \frac{q}{k ~ T} (\phi(x) - \phi_\text{ref}) = \ln(n_0(x)) - ln(n_0(x_\text{ref})) = \ln \left( \frac{n_0(x)}{n_0(x_\text{ref})} \right) $$
$$ n_0(x) = n_0(x_\text{ref}) \exp \left( \frac{\phi(x) - \phi_\text{ref}}{ k ~ T/q} \right) $$ 
donde cualquier referencia es válida, pero es tomada generalmente como $\phi_\text{ref} = 0$ y que $n_0(x_\text{ref}) = n_i$ siendo $n_i$ la [[Semiconductor intrínseco|concentración intrínseca]] de un semiconductor
$$ \tag{electrones} \boxed{ n_0(x) = n_i \exp \left( \frac{\phi(x) ~ q}{ k ~ T} \right) } $$
$$ \tag{huecos} \boxed{ p_0(x) = n_i \exp \left( - \frac{\phi(x) ~ q}{ k ~ T} \right) } $$