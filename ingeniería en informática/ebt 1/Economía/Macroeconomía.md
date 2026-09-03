---
dia: 2026-09-02
etapa: empezado
referencias: []
aliases: 
  - Circuito macroeconomico abierto#Circuito abierto
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Estudia el comportamiento, la estructura y la capacidad de las variables agregadas, como el [[Producto Bruto Interno|PBI]], [[Inflación|inflación]], [[Tasa de interés|tasa de interés]], crecimiento, empleo y desempleo, deuda privada y pública

Es una vista general de los [[Agente económico|agentes]], en su estudio de la [[investigación/storytelling/worldbuilding/Economía|economía]]

## Circuito abierto
---
Gráficamente se puede ver de la siguiente forma

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{arrows.meta, automata, positioning}

\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	\begin{tikzpicture}[scale=1.1, transform shape, thick]
		\tikzmath { 
			\radio = 1.8; \sep = 1.3;
			\escala = 1.15; \escalaSub = 0.9; 
		}	

		\node[state, minimum size=\radio cm, scale=\escala] (q_ext) 
			at ({-2*(\radio + 1.25 * \sep)}, 0) {Externo};
		\node[state, minimum size=\radio cm, scale=\escala] (q_fin) 
			at ({-(\radio + \sep)}, 0) {Financiero};
		\node[state, minimum size=\radio cm, scale=\escala] (q_fam) 
			at (0, {(\radio + 1.5 * \sep)}) {Familias};
		\node[state, minimum size=\radio cm, scale=\escala] (q_gob) 
			at ({(\radio + \sep)}, 0) {Gobierno};
		\node[state, minimum size=\radio cm, scale=\escala] (q_emp) 
			at ({2*(\radio + 1.5 * \sep)}, 0) {Empresas};
			
		\node (q_inter) at (0, {-(\radio + 1.5 * \sep)}) {};
		\fill[rojo] (q_inter) circle (0.1);
		

		\begin{scope}[
			>={Stealth[round]}, ->, shorten <=4pt, shorten >=4pt, 
			scale=\escalaSub,
			every node/.style={fill=white, text=black}
		]
			\path[azul] (q_gob) edge node {$SG = T - G$} (q_fin);
			
			\path[azul, bend angle=15, bend left] 
				(q_fin) edge node {$\Delta R$} (q_ext);
			\path[azul, bend angle=15, bend left] 
				(q_ext) edge node {$CKF$} (q_fin);
				
			\path[azul, bend angle=35, bend right] 
				(q_fam) edge node {$SNP = YN_d - C$} (q_fin);
			\path[azul, bend angle=35, bend left] 
				(q_fam) edge node {$T = T_t - T_r$} (q_gob);
				
			\path[azul, bend angle=25, bend right] 
				(q_emp) edge node {$YN$} (q_fam);
				
			\path[rojo, shorten >=0] (q_fam) edge node {$C$} (q_inter);
			\path[rojo, bend angle=35, bend right, shorten >=0] 
				(q_fin) edge node {$I$} (q_inter);
			\path[rojo, bend angle=35, bend left, shorten >=0] 
				(q_gob) edge node {$G$} (q_inter);
			
			\path[rojo, bend angle=25, bend right, shorten <=0] 
				(q_inter) edge node {$DA$} (q_emp);
		\end{scope}
		
		\begin{scope}[align=center, scale=\escalaSub] 
			\tikzmath { 
				\angulo = 90; \rad = \radio * 1.2;
				\cos = cos(\angulo); \sin = sin(\angulo); 
			}
			\path ($ (q_fam) + ({\rad * \cos / 2}, {\rad * \sin / 2}) $) 
				node[above=2pt] {$YN_d = YN - T$};
		\end{scope}
	\end{tikzpicture}
\end{document}
```

Donde 
* Consumo de las personas $C$
* Impuestos $T$
* Transferencias $T_r$
* Ingreso nacional $YN$
* Inversión $I$
* Gasto del gobierno $G$
* Ahorro del gobierno $SG$
* Ahorro nacional privado $SNP$
* Cuenta capital y financiera $CKF$
* Variación de reservas $\Delta R$
* Remuneración de factores $RF$
* Exportaciones $X$ / Importaciones $M$ 

Donde aparecen las identidades del circuito
* Demanda agregada $$ DA = C + G + I + (X - M) = Q = Y $$
* Gobierno $$ T = T_t - T_r = SG + G $$
* Sector externo $$ \Delta R = CKF + (X - M) + RF $$
* Familias $$ YN_d = YN - T = SNP + C $$
* Sector financiero $$ I + \Delta R = SNP + CKF + SG $$
* Cuenta corriente del país $$ CC = RF + X - M $$
	* Para $CC < 0$ es insostenible en el largo plazo, y en corto plazo, hay que financiarla tomando deuda ($CKF > 0$) y reducir las reservas ($Delta R < 0$)
	* Para $CC > 0$ signifca que el país está acumulando poder de compra externo

Se toma la convensión que es positivo la entrada de [[Divisa|divisas]], por exportaciones, deuda nueva e inversión que entra, y negativo la salida, por importanciones, pago de deuda y giro de dividendos