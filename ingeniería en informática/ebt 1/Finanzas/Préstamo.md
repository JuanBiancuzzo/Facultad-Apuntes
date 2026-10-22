---
dia: 2026-10-22
etapa: empezado
referencias: []
aliases: 
  - Préstamo por el Sistema Francés#Sistema Francés
  - Préstamo por el Sistema Alemán#Sistema Alemán
  - Préstamo de Amortización constante#Sistema Alemán
  - Préstamo por el sistema bullet#Sistema bullet
  - Préstamo por el sistema directo#Sistema directo
tags:
  - carrera/ingeniería-en-informática/ebt-1/Finanzas
  - nota/facultad
ejercicios: 
  - 753
vinculoFacultad:
  - tema: Finanzas
    capitulo: 4
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un préstamo es una operación [[ingeniería en informática/ebt 1/Economía/Finanza|financiera]] en la cual un [[Agente económico|ente]] presta una cantidad de [[ingeniería en informática/ebt 1/Economía/Dinero|dinero]] determinado a otro ente y este se compromete a devolverlo mediante un documento legal que fija las cuotas, [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés|intereses]], el tiempo en que debe devolverse y las penalidades en caso de incumplimiento

Los prestamos se componen de cuotas y estas tienen $2$ partes
1. Amortización, que representa el capital prestado
2. El interés, que representa el costo de ese dinero prestado

## Sistema Francés
---
En cada período, el valor de la cuota es constante. Pero varía la proporción de amortización e interés, donde la proporción de interés sobre la cuota es mayor y va disminuyendo período a período

Calculos
* Del interes $k$ está dado por $$ I_k = \left( P - \sum_{j = 1}^{k - 1} A_k \right) \cdot i $$ donde notemos que para $k = 1$, la sumatoria da $0$  entonces el primer interés queda como $I_1 = P ~ i$
  
* Amortización $k$ está dado por $$ A_k = C - I_k $$ donde $C$ es la cuota mensual a pagar
  
* Del prestamos está dado por $$ P = \sum_{k = 1}^{n} A_k $$ donde $n$ es la cantidad de cuotas
  
* De cuota está dado por $$ C = \frac{P}{f_{i}^{n}} $$ donde $\displaystyle f_i^n = \frac{(1 + i)^n - 1}{(1 + i)^n \cdot i}$ donde $i$ es el interés


## Sistema Alemán
---
Al sistema Alemán se lo conoce como Préstamo de Amortización constante, las cuotas son decrecientes y los intereses sobre saldos

Los intereses que pago período a período se calculan en base a la amortización que me falta pagar

Calculos
* Del interes $k$ está dado por $$ I_k = (P - (k - 1) ~ A) \cdot i $$
  
* Amortización, que son todos iguales, está dado por $$ A = \frac{P}{n} $$ donde $n$ es la cantidad de cuotas
  
* Del prestamos está dado por $$ P = \sum_{k = 1}^{n} A_k $$
  
* De cuota $k$ está dado por $$ C_k = A + I_k $$ 
## Sistema bullet
---
En cada período se paga la cuota que solo se compone del interés correspondiente y en el último período se paga todo el préstamo

Los interés que pago período a período se calculan en base a la amortización que me falta pagar, en este caso todo el préstamo

Calculos
* Del interes está dado por $$ I = P \cdot i $$
  
* Amortización $k$ está dado por $$ A_k = \begin{cases} 
	 0 & k < n \\
	 P & k < n \\
  \end{cases} $$ donde $n$ es la cantidad de cuotas
  
* Del prestamos está dado por $$ P = \sum_{k = 1}^{n} A_k $$
  
* De cuota $k$ está dado por $$ C_k = A_k + I_k $$ 

## Sistema directo
---
Los intereses se calculan directamente sobre la deuda original. Hablamos de un sistema de amortización constante e intereses constantes. Es por esto que las cuotas son constantes

Es el préstamo que ofrecen las entidades conocidas como efectivo rápido. En caso de incumplimiento en este tipo de préstamo, la refinanciación es la más costosa de todas debido a que siempre se pagan intereses sobre el total de la deuda 

Calculos
* Del interes está dado por $$ I = P \cdot i $$
  
* Amortización $k$ está dado por $$ A = \frac{P}{n} $$ donde $n$ es la cantidad de cuotas
  
* Del prestamos está dado por $$ P = \sum_{k = 1}^{n} A_k $$
  
* De cuota está dado por $$ C = A + I = \frac{P}{n} + P \cdot i $$
