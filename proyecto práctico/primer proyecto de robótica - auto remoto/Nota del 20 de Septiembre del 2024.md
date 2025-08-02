---
dia: 2024-09-20
tags:
  - nota/proyecto
  - proyecto-práctico/primer-proyecto-de-robótica-auto-remoto
---
# Progreso
---
Las dos partes restantes del código son sobre como relacionar la velocidad de las ruedas con el delay, y como transformar las señales del control infrarrojo a velocidades

Empezando por ese último, y para resolverlo necesitamos entender que información vamos a recibir y que información tenemos que dar. Vamos a recibir una de las siguientes  $5$ acciones 
1. Avanzar
2. Retroceder
3. Doblar hacia la izquierda
4. Doblar hacia la derecha
5. Frenar

Con esas $5$ acciones, debemos dar a que velocidad van las ruedas de los autos. Como las velocidades depende de la velocidad anterior, vamos a ir modificando esas velocidades en vez de dar un resultado desde $0$

Supongamos que en la [[Variable|variable]] `info`, tenemos que acción se tiene que ejecutar, por lo que podemos hacer un [[Switch statement|switch]] con esta variable y poder ir modificando cada velocidad
1. Para avanzar necesitamos aumentar tanto la velocidad del motor izquierdo como el derecho
    * En el caso que la velocidad de alguno haya llegado al máximo, no se aumenta ninguno de los dos
2. Para retroceder es lo mismo, disminuimos la velocidad de ambos motores
    * En el caso que la velocidad de alguno haya llegado al máximo, no se disminuye ninguno de los dos
3. Para doblar a la izquierda, aumentamos la velocidad del motor derecho
    * En el caso que la velocidad del motor derecho haya llegado al máximo, no se aumenta la velocidad del motor derecho y se disminuye la velocidad del motor izquierdo
        * En el caso que la velocidad del motor izquierdo haya llegado al máximo, no se aumenta la velocidad del motor derecho, ni se disminuye la velocidad del motor izquierdo
4. Para doblar a la derecha, aumentamos la velocidad del motor izquierdo
    * En el caso que la velocidad del motor izquierdo haya llegado al máximo, no se aumenta la velocidad del motor izquierdo y se disminuye la velocidad del motor derecho
        * En el caso que la velocidad del motor derecho haya llegado al máximo, no se aumenta la velocidad del motor izquierdo, ni se disminuye la velocidad del motor derecho
5. Para frenar simplemente ponemos las velocidades en $0$

En código se ve así

```c++
switch (info) {
  case ADELANTE: 
    if (velocidad_izq < MAX && velocidad_der < MAX) {
      velocidad_izq++;
      velocidad_der++; 
    }
    break;
  case ATRAS: 
    if (-velocidad_izq < MAX && -velocidad_der < MAX) {
      velocidad_izq--;
      velocidad_der--; 
    }
    break;
  case IZQUIERDA: 
    if (velocidad_der < MAX) {
      velocidad_der++;          
    } else if (-velocidad_izq < MAX) {
      velocidad_izq--;
    }
    break;
  case DERECHA: 
    if (velocidad_izq < MAX) {
      velocidad_izq++;
    } else if (-velocidad_der < MAX) {
      velocidad_der--;
    }
    break;
  case FRENAR: 
    velocidad_izq = 0;
    velocidad_der = 0;
    break;
}
```

Ahora el último paso es transformar las velocidades en delays para los [[Stepper motor|stepper]], y como solución más simple y sabiendo el máximo es generar un [[Array|array]] de `MAX + 1` elementos, donde podemos usar la velocidad para indexar ese array

Recordando que tenemos un signo, para indexar el array lo vamos a sacar pero para el resultado final, lo volvemos a poner

```c++
int delay_para_velocidad(int velocidad) {
  if (velocidad > MAX)
    return DELAY_MINIMO;
  return (velocidad > 0 ? 1 : -1) * DELAY_VALOCIDAD[abs(velocidad)];
}
```