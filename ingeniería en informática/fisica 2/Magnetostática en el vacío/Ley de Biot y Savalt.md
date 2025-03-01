---
dia: 2024-09-03
tags:
  - ingeniería-en-informática/fisica-2/Magnetostática-en-el-vacío
  - nota/facultad
  - carrera/ingeniería-electrónica/electro/Campos-eléctricos-y-magnéticos
  - carrera/ingeniería-electrónica/fisica-2/Magnetostática-en-el-vacío
---
# Definición
---
Por la experiencia, se encontró que los [[Campo de inducción magnética|campos magnéticos]] son generados por [[Carga eléctrica|cargas]] en movimiento ([[Corriente eléctrica|corrientes]]). Además, se encontraron las siguientes relaciones $$ \begin{matrix} 
\displaystyle \vec{B} \perp I ~ d\vec{l} \\
\displaystyle \vec{B} \perp (\vec{r} - \vec{r}') \\
\displaystyle \lVert \vec{B} \rVert \propto \frac{1}{\lVert \vec{r} - \vec{r}' \rVert^2} \\
\end{matrix} $$
A partir de estas relaciones, se formalizó la ley del campo magnético para una carga puntual en movimiento $$ \vec{B} = \frac{\mu_0}{4\pi} ~ \frac{q ~ (\vec{v} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} $$ siendo $\mu_0$ es la [[Permeabilidad magnética#^permeabilidad-magnetica-en-el-vacio|permeabilidad magnética del vacío]]

Si extendemos esta fórmula para una corriente en lugar de una carga puntual, llegamos a la ley de Biot y Savalt para una corriente estacionaria $$ \vec{B} = \frac{\mu_0}{4\pi} \int \frac{I ~ (d\vec{l} \times (\vec{r} - \vec{r}'))}{\lVert \vec{r} - \vec{r}' \rVert^3} $$
