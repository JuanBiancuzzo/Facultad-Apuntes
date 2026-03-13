---
dia: 2023-01-22
aliases:
  - Matriz transpuesta#Matriz transpuesta
  - Rango de una matriz#Rango de una matriz
  - Matriz inversa#Matriz inversa
  - Traza#Traza
  - Determinante#Determinante
  - Matriz adjunta#Adjunta
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-electrónica/robótica-móvil/Repaso-álgebra
  - nota/facultad
vinculoFacultad:
  - tema: Espacios Vectoriales
    capitulo: 1
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
  - tema: Repaso álgebra
    capitulo: 1
    materia: Robótica móvil
    carrera: Ingeniería electrónica
etapa: empezado
referencias:
  - "1109"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una matriz es un arreglo bidimensional de números, de $\mathbb{k}^{m \times n}$ 

$$ A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\
			a_{21} & a_{22} & \cdots & a_{2n} \\
			\vdots & \vdots & \ddots & \vdots \\
			a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} $$

## Rango de una matriz
---
Número máximo de filas (columnas) [[ingeniería en informática/algebra 2/Espacios Vectoriales/Linealmente independiente|linealmente independiente]], Que se puede calcular como la [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensión]] de la [[ingeniería en informática/analisis 2/Nomenclatura/Codominio|imagen]] de la [[ingeniería en informática/algebra 2/Transformaciones lineales/Transformación lineal|transformación]] $f(x) = A ~ x$

Cuando $A$ es de $m \times n$ tenemos que 
* $\text{rank}(A) \ge 0$ y la igualdad se cumple sii $A$ es la matriz nula
* $\text{rank}(A) \le \min(m,~ n)$

## Matriz transpuesta
---
Sea $A \in \mathbb{C}^{m \times n}$ se define 

$$ A^* = \overline{A^T} $$

### Propiedades
---
 * $(A + B)^* = A^* + B^*$, $A, B \in \mathbb{C}^{m \times n}$
 * $(\alpha A)^* = \overline\alpha A^*$, $A \in \mathbb{C}^{m \times n}$, $\alpha \in \mathbb{C}$
 * $(A \cdot B)^* = B^* \cdot A^*$, $A \in \mathbb{C}^{m \times n}$, $B \in \mathbb{C}^{n \times m}$
 * $(A^*)^* = A$, $A \in \mathbb{C}^{m \times n}$
 * Si $A \in \mathbb{C}^{1 \times 1} = \mathbb{C}$ como claramente $A^T = A$ tenemos que $A^* = \overline{A}$

## Matriz inversa
---
Si $A$ es una matriz cuadrada de rango completo, entonces existe una matriz única $B = A^{-1}$ tal que $AB = \mathbb{I}$


## Traza
---
Solo definido para matrices cuadradas, donde es la suma de los elementos de la diagonal principal $$ \text{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn} = \sum_{i = 1}^{n} a_{ii} $$
Es un [[ingeniería electrónica/analisis 3/Transformaciones conformes/Función lineal|operador lineal]]  con las siguientes propiedades
* Adición $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$
* Homogeneidad $\text{tr}(cA) = c ~\text{tr}(A)$
* Conmutativa en pares, ya que $\text{tr}(AB) = \text{tr}(BA)$ y $\text{tr}(ABC) \ne \text{tr}(ACB)$

La traza es invariante a semejanza $$ \text{tr}\left( P^{-1} A P \right) = \text{tr}\left( P ~ \left(P^{-1} ~ A \right) \right) = \text{tr}(A) $$
La traza es invariante a la transposición $$ \text{tr}(A) = \text{tr}\left( A^T \right) $$
Dados dos [[ingeniería electrónica/robotica movil/Repaso álgebra/Vector|vectores]] $a$ y $b$, entonces $\text{tr}\left( a^T ~ b \right) = \text{tr}\left( a ~ b^T \right)$

## Determinante
---
Solo definido para matrices cuadradas. Para las matrices de $2 \times 2$, sea $A = [a_{ij}]$ y $|A| = \det(A)$ entonces $$ \begin{vmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22} \\
\end{vmatrix} = a_{11} ~ a_{22} - a_{12} ~ a_{21} $$

Para las matrices de $3 \times 3$, sea $A = [a_{ij}]$ y $|A| = \det(A)$ entonces $$ \begin{vmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33} \\
\end{vmatrix} = \begin{align} 
    & a_{11} ~ a_{22} ~ a_{33} + a_{12} ~ a_{23} ~ a_{31} + a_{13} ~ a_{21} ~ a_{32} \\
    &- a_{11} ~ a_{23} ~ a_{32} - a_{12} ~ a_{21} ~ a_{33} - a_{13} ~ a_{22} ~ a_{11}
\end{align} $$
### Propiedades
---
* La inversa de $A$ existe sii $\det(A) \ne 0$
* Operaciones de filas $A$
    * Si $B$ resulta de $A$ al intercambiar dos filas, entonces $$ \det(B) = -\det(A) $$
    * Si $B$ resulta de $A$ al multiplicar una fila por un número $c$, entonces $$ \det(B) = c ~ \det(A) $$
    * Si $B$ resulta de $A$ al sumar el múltiplo de una fila a otra fila, entonces $$ \det(B) = \det(A) $$
* Transpuesta $$ \det\left( A^T \right) = \det(A) $$
* Multiplicación $$ \det( A ~ B ) = \det(A) ~ \det(B) $$

## Adjunta
---
Solo definido para matrices cuadradas. La matriz adjunta, denotada $\text{adj}(A)$ de la matriz $A$ es la transpuesta de su [[Matriz de cofactores|matriz de cofactores]] $C$ $$ \text{adj}(A) = C^T $$
El producto entre la matriz $A$ y la matriz adjunta da una matriz diagonal escalado por el determinante de la matriz original $$ A ~ \text{adj}(A) = \det(A) ~ \mathbb{I} $$ donde $\mathbb{I}$ es la identidad del mismo tamaño de $A$, de esta expresión se puede definir el inverso de $A$ como $$ A^{-1} = \frac{\text{adj}(A)}{\det(A)} $$
# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```