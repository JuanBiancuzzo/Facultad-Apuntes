---
dia: 2023-11-15
tags:
  - ingeniería-en-informática/sisop/Kernel
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - investigación/placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - Timer
  - Preescalador#^preescalador
  - Bucles de bloques de fase#^preescalador
  - PLL#^preescalador
  - Temporizador
---
# Definición
---
Un temporizador es simplemente un [[Contador|contador]] de funcionamiento libre que cuenta los pulsos de una fuente de reloj. Dado que el tren de impulsos de una fuente de reloj tiene un período o intervalo conocido entre impulsos, el tiempo transcurrido está directamente relacionado con el número de impulsos contados

La fuente del reloj temporizador utilizada con una [[Microcontrolador|MCU]] típica generalmente se deriva de un reloj maestro interno. Sin embargo, el reloj maestro generalmente funciona a una velocidad muy rápida, por lo que los pulsos del temporizador deben dividirse mediante [[Hardware|hardware]] en valores más razonables que puedan ser utilizados por los temporizadores

El hardware utilizado para "reducir" la velocidad del reloj maestro varía y puede ser divisores binarios (preescalador) o bucles de bloqueo de fase ^preescalador

Los contadores temporizadores pueden contar o acumular conteos hasta que se desborden según la cantidad de bits utilizados en el contador

Por el contrario, un contador temporizador puede realizar una cuenta regresiva desde algún valor preestablecido y desencadenar una [[Interrupción|interrupción]] cuando alcanza un valor $0$. 

Este tipo de contador se conoce como contador decreciente y tiene muchos usos
* Generar una base de tiempo precisa. Todos los temporizadores STM pueden hacer esto
* Medición de la frecuencia de un tren de pulsos digitales entrantes
* Medición del tiempo transcurrido en una [[Señal|señal]] de salida. Esto se denomina comparación de salida para los temporizadores STM
* Generar señales precisas de [[Modulación por ancho de pulsos|modulación de ancho de pulso (PWM)]] utilizadas para el control de [[Servomotor|servomotores]] y [[Motor|motores]]
* Generación de pulso único con longitud programable y características de retardo
* Generar señales periódicas de acceso directo a memoria en respuesta a eventos de actualización, activación, captura de entrada y comparación de salida

## Tipos de temporizadores
---
Existen las siguientes $5$ categorías amplias de temporizadores en STM
1. [[Temporizador básico|Básico]]
2. [[Temporizador de propósito general|Propósito general (GP)]]
3. [[Temporizador avanzado|Avanzado]]
4. [[Temporizador de alta resolución|Alta resolución]]
5. [[Temporizador de bajo consumo|Bajo consumo]]

## Para un sistema operativo
---
Para que el [[Kernel|Kernel]] pueda tomar el control de la [[Computadora|computadora]] debe haber algún mecanismo que periódicamente le permita al kernel desalojar el [[Proceso|proceso]] de [[User mode|usuario]] en ejecución y volver a tomar el control del [[Procesador|procesador]], y así de toda la máquina

En la actualidad todos los procesadores poseen un mecanismo de hardware llamada hardware counter, el cual puede ser seteado para que luego del transcurso de un determinado tiempo el procesador sea interrumpido. Cada procesador posee su propio timer

Cuando una interrupción por tiempo ocurre, el proceso de [[User mode|modo usuario]] que se esté ejecutando le transfiere el control al Kernel ejecutándose en [[Kernel mode|modo kernel]]. De esta forma el kernel asegura el uso del procesador

El reseteo del timer es una [[Instrucción privilegiada|instrucción privilegiada]] que puede ser utilizada en modo kernel

## En la placa STM32-F302R8
---
Los temporizadores en STM se configuran de la misma manera que los pines [[General Purpose Input Output|GPIO]] y las [[Interrupción|interrupciones]]

Estos tienen una [[Struct|estructura]] de nombre `TIM_HandleTypeDef` que se define como

```c
typedef struct {
    uint32_t Prescaler;
    uint32_t CounterMode;
    uint32_t Period;
    uint32_t ClockDivision;
    uint32_t RepetitionCounter;
} TIM_HandleTypeDef;
```

Los miembros de la estructura representan los siguientes parámetros y configuraciones del temporizador
* `Prescaler`
    * El facto de división utilizado para escalar la velocidad del reloj maestro
    * Sólo se utilizan [[Interrupción por temporizador#^preescalador|preescaladores]] de $16$ en todos los temporizadores
    * Un [[Registro|registro]] de $16$ bits pueda contener valores de preescalador que van desde $1$ a $65535$
* `CounterMode`
    * Establece la dirección del conteo
    * Los modos de contador disponibles son los siguientes
        * `TIM_COUNTERMODE_UP`
        * `TIM_COUNTERMODE_DOWN`
        * `TIM_COUNTERMODE_CENTERALIGNED1`
        * `TIM_COUNTERMODE_CENTERALIGNED2`
        * `TIM_COUNTERMODE_CENTERALIGNED3`
* `Period`
    * Este es un número que representa el tiempo máximo que transcurrirá antes de que el contador del temporizador se recargue con este número
    * El número máximo es `0xffff` para contadores de $16$ bits y `0xffff ffff` para contadores de $32$ bits. Un valor de `0x0`
* `ClockDivision`
    * Este es un campo específico de bits usado para configurar la relación entre [[Función periódica#Frecuencia|frecuencia]] del reloj del temporizador interno y un reloj de muestreo usado para filtros digitales
    * También se utiliza para configurar parámetros de tiempo muerto
    * Los modos `ClockDivision` son los siguientes
        * `TIM_CLOCKDIVISION_DIV1`
        * `TIM_CLOCKDIVISION_DIV2`
        * `TIM_CLOCKDIVISION_DIV4`
* `RepetitionCounter`
    * Establece un límite para la cantidad de veces que un temporizador puede desbordarse o no
    * El registro de actualización del temporizador se configurará cuando se alcance el límite
    * Se puede generar un evento junto con la actualización del registro

Se debe utilizar la siguiente ecuación para calcular el tiempo entre eventos de actualización para una frecuencia de reloj de alta velocidad determinada, un valor de preescalador y un valor de período $$ \text{Evento Update} = \frac{\text{Reloj de alta velocidad}}{(\text{Preescalador} + 1) (\text{Periodo} + 1)} $$
