---
dia: 2024-09-22
tags:
  - ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
---
# Definición
---
Se tienen distintas configuraciones de [[Amplificador de tensión|amplificadores]] como

## Amplificadores usando un TBJ
---
* Amplificador emisor común ![[Amplificador Emisor Común con un transistor bipolar de juntura#^6b9228]]  ![[Amplificador Emisor Común con un transistor bipolar de juntura#^daaa29]]
* Amplificador colector común / Seguidor ![[Amplificador Colector Común con un transistor bipolar de juntura#^5c5e25]]  ![[Amplificador Colector Común con un transistor bipolar de juntura#^e8dc2c]]
* Amplificador base común ![[Amplificador Base Común con un transistor bipolar de juntura#^4ae162]]  ![[Amplificador Base Común con un transistor bipolar de juntura#^364fd0]]

## Amplificadores usando un MOSFET
---
* Amplificador source común ![[Amplificador Source Común con un transistor de efecto de campo metal-óxido-semiconductor#^bef7b2]]  ![[Amplificador Source Común con un transistor de efecto de campo metal-óxido-semiconductor#^27b24b]]
*  Amplificador drain común ![[Amplificador Drain Común con un transistor de efecto de campo metal-óxido-semiconductor#^6e8ccc]] ![[Amplificador Drain Común con un transistor de efecto de campo metal-óxido-semiconductor#^84a8e4]]
 * Amplificador gate común ![[Amplificador Gate Común con un transistor de efecto de campo metal-óxido-semiconductor#^699639]]  ![[Amplificador Gate Común con un transistor de efecto de campo metal-óxido-semiconductor#^5ee09c]]

## Amplificadores usando un JFET
---
* Amplificador source común ![[Amplificador Source Común con un transistor de efecto de campo de unión#^f67315]]  ![[Amplificador Source Común con un transistor de efecto de campo de unión#^837c41]]
* Amplificador drain común ![[Amplificador Drain Común con un transistor de efecto de campo de unión#^9a3871]]  ![[Amplificador Drain Común con un transistor de efecto de campo de unión#^1b22df]]
* Amplificador gate común ![[Amplificador Gate Común con un transistor de efecto de campo de unión#^9a23eb]]  ![[Amplificador Gate Común con un transistor de efecto de campo de unión#^f4b95c]]
### Resolución
---
La resolución de un amplificador significa encontrar el punto de polarización, continua o reposo $Q$ y en señal encontrar los parámetros como la [[Ganancia|ganancia]] con respecto a la [[Señal|señal]] de entrada $A_v$ y con el generador $v_s$ dando $A_{vs}$, como también las resistencias de entrada $R_i$ y de salida $R_o$

Teniendo un amplificador básico para el cual plantear una idea general, vamos a usar un [[Amplificador Emisor Común con un transistor bipolar de juntura|amplificador emisor común]] que usa un [[Transistor bipolar de juntura|TBJ]] 

![[Amplificador básico.png]]

Para resolverlo, debemos encontrar el punto de continua o reposo ($Q$), donde para [[Función periódica#Frecuencia|frecuencia]] $0$ (es decir continua) los [[Capacitor|capacitores]] se comportan como abiertos que ya están cargados 

![[Amplificador general en continua.png]]

Recorriendo la [[Malla|malla]] de entrada, tenemos $$ I_B = \frac{V_{BB} - V_{BE}}{R_B} = I_{BQ}  $$
Suponiendo [[Modo activo directo del transistor bipolar de juntura|MAD]] podemos encontrar la relación entre $I_B$ e $I_C$, dado por $I_B ~ \beta_F = I_C$, usando eso y la malla de salida $$ V_{CEQ} = V_{CC} - I_{CQ} ~ R_C $$ si $V_{CEQ} > 0$ entonces nuestra suposición es correcta, y si no se cumple significa que no esta en ese [[Transistor bipolar de juntura#Modos de operación|modo de operación]]

De esta forma ya tenemos los valores de reposo. Ahora encontremos los valores importantes para pequeña señal, con origen en $Q$

![[Amplificador general en pequeña señal.png]]

Graficando la [[Curva de salida|curva de salida]], con la [[Recta de carga estática de un componente|recta de carga estática]] y la [[Recta de carga dinámica de un componente|recta de carga dinámica]] 

![[Recta de salida para un amplificador simple.png]]