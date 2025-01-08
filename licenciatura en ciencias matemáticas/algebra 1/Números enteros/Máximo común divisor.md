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

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```