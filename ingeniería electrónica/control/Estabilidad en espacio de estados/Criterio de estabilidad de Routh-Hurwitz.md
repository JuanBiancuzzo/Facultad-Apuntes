---
dia: 2025-03-29
etapa: ampliar
referencias:
  - "873"
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/control/Estabilidad-en-espacio-de-estados
aliases:
  - Routh-Hurwitz's Stability Criterion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este criterio inicialmente se usaba para obtener información sobre la ubicación de las [[Raíz de una función|raíces]] de un [[Función polinómica|polinomio]] sin tener que calcularlas en sí mismas. Ahora, se puede usar esto para determinar un rango de las ubicaciones de las raíces y por lo tanto determinar la [[Sistema estable|estabilidad de un sistema]]

Teniendo el polinomio representante a los [[Transferencia del sistema#Polos|polos]], el cual expresaremos como $$ a(s) = s^n + a_1 ~ s^{n - 1} + \cdots + a_{n - 1} ~ s + a_n $$ donde $n$ es el [[Función polinómica#^grado|grado]] del polinomio

Recordemos que es condición necesaria para la estabilidad, que todas las raíces de $a(s)$ tengan parte real negativa. Para eso, se tiene que cumplir que $a_i$ es positivo

Este es el criterio, donde es necesario pero no suficiente para la estabilidad que todos los coeficientes del polinomio sean positivos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```