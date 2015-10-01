var parser = require('graphql2cypher')
var dbQuery = require('cypherquery')
var through = require('through2')

module.exports = createExecute

function createExecute (url) {
  return function execute (query, parameters) {
    var s = through.obj()
    parser(query, (err, result) => {
      if (err) return s.emit('error', err)
      dbQuery(url)(result.cql, parameters).pipe(through.obj(reduce))
      function reduce (data, enc, cb) {
        s.write(result.reduce(data))
        s.end()
        cb()
      }
    })
    return s
  }
}
