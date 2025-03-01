---
dia: 2024-11-05
etapa: sin-empezar
referencias:
  - "476"
  - "473"
tags:
  - carrera/ingeniería-electrónica/embebidos/Conversión-analógica-a-digital-y-digital-a-analógica
  - nota/facultad
  - investigación/protocolos
aliases:
  - SPI
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
SPI es sincrónico, full duplex main-subnode-based interface. La [[Información|información]] del main o del subnode es sincronizado en la subida o caída del clock. Tanto el main como el subnode pueden enviar información al mismo tiempo

La interfaz SPI puede ser de $3$ o de $4$ cables, vamos a enfocarnos con $4$ cables al ser la más popular

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
    \definecolor{azul}{RGB}{185, 228, 237} 
    \definecolor{naranja}{RGB}{252, 194, 141} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \filldraw[fill=azul, ultra thick] (-4, -1.5) rectangle ++(3, 3);
    \path (-4, -1.5) -- ++(0, 3) 
        node[pos=0.8, white, right=2pt, align=center] {SPI\\Main};
    \path[white, scale=0.9] (-1, -1.5) -- ++(0, 3)
        node[pos=0.8, left=0.2cm] {$\overline{CS}$}
        node[pos=0.6, left=0.2cm] {SCLK}
        node[pos=0.4, left=0.2cm] {MOSI}
        node[pos=0.2, left=0.2cm] {MISO};
        
    \filldraw[fill=naranja, ultra thick] (1, -1.5) rectangle ++(3, 3);
    \path (4, -1.5) -- ++(0, 3) 
        node[pos=0.8, white, left=2pt, align=center] {SPI\\Subnode};
    \path[white, scale=0.9] (1, -1.5) -- ++(0, 3)
        node[pos=0.8, right=0.2cm] {$\overline{CS}$}
        node[pos=0.6, right=0.2cm] {SCLK}
        node[pos=0.4, right=0.2cm] {SDI}
        node[pos=0.2, right=0.2cm] {SDO};
    
    \foreach \porcen/\dir in {0.8/->, 0.6/->, 0.4/->, 0.2/<-} {
        \draw[\dir, ultra thick] ($ (-1, -1.5) + (0, 0)!\porcen!(0, 3) $) 
            -- ++(2, 0);
    }

\end{tikzpicture}
\end{document}
```

Donde 
* Chip select $(\overline{\text{CS}})$
* Clock (SPI CLK, SCLK)
* Main Out, Subnode In (MOSI)
* Main In, Subnode Out (MISO)

El dispositivo que genera la señal del reloj es el que llamaremos main. Dispositivos SPI pueden usar [[Función periódica#Frecuencia|frecuencias]] más altas en comparación con [[Inter-Integrated Circuit|I2C]]

SPI pueden tener un solo main pero pueden tener uno o más subnodos, donde se usa multiples Chip select, uno para cada subnodo. Se usa cada chip select para darle entender al subnodo que se le va a comunicar. Esta normalmente esta activado en bajo (active low) y se tiene que subir para desconectar el subnodo

MOSI y MISO son la líneas de datos. MOSI envía información del main a el/los subnodos y MISO envía información del subnodo al main

## Transmisión de información
---
La comunicación por SPI, el manda la señal del clock y selecciona (con el Chip select) el subnodo. Como SPI es full-duplex, tanto el main como el subnodo pueden enviar información al mismo tiempo, el main manda información por el [[Bus|bus]] MOSI/SDO, y el subnodo por el bus MISO/SDI

## Polaridad y fase del reloj
---
El main  puede seleccionar la polaridad y la fase del reloj
* El [[Información#Bit|bit]] `CPOL` asigna la polaridad durante el estado idle
* El bit `CPHA` asigna la fase del reloj, este determina si es cuando sube o baja el borde del rejos para muestrear y/o mover la [[Información|información]]
El main tiene que seleccionar la polaridad y la fase al pedido del subnodo

El estado idle esta definido como el período cuando el Chip select esta alto y transaccionando a bajo al principio de la transmisión, también cuando transiciona de bajo a alto, al final de la transmisión

Según estos bits podemos definir $4$ modos

| SPI Mode | CPOL | CPHA | Fase del reloj usado para muestrear y/o mover la información  |
| :------: | :--: | :--: | ------------------------------------------------------------- |
|    0     |  0   |  0   | Muestrear en la subida y moviendo la información en la bajada |
|    1     |  0   |  1   | Muestrear en la bajada y moviendo la información en la subida |
|    2     |  1   |  0   | Muestrear en la bajada y moviendo la información en la subida |
|    3     |  1   |  1   | Muestrear en la subida y moviendo la información en la bajada |


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```