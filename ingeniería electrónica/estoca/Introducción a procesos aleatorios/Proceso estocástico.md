---
dia: 2025-04-14
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
aliases:
  - PE
  - Proceso aleatorio continuo de tiempo continuo#Tiempo continuo con variable aleatoria continua
  - Proceso aleatorio discreto de tiempo continuo#Tiempo continuo con variable aleatoria discreta
  - Proceso aleatorio continuo de tiempo discreto#Tiempo discreto con variable aleatoria continua
  - Proceso aleatorio discreto de tiempo discreto#Tiempo discreto con variable aleatoria continua
  - Proceso aleatorio
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(\varXi,~ \mathcal{A},~ \mathbb{P})$  un [[Espacio de probabilidad|espacio de probabilidad]], $\mathcal{T}$ un [[Conjunto|conjunto]] de índices. Un proceso estocástico (PE) es una familia de [[Variable aleatoria|variables aleatorias]] $$ \begin{array}{c} 
    X : \varXi \times \mathcal{T} \to \mathbb{R} \\
    X = X(\xi,~ t)
\end{array} $$

## Interpretaciones
---
* Para cada $\xi_0$, tenemos una señal temporal que asociamos a una realización del [[Proceso|proceso]] $x(t) = X(\xi_0,~ t)$
* Para cada $t_0$, tenemos una variable aleatoria que representa el resultado del experimento en ese instante de tiempo $X_{t_0}(\xi) = X(\xi,~ t_0)$

%% Hacer grafico de las diapositivas %%



## Configuraciones
---
Como tenemos $2$ variables, podemos tener continuo o discreto para ambas

### Tiempo continuo con variable aleatoria continua
---

#### Ejemplo
---
* Señal tonal

### Tiempo continuo con variable aleatoria discreta
---

#### Ejemplo
---
* [[Proceso puntual de Poisson|Proceso de Poisson]]

### Tiempo discreto con variable aleatoria continua
---

#### Ejemplo
---
* [[Ruido blanco|Ruido blanco]]

### Tiempo discreto con variable aleatoria discreta
---

#### Ejemplo
---
* [[Random walk|Random walk]]