---
dia: 2024-04-18
materia: redes
capitulo: 2
---
### Definición
---
En esta [[Arquitectura de aplicaciones|arquitectura]] hay un [[Host|host]] que siempre esta, llamado [[Servidor|servidor]], que sirve request de otros host que llamaremos clientes.

Notemos que los clientes no tienen forma directa de comunicarse entre ellos sino que tiene que ser por medio de esa entidad centralizada llamada servidor.

Una característica importante de esta arquitectura el servidor tiene una [[Internet Protocol Address|dirección IP]] conocida y fija, esto es porque los clientes tienen que saber a donde comunicarse.

En esta arquitectura, es difícil que un solo servidor pueda soportar todos los request de los clientes, por ese motivo aparecieron los [[Data center|data centers]], que pueden tener un número grande de host que usualmente los usan para obtener muchas [[Máquina virtual|máquinas virtuales]]