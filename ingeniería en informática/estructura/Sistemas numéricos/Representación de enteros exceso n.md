---
dia: 2023-04-08
tags:
  - ingeniería-en-informática/estructura/Sistemas-numéricos
  - nota/facultad
  - carrera/ingeniería-electrónica/estructura/Sistemas-numéricos
---
# Definición
---
Esta representación agarra los números enteros que puede representar, y los translada para que el $0$ y el $1$ esten en la mitad.

El $n$ se refiere a $2^{\text{bits} - 1} - 1$. Que es a donde el $0$ termina. Dado 4 bits, el $n = 7_{10} = 0111_{2}$ que en esta representación, representa el $0$. 

Como nota, el $0$ siempre se representa con un $0$ seguido de unos, y el $1$ con un $1$ seguido de ceros.

Su [[Rango de representación]] es $$ (-2^{n-1} + 1)_{10} \le x \le (2^{n-1})_{10}$$

# Ejemplo
---

| Decimal | Magnitud y signo |
| ------- | ---------------- |
| -7      | 0000             |
| -6      | 0001             |
| -5      | 0010             |
| -4      | 0011             |
| -3      | 0100             |
| -2      | 0101             |
| -1      | 0110             |
| 0       | 0111             |
| 1       | 1000             |
| 2       | 1001             |
| 3       | 1010             |
| 4       | 1011             |
| 5       | 1100             |
| 6       | 1101             |
| 7       | 1110             |
| 8       | 1111             |




$$  $$