---
dia: 2024-03-11
materia: circuitos
capitulo: 3
---
### Definición
---
Se tienen distintas configuraciones de amplificadores como

#### Amplificadores usando un TBJ
---

##### Amplificador emisor común
   ![[Amplificador Emisor Común#^6b9228]]  ![[Amplificador Emisor Común#^daaa29]]

##### Amplificador colector común
   ![[Amplificador Colector Común#^5c5e25]]  ![[Amplificador Colector Común#^e8dc2c]]

##### Amplificador base común
   ![[Amplificador Base Común#^4ae162]]  ![[Amplificador Base Común#^364fd0]]

#### Amplificadores usando un MOSFET
---

##### Amplificador source común
   ![[Amplificador Source Común con un MOSFET#^bef7b2]]  ![[Amplificador Source Común con un MOSFET#^27b24b]]

##### Amplificador drain común
   ![[Amplificador Drain Común con un MOSFET#^6e8ccc]]  ![[Amplificador Drain Común con un MOSFET#^84a8e4]]

##### Amplificador gate común
   ![[Amplificador Gate Común con un MOSFET#^699639]]  ![[Amplificador Gate Común con un MOSFET#^5ee09c]]

#### Amplificadores usando un JFET
---

##### Amplificador source común
   ![[Amplificador Source Común con un JFET#^f67315]]  ![[Amplificador Source Común con un JFET#^837c41]]

##### Amplificador drain común
   ![[Amplificador Drain Común con un JFET#^9a3871]]  ![[Amplificador Drain Común con un JFET#^1b22df]]

##### Amplificador gate común
   ![[Amplificador Gate Común con un JFET#^9a23eb]]  ![[Amplificador Gate Común con un JFET#^f4b95c]]

#### Resolución
---
La resolución de un amplificador significa encontrar el punto de polarización, continua o reposo $Q$ y en señal encontrar los parámetros como la [[Ganancia|ganancia]] con respecto a la [[Señal|señal]] de entrada $A_v$ y con el generador $v_s$ dando $A_{vs}$, como también las resistencias de entrada $R_i$ y de salida $R_o$

##### Ejemplo
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

