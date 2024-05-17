---
dia: 2024-04-23
materia: circuitos
capitulo: 2
aliases:
  - MPS del transistor de efecto de campo de unión
  - MPS del JFET
---
### Definición
---
El [[Modelo|modelo]] de pequeña señal para el [[Transistor de efecto de campo de unión|JFET]] esta dado

![[Modelo de pequeña señal de JFET.png]]

Notemos la similitud con el [[Modelo de pequeña señal del transistor bipolar de juntura|modelo de pequeña señal del TBJ]] 

Donde se puede calcular $$ \begin{align} 
	g_m &= \frac{2 ~ \sqrt{I_{DQ ~ I_{DSS} }}}{V_p} \\
	r_i &= \frac{V_{gs}}{i_g} \biggm|_{Q} = r_{gs} \\
	r_o &= \frac{V_{ds}}{i_d} \biggm|_{Q, ~ vgs = 0} = \frac{1}{\lambda I_{DQ}}
\end{align} $$