---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
aliases:
  - EMV
---
# Definición
---
Diremos que $\hat{\theta}(\underline{X})$ es un [[Estimador|estimador]] de máxima [[Función de verosimilitud|verosimilitud]] de $\theta$ si se cumple que $$ f_{\hat{\theta}}(\underline{X}) = \max_{\theta} f_\theta(\underline{x}) $$
Es decir, buscamos el valor de $\theta$ que maximiza la [[Función de verosimilitud|función de verosimilitud]] $$ \hat{\theta} = arg~max_\theta~ L(\theta) $$ 
## Método
---
A partir de la [[Función|función]] de verosimilitud $L(\theta)$, busco el valor de $\theta$ que maximiza dicha función

Si $\Theta$ es un [[Subconjunto|subconjunto]] abierto tal que el [[Soporte|soporte]] de $f_\theta(\underline{x})$ no depende de $\theta$, como la función Logaritmo es monótona creciente, maximizar $L(\theta)$ es lo mismo que maximizar $Log(L(\theta))$. Luego, el EMV verificará $$ \frac{d}{d\theta} Log(L(\theta)) = 0 $$ 