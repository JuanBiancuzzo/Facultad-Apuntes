---
dia: 2023-08-23
materia: dispo
capitulo: 5
---
### Definición
---
La estructura se componen de
* Metal
	* No soporta [[Carga eléctrica|carga]] de volumen $\implies$ la carga sólo puede existir en su superficie
* Óxido (Es aislante)
	* No soporta carga en volumen (no hay [[Portador de carga|portadores]], ni [[Dopaje|dopantes]])
* [[Semiconductor]]
	* Soporta carga en volumen

![[Estructura  MOS.png]]

* La condición de [[Equilibrio térmico en un semiconductor|equilibrio]] no puede establecerse a través del óxido, se requiere de un cable para permitir el intercambio de [[Carga eléctrica|carga]] entre la [[Juntura metal-semiconductor]]
* La estructura MOS es un sandwich de 3 materiales con [[Tensión|potenciales diferentes]], por lo que [[Campo eléctrico|campos eléctricos]] diferentes, por lo que hay un reacomodamiento de cargas  y por último produciendo una región de carga espacial
* La mayoría de los metales al ser colocados sobre p-Si, alcanzan el [[Equilibrio térmico|equilibrio térmico]] a partir de las [[Flujo de difusión|difusión]] de [[Electrón|electrones]] desde el metal hacia el [[Semiconductor]] y [[Hueco|huecos]] desde el semiconductor hacia el metal

#### Concentraciones de los [[Portador de carga|portadores]]
---
![[Concentración de portadores en la estructura MOS.png]]

Pocos [[Hueco|huecos]] cerca de la interfaz $Si$/$SiO_2$ entonces quedan expuestos [[Átomo|átomos]] [[Impureza aceptora|aceptores]] ionizados y se genera una zona de [[Carga eléctrica|carga]] espacial en volumen (SCR) o zona desierta de [[Portador de carga|portadores]].

#### Densidad de [[Carga eléctrica|carga]] espacial
---
Se puede dividir en cuatro zonas la estructura, la zona del metal sus cargas están acumuladas en la superficie, generando una [[Delta de Dirac]] de [[Carga eléctrica|carga]] en la interfaz entre el metal y el oxido.

En el oxido al ser [[Aislado|aislante]] no acumula carga, dejándonos con las últimas dos zonas, dada la [[Aproximación de vaciamiento]], tenemos dividida en dos zonas el [[Semiconductor]], entre $0$ y $x_{d0}$ teniendo una densidad de carga por $$ \rho(x) = q \cdot \left( \underbrace{N_d(x)}_{= ~ 0} - N_a(x) + \underbrace{p_0(x) - n_0(x)}_{n_0;p_0 \ll N_d; N_a} \right) = - q ~ N_a $$