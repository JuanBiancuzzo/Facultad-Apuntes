---
dia: 2024-08-27
tags:
  - nota/proyecto
  - proyecto-práctico/obsidian-static-site-generator
---
# Progreso
---
Voy a anotar todos los requerimientos que necesita este proyecto para que de esa forma pueda entender bien lo que tengo que hacer

- [ ] Tikz
    - [ ] Usar la [libreria pdflatex](https://pypi.org/project/pdflatex/) de python para generar un pdf 
    - [ ] Usar la [libreria spire.pdf](https://medium.com/@alice.yang_10652/convert-svg-to-pdf-or-pdf-to-svg-with-python-d8e7c03fb82a) de python para crear un svg a partir de un pdf
- [ ] Dataview
    - [ ] Se puede ejecutar código de javascript en python
- [ ] Crear un parser de markdown y similar a html
    - [ ] Generar el archivo de metadata
    - [ ] Tener forma de ignorar archivos para mostrar pero si generar el archivo de metadata
    - [ ] Manejarme con el ast (abstract syntax tree) para crear el archivo de metadata
- [ ] Integrar themes
- [ ] Integrar snippets
- [ ] Usar la info de github para generar un timeline de cada archivo, y mostrar las modificaciones
- [ ] Usar el [[Plugins de Obsidian#^mejor-alias|plugin que cree]]
- [ ] Agregar botones de copiar al clipboard en las secciones de código

## Pasos
---
- [ ] Generar el AST
- [ ] Obtener la metadata
    - [ ] Ingoing
    - [ ] Outgoing
- [ ] Procesar a partir de metadata
- [ ] Actualizar metadata
    - [ ] Outgoing
- [ ] Generar código para hugo

## Metadata
---
Links
```JSON
{
    display: "([[display]] o [[path|display]])",
    embed: "(false => [[algo]] o true => ![[algo]])",
    path: "([[path]] o [[path|display]])",
    type: "file o header",
    subpath: "debajo de que header esta"
}
```

DateTime
```JSON
{
    c: {
        year: "el año",
        month: "mes del año",
        day: "numero del mes",
        hour: "hora del dia",
        minute: "minutos de la hora",
        second: "segundos del minuto",
        milisecond: "milisegundos del segundo"
    },
    ts: "milisegundos desde el inicio"
}
```

Por archivo
```JSON
{
    frontmatter: "todo lo que este en el frontmatter del archivo y los que sean del estilo [nombre:: valor]",
    file: {
        aliases: "Sacar del frontmatter",
        cday: "dia de creación, en DateTime",
        ctime: "tiempo de creación incluido el tiempo, en DateTime",
        etags: "tags de todo el archivo y empiezan con #",
        ext: "extensión",
        folder: "el path completo a la carpeta",
        frontmatter: "todo lo que incluye el frontmatter",
        inlink: [ ..., "Links" ],
        link: {
            display: undefined,
            embed: false,
            path: "path del archivo actual, sería folder/nombre.ext",
            subpath: undefined,
            type: "file"
        },
        mday: "dia de modificacion, en DateTime",
        mtime: "tiempo de modificacion, en DateTime",
        name: "nombre del archivo sin la extension",
        outlinks: [ ..., "Links" ],
        path: "path del archivo actual, sería folder/nombre.ext",
        size: "tamaño del archivo en bytes",
        starred: "true o false, generalmente false",
        tags: "Separa las tags, por ejemplo \#legal/articulo => \#legal y \#legal/articulo",
        tasks: "lista de tasks, de la misma forma que lists",
        lists: "muestra las enumeraciones"
    }
}
```

Elemento de una lista
```JSON
{
    annotated: "false, todavia no se que hace",
    children: [ ..., "Elemento de una lista"],
    header: "Link a un header",
    line: "Linea del archivo",
    lineCount: "Cantidad de lineas que tiene esa enumeracion",
    link: "Link a este elemento",
    list: "line del primer elemento de la lista del nivel inicial",
    outlinks: [ ..., "Link en sus lineas" ],
    parent: "line del primer elemento de la lista del nivel anterior",
    path: "path del archivo en el que esta",
    position: {
        start: {
            col: "Columna",
            line: "line del elemento",
            offset: "desde el principio del archivo"
        },
        end: {
            col: "Columna",
            line: "line del elemento + lineCount - 1",
            offset: "desde el principio del archivo"
        }
    },
    section: "Link al header",
    subtasks: [ ..., "Elemento de lista que sean tasks" ],
    symbol: "el string puede ser: '1.', '*', 'a.', 'A.', '-', '+'",
    tags: "Lista como los etags",
    task: "true o false",
    text: "El texto sin parsear de la linea"
}
```