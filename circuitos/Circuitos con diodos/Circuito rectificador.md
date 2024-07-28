---
dia: 2024-03-24
tags:
  - circuitos/Circuitos-con-diodos
  - nota
---
### Definición
---
Un uso común de los [[Diodo|diodos]] es convertir [[Corriente eléctrica|corriente]] alterna en continua. Debido a que los [[Circuito eléctrico|circuitos electrónicos]] funcionan con continua y la [[Energía|energía]] se distribuye en alterna, esta etapa conversora, o fuente, es requerida en casi todos los equipos

#### Metodología
---
Para analizar este tipo de circuitos es normalmente suficiente utilizar una [[Modelo de orden 0 para diodo|aproximación lineal de orden 0]]. La mayor parte de las veces la forma más sencilla de analizarlo es suponer cuáles conducen y cuales no. Luego reemplazamos los que conducen por una fuente del valor adecuado ($0.7~V$ en [[Convención de signos para la tensión de polarización#Polarización directa|directa]] o $V_r$ en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]) y eliminamos los que asumimos que no (se comportan como circuito abierto)

Siguiendo con lo asumido resolvemos el circuito y determinamos todas las [[Tensión|tensiones]] y [[Corriente eléctrica|corrientes]]. Una vez hecho esto, sólo resta verificar
* Que las tensiones entre los nodos de los diodos que eliminamos (porque no conducían) están en el rango $V_r$-$0.7~V$
* Que las corrientes de los que supusimos que conducían sean mayores a $0$

De no ser así el supuesto es incorrecto y debe modificarse y repetir todo


#### Fuentes de alterna
---
La mayor parte de las veces existe al menos una [[Fuente de tensión|fuente]] de alterna. La misma obviamente varía en el tiempo, así que el procedimiento anterior debe repetirse por tramos. Según el valor que tome la fuente habrá un conjunto de [[Diodo|diodos]] que conducen y otros que no. Entonces
1. Asumimos que la(s) fuente(s) de alterna vale(n) $0~V$
2. Hacemos nuestra suposición de cuáles diodos conducen y cuáles no
3. Resolvemos el [[Circuito eléctrico|circuito]] y verificamos que la suposición es correcta
4. Ahora, con la solución anterior, evaluamos $V_{dn}(t)$ para cada uno de los diodos que asumimos que no conducía e $I_{dn}(t)$ de cada uno de los que sí lo hacían. Esas tensiones y corrientes son válidas en la medida en que el supuesto siga siendo válido, o sea mientras $V_r \le V_{dn}(t) \le 0.7~V$ y $I_{dn}(t) > 0~mA$
5. Determinamos el instante de tiempo en que la primera de esas ecuaciones deja de ser válida, y la tensión de la(s) fuentes(s) en ese instante
6. Cambiamos el estado del diodo cuya ecuación dejó de ser válida, con eso armamos el nuevo supuesto. La(s) fuente(s) de alterna toman los valores determinados en el punto anterior
7. Volvemos al punto 3