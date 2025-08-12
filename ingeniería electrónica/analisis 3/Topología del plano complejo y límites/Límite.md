---
dia: 2022-09-06
tags:
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - nota/facultad
etapa: ampliar
referencias: []
aliases: []
vinculoFacultad:
  - tema: Topología del plano complejo y límites
    capitulo: 1
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
  - tema: Propiedades de funciones
    capitulo: 3
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sea $f:\mathbb{D} \to \mathbb{C}$ una [[Función|función]] definida en un [[Conjunto|conjunto]] $\mathbb{D} \subseteq \mathbb{C}$, sea $z_0 \in \mathbb{C}$ un [[Punto de acumulación|punto de acumulación]] de $\mathbb{D}$ y sea $l \in \mathbb{C}$. Entonces, se dice que "$f$ tiende a $l$ cuando $z$ tiende a $z_0$", o bien que "$l$ es límite de $f$ cuando $z$ tiende a $z_0$", sii:

$$\forall \epsilon \in \mathbb{R}, \epsilon > 0: \exists \delta \in \mathbb{R}, \delta > 0: ~~ 
\begin{drcases} 
0 < |z - z_0| < \delta \\
z \in \mathbb{D}
\end{drcases} \implies |f(z) - l| < \epsilon $$
Por teorema de unicidad, podemos denotar el límite como:
$$\lim_{z\to z_0}f(z)=l$$

## Observación
---
* $z_0$ puede pertenecer o no al [[Dominio|dominio]] de $f$. Pero aún en el caso en que $z_0 \in \mathbb{D}$, el valor de $f$ en este punto no interviene en absoluto en la definición.
* "$z$ tiende a $z_0$ en $\mathbb{D}$", es decir, si se utiliza la expresión cinemática "$z$ se acerca a $z_0$", debe sobreentenderse "$z$ se acerca a $z_0$ sin salirse de $\mathbb{D}$"
* La primera de las desigualdades $0 < |z - z_0| < \delta$ significa que "$z$ no puede ser $z_0$".


# Cuestiones prácticas
---
Sea $f:\mathbb{D} \to \mathbb{C}$ una función definida en un conjunto $\mathbb{D} \subseteq \mathbb{C}$, sea $z_0 \in \mathbb{C}$ un [[Punto de acumulación|punto de acumulación]] de $\mathbb{D}$ y sea $l$ un número complejo. Entonces:

1) $\lim_{z \to z_0} f(z) = l \Longleftrightarrow \lim_{z \to z_0} |f(z) - l| = 0$.
	1) Caso particular: $\lim_{z \to z_0} f(z) = 0 \Longleftrightarrow \lim_{z \to z_0} |f(z)| = 0$
2) $\lim_{z \to z_0} f(z) = l \implies \lim_{z \to z_0} |f(z)| = |l|$.
	1) No vale reciproca, salvo en el caso en que $l = 0$.
3) Si $\lim_{z \to z_0}f(x) = l$, entonces existen dos números reales positivos $r$ y $K$ tales que $|f(z)|  \leq K$ para todo $z \in D(z_0, r) \cdot \mathbb{D}$
4) Sea $\mathbb{D}_0 \subseteq \mathbb{D}$ un [[Subconjunto|subconjunto]] del dominio de $f$ tal que $z_0$ es punto de acumulación de $\mathbb{D}_0$, y sea $f_{|\mathbb{D}_0}(z) : \mathbb{D}_0 \to \mathbb{C}$ la restricción de $f$ a $\mathbb{D}_0$. Entonces,
		$\lim_{z \to z_0} f(z) = l \Longleftrightarrow \lim_{z \to z_0} f_{|\mathbb{D}_0}(z) = l$ 
5) Sea $c \in \mathbb{C}$ tal que $f(z) = c$ para todo $z \in \mathbb{D}$. Entonces, para cualquier punto $z_0$ de acumulación de $\mathbb{D}$ se verifica que 
		$\lim_{z \to z_0} f(z_0) = c$
6) Sea $g:\mathbb{D} \to \mathbb{C}$ y $h:\mathbb{D} \to \mathbb{C}$, funciones tales que 
	1) $\lim_{z \to z_0} h(z_0) = 0$, donde $z_0$ es punto de acumulacion de $\mathbb{D}$
	2) $g$ es acotada en $\mathbb{D}$, es decir: existe una constante $K$ tal que $|g(z)| \leq K$ para todo $z \in \mathbb{D}$
	3) Para todo $z$ en $\mathbb{D}$: $|f(z)| \leq |h(z)||g(z)|$

	Entonces, $\lim_{z \to z_0} f(z) = 0$


# Casos especificos
---
* Para todo par de números reales $a > 1$ y $b > 1$: $$ \lim_{n \to \infty} \frac{n ^b}{a^n} = \lim_{n \to \infty} \frac{a^n}{n!} = \lim_{n \to \infty} \frac{n!}{n^n} = 0$$
  Podemos decir que $a^n$ "le gana" a $n^b$, que $n!$ "le gana" a $a^n$ y que $n^n$ "le gana" a $n!$.

* Para todo real positivo $a$: $$ \lim_{n \to \infty} a^{\frac{1}{n}} = 1, \lim_{n \to \infty} \frac{1}{n^a} = 0 $$

* Para todo real positivo $a$: $$ \lim_{n \to \infty} \frac{Ln(n)}{n^a} = 0 $$

* $$ \lim_{n \to \infty} n^\frac{1}{n} = 1 $$