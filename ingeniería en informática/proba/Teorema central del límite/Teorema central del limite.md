---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Teorema-central-del-límite
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Teorema-central-del-límite
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se tiene una sucesión de [[Variable aleatoria|variables aleatorias]] $(X_n)_{n \geq 1}$ [[Variables aleatorias independientes|independientes]] e idénticamente distribuidas con [[Esperanza|esperanza]] $[E_i] = \mu < \infty$ y [[Varianza|varianza]] $Var(X_i) = \sigma^2 < \infty$, entonces $$ \frac{\displaystyle \sum_{i = 1}^{n} X_i - n \mu}{\sqrt{n \cdot \sigma^2}} \to Z \sim N(0, 1) $$
es decir $$ \mathbb{P}\left( \frac{ \displaystyle\sum_{i = 1}^{n} X_i - n \mu}{\sqrt{n \cdot \sigma^2}} \leq t \right) \to \Phi(t) $$
Esto se puede ver usando la [[Función característica|función característica]]