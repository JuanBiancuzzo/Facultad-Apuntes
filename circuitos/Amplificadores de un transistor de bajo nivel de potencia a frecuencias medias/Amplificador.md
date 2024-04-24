---
dia: 2024-03-11
materia: circuitos
capitulo: 3
---
### Definición
---
Teniendo un amplificador básico para el cual plantear una idea general, vamos a usar un [[Amplificador Emisor Común|amplificador emisor común]] que usa un [[Transistor bipolar de juntura (TBJ)|TBJ]] 

![[Amplificador básico.png]]

Para resolverlo, debemos encontrar el punto de continua o reposo ($Q$), donde para [[Función senoidal#Frecuencia|frecuencia]] $0$ (es decir continua) los [[Capacitor|capacitores]] se comportan como abiertos que ya están cargados 

![[Amplificador general en continua.png]]

Recorriendo la [[Malla|malla]] de entrada, tenemos $$ I_B = \frac{V_{BB} - V_{BE}}{R_B} = I_{BQ}  $$
Suponiendo [[Modo activo directo (MAD) del transistor bipolar de juntura (TBJ)|MAD]] podemos encontrar la relación entre $I_B$ e $I_C$, dado por $I_B ~ \beta_F = I_C$, usando eso y la malla de salida $$ V_{CEQ} = V_{CC} - I_{CQ} ~ R_C $$ si $V_{CEQ} > 0$ entonces nuestra suposición es correcta, y si no se cumple significa que no esta en ese [[Transistor bipolar de juntura (TBJ)#Modos de operación|modo de operación]]

De esta forma ya tenemos los valores de reposo. Ahora encontremos los valores importantes para pequeña señal, con origen en $Q$

![[Amplificador general en pequeña señal.png]]

Graficando la [[Curva de salida|curva de salida]], con la [[Recta de carga estática de un componente|recta de carga estática]] y la [[Recta de carga dinámica de un componente|recta de carga dinámica]] 

![[Recta de salida para un amplificador simple.png]]

