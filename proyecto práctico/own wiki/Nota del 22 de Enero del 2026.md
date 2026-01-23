---
dia: 2026-01-22
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Siguiendo del problema planteado [[proyecto práctico/own wiki/Nota del 21 de Enero del 2026|ayer]] sobre Immediate mode vs Retain mode, estoy pensando (dado la estructura del proyecto y la forma en la que estamos renderizando) que podemos tener una mezcla de ambos

La combinación se puede hacer de varias formas, donde por ejemplo se puede crear layouts únicamente usando Immediate mode, pero el plano donde se renderiza el layout vive en Retain mode

```go
type ExampleView struct {}

func InitExampleView() *ExampleView {
	return &ExampleView{}
}

func (ev *ExampleView) View(scene *s.Scene, yield FnYield) View {
    layout := s.Layout({ X: 0, Y: 2, Z: 0, Gen: func() View {
        s.NewBox({ X: 0, Y: 0, H: 10, W: 20 })
    
        // Reset animation button
        if s.AddBotton("Reset", { X: 4, Y: 2, H: 1, W: 2 }) {
            return InitExampleView()
        }
   
        return nil
    }})
    
    for range yield() {
        if nextView, leave := layout.Leave(); leave {
            return nextView
        }
        
        layout.Z += 1
    }

    return nil
}
```

Realmente se ve como una solución no muy ideal, donde estamos forzando demasiado por las animaciones, donde se puede recrear en Immediate mode, que incluso se puede buscar una forma en la que hacer esas animaciones sean más fáciles. Por ejemplo creando structs para hacer [[Tweening|tweening]], o manejar encadenación de animaciones como secuencias

## Como manejar el renderizado
---
Estaba pensando en generar la imagen en la pantalla, donde si pensamos donde la plataforma es una [[Aplicación|aplicación]] de computadora, entonces se podría generar una [[ingeniería en informática/distribuidos/Herramientas de Diseño/Shmget system call|memoria compartida]] que tengan acceso los dos procesos, y que escriban el resultado dentro de esa memoria. El proceso de usuario haría su renderizado y guardaría el resultado en esa memoria compartida, el proceso del sistema leería esa información y renderizaría como sea más conveniente 

Lamentablemente este proceso de compartir memoria entre dos procesos es dependiente del [[investigación/ciencias de la computación/sistemas operativos/Sistema operativo|sistema operativo]] por lo que hay una implementación en
* [Windows](https://youtu.be/QEpdiorTLIg?si=tZ3Ky2Lqe_DI8DNc)
* [Unix](https://youtu.be/WgVSq-sgHOc?si=7TOSzbum9apssHbz)

Pero en ambos se identifica este bloque de memoria como un [[ingeniería en informática/sisop/File system/Archivo|archivo]] con un path, por lo que se puede cambiar el inicio de iniciar el proceso del usuario mandando el path del archivo que corresponde a la memoria compartida para que ya lo tenga desde un principio

También puede ser una buena idea vincular la plataforma que se use ([[HTML|html]], terminal, etc.) con el sistema operativo que se use para generar esa memoria, ya que tal vez podemos crear una implementación más especifica a la plataforma. Como ejemplo:
* Una aplicación con acceso a [[OpenGL|OpenGL]] podría compartir algún objeto especifico que apunte al mismo pixel buffer de la GPU
* Una aplicación donde su plataforma es la terminal podría compartir memoria que sea únicamente la cantidad de caracteres sea necesario, que ocupa la terminal
* Una aplicación que usa html serviría mejor un sistema de mensajes ya que no se sabe el tamaño final del renderizado y la implementación es la misma para ambos sistemas operativos

Con esto tal vez necesitemos crear un protocolo de inicio de plugin especifico a la plataforma, ya que tal vez necesiten información distinta para inicializarse