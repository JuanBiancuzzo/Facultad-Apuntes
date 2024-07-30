---
dia: 2024-03-13
tags:
  - señales/Señales-y-sistemas
  - nota/facultad
---
### Definición
---
Tenemos varias medidas de una [[Señal|señal]] como:

#### Valor medio de una señal no periódica
---
El cálculo para una función continua $$ \overline{x} = \lim_{T \to \infty} \left\{ \frac{1}{2T} \int_{-T}^{T} x(t) ~ dt \right\} $$

El cálculo para una función discreta $$ \overline{x} = \lim_{N \to \infty} \left\{ \frac{1}{2N + 1} \sum_{n = -N}^{N} x[n] \right\} $$
#### Valor medio de una señal periódica
---
El cálculo para una función continua $$ \overline{x} = \frac{1}{T_0} \int_{T_0} x(t) ~ dt $$

El cálculo para una función discreta $$ \overline{x} = \frac{1}{N_0} \sum_{n \in N_0} x[n] $$
#### Valor pico
---
El cálculo para una función continua $$ x_p = \sup_t | x(t) | $$

El cálculo para una función discreta $$ x_p = \sup_n | x[n] | $$
#### Energía
---
El cálculo para una función continua $$ E_x = \int_{-\infty}^{\infty} |x(t)|^2 ~ dt $$

El cálculo para una función discreta $$ E_x = \sum_{n = -\infty}^{\infty} |x[n]|^2 ~ dt $$
#### Potencia de una señal no periódica
---
El cálculo para una función continua $$ P_x = \lim_{T \to \infty} \left\{ \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 ~ dt \right\} $$

El cálculo para una función discreta $$ P_x = \lim_{N \to \infty} \left\{ \frac{1}{2N + 1} \sum_{n = -N}^{N} |x[n]|^2 \right\} $$
#### Potencia de una señal periódica
---
El cálculo para una función continua $$ P_x = \frac{1}{T_0} \int_{T_0} |x(t)|^2 ~ dt $$

El cálculo para una función discreta $$ P_x = \frac{1}{N_0} \sum_{n \in N_0} |x[n]|^2 $$