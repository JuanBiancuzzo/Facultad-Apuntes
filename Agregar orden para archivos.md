<%*
    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivos = dv.pages("#nota")
        .filter(archivo => archivo.etapa || archivo.estado)
        .map(archivo => tp.file.find_tfile(archivo.file.path));
    let 

    console.log(tArchivos);
    return;
%>