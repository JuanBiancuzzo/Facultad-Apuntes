---
dia: 2023-10-14
tags:
  - carrera/ingeniería-electrónica/dispo/Transistor-bipolar-de-juntura
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/dispo/Transistor bipolar de juntura/Resumen.md]]"
---
# Definición
---
Este [[Modelo]] representa el [[Transistor bipolar de juntura|TBJ]] con dos [[Diodo|diodos]] y una [[Fuente de corriente]]

![[Modelo de Ebers-Moll.webp]]

Hay 3 parámetros en este modelo
* $I_S$ [[Corriente eléctrica|corriente]] de saturación
* $\beta_F$ [[Ganancia de corriente en modo activo directo|ganancia en MAD]]
* $\beta_R$:[[Ganancia de corriente en modo activo inverso|ganancia en MAI]]

Notemos que las corrientes producidas son las mismas que el transistor en [[Saturación del transistor bipolar de juntura|saturación]], es decir que las corrientes están dadas por $$  \begin{align} 
	I_C &= I_S ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right) - \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) \\
	
	I_B &= \frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) + \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) \\
	
	I_E &= -\frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) - I_S \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right)
\end{align}  $$
Pero donde podemos simplificar dependiendo del [[Transistor bipolar de juntura#Modos de operación|modo de operación]]