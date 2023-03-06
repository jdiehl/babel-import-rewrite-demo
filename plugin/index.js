module.exports = () => ({
  visitor: {
    ImportDeclaration: function (path, state) {
      if (path.node.source.value === 'react/jsx-runtime') {
        path.node.source.value = '@dynatrace/jsx-runtime'
      }
  },
  },
})