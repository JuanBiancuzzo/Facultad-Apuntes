---
dia: 2023-09-06
materia: dispo
capitulo: 1
---
### Definición
---
Usando la [[Relación de Boltzmann]], podemos ver que $$ \phi(x) = \frac{kT}{q} \ln\left( \frac{n_0}{n_i} \right) = - \frac{kT}{q} \ln\left( \frac{p_0}{n_i} \right) $$ cuando definimos $\phi(x_{ref}) = 0$ y que $n(x_{ref}) = p(x_{ref}) = n_i$. Donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]].

Podemos plantear $$ \begin{align} 
	\text{P - QNR}: && p_0 = N_a \implies \phi_p = - \frac{kT}{q} \ln\left( \frac{N_a}{n_i} \right) \\\\ 
	\text{N - QNR}: && n_0 = N_d \implies \phi_n = \frac{kT}{q} \ln\left( \frac{N_d}{n_i} \right)
\end{align} $$ donde $N_a$ es la [[Impureza aceptora#Cantidad de dopante|concentración aceptora]], y $N_d$ es la [[Impureza donora#Cantidad de dopante|concentración donora]].

Por lo que podemos plantear el potencial de Built-in como $$ \boxed{ \phi_B = \phi_n - \phi_p = \frac{kT}{q} \ln\left( \frac{N_a ~ N_d}{n_i^2} \right) } $$