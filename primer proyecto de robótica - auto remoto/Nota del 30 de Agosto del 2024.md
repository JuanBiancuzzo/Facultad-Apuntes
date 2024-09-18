---
dia: 2024-08-30
tags:
  - primer-proyecto-de-robótica-auto-remoto
  - nota/proyecto
---
# Progreso
---
Este día nos propusimos probar los $3$ componentes principales del proyecto, un servo, un stepper motor, y un control infrarrojo

Para el stepper motor, usamos el `Step motor 28BYJ-48`, y una placa para controlarlo, la `ULN2003`. Terminamos usando el siguiente código para controlarlo

```c++
const int DELAY_MS = 5;
const int PINES[4] = { PIN_A, PIN_B, PIN_C, PIN_D };

void setup() {
  for (int i = 0; i < 4; i++)
    pinMode(PINES[i], OUTPUT);
}

void loop() {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++)
      digitalWrite(PINES[j], PASO[i][j]); 
    
    delay(DELAY_MS);
  }
}
```

Donde dependiendo de la [[Variable constante|constante]] `PASO`, podemos definir el movimiento del stepper, donde podemos definirlo como 
```c++
const int PASO[4][4] = {
    {1, 0, 0, 0},
    {0, 1, 0, 0},
    {0, 0, 1, 0},
    {0, 0, 0, 1}
};
```

o incluso como
```c++
const int PASO[4][4] = {
    {1, 1, 0, 0},
    {0, 1, 1, 0},
    {0, 0, 1, 1},
    {1, 0, 0, 1}
};
```

Este último podemos suponer, aunque sería interesante verificar, que sea mejor en algún parámetro medible

En cuanto la constante `DELAY_MS`, esta es inversamente proporcional a la velocidad, con el límite a partir de este código, de un [[Mínimo|mínimo]] de $3$ milisegundos

Para el servo, vamos a necesitar usar la librería `Servo.h`, y de esa forma controlarlo, para la prueba terminamos usando el siguiente código
```c++
#include <Servo.h>

Servo servo;

const int DELAY = 100;

const int MAX = 180;
int angulo = 0;
int incremento = 20;

void setup() {
  servo.attach(PIN_SENIAL);
}

void loop() {
  servo.write(angulo);
  if (angulo < 0)
    angulo = 0;
  else if (angulo > MAX)
    angulo = MAX;
  else
    angulo += incremento;
  
  if (angulo >= MAX || angulo <= 0) {
    incremento *= -1;
  }

  delay(DELAY);
}
```

Necesitamos una [[Variable|variable]] global, `servo`, para poder settearlo y usarlo en el loop. Usando `servo.write()` nos permite definir un ángulo en grados, de $0\degree$ a $180\degree$, donde recibe un [[Representación de enteros|int]] por lo que no podemos ingresar grados fraccionarios

El último elemento no lo pudimos probar, por lo que queda pendiente