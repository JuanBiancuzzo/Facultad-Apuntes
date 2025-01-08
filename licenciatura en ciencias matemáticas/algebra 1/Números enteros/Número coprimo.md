---
dia: 2024-12-21
etapa: empezado
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
Se dice que $a,~ b \in \mathbb{Z}$ no ambos nulos son coprimos si y solo si $(a ~:~ b) = 1$, es decir si y solo si los únicos [[Divisor común|divisor común]] de $a$ y $b$ son $\pm 1$. Se denota como $$ a \perp b $$
## Combinación entera
---
Sean $a,~ b \in \mathbb{Z}$ no ambos nulos. Entonces $$ a \perp b \iff \exists s,~ t \in \mathbb{Z} : 1 = s ~ a + t ~ b $$

> [!quote]- Demostración
> * $(\implies)$ es el hecho que el [[Máximo común divisor|mcd]] $1$ es [[Combinación entera|combinación entera]] de los números
> * $(\impliedby)$ es por la [[Combinación entera#Combinaciones enteras de a y b|combinación entera de a y b]]

## Coprimizando
---
Sean $a,~ b \in \mathbb{Z}$, no ambos nulos. Entonces $$ \frac{a}{(a ~:~ b)} \perp \frac{b}{(a ~:~ b)} $$
Por lo tanto $$ \begin{matrix}
    a = (a ~:~ b) ~ a' & \text{y} & b = (a ~:~ b) ~ b'
\end{matrix} $$ donde los números enteros $a' = \frac{a}{(a ~:~ b)}$ y $b' = \frac{b}{(a ~:~ b)}$ son coprimos

> [!quote]- Demostración
> Se sabe que $(a ~:~ b) = s ~ a + t ~ b$. Luego dividiendo por $(a ~:~ b)$, se obtiene $1 = s ~ \frac{a}{(a ~:~ b)} + t ~ \frac{b}{(a ~:~ b)}$, es decir $\frac{a}{(a ~:~ b)}$ y $\frac{b}{(a ~:~ b)}$ son coprimos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```