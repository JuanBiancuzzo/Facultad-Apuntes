---
dia: 2025-03-04
etapa: ampliar
referencias:
  - "869"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
  - investigación/ciencias-de-la-computación/algoritmos
aliases:
  - Reloj lógico de Lamport
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Algoritmo|algoritmo]] es una implementación de un [[Reloj lógico|reloj lógico]], es usado para determinar el orden de los [[Evento#En ciencia de la computación|eventos]] en un [[Sistema distribuido|sistema distribuido]]

El algoritmo sigue las siguientes reglas
1. Un [[Proceso|proceso]] incrementa su contador antes de cada evento que ocurra en ese proceso
2. Cuando un proceso envía un [[Paquete|mensaje]], este incluye su contador en el envío
3. Al recibir un mensaje, se actualiza el contador del receptor si es necesario, al mayor entre su propio contador y la marca de tiempo recibida en dicho mensaje

```
struct Proceso ::
    clock: Integer = 0
end

function EnviarMensaje :: proceso: Proceso, mensaje: Mensaje then
    proceso.clock += 1
    Enviar mensaje, proceso.clock
end

function RecibirMensaje :: 
    proceso: Proceso, 
    mensaje: Mensaje, 
    marcaTemporal: Integer
then
    proceso.clock = (Max marcaTemporal, proceso.clock) + 1
end
```   

### Ejemplo
---
![[Algoritmo de Lamport.png]]

## Inconveniente
---
Los relojes de Lamport garantiza $$ s \to t \implies C(s) < C(t) $$ pero no puede garantizar la [[Demostración de equivalencia#Usando proposiciones|recíproca]] $$ C(s) < C(t) \not \Rightarrow s \to t $$
### Ejemplo
---
Usando el ejemplo usado anteriormente, vemos que $$ \begin{align} 
    C(t_1) &< C(s_4) & C(s_1) &< C(t_4) \\
    t_1 &\to s_4     & s_1 &\not \to t_4 
\end{align} $$
![[Inconveniente de algoritmo de Lamport.png]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```