---
dia: 2024-12-10
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Mcd
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ b \in \mathbb{Z}$, no ambos nulos. El máximo común divisor entre $a$ y $b$, que se nota $(a:b)$, es el mayor de los divisores comunes de $a$ y $b$. Es decir $$ (a:b) \mid a, ~ (a:b) \mid b ~~ \text{y si} ~ d \mid a ~\text{y}~ d \mid b, ~~ \text{entonces} ~ d \le (a:b) $$
Claramente ese número existe, ya que la lista de divisores comunes es no vacía ($1$ es un divisor común) y finita (por ser al menos uno entre $a$ y $b$ no nulo), y es único (por ser el mayor de todos). Además es positivo por la misma razón

Notaremos en lo que sigue con $\text{DivCom}(\set{ a,~b })$ el [[Conjunto|conjunto]] de los [[Algoritmo de división|divisores]] comunes de $a$ y $b$ y con $\text{DivCom}_{+}(\set{ a,~b })$ el conjunto de los divisores comunes positivos, es decir $$ \begin{align} 
    \text{DivCom}(\set{ a,~b }) &= \set{d \in \mathbb{Z} : d \mid a ~\text{y}~ d \mid b } = \text{Div}(a) \cap \text{Div}(b) \\
    \text{DivCom}_{+}(\set{ a,~b }) &= \set{d \in \mathbb{N} : d \mid a ~\text{y}~ d \mid b } = \text{Div}_{+}(a) \cap \text{Div}_{+}(b)
\end{align} $$
Luego, el [[Máximo|máximo]] común divisor es el elemento más grande de cualquiera de esos dos conjuntos

### Punto de vista de los coprimos
---
> [!observacion]+ Observación 1.3.9 
> Sean $a,~ b \in \mathbb{Z}$, no ambos nulos. Sea $d \in \mathbb{Z}$ un número que satisface que $$ \begin{matrix} 
>    d \mid a, & d \mid b & \text{y} & \displaystyle \frac{a}{d} \perp \frac{d}{d}
> \end{matrix} $$
> Entonces $d = (a ~:~ b)$
^obs-1-3-9

