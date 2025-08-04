---
dia: 2024-09-19
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Velocidad de la energía#^velocidad-energia
  - Velocidad de la luz#^velocidad-energia
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Ondas electromagnéticas/Resumen.md]]"
---
# Definición
---
La densidad de [[Energía|energía]] de una [[Onda plana electromagnética|onda plana]] en el vacío puede escribirse $$ \begin{align} 
    u(\vec{r},~t) &= \frac{1}{2} \Big( \vec{E}(\vec{r},~t) ~ \vec{D}(\vec{r},~t) + \vec{H}(\vec{r},~t) ~ \vec{B}(\vec{r},~t) \Big) \\
     &= \frac{1}{2} \Big( \epsilon_0 E^2(\vec{r},~t) + \mu_0 H^2(\vec{r},~t) \Big) \\
     &= \frac{1}{2} \left( \epsilon_0 E^2(\vec{r},~t) + \frac{\mu_0}{Z_{00}^2} E^2(\vec{r},~t) \right) \\
     &= \frac{1}{2} \Big( \epsilon_0 E^2(\vec{r},~t) + \epsilon_0 E^2(\vec{r},~t) \Big) \\
     &= \epsilon_0 E^2(\vec{r},~t) \\
     &= \epsilon_0 E_0^2 \cos^2(\omega t - kz + \psi_0)
\end{align} $$
Se observa que la contribución del [[Campo eléctrico|campo eléctrico]] y la contribución del [[Material magnético#^campo-magnetico|campo magnético]] son iguales. La energía está "equipartida" entre ambos campos. Además, podemos ver que $$ \frac{\vec{N}(\vec{r},~t)}{\vec{u}(\vec{r},~t)} = \pm \frac{1}{\epsilon_0 \eta_0} ~ \hat{z} = \pm c ~ \hat{z} $$ siendo $\eta_0$ la [[Impedancia intrínseca|impedancia intrínseca del vacío]] y $\vec{N}$ el [[Teorema de Poynting|vector de Poyting]]. Esta es la llamada velocidad de la energía, que describe la velocidad con que el frente de onda transporta la energía ^velocidad-energia

## Valor medio
---
Tomando el valor medio temporal $$ \begin{align} 
    \langle u \rangle &= \epsilon_0 E_0^2 ~ \Big\langle \cos^2(\omega t - kz + \psi_0) \Big\rangle \\
     &= \frac{1}{2} \epsilon_0 E_0^2
\end{align} $$
### En medios materiales
---
El valor medio de la densidad de energía es $$ \begin{align} 
    \langle u \rangle &= \frac{1}{4} \mathcal{Re} \Set{ \vec{E}(\vec{r},~t) ~ \vec{D}^*(\vec{r},~t) + \vec{H}(\vec{r},~t) ~ \vec{B}^*(\vec{r},~t) } \\
     &= \frac{1}{4} \mathcal{Re} \Set{ \epsilon^* |\tilde{E}|^2 + \mu |\tilde{H}|^2 } \\
     &= \frac{1}{4} \left( \mathcal{Re}\Set{\epsilon} + \frac{\mu}{|\eta|^2} \right) ~|\tilde{E}|^2
\end{align} $$
Finalmente $$ \langle u \rangle = \frac{1}{4} \left( \mathcal{Re}\Set{\epsilon} + \frac{\mu}{|\eta|^2} \right) ~|\tilde{E}_{0\pm}|^2 ~ e^{\mp 2\alpha z} $$
y la velocidad de la energía puede calcularse como $$ v_E = \frac{\langle \vec{N} \rangle}{\langle u \rangle} = \pm \frac{2 |\eta| ~ \cos(\varphi)}{\mathcal{Re}\Set{\epsilon} |\eta|^2 + \mu} ~ \hat{z} $$