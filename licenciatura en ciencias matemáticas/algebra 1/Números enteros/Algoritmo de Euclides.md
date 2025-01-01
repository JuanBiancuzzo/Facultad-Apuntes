---
dia: 2024-12-20
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
  - investigación/ciencias-de-la-computación/algoritmos
aliases:
  - Esquema de Euclides extendido#^equema-euclides-extendido
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Existe un [[Algoritmo|algoritmo]] para calcular el [[Máximo común divisor|máximo común divisor]] entre dos [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|números]], que no depende de calcular sus divisores. Este algoritmo fue introducido o recopilado por Euclides

Sean $a,~ b \in \mathbb{Z}$ no ambos nulos, y sea $k \in \mathbb{Z}$, entonces $$ \begin{align} 
    \text{DivCom}(\set{ a,~b }) &= \text{DivCom}(\set{ b,~ a - k \cdot b }) \\
    \text{DivCom}_{+}(\set{ a,~b }) &= \text{DivCom}_{+}(\set{ b,~ a - k \cdot b })
\end{align} $$
En particular, para todo $k \in \mathbb{Z}$, $(a ~:~ b) = (b ~:~ a - k \cdot b)$ y dados $a,~b,~c \in \mathbb{Z}$ con $b \ne 0$ $$ a \equiv c ~ (\text{mod} ~ b) ~~ \implies ~~ (a ~:~ b) = (b ~:~ c) $$
Aplicando esto a $a \equiv r_b(a) ~ (\text{mod} ~ b)$, se obtiene que $(a ~:~ b) = (b ~:~ r_b(a))$

> [!quote]+ Demostración
> Para probar que $(a ~:~ b) = (b ~:~ a - k \cdot b)$, alcanza con probar la primera igualdad, la de los conjuntos $\text{DivCom}$, pues entonces el máximo de los divisores comunes será el mismo
> 
> Sabemos que $d \mid a$, $d \mid a - k \cdot b$, y también $d \mid b$, $d \mid a - k \cdot b \implies d \mid a$. Por lo tanto $$ \begin{align} 
>     d \in \text{DivCom}(\set{ a,~ b }) &\iff d \mid a ~~ \text{y} ~~ d \mid b \\
>      &\iff d \mid a - k \cdot b ~~ \text{y} ~~ d \mid b \\
>      &\iff d \in \text{DivCom}(\set{ b,~ a - k \cdot b })
> \end{align} $$
> 
> Ahora bien, $a \equiv c ~ (text{mod} ~ b)$ $\iff b \mid a - c$ $\iff \exists k \in \mathbb{Z} : a - c = k \cdot b$ $\iff  \exists k \in \mathbb{Z}: c = a - k \cdot b$ y por lo tanto, $(a ~:~ b) = (b ~:~ a - k \cdot b) = (b ~:~ c)$ como se quería probar

## Algoritmo
---
Sean $a, ~ b \in \mathbb{Z}$ no nulos. Existe $l \in \mathbb{N}_0$ tal que en una [[Sucesión|sucesión]] finita de $l + 1$ divisores $$ \begin{array}{l c l r r} 
    a   & = & k_1 \cdot b + r_1   & \text{con} & 0 \le r_1 < |b| \\
    b   & = & k_2 \cdot r_1 + r_2 & \text{con} & 0 \le r_2 < r_1 \\
    r_1 & = & k_3 \cdot r_2 + r_3 & \text{con} & 0 \le r_3 < r_2 \\
    \vdots \\
    r_{l - 2} & = & k_l \cdot r_{l - 1} + r_l & \text{con} & 0 \le r_l < r_{l - 1} \\
    r_{l - 1} & = & k_{l + 1} \cdot r_l + r_{l + 1} & \text{con} & 0 \le r_{l + 1} < r_l \\
\end{array} $$ se llega por primera vez el resto nulo $r_{l + 1} = 0$. Entonces $(a ~:~ b) = r_l$, el último resto no nulo

La sucesión de divisiones hasta llegar al último resto no nulo se suele llamar el esquema de Euclides extendido ^equema-euclides-extendido

> [!quote]+ Demostración
> Siempre se llega en un número finito de pasos (acotado a simple vista por $|b|$) a un resto nulo ya que $$ |b| > r_1 > r_2 > r_3 > \cdots \le 0 $$ y esta sucesión estrictamente decreciente de restos $\ge 0$ no puede ser infinita. Cuando en el procedimiento se llega a un resto nulo, $r_{l + 1} = 0$, se tiene $$ (a ~:~ b) = (b ~:~ r_1) = (r_1 ~:~ r_2) = \cdots = (r_{l - 1} ~:~ r_l) = (r_l ~:~ 0) = r_l $$

### Observación
---
Si $a,~ b \in \mathbb{Z}$ son tales que $a = 0$ y $b \ne 0$, ya sabemos que $(a ~:~ b) = |b|$ (o si $a \ne 0$ y $b = 0$, entonces $(a ~:~ b) = |a|$). Por lo tanto el algoritmo de Euclides permite calcular el máximo común divisor de cualquier par de números enteros no ambos nulos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```