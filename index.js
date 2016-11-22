module.exports = function xDom (x) {
  if (!x || typeof x !== 'object') return false
  if (window && 'object' === typeof window.Node) return x instanceof window.Node
  return 'number' === typeof x.nodeType && 'string' === typeof x.nodeName
}
