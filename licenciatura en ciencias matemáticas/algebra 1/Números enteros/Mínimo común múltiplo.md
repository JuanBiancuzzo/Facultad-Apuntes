---
dia: 2025-01-08
etapa: empezado
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Mcm
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ b \in \mathbb{Z}$, no nulos. El mínimo común múltiplo entre $a$ y $b$, que se nota $[a ~:~ b]$, es el [[Mínimo|menor número]] [[Números Naturales|natural]] que es un [[Múltiplo común|múltiplo común]] de $a$ y $b$

> [!proposicion]+ Proposición 1.4.1 (Mínimo común múltiplo y factorización)
> Sean $a, ~b \in \mathbb{Z}$ no nulos de la forma $$ \begin{align} 
>     a &= \pm p_1^{m_1} \cdots p_r^{m_r} & \text{con} ~~& m_1,~ \cdots,~ m_r \in \mathbb{N}_0 \\
>     b &= \pm p_1^{n_1} \cdots p_r^{n_r} & \text{con} ~~& n_1,~ \cdots,~ n_r \in \mathbb{N}_0 \\
> \end{align} $$ 
> Entonces $$ [a ~:~ b] = p_1^{\max\set{m_1,~ n_1}} \cdots p_r^{\max\set{m_r,~ n_r}} $$
> 
> > [!demostracion]- Demostración
> > Hay que probar que $p_1^{\max\set{m_1,~ n_1}} \cdots p_r^{\max\set{m_r,~ n_r}}$ es el menor de los múltiplos comunes de $a$ y $b$. Investiguemos luego los múltiplos comunes $m > 0$ de $a$ y $b$ $$ \begin{align} 
> >     a \mid m \iff m &= p_1^{m_1} \cdots p_r^{m_r} \cdot k_1 && \text{para algún} ~~ k_1 \in \mathbb{N}, \\
> >     b \mid m \iff m &= p_1^{n_1} \cdots p_r^{n_r} \cdot k_2 && \text{para algún} ~~ k_2 \in \mathbb{N} \\
> > \end{align} $$
> > Por lo tanto $$ a \mid m ~\text{y}~ b \mid m \iff m =  p_1^{\max\set{m_1,~ n_1}} \cdots p_r^{\max\set{m_r,~ n_r}} \cdot k ~~~ \text{para algún} ~~ k \in \mathbb{N} $$
> > 
> > De esa forma el menor de los múltiples comunes positivos es con $k = 1$ y da $[a ~:~ b] = p_1^{\max\set{m_1,~ n_1}} \cdots p_r^{\max\set{m_r,~ n_r}}$ como se quería probar
^prop-1-4-1

## Mcm y múltiplos comunes
---
> [!corolario]+ Corolario 1.4.2 (Mcm y múltiplos comunes) - [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Mínimo común múltiplo#^prop-1-4-1|Proposición 1.4.1 (Mínimo común múltiplo y factorización)]]
> Sean $a,~ b \in \mathbb{Z}$, no ambos nulos y sea $m \in \mathbb{Z}$, con $m \ne 0$. Entonces $$ a \mid m ~~ \text{y} ~~ b \mid m \iff [a ~:~ b] \mid m $$
^cor-1-4-2

## Producto mcd y mcm
---
> [!proposicion]+ Proposición 1.4.3 (Producto mcd y mcm)
> Sean $a,~ b \in \mathbb{Z}$, no nulos, entonces $|a \cdot b| = (a ~:~ b) \cdot [a ~:~ b]$
> En particular, si $a$ y $b$ son [[Número coprimo|coprimos]], es decir $a \perp b$, entonces $[a : b] = |a \cdot b|$
^prop-1-4-3

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```