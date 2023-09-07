---
dia: 2023-09-06
materia: dispo
capitulo: 3
---
### Definición
---
Al aplicar una [[Tensión]] sobre la [[Juntura PN]] circula una [[Corriente eléctrica|corriente]]

![[Corriente eléctrica al aplicar una tensión sobre una juntura PN.png|600]]

* Para tensiones negativas ([[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]) la corriente es muy pequeña
* Para tensiones positivas ([[Convención de signos para la tensión de polarización#Polarización directa|directa]]) la corriente crece exponencialmente

Esta es la propiedad eléctrica más importante del [[Diodo]].

La expresión de la corriente en función de la tensión aplicada $$ I_D = f(V_{PN}) $$ notemos como esta no depende de la posición de la juntura.

#### Calculo de la corriente
---
Como no depende de la posición podemos calcularla al corriente en QNR, donde la [[Corriente eléctrica|corriente]]
##### En la zona p-QNR
* [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentración de electrones]] ($n(x)$) son los minoritarios
* El [[Campo eléctrico]] es aproximadamente $0$

Esto implica que la [[Corriente de arrastre|densidad de corriente de arrastre]] de [[Electrón|electrones]] es baja $$ J_{arr}^{e^-} (falta~aprox~aca) E \simeq 0 $$
y si conozco $n(x)$ puedo calcular la [[Corriente de difusión|densidad de corriente de difusión]] de electrones, por lo tanto sabemos la [[Densidad de corriente eléctrica|densidad de corriente]] de electrones $J^{e^-}$

##### En la zona n-QNR
* [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentración de huecos]] ($p(x)$) son los minoritarios
* El [[Campo eléctrico]] es aproximadamente $0$

Esto implica que la [[Corriente de arrastre|densidad de corriente de arrastre]] de [[Hueco|huecos]] es baja $$ J_{arr}^{h^+} (falta~aprox~aca) E \simeq 0 $$
y si conozco $p(x)$ puedo calcular la [[Corriente de difusión|densidad de corriente de difusión]] de huecos, por lo tanto sabemos la [[Densidad de corriente eléctrica|densidad de corriente]] de huecos $J^{h^+}$

##### En la zona SCR
Sabemos que las [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentraciones]] de [[Hueco|huecos]] y [[Electrón|electrones]] es "baja", por lo que no hay [[Recombinación]], por lo tanto $$ \begin{align}
	I_p(-x_p) = I_p(x_n) \\
	I_n(-x_p) = I_n(x_n)
\end{align} $$
La [[Corriente eléctrica|corriente]] de mayoritarios del [[Impureza aceptora#Cantidad de dopante|lado p]] es igual a la corriente de minoritarios del [[Impureza donora#Cantidad de dopante|lado n]]. De igual forma, la [[Corriente eléctrica|corriente]] de mayoritarios del [[Impureza donora#Cantidad de dopante|lado n]] es igual a la corriente de minoritarios del [[Impureza aceptora#Cantidad de dopante|lado p]]

