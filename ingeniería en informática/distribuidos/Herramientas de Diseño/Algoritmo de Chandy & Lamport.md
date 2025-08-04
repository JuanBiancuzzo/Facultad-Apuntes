---
dia: 2025-03-03
etapa: empezado
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Algoritmo|algoritmo]] permite obtener "snapshots" de [[Estado global de un sistema|estados globales en un sistema distribuido]]. Tiene como objetivo almacenar estados de un [[Conjunto|conjunto]] de [[Proceso|procesos]] y estados de canales de forma que, aunque los estados no hayan ocurrido al mismo tiempo, el estado global almacenado sea [[Corte de estados de un sistema#Consistencia|consistente]]

## Hipótesis
---
Vamos a tener como [[Hipótesis|hipótesis]] las siguientes afirmaciones
* Los procesos y los canales de comunicación no fallan
* Canales son unidireccionales y poseen [[Orden First In First Out de recepción de mensajes|orden FIFO]]
* El [[Grafo|grafo]] de comunicaciones es [[Grafo conexo|fuertemente conexo]]
* Cada proceso puede iniciar una snapshot en cualquier momento

## Implementación
---
Vamos a ver la implementación del algoritmo usando [[Pseudocódigo|pseudocódigo]]

```
enum Mensaje :: 
    Marcador(struct :: sender: ProcesoID end)
    Normal(struct ::
        sender: ProcesoID
        mensaje: string
    end)
end

struct Proceso ::
    id: ProcesoID
    canalesOut: Canal
    canalesIn: Canal
    corte: Estado[] = []
    mensajes: Mensaje[] = []
    
    recibiMarcador: Bool = False
    marcadoresRecibidos: ProcesoID[] = []
end

function IniciarSnapshot :: proceso: Proceso 
    corte = Estado proceso
    for canalOut in proceso.canalesIn then
        canalOut.send Mensaje.Marcador(proceso.id)
    end 
end

function RecibirMensaje :: proceso: Proceso, mensaje: Mensaje
    if proceso.recibiMarcador then
        RecibiMarcador proceso, mensaje
    else 
        NoRecibiMarcador proceso, mensaje
    end
end

function RecibiMarcador :: proceso: Proceso, mensaje: Mensaje
    switch mensaje then
        Mensaje.Marcador(sender) then
            Agregar proceso.marcadoresRecibidos, sender
            if EstanTodosLosProcesos proceso.marcadoresRecibidos then
                proceso.recibiMarcador = False  
        end
        Mensaje.Normal(sender, mensaje) then
            Agregar corte, Tupla :: sender, proceso.id, mensaje end
        end
    end
end

function NoRecibiMarcador :: proceso: Proceso, mensaje: Mensaje

    switch mensaje then
        Mensaje.Marcador(sender) then
            corte = Estado proceso
            proceso.recibiMarcador = True
            Agregar proceso.marcadoresRecibidos, sender
        end
        mensaje then
            Agregar proceso.mensajes mensaje
        end
    end
end
```

## Ejemplo
---
![[Ejemplo Algoritmo de Chandy & Lamport.png]]