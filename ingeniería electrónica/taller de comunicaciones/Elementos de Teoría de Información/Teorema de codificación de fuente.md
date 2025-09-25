---
dia: 2025-09-06
etapa: empezado
referencias: []
aliases:
  - 1er Teorema de Shannon
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
> [!teorema]+ Teorema 8.1.4  
> Dada una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/orga/Compresión/Entropía de Shannon|entropía]] $H(\mathcal{S})$, la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] $\bar{L}$ de un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código unívocamente decodificable|código UD]] está limitada por $$ 
>     \bar{L} \ge \frac{H(\mathcal{S})}{\log_2{r}} = L_\text{min} 
> $$ con igualdad sii $$ 
>     p_k = r^{-l_k} ~~ \forall k \in (0,~ K) 
> $$ donde para un símbolo $s_k$ generado por la fuente, $p_k$ es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] de que la fuente genere $s_k$ y $l_k$ es la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud de una palabra]] asociada al símbolo $s_k$
^teo-8-1-4

La entropía representa un límite fundamental en el número promedio de símbolos necesarios para representar una fuente discreta sin memoria


> [!teorema]+ Teorema 8.1.6  
> Dada una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/orga/Compresión/Entropía de Shannon|entropía]] $H(\mathcal{S})$ existe un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] $r$-ario cuya [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] satisface $$ \frac{H(\mathcal{S})}{\log_2(r)} \le \bar{L} < \frac{H(\mathcal{S})}{\log_2(r)} + 1 $$ con el uso de [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Extensión de una fuente discrete sin memoria|fuente extendida]] se consigue $\bar{L}$ más próximo del límite inferior del [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Teorema de codificación de fuente|teorema de codificación de fuente]] pero, con el compromiso de una complejidad mayor de decodificador $$ \begin{align}
>     \frac{H\left( \mathcal{S}^n \right)}{\log_2(r)} &\le \bar{L}_n < \frac{H\left( \mathcal{S}^n \right)}{\log_2(r)} + 1 \\
>     \frac{n ~ H\mathcal{S})}{\log_2(r)} &\le \bar{L}_n < \frac{n ~ H\mathcal{S})}{\log_2(r)} + 1 \\
>     \frac{H\mathcal{S})}{\log_2(r)} &\le \frac{\bar{L}_n}{n} < \frac{H\mathcal{S})}{\log_2(r)} + \frac{1}{n} \\
>     \frac{H\mathcal{S})}{\log_2(r)} &\le \bar{L} < \frac{H\mathcal{S})}{\log_2(r)} + \frac{1}{n} \\
>     \frac{H\mathcal{S})}{\log_2(r)} &\le \bar{L} < \lim_{n \to \infty} \frac{H\mathcal{S})}{\log_2(r)} + \frac{1}{n} \\
>     \implies& \lim_{n \to \infty} \bar{L} = \frac{H\mathcal{S})}{\log_2(r)}
> \end{align} $$
^teo-8-1-6
