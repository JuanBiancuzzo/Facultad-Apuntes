---
dia: 2024-12-21
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ b \in \mathbb{Z}$, no ambos nulos. Entonces existen $s,~ t \in \mathbb{Z}$ tales que $$ (a ~:~ b) = s \cdot a + t \cdot b $$

> [!quote]+ Demostración
> Se miran de atrás para adelante las sucesivas divisiones hasta la que da al [[Máximo común divisor|máximo común divisor]] como último resto no nulo, y, poniendo en factor común los sucesivos [[Algoritmo de división|divisores]] y [[Algoritmo de división|restos]] y reagrupando, se obtiene una escritura entera de $(a ~:~ b)$ como combinación entera de $a$ y $b$. (Luego, si habíamos, para simplificar las divisiones, cambiado los signos de los $a$ y $b$ originales, se modifican los signos para escribir $(a ~:~ b)$ como combinación entera de los $a$ y $b$ originales) Si $r_l = (a ~:~ b)$, $$ \begin{array}{ccl c rcl} 
>     r_{l - 2} & = & k_l ~ r_{l - 1} + r_l & \implies & r_l & = & r_{l - 2} - k_l ~ r_{l - 1} \\ 
>     r_{l - 3} & = & k_{l - 1} ~ r_{l - 2} + r_{l - 1} & \implies & r_l & = & r_{l - 2} - k_l ~ (r_{l - 3} - k_{l - 1} ~ r_{l - 2}) \\ 
>     &&&&& = & (1 + k_l ~ k_{l - 2}) r_{l - 2} - k_l ~ r_{l - 3} \\
>     \vdots \\
>     r_1 & = & k_3 ~ r_2 + r_3 & \implies & r_l & = & * ~ r_1 + *' ~ r_2 \\
>     b & = & k_2 ~ r_1 + r_2 & \implies & r_l & = & * ~ r_1 + *' (b - k_2 ~ r_1) \\
>     &&&&& = & (* - k_2 ~ *') r_1 + *' ~ b \\
>     a & = & k_1 ~ b + r_1 & \implies & r_l & = & (* - k_2 ~ *')(a - k_1 ~ b) + *' ~ b \\
>     &&&&& = & s ~ a + t ~ b \\
> \end{array} $$ donde las estrellitas simbolizan los números que se obtuvieron como coeficientes al llegar a ese paso. Así, $(a ~:~ b) = r_l = s ~ a + t ~ b$ donde claramente $s,~ t \in \mathbb{Z}$ ya que son obtenidos sumando y multiplicando enteros 

## Combinaciones enteras de a y b
---
Sean $a,~ b \in \mathbb{Z}$ no ambos nulos, y $c \in \mathbb{Z}$. $$ c = s' \cdot a + t' \cdot b ~~ \text{para} ~~ s',~ t' \in \mathbb{Z} \iff (a ~:~ b) \mid c $$

> [!quote]+ Demostración
> * $(\implies)$ Dado que $(a ~:~ b) \mid a$ y $(a ~:~ b) \mid b$, se tiene $(a ~:~ b) \mid s' ~ a + t' + b$, luego $(a ~:~ b) \mid c$
> * $(\impliedby)$ Si $(a ~:~ b) \mid c$, entonces $c = k \cdot (a ~:~ b)$. Como sabemos que existen $s,~ t \in \mathbb{Z}$ tales que $(a ~:~ b) \mid s \cdot a + t \cdot b$, se tiene $$ c = k \cdot (a ~:~ b) = k (s \cdot a + t \cdot b) = (k \cdot s) ~ a + (k \cdot t) ~ b $$
>       Luego $s' = k \cdot s$ y $t' = k \cdot t$

Este punto nos dice que el máximo común divisor $(a ~:~ b)$ es el [[Números Naturales|número natural]] más chico que se puede escribir como combinación entera de $a$ y $b$ y que todas las demás combinaciones enteras de $a$ y $b$ son divisibles por él

## Observación
---
Observemos para escribir al algoritmo que si definimos $r_{-1} = a$, $r_0 = b$, y si en general $r_{i - 2} = k_i ~ r_{i - 1} + r_i$, y logramos escribir $r_{i - 2} = s_{i - 2} ~ a + t_{i - 2} ~ b$ y $r_{i - 1} = s_{i - 1} ~ a + t_{i - 1} ~ b$ comenzando desde $r_{-1} = 1 ~ a + 0 ~ b$, o sea $s_{-1} = 1$, $t_{-1} = 0$, y $r_0 = 0 ~ a + 1 ~ b$, o sea $s_0 = 0$, $t_0 = 1$, entonces tenemos la [[Recurrencia|recurrencia]] $$ \begin{align} 
    r_i &= r_{i - 2} - k_i ~ r_{i - 1} = s_{i - 2} ~ a + t_{i - 2} ~ b - k_i (s_{i - 1} ~ a + t_{i - 1} ~ b) \\
     &= (s_{i - 2} - k_i ~ s_{i - 1}) a + (t_{i - 2} - k_i ~ t_{i - 1}) b
\end{align} $$
Es decir $r_i = s_i ~ a + t_i ~ b$ donde $$ \begin{matrix} 
    s_i = s_{i - 2} - k_i ~ s_{i - 1} & \text{y} & t_i = t_{i - 2} - k_i ~ t_{i - 1}
\end{matrix} $$
Se recupera la escritura de $(a ~:~ b) = r_l = s_l ~ a + t_l ~ b$ donde $r_l$ es el último resto no nulo

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```