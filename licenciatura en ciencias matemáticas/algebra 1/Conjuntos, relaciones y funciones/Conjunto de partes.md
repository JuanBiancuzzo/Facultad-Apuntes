---
dia: 2024-10-30
etapa: sin-empezar
referencias:
  - "411"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
vinculoFacultad:
  - tema: Conjuntos, relaciones y funciones
    capitulo: 1
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A$ un [[Conjunto|conjunto]]. El conjunto de partes de $A$, que se nota $\mathcal{P}(A)$, es el conjunto formado por todos los [[Subconjunto|subconjuntos]] de $A$, o sea el conjunto cuyos elementos son los subconjuntos de $A$. Es decir $$ \mathcal{P}(A) = \set{ B : B \subset A } $$
<%*
    const dv = app.plugins.plugins.dataview.api;
    const PARAMETROS = "vinculoCurso"
    let notas = dv.pages("#nota/curso");
    
    promesas = [] 
    for (let nota of notas) {
        let vinculos = dv.array(nota.tags)
            .where(tag => tag.startsWith("curso"))
            .flatMap(tag => dv.pages(`#${tag} and #cursos/resumen`))
            .map(vinculo => `[[${vinculo.file.path}]]`)
            .distinct()
            .values;
        
        let tNota = tp.file.find_tfile(nota.file.path);
        let promesa = app.fileManager.processFrontMatter(tNota, (frontmatter) => {
            frontmatter[PARAMETROS] = vinculos
        });
        promesas.push(promesa);
    }
    
    await Promise.all(promesas);
    return console.log("Listorti");
%>

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```