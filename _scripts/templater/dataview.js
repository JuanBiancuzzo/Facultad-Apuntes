function crearSeccion(texto) {
    return `\`\`\`dataviewjs\n\t${texto}\n\`\`\``;
}

module.exports = () => ({
    crearSeccion,
});