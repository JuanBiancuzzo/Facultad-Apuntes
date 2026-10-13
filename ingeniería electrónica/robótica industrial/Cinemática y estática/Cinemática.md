---
dia: 2026-09-06
etapa: empezado
referencias: []
aliases:
  - Convensión de asignación de ternas por Denavit-Hartemberg#Asignación de ternas
  - Convensión Denavit-Hartemberg#Asignación de ternas
  - Parámetros de Denavit-Hartemberg#Asignación de ternas
  - Parámetros DH#Asignación de ternas
  - Destreza#^destreza
  - Ellipse de manipulabilidad#^manipulabilidad
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La cinemática, es el estudio del movimiento sin tener en cuenta las causas. En general, sin la descripción de la geometría del movimiento

En el ambito de la [[investigación/robótica/Robótica|robótica]], utilizando la simplificación de que un robot es la unión de eslabónes unidos por [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación#^articulacion-simple|articulaciones simples]], representando cada eslabón con su propia [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] y un eje dado por cada articulación

## Asignación de ternas
---
Existen infinitas formas de asignar ternas, por lo que utilizaremos generalmente la convensión de Danavit-Hartemberg, donde en esta explicación asumimos que tenemos un [[ingeniería electrónica/robótica industrial/Introducción/Robot de cadena abierta|robot de cadena abierta]]

![[ingeniería electrónica/robótica industrial/Cinemática y estática/img/Asignación de ternas.png|600]]

Los eslabones se le asinga un número, desde la base como $0$ hasta el [[End-effector|end-effector]] siendo $n$, donde $n$ es la cantidad de eslabones, el resto de los eslabones es asignado de forma creciente. Para los ejes, unen los eslabones $i - 1$ e $i$, por lo que llamaremos eje $i$ 

Esta convensión tiene $2$ reglas
* Para lograr que la terna $i$ se mueva con la variable articular $q_i$, entonces se toma que la terna debería estar sobre el eje $i + 1$, donde el [[ingeniería electrónica/robótica móvil/Repaso álgebra/Vector|versor]] $\hat{z}_i$ es a lo largo del eje $i + 1$
* El versor $\hat{x}_{i + 1}$ tiene que cortar perpendicularmente al versor $\hat{z}_i$

Estas $2$ reglas permiten las ternas, dejando algunas libertades para quien las sigue. Esto hace que se tengan que utilizar $4$ parámetros para unificar cualquier asignación creada
1. $\theta_i$ que representa la rotación de la articulación $i$, 
	* Define como orientas $\hat{x}_{i - 1}$ con $\hat{x}_i$
	* Dado por la [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matriz de rotación]] $R(\hat{z}_{i - 1},~ \theta_i)$
	* Es una variable articular si es una [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación#^articulacion-simple-revolucion|articulación de revolución]]
2. $d_i$ que representa la longitud de la articulación $i$
	* Alinea el origen de la recta que corta perpendicularmente los ejes
	* Dado por una [[Translación|translación]] $T(\hat{z}_{i - 1},~ d_i)$
	* Es una variable articular si es una [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación#^articulacion-simple-prismatica|articulación prismatica]]
3. $a_i$ que representa la longitud del eslabón $i$
	* Desplaza el origen de la terna $i$ para que coincida con al terna $i + 1$
	* Dado por una translación $T(\hat{x}_{i - 1},~ a_i) = T(\hat{x}_{i},~ a_i)$
4. $\alpha_i$ que representa la torsión del eslabon $i$
	* Define como orientar $\hat{z}_{i - 1}$ con $\hat{z}_i$
	* Dado por la matriz de rotación $R(\hat{x}_{i - 1},~ \alpha_i) = R(\hat{x}_{i},~ \alpha_i)$

Uitlizando [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matrices de rototranslación]], se pueden expresar estos $4$ parámetros como $$ \begin{align}
	R(\hat{z}_{i - 1},~ \theta_i) &= \begin{bmatrix}
		\cos\theta_i & -\sin\theta_i & 0 & 0 \\ 
		\sin\theta_i & \cos\theta_i & 0 & 0 \\ 
		0 & 0 & 1 & 0 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	T(\hat{z}_{i - 1},~ d_i) &= \begin{bmatrix}
		1 & 0 & 0 & 0 \\ 
		0 & 1 & 0 & 0 \\ 
		0 & 0 & 1 & d_i \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} \\
	R(\hat{x}_{i},~ \theta_i) &= \begin{bmatrix}
		1 & 0 & 0 & 0 \\
		0 & \cos\alpha_i & -\sin\alpha_i & 0 \\ 
		0 & \sin\alpha_i & \cos\alpha_i & 0 \\ 
		0 & 0 & 0 & 1 \\
	\end{bmatrix} &
	T(\hat{x}_{i},~ a_i) &= \begin{bmatrix}
		1 & 0 & 0 & a_i \\ 
		0 & 1 & 0 & 0 \\ 
		0 & 0 & 1 & 0 \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix} \\
\end{align} $$
Multiplicando estas $4$ matrices, obtenemos la forma genérica de expresar la relación entre $2$ ternas consecutivas $$ \begin{align} 
	A_{i - 1}^{i} &= R(\hat{z}_{i - 1},~ \theta_i) ~ T(\hat{z}_{i - 1},~ d_i) ~ T(\hat{x}_{i},~ a_i) ~ R(\hat{x}_{i},~ \theta_i) \\
	 &= \begin{bmatrix}
		\cos\theta_i & -\sin\theta_i ~ \cos\alpha_i & \sin\theta_i ~ \sin\alpha_i & a_i ~ \cos\theta_i \\ 
		\sin\theta_i & \cos\theta_i ~ \cos\alpha_i & -\cos\theta_i ~ \sin\alpha_i & a_i ~ \sin\theta_i \\ 
		0 & \sin\alpha_i & \cos\alpha_i & d_i \\
		0 & 0 & 0 & 1 \\
	\end{bmatrix}
\end{align} $$

## Velocidades
---
Recordando que tomamos a los eslabones como [[Cuerpo rígido|cuerpos rígidos]], y que el mecanismo con articulaciones de revolución y prismáticos, se puede obtener la velocidad desde el origen del eslabon $v_{o,~ n}$ para la terna $n$ y moviendo solo el eje $i$ como $$ \begin{align} 
	v_{o,~ n,i} &= \dot{q}_i (z_{i - 1} \times p_{i - 1,~ n}) \tag{Revolución} \\
	v_{o,~ n,i} &= \dot{q}_i ~ z_{i - 1} \tag{Prismático} \\
\end{align} $$ para la [[Velocidad angular|velocidad angular]] para la terna $n$ y moviendo solo el eje $i$, como $$ \begin{align} 
	v_{o,~ n,i} &= \dot{q}_i ~ z_{i - 1} \tag{Revolución} \\
	v_{o,~ n,i} &= 0 \tag{Prismático} \\
\end{align} $$
Esto nos permite expresar el [[ingeniería en informática/analisis 2/Funciones de varias variables/Jacobiana|Jacobiano]], donde representaremos el caso $i$ como un eje prismático $$ \begin{bmatrix} v \\ \omega \end{bmatrix} = \begin{bmatrix} J_v(q) \\ J_\omega(q) \end{bmatrix} ~ \dot{q} = \begin{bmatrix}
	z_0 \times p_{0,~ n} & z_1 \times p_{1,~ n} & \cdots & z_{i - 1} & \cdots & z_{n - 1} \times p_{n - 1,~ n} \\
	z_0 & z_1 & \cdots & 0 & \cdots & z_{n - 1}
\end{bmatrix} ~ \dot{q} $$
Para la proyección del Jacobiano en una terna arbitraria $j$, que denotaremos $J^j$, donde se puede expresar para el eje $i$, viendo la componente $x$ del mismo, se tiene $$ \begin{align} 
	v^{j}_{o,~ n,i} &= \left( p_{i - 1,~ n} \times x^{i - 1}_{j} \right) \bigg|_z \tag{Revolución} \\
	v^{j}_{o,~ n,i} &= x^{i - 1}_{j} \bigg|_z \tag{Prismático} \\
\end{align} $$ donde para velocidad angular sería $$ \begin{align} 
	\omega^{j}_{o,~ n,i} &= x^{i - 1}_{j} \bigg|_z \tag{Revolución} \\
	\omega^{j}_{o,~ n,i} &= 0 \tag{Prismático} \\
\end{align} $$
Esto nos permite expresar el Jacobiano, expresado en la terna $j$ como $$ \begin{bmatrix} v^{j} \\ \omega^{j} \end{bmatrix} = \begin{bmatrix} J^{j}_v(q) \\ J^{j}_\omega(q) \end{bmatrix} ~ \dot{q} = \begin{bmatrix}
	\left( p_{0,~ n} \times x^{0}_{j} \right) \bigg|_z & \left( p_{1,~ n} \times x^{1}_{j} \right) \bigg|_z & \cdots & x^{i - 1}_{j} \bigg|_z & \cdots & \left( p_{n - 1,~ n} \times x^{n - 1}_{j} \right) \bigg|_z \\
	\left( p_{0,~ n} \times y^{0}_{j} \right) \bigg|_z & \left( p_{1,~ n} \times y^{1}_{j} \right) \bigg|_z & \cdots & y^{i - 1}_{j} \bigg|_z & \cdots & \left( p_{n - 1,~ n} \times y^{n - 1}_{j} \right) \bigg|_z \\
	\left( p_{0,~ n} \times z^{0}_{j} \right) \bigg|_z & \left( p_{1,~ n} \times z^{1}_{j} \right) \bigg|_z & \cdots & z^{i - 1}_{j} \bigg|_z & \cdots & \left( p_{n - 1,~ n} \times z^{n - 1}_{j} \right) \bigg|_z \\
	x^{0}_{j} \bigg|_z & x^{1}_{j} \bigg|_z & \cdots & 0 & \cdots & x^{n - 1}_{j} \bigg|_z \\
	y^{0}_{j} \bigg|_z & y^{1}_{j} \bigg|_z & \cdots & 0 & \cdots & y^{n - 1}_{j} \bigg|_z \\
	z^{0}_{j} \bigg|_z & z^{1}_{j} \bigg|_z & \cdots & 0 & \cdots & z^{n - 1}_{j} \bigg|_z \\
\end{bmatrix} ~ \dot{q} $$

Donde si aplicamos la [[Descomposición en valores singulares|descomposición en valores singulares]] del Jacobiano, se tiene que $$ J = U \Sigma V^T $$ donde $$ \Sigma = \begin{bmatrix}
	\sigma_1 \\
	& \sigma_2 \\
	& & \ddots \\
	& & & \sigma_n \\
\end{bmatrix} $$
Similar como la [[Matriz de Controlabilidad|matriz de Controlabilidad]] donde los valores singulares representan el esfuerzo para realizar esa velocidad, y cuando se acerca a una [[ingeniería electrónica/analisis 3/Series de Laurent/Singularidad|singularidad]], el $\sigma_n$ tiende a $0$, y por lo tanto para $J^{-1}$ implica que $\frac{1}{\sigma_i}$ tiende a infinito y representa una velocidad cartesiana infinita

Con indices del Jacobiano 
* Destreza $$ D(q) = \frac{\sigma_\text{min}}{\sigma_\text{max}} = \frac{\sigma_n}{\sigma_1} \in [0,~ 1] $$ ^destreza
* Manipulabilidad $$ W(q) = \sqrt{ \det(J J^T) } = \prod_{i = 1}^{n} \sigma_i \in [0,~ \infty) $$ ^manipulabilidad