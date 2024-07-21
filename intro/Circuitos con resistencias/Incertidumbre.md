---
dia: 2023-01-23
capitulo: 1
tags:
  - intro/Circuitos-con-resistencias
  - nota
---
### Definición 
---
El intervalo dentro del cual podemos confiar que se encuentra el valor verdadero de una medición efectuada.

##### Calculo de la incertidumbre
Depende de
1. Rango: Depende del punto decimal y de la cantidad de cuentas (máximo número que puede mostrar).

2. Resolución: Es la mínima lectura apreciable (depende de la ubicación del punto decimal).

| Rango   | Dígitos |
| ------- | ------- |
| $4 ~V$  | $0.001$        |
| $40 ~V$ | $0.01$        |
| $400 ~V$        | $0.1$        |

3. **Cuentas:** La siguiente tabla depende del multímetro o instrumento utilizado, se encuentra en los manuales de los mismos.

| Range | Resolution | Basic uncertainty |
| ---- | ---- | ---- |
| $400 ~mV$ | $0.1 ~mV$ | $\pm (0.5 \% ~ m.v. + 2 ~ \text{digits})$ |
| $4 ~V$ | $0.001 ~V$ | $\pm (1.2 \% ~ m.v. + 2 ~ \text{digits})$ |
| $40 ~V$ | $0.01 ~V$ | $\pm (1.2 \% ~ m.v. + 2 ~ \text{digits})$ |
| $400 ~V$ | $0.1 ~V$ | $\pm (1.2 \% ~ m.v. + 2 ~ \text{digits})$ |
| $600 ~V$ | $1 ~V$ | $\pm (1.5 \% ~ m.v. + 2 ~ \text{digits})$ |


De donde:
$$
\left\{ 
\begin{array}{ l } 
m.v. &= Valor \space medido \\
digits &= Resolucion \\
\end{array} \right.
$$