## Múltiplo común de dos números
---
> [!proposicion]+ Proposición 1.3.6 (Mcd de múltiplo común de dos números)
> Sean $a,~b \in \mathbb{Z}$, no ambos nulos, y sea $k \in \mathbb{Z}$ con $k \ne 0$. Entonces $$ (k ~ a ~:~ k ~ b) = |k| \cdot (a ~:~ b) $$
> 
> > [!demostracion]- Demostración
> > Sin pérdida de generalidad, podemos suponer $k > 0$.
> > 
> > Por un lado, aplicando [[Divisor común|divisor común]] ![[Divisor común#^prop-1-3-5]] se tiene $$ (a ~:~ b) \mid a ~~ \text{y} ~~ (a ~:~ b) \mid b \implies k ~ (a ~:~ b) \mid k ~ a ~~ \text{y} ~~ k ~ (a ~:~ b) \mid k ~ b \implies k ~ (a ~:~ b) \mid (k ~ a ~:~ k ~ b) $$
> > 
> > Por otro lado, por [[Combinación entera|combinación entera]], se tiene $$ (a ~:~ b) = s ~ a + t ~ b \implies k ~ (a ~:~ b) = s ~ (k ~ a) + t ~ (k ~ b) \implies (k ~ a ~:~ k ~ b) \mid k ~ (a ~:~ b) $$
> > 
> > Como ambos términos son positivos, se concluye que son iguales
^prop-1-3-6

## Equivalencias
---
> [!teorema]+ Teorema 1.3.7 (Equivalencias del mcd)
> Sean $a,~ b \in \mathbb{Z}$, no ambos nulos, y sea $d \in \mathbb{N}$. Son equivalentes
>  1. $d \mid a$, $d \mid b$ y si $c \mid a$ y $c \mid b$, entonces $c \le d$
>  2. $d \mid a$, $d \mid b$ y existen $s,~t \in \mathbb{Z}$ tales que $d = s ~ a + t ~ b$
>  3. $d \mid a$, $d \mid b$ y si $c \mid a$ y $c \mid b$, entonces $c \mid d$
>  
>  Un número $d \in \mathbb{N}$ que cumple cualquiera de esas $3$ propiedades es el máximo común divisor $(a ~:~ b)$
> 
> > [!demostracion]- Demostración
> > Vamos a probar $(1 \implies 2)$, $(2 \implies 3)$ y $(3 \implies 1)$, ya que para probar $(2 \implies 1)$ se usa $(2 \implies 3 \implies 1)$
> > 
> >  * $(1 \implies 2)$ 
> >    
> >  * $(2 \implies 3)$
> >    
> >  * $(3 \implies 1)$
> >    
^teo-1-3-7

## Máximo común divisor y factorización
---
> [!proposicion]+ Proposición 1.1.11 (Máximo común divisor y factorización)
> Sean $a,~ b \in \mathbb{Z}$ no nulos de la forma $$ \begin{align} 
>     a &= \pm p_1^{m_1} \cdots p_r^{m_r} & \text{con} ~~& m_1,~ \cdots,~ m_r \in \mathbb{N}_0 \\
>     b &= \pm p_1^{n_1} \cdots p_r^{n_r} & \text{con} ~~& n_1,~ \cdots,~ n_r \in \mathbb{N}_0 \\
> \end{align} $$ 
> Entonces $$ (a ~:~ b) = p_1^{\min\set{m_1,~ n_1}} \cdots p_r^{\min\set{m_r,~ n_r}} $$
> 
> > [!demostracion]- Demostración
> > Hay que probar que $p_1^{\min\set{m_1,~ n_1}} \cdots p_r^{\min\set{m_r,~ n_r}}$ es el mayor de los [[Divisor común|divisores comunes]] de $a$ y $b$. Investiguemos los divisores comunes (positivo) de $a$ y $b$ $$ \begin{align} 
> >     d \mid a \iff d &= p_1^{k_1} \cdots p_r^{k_r} & \text{con} ~~& 0 \le k_1 \le m_1,~ \cdots,~ 0 \le k_r \le m_r, \\
> >     d \mid b \iff d &= p_1^{k_1} \cdots p_r^{k_r} & \text{con} ~~& 0 \le k_1 \le n_1,~ \cdots,~ 0 \le k_r \le n_r \\
> > \end{align} $$
> > Por lo tanto $d \mid a$ y $d \mid b$ si y solo si $$ \begin{align} 
> >     d &= p_1^{k_1} \cdots p_r^{k_r} & \text{con} ~~& 0 \le k_1 \le \min\set{m_1,~ n_1},~ \cdots,~ 0 \le k_r \le \min\set{m_r,~ n_r}
> > \end{align} $$
> > De esa forma el mayor de los divisores comunes es $$ (a ~:~ b) = p_1^{\min\set{m_1,~ n_1}} \cdots p_r^{\min\set{m_r,~ n_r}} $$ como se quería probar
^prop-1-1-11

> [!corolario]+ Corolario 1.1.12 (Mcd de potencias) - [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Máximo común divisor#^prop-1-1-11|Proposición 1.1.11 (Máximo común divisor y factorización)]]
> Sean $a,~ b \in \mathbb{Z}$ no nulos
>  1. Sean $a,~ b \ne 0,~ \pm 1$ con [[Teorema fundamental de la aritmética|factorización en primos]] $a = \pm p_1^{m_1} \cdots p_r^{m_r}$, $m_1,~ \cdots,~ m_r \in \mathbb{N}$, y $b = \pm q_1^{n_1} \cdots q_s^{n_s}$, $n_1,~ \cdots,~ n_s \in \mathbb{N}$. Entonces $$ (a ~:~ b) = 1 \iff p_i \ne q_j,~ \forall i,~ j $$
>  2. $(a ~:~ b) = 1$ y $(a ~:~ c) = 1$, $\iff (a ~:~ bc) = 1$
>  3. $(a ~:~ b) = 1 \iff (a^m ~:~ b^n) = 1$ $\forall m,~ n \in \mathbb{N}$
>  4. $(a^n ~:~ b^n) = (a ~:~ b)^n$, $\forall n \in \mathbb{N}$
>
> > [!demostracion]- Demostración
> > 1. Sabemos por la [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Máximo común divisor#^prop-1-1-11|proposición 1.1.11]] que $(a ~:~ b)$ es igual al producto de los primos comunes a $a$ y $b$ con la mínima potencia a la que aparecen. Esto da $(a ~:~ b) = 1$ si y solo si no hay primos en común
> > 2. ($\implies$) Si $(a ~:~ b) = 1$, $a$ no tiene primos en común con $b$, y si $(a ~:~ c) = 1$, $a$ no tiene primos en común con $c$. Por lo tanto $a$ no tiene primos en común ni con $b$ ni con $c$, luego no tiene primos en común con $bc$, ya que los primos de $bc$ son los de $b$ y los de $c$. Por lo tanto $(a ~:~ bc) = 1$
> >    ($\impliedby$) [[Demostración de equivalencia#Usando proposiciones|Recíprocamente]], si $a$ no tienen primos en común con $bc$, no tiene primos en común ni con $b$ ni con $c$, luego es [[Número coprimo|coprimo]] con $b$ y con $c$
> > 3. $a$ y $b$ no tienen primos en común si y solo si $a^m$ y $b^n$ no tienen primos en común, ya que sabemos que los primos de $a^m$ son exactamente los mismos que los de $a$, y los primos de $b^n$ exactamente los mismos primos que los de $b$
> > 4. Sea $d := (a ~:~ b)$. [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Número coprimo#^prop-1-1-5|Coprimizando]], se tiene que $a = d ~ a'$ y $b = d ~ b'$ con $a' \perp b'$. Luego, $$ (a^n ~:~ b^n) = ((d ~ a')^n ~:~ (d ~ b')^n) = (d^n ~ a'^n ~:~ d^n ~ b'^n) = d^n (a'^n ~:~ b'^n) = d^n $$
> >    O sea $(a^n ~:~ b^n) = (a ~:~ b)^n$, ya que $a'^n \perp b'^n$ al ser $a' \perp b'$
^cor-1-1-12

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```