---
dia: 2024-09-06
tags:
  - primer-proyecto-de-robótica-auto-remoto
  - nota/proyecto
---
### Progreso
---
Hoy vimos el funcionamiento del motor y del sensor infrarrojo

Empezando por el motor, el cual simplemente tiene dos claves, uno que sería tierra y otro una [[Tensión|tensión]] mayor a $2.5~V$, con un pin analógico con valores mayores a `128`, logran mover el motor

```c
const int VELOCIDAD = 128; 

void setup() {
  pinMode(PIN, OUTPUT);
}

void loop() {
  analogWrite(PIN, VELOCIDAD);
  delay(DELAY);
}
```

Para el sensor infrarrojo, usamos receptor infrarrojo `VS1838B`, y usando la [[Biblioteca|biblioteca]] `IRremote` que se puede encontrar en [repo de github](https://github.com/Arduino-IRremote/Arduino-IRremote) donde usa una [[Variable|variable]] global `IrReceiver` para controlar la decodificación, por lo que se inicializa 

```c
void setup() {
  IrReceiver.begin(PIN, ENABLE_LED_FEEDBACK);
}
```

Para usarlo, en el loop principal, usamos la [[Función|función]] `IrReceiver.decode()` el cual devuelve un [[Valor booleano|booleano]] representando si pudo decodificar un mensaje o no.  Luego de esto, se tiene que resumir su funcionamiento con `IrReceiver.resume()`

La clase `IrReceiver`, guarda su información que logró decodificar en `IrReceiver.decodedIRData` que tiene la estructura 

```c
struct IRData {
    decode_type_t protocol;     // UNKNOWN, NEC, SONY, RC5, PULSE_DISTANCE, ...
    uint16_t address;           // Decoded address
    uint16_t command;           // Decoded command
    uint16_t extra;             // Used for Kaseikyo unknown vendor ID
                                //Ticks used for decoding Distance protocol.
    uint16_t numberOfBits;      // Number of bits received for data 
                                // (address + command + parity) - 
                                // to determine protocol length if 
                                // different length are possible.
    uint8_t flags;              // IRDATA_FLAGS_IS_REPEAT
                                // IRDATA_FLAGS_WAS_OVERFLOW etc. 
                                // See IRDATA_FLAGS_* definitions
    IRRawDataType decodedRawData; // Up to 32 (64 bit for 32 bit 
                                // CPU architectures) bit decoded raw 
                                // data, used for sendRaw functions.
    uint32_t decodedRawDataArray[RAW_DATA_ARRAY_SIZE]; // 32 bit decoded 
                                // raw data, to be used for send function.
    irparams_struct *rawDataPtr;// Pointer of the raw timing data to be 
                                // decoded. Mainly the data buffer filled 
                                // by receiving ISR.
};
```

Con el control que tenemos, usa el [[Protocolo|protocolo]] x, y en el campo `decodedRawData` conseguimos los datos para el control 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{rojo}{RGB}{158, 42, 48}
\definecolor{azul}{RGB}{75, 156, 201}
\definecolor{verde}{RGB}{60, 160, 121}
\definecolor{azulOscuro}{RGB}{59, 54, 127}
\definecolor{violeta}{RGB}{100, 74, 131}
\definecolor{negro}{RGB}{61, 69, 72}

\begin{tikzpicture}[scale=0.9, transform shape, thick]
    \tikzmath {
        \radio = 0.5; \sepX = 1.5; \sepY = 1.5;
    }
    \def\colores{{
		"rojo", "rojo", "rojo", 
		"azul", "azul", "verde", 
		"azulOscuro", "azulOscuro", "violeta",
		"negro", "negro", "negro",
		"negro", "negro", "negro",
		"negro", "negro", "negro",
		"negro", "negro", "negro"
	}}

    \foreach \i in {0, 1, 2} {
        \foreach \j in {0, ..., 6} {
            \tikzmath {
                \pos = 3 * \j + \i;
                \color = array(\colores, \pos);
            }
            
            \coordinate (centro-\i\j) at ({\i * \sepX}, {-\j * \sepY});
            \fill[\color!75!black] (centro-\i\j) circle ({\radio + 0.1});
            \fill[\color] (centro-\i\j) circle (\radio);
        }
    }
    
    \tikzmath { \sep = 0.5; \bradio = \radio + \sep; }
    \draw[rounded corners=\radio cm] (-\bradio, \bradio) 
        rectangle ({2 * \sepX + \bradio}, {-6 * \sepY - \bradio});
    
    \tikzmath { \scala = 1.1; }
    \path (centro-00) node[scale=\scala] {CH$-$};
    \path (centro-10) node[scale=\scala] {CH};
    \path (centro-20) node[scale=\scala] {CH$+$};

    \path (centro-01) node[scale=\scala] 
        {$|\blacktriangleleft\blacktriangleleft$};
    \path (centro-11) node[scale=\scala] 
        {$\blacktriangleright\blacktriangleright|$};
    \path (centro-21) node[scale=\scala] {$\blacktriangleright\parallel$};
    
    \path (centro-02) node[scale=\scala] {$-$};
    \path (centro-12) node[scale=\scala] {$+$};
    \path (centro-22) node[scale=\scala] {EQ};
    
    \path (centro-03) node[scale=\scala] {$0$};
    \path (centro-13) node[scale=\scala] {$100+$};
    \path (centro-23) node[scale=\scala] {$200+$};

    \foreach \i in {0, 1, 2} {
        \foreach \j in {0, 1, 2} {
            \tikzmath { \num = int(3 * \j + \i + 1); \y = \j + 4; }
            \path (centro-\i\y) node[scale=\scala] {$\num$};
        }
    }

\end{tikzpicture}
\end{document}
```

Donde conseguimos los valores hexadecimales para cada botón

| Botón  |    Código    |
| :----: | :----------: |
| CH$-$  | `0xBA45FF00` |
|   CH   | `0xB946FF00` |
| CH$+$  | `0xB847FF00` |
|  \|◀◀  | `0xBB44FF00` |
|  ▶▶\|  | `0xBF40FF00` |
| ▶\| \| | `0xBC43FF00` |
|  $-$   | `0xF807FF00` |
|  $+$   | `0xEA15FF00` |
|   EQ   | `0xF609FF00` |
|  $0$   | `0xE916FF00` |
| $100+$ | `0xE619FF00` |
| $200+$ | `0xF20DFF00` |
|  $1$   | `0xF30CFF00` |
|  $2$   | `0xE718FF00` |
|  $3$   | `0xA15EFF00` |
|  $4$   | `0xF708FF00` |
|  $5$   | `0xE31CFF00` |
|  $6$   | `0xA55AFF00` |
|  $7$   | `0xBD42FF00` |
|  $8$   | `0xAD52FF00` |
|  $9$   | `0xB54AFF00` |
