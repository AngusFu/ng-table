export default function (columns, size) {
  return Array.from({ length: size }, _ =>
    columns.reduce((acc, col) => {
      return { ...acc, [col.key]: str() }
    }, {})
  )
}

function str () {
  return Math.random().toString(16).slice(2)
}
