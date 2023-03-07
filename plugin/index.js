function getImports(node) {
  return node.specifiers
    .filter(s => s.type === 'ImportSpecifier')
    .map(s => s.imported.name)
}

module.exports = () => ({
  visitor: {
    ImportDeclaration: function (path, state) {
      if (path.node.source.value === 'react/jsx-runtime') {
        const imports = getImports(path.node)
        // if (imports.length > 0 || imports[0] !== 'jsx') return
        path.node.source.value = '@dynatrace/react-native-plugin/jsx-runtime'
      }
  },
  },
})