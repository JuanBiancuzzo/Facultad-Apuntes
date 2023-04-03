---
dia: 2023-04-02
materia: estructura
capitulo: 1
---
### Definición
---
Hay 4 casos para esta conversión entre [[Base numerica|base]]:

#### Conversión de cualquier base a base $10$
Para poder convertir cualquier número en cualquier base, a base $10$, se utiliza lo siguiente:
$$ \sum_i w_i \cdot B^i $$
Donde $w_i$ es el [[Sistema posicional|peso en la posición]] $i$ e $B$ es la base. Por ejemplo, si tenemos el número $324_7$ entonces este se transforma en:
$$ 324_7 = 3 \cdot 7^2 + 2 \cdot 7^1 + 4 \cdot 7^0 = 165_{10} $$


#### Conversión de base $10$ a otra base
Se puede llegar a cualquier base, a partir de un número en base $10$, aplicando repetidas divisiones para la parte entera y repetidas multiplicaciones. Veamos un ejemplo, tenemos el número $134.34_{10}$ y queremos pasarlo a base $3$. 

Separamos el número en su parte entera $134_{10}$ y su parte decimal, $0.34_{10}$, para la parte entera vamos a ir dividiendo hasta que el resultado sea menor a la base, en este caso menos a $3$.
$$ \begin{matrix}
	\displaystyle \frac{134}{3} = 44 && 134 \bmod 3 = 2 \\
	\displaystyle \frac{44}{3} = 14 && 44 \bmod 3 = 2 \\
	\displaystyle \frac{14}{3} = 4 && 14 \bmod 3 = 2 \\
	\displaystyle \frac{4}{3} = 1 && 4 \bmod 3 = 1 \\
\end{matrix} $$
Ahora leyendolo la última división y de abajo para arriba los restos y, nos queda $11222_3$ que podemos comprobar que es $134_{10}$ ya que $1 \cdot 3^4 + 1 \cdot 3^3 + 2 \cdot 3^2 + 2 \cdot 3^1 + 2 \cdot 3^0 = 133_{10}$. 

Para la parte decimal, multiplicaremos el valor decimal por la base, en este caso $3$ y en cada paso nos quedarmeos con la parte decimal, de la siguiente forma:

$$ \begin{matrix}
	0.34 \cdot 3 = 1.02 \implies 1 \\
	0.02 \cdot 3 = 0.06 \implies 0 \\
	0.06 \cdot 3 = 0.18 \implies 0 \\
	0.18 \cdot 3 = 0.54 \implies 0 \\
	0.54 \cdot 3 = 1.62 \implies 1 \\
	0.62 \cdot 3 = 1.86 \implies 1 \\
	0.86 \cdot 3 = 2.58 \implies 2 \\
	0.58 \cdot 3 = 1.74 \implies 1 \\
	0.74 \cdot 3 = 2.22 \implies 2 \\
	\vdots 
\end{matrix} $$
En este caso, vamos de arriba hacia abajo para completar los decimales en la base $3$, dejandonos con el número $11222.100011212\cdots_3$  en este caso vemos que posiblemente sea periodico en este base o que su periodo supera los calculos hechos.

#### Conversión entre dos bases diferentes de $10$
Para convertir entre cualquier base a cualquier otra base, simplemente tenemos que pasar por la base $10$ en el medio, aplicando los pasos anterior. Hay excepciones que veremos a continuación.

#### Bases potencias de otras bases
Cuando queremos convertir un número de una base como base $2$ a base $4$, $8$, $16$ o etc. es decir potencias de esta misma base, podemos aplicar la siguiente tecnica. 

Dado un número en base $2$, agrupamos por el grado del exponente, es decir si es $4 = 2^2$ agrupamos de grupos de $2$, si es $8 = 2^3$ agrupamos en grupos de $3$. De esta forma podemos evitarnos convertir a base 10 y luego a la base que queremos.

Como ejemplo veamos el siguiente número en base $2$ y lo vamos a pasar a las bases $8$, $16$ y $32$
$$ 111~001~010~100_2 = \underbrace{111}_{7_8} ~ \underbrace{001}_{1_8} ~ \underbrace{010}_{2_8} ~ \underbrace{100}_{4_8} = 7124_8 $$

$$ 1110~0101~0100_2 = \underbrace{1110}_{D_{16}} ~ \underbrace{0101}_{5_{16}} ~ \underbrace{0100}_{4_{16}} = D54_{16} $$
$$ 00011~10010~10100_2 = \underbrace{00011}_{3_{32}} ~ \underbrace{10010}_{I_{32}} ~ \underbrace{10100}_{K_{32}} = 3IK_{32} $$