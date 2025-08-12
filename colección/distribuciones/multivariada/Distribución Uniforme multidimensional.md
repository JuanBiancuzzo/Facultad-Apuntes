---
etapa: sin-empezar
dia: 2025-04-08
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - colección/distribuciones/distribución
  - distribuciones/multivariada
  - nota/colección
  - nota/facultad
nombreDistribucion: Uniforme multidimensional
tipoDistribucion: multivariada
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
# Definición
---
Dado un [[Conjunto|conjunto]] $\mathcal{D} \subset \mathbb{R}^n$ que tenga área, podemos definir un [[Variable aleatoria continua#Para vector aleatorio|vector aleatorio continuo]] $X = [X_1,~ \cdots,~ X_n]^T$ con densidad $$ f_X(x) = \frac{1}{\text{Area}(\mathcal{D})} \mathbb{1}\set{ x \in \mathcal{D} } $$

### Notación
$$ X \sim \mathcal{U}(\mathcal{D}) $$

# Relaciones
---
```dataviewjs
	await dv.view("_scripts/dataview/coleccion/distribuciones/relaciones", { distribucion: dv.current() });
```
