---
dia: 2025-03-14
etapa: terminado
referencias:
  - "1019"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El método consiste en descomponer un [[Algoritmo de división|cociente]] de [[Función polinómica|polinomios]] en una suma de fracciones de polinomios de [[Función polinómica#^grado|grado]] menor

Sea $$ \frac{A(x)}{B(x)} = \frac{a_m ~ x^m + a_{m - 1} ~ x^{m - 1} + \cdots + a_1 ~ x + a_0}{b_n ~ x^n + b_{n - 1} ~ x^{n - 1} + \cdots + b_1 ~ x + b_0} $$ donde $m < n$

Para reducir la expresión a fracciones parciales se debe expresar la [[Función|función]] $B(x)$ en producto de factores lineales o cuadráticos

## Casos
---
Se distinguen $4$ casos

### Factores lineales distintos
---
Donde ningún par de factores es idéntico $$ \frac{A_1}{(x + a_1)} + \frac{A_2}{(x + a_2)} + \cdots + \frac{A_n}{(x + a_n)} $$
Donde $A_1,~ A_2,~ \cdots, A_n$ son constantes a determinar, y ningún denominador se anula

### Factores lineales repetidos
---
Donde los pares de factores son idénticos $$ \frac{A_1}{(x + a_1)} + \frac{A_2}{(x + a_1)^2} + \cdots + \frac{A_n}{(x + a_1)^n} $$
Donde $A_1,~ A_2,~ \cdots, A_n$ son constantes a determinar, y ningún denominador se anula

### Factores cuadráticos distintos
---
Donde ningún par de factores es igual $$ \frac{A_1 ~ x + B_1}{(a_1 ~ x^2 + b_1 ~ x + c_1)} + \frac{A_2 ~ x + B_2}{(a_2 ~ x^2 + b_2 ~ x + c_2)} + \cdots + \frac{A_n ~ x + B_n}{(a_n ~ x^2 + b_n ~ x + c_n)} $$
Donde $A_1,~ B_1,~ A_2,~ B_2,~ \cdots,~ A_n,~ B_n$ son constantes a determinar, y ningún denominador se anula

### Factores cuadráticos repetidos
---
Donde los pares de factores son iguales $$ \frac{A_1 ~ x + B_1}{(a_1 ~ x^2 + b_1 ~ x + c_1)} + \frac{A_2 ~ x + B_2}{(a_1 ~ x^2 + b_1 ~ x + c_1)^2} + \cdots + \frac{A_n ~ x + B_n}{(a_1 ~ x^2 + b_1 ~ x + c_1)^n} $$
Donde $A_1,~ B_1,~ A_2,~ B_2,~ \cdots,~ A_n,~ B_n$ son constantes a determinar, y ningún denominador se anula

## Cómputo de las constantes
---
Para hallar las constantes, en el caso de factores lineales distintos se puede utilizar la siguiente fórmula $$ A_k = \left[ \frac{A(x)}{B(x)} (x + a_k) \right]_{x = -a_k} $$ en donde $k = (1,~ 2,~ \cdots,~ n)$

Para los otros casos no existe una formulación especifica. Sin embargo, estos se pueden resolver simplificando y formando un sistemas de ecuaciones con cada una de las $A_k$, la resolución del sistema proporciona los valores de los $A_k$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```