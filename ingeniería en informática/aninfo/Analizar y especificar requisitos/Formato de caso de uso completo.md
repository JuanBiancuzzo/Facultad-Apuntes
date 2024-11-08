---
dia: 2023-10-19
tags:
  - ingeniería-en-informática/aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
---
# Definición
---
Agarramos el [[Formato de caso de uso de dos columnas|formato de dos columnas]] y agregamos precondiciones, postcondiciones y [[Escenario|escenarios]] alternativos. También es usual incluir una sección para describir los [[Requisito|requisitos]] no funcionales vinculados al caso de uso

# Ejemplo
---
#### Agregar producto a un pedido de compra
El cliente agrega un producto a su pedido de compra

#### Precondiciones
El cliente ya consultó los detalles del producto

| [[Actor]]                                             | [[Sistema]]                                                            |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Ingresa el código de producto que desea y la cantidad |                                                                        |
|                                                       | Informa la descripción, el precio por unidad, el precio total del ítem |

#### Postcondiciones
El producto y la cantidad de unidades ingresadas han sido agregadas al pedido de compra

#### [[Escenario|Escenarios]] alternativos
Si no hay stock del producto ingresado, el [[Sistema]] informa "No hay actualmente unidades disponibles del producto seleccionado. La entrega este producto podrá verse demorada"
