---
dia: 2026-09-08
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 683
etapa: empezado
---
# Enunciado
---
Calcula la [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]] definida por la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $0$ expresada en la terna $1$
![[colección/ejercicios/img/Ejercicio N° 683.png|600]]

Indicar cuáles de la siguientes afirmaciiones son correctas
1. `POSE10 = [[-5; 0; 0]; OrientZYX(90; 0; 180)]` ^parte-1
2. `POSE10 = [[0; 5; 0]; OrientZYX(-90; 0; 180)]` ^parte-2
3. `POSE10 = [[-5; 0; 0]; [0; 1; 0; 0] * [0.707; 0; 0; -0.707]]` ^parte-3
4. `POSE10 = [[0; 5; 0]; OrientZYX(-90; 180; 0)]` ^parte-4
5. `POSE10 = [[-5; 0; 0]; OrientZYX(-90; 180; 0)]` ^parte-5

Notas importantes:
* Las poses se deinen en [[RAPID|RAPID]] como una [[colección/data structures/Estructura de datos|estructura de datos]] compuesta de un [[ingeniería en informática/algo 1/Lenguaje C/Array|array]] ([[Traslación|traslación]]) y un [[ingeniería electrónica/robótica industrial/Sistema de referencias/Cuaternión|cuaternión]] ([[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]]) de la siguiente manera 
  ```RAPID
	POSE := [ vecotr_traslacion; cuaternion_rotacion ];
  ```
* La instrucción `PoseMult` encuentra la composeción de $2$ poses, tal como la multiplicación en [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matrices homogéneas de roto-traslación]] 
* La función `OrientZYX(rz, ry, rx)` arma un cuaternión que representa una rotación dada por los [[ingeniería electrónica/robótica industrial/Sistema de referencias/Ángulo de Euler|ángulos de Euler]] intrínsecos $(r_z,~ r_y,~ r_x)$ en la convención ZYX

# Resolución
---


# Resultado
---
