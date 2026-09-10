---
dia: 2026-09-10
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 695
etapa: ampliar
---
# Enunciado
---
En la figura se indica gráficamente la [[Traslación|posición]] y [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|orientación]] relatica entre las [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|ternas]] $0$, $1$ y $2$

![[colección/ejercicios/img/Ejercicio N° 695.png|500]]

Se pide 
1. Indicar cuánto vale `Pose01`, posición y orentación de la terna $1$ respecto de la $0$
2. Indicar cuánto vale `Pose12`, posición y orentación de la terna $2$ respecto de la $1$
3. Utilizando la función `PoseMult()`, indicar cómo se calcula `Pose02`, posición de la terna $2$ respecto de la $0$
 
Se puede seleccionar una:
1. ^parte-1
	1. `Pose01 := [[0, 3, 0], OrientZYX(0, 90, 0)]`
	2. `Pose12 := [[-2, 2, 0], OrientZYX(90, 0, 0)]`
	3. `Pose02 := PoseMult(Pose01, Pose12)`
2. ^parte-2
	1. `Pose01 := [[0, 3, 0], OrientZYX(0, 90, 0)]`
	2. `Pose12 := [[0, 5, 2], OrientZYX(0, 90, 90)]`
	3. `Pose02 := PoseMult(Pose01, Pose12)`
3. ^parte-3
	1. `Pose01 := [[0, 3, 0], OrientZYX(0, 90, 0)]`
	2. `Pose12 := [[-2, 2, 0], OrientZYX(90, 0, 0)]`
	3. `Pose02 := PoseMult(Pose12, Pose01)`

# Resolución
---


# Resultado
---
La opción correcta es el [[colección/ejercicios/Ejercicio N° 695#^parte-1|punto 1]]