---
dia: 2025-05-24
etapa: ampliar
referencias: []
aliases:
  - Procesos conjuntamente ESE
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
vinculoFacultad:
  - tema: Introducción a procesos aleatorios
    capitulo: 4
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Diremos que dos [[Proceso estocástico|procesos]] $X(t)$, $Y(t)$ son conjuntamente estacionarios en sentido estricto (ESE) si sus [[Función de distribución#^FIDI|FIDIs conjuntas]] son invariantes por translaciones de tiempos, es decir, para cualquier constante $\tau$, cualquier $n,~ m \in \mathbb{N}$ y para instantes cualesquiera $t_1 < \cdots < t_n$ y $\tilde{t}_1 < \cdots < \tilde{t}_m$ se tiene $$ F_{X(t_1),~ \cdots,~ X(t_n),~ Y(\tilde{t}_1),~ \cdots,~ Y(\tilde{t}_n)} = F_{X(t_1 + \tau),~ \cdots,~ X(t_n + \tau),~ Y(\tilde{t}_1 + \tau),~ \cdots,~ Y(\tilde{t}_n + \tau)} $$
Es decir que la distribución conjunta de los dos procesos es invariante por translaciones. Donde cabe notar que para cualquier $t_k,~ \tilde{t}_j \in \mathcal{T}$ para todo $k \in [1,~ n]$ y $j \in [1,~ m]$, se cumple que $t_k + \tau \in \mathcal{T}$ y $\tilde{t}_j + \tau \in \mathcal{T}$

