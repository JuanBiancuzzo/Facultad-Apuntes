---
dia: 2023-09-06
tags:
  - dispo/Juntura-PN
  - nota/facultad
---
### Hipótesis
---
1. La región espacial de carga tiene límites abruptos
2. No existen [[Carga eléctrica|portadores]] en la región espacial de carga, estos sólo la atraviesan. Por tanto, se supondrá que esta región consta únicamente de impurezas tanto [[Impureza donora|donoras]] como [[Impureza aceptora|aceptoras]] ionizadas
3. Fuera de los límites de la región espacial de carga, el [[Semiconductor]] es neutro
4. El funcionamiento es a una temperatura tal que todos los [[Átomo|átomos]] de impurezas están ionizados
5. Las [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentraciones de portadores]] en los límites de la región espacial de carga vienen dados en función del [[Tensión|potencial electrostático]] de contacto
6. Los contactos al final de la [[Impureza donora#Cantidad de dopante|región n]] y la [[Impureza aceptora#Cantidad de dopante|región p]] son [[Contacto óhmico|contactos perfectamente óhmicos]]. Por lo que la caída de [[Tensión]] entre sus extremos es cero

### Definición
---
Teniendo una [[Juntura PN en equilibrio térmico|juntura PN en equilibrio]], tenemos las regiones de cuasi neutralidad (QNR's) tienen [[Neutralidad de carga]] por lo que 
$$ \begin{align} 
	\text{P - QNR}: && \rho(x) &= q(N_d + p_0 - N_a - n_0) \simeq 0 \\\\
	&&& \Rightarrow p_0 = N_a - \underbrace{N_d}_{=~0} + \underbrace{n_0}_{\ll N_a} \\
	&&& \Rightarrow p_0 \simeq N_a
\end{align} $$
$$ \begin{align} 
	\text{N - QNR}: && \rho(x) &= q(N_d + p_0 - N_a - n_0) \simeq 0 \\\\
	&&& \Rightarrow n_0 = N_d - \underbrace{N_a}_{=~0} + \underbrace{p_0}_{\ll N_d} \\
	&&& \Rightarrow n_0 \simeq N_d
\end{align} $$

Donde suponemos que las SCR están "vacías"  de [[Carga eléctrica|portadores]] y esta es la "región de vaciamiento" $$ \begin{align}
	\text{P-SCR}: \Set{n_0, ~p_0} \ll N_a \\
	\text{N-SCR}: \Set{n_0, ~p_0} \ll N_d \\
\end{align}$$
La transición entre SCR y QNR's es abrupta.